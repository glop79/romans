/**
 * SCRIPT.JS - Lecteur EPUB Pro Final
 * - Correction TTS : Extraction robuste (Range -> Fallback Chapter)
 * - Gestion des voix : Menu dynamique et persistant
 */

// Config
let config = { bookPath: "", title: "Lecteur Web", author: "", website: "#" };

// Variables
let book, rendition;
let isTTSPlaying = false;
let speechUtterance = null;
let isPageTurningForTTS = false;
let voices = []; 

// ------------------------------------------------------------------
// 1. INITIALISATION
// ------------------------------------------------------------------

async function init() {
    // Initialiser les voix immédiatement
    initVoices();
    // Chrome nécessite parfois un événement
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = initVoices;
    }
    
    try {
        const response = await fetch('config.json');
        if (response.ok) {
            config = await response.json();
            if (config.bookPath) {
                initReader(config.bookPath);
                fillMetadata();
            }
        }
    } catch (e) {
        console.log("Mode local.");
    }
}

function initReader(data) {
    // Nettoyage
    const loader = document.getElementById('loader');
    if(loader) {
        loader.style.opacity = 0;
        setTimeout(() => loader.remove(), 500);
    }
    document.getElementById('toolbar').classList.remove('opacity-0');
    document.querySelectorAll('button').forEach(b => b.classList.remove('opacity-0'));

    // Création
    book = ePub(data);
    rendition = book.renderTo("viewer", {
        width: "100%", height: "100%", flow: "paginated", manager: "default", spread: "none"
    });

    // Thèmes
    const themeRules = {
        light: `body { background-color: #ffffff !important; color: #000000 !important; } p, span, div, li, h1, h2, h3 { color: #000000 !important; font-family: 'Merriweather', serif !important; line-height: 1.6 !important; } a { color: #4f46e5 !important; }`,
        dark: `body { background-color: #111827 !important; color: #d1d5db !important; } p, span, div, li { color: #d1d5db !important; font-family: 'Merriweather', serif !important; line-height: 1.6 !important; } h1, h2, h3 { color: #ffffff !important; font-family: 'Inter', sans-serif !important; } a { color: #818cf8 !important; } img { filter: brightness(0.8) contrast(1.2) !important; }`
    };

    rendition.hooks.content.register(function(contents) {
        const style = contents.document.createElement("style");
        style.id = "reader-custom-style";
        const currentTheme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
        style.innerHTML = themeRules[currentTheme];
        contents.document.head.appendChild(style);
    });

    rendition.display().then(() => {
        generateTOC();
        if (!config.title) loadMetadataInternal();
        // Ré-initialiser les voix après chargement pour être sûr
        setTimeout(initVoices, 500);
    });

    // Events Navigation
    rendition.on("relocated", (location) => {
        updateProgress(location);
        
        if (isTTSPlaying) {
            if (isPageTurningForTTS) {
                // C'est un changement auto -> On continue
                isPageTurningForTTS = false;
                // Petite pause pour laisser le temps au texte de s'afficher
                setTimeout(() => startTTS(true), 600); 
            } else {
                // Changement manuel -> On arrête
                stopTTS(); 
            }
        }
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowLeft") prevPage();
        if (e.key === "ArrowRight") nextPage();
    });
}

// ------------------------------------------------------------------
// 2. GESTION DES VOIX
// ------------------------------------------------------------------

function initVoices() {
    voices = window.speechSynthesis.getVoices();
    const select = document.getElementById('voice-select');
    if (!select) return;
    
    // Sauvegarde de la sélection actuelle
    const currentVal = select.value;
    select.innerHTML = "";
    
    if (voices.length === 0) {
        const option = document.createElement('option');
        option.text = "Aucune voix détectée";
        select.appendChild(option);
        return;
    }

    // Trier : Français en premier
    voices.sort((a, b) => {
        const aFr = a.lang.startsWith('fr');
        const bFr = b.lang.startsWith('fr');
        if (aFr && !bFr) return -1;
        if (!aFr && bFr) return 1;
        return 0;
    });

    voices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = index;
        // Marqueur visuel pour les voix FR
        const label = voice.lang.startsWith('fr') ? '🇫🇷 ' : '';
        option.textContent = `${label}${voice.name}`;
        select.appendChild(option);
    });

    // Restaurer choix utilisateur
    const savedVoice = localStorage.getItem('reader-voice');
    if (savedVoice && voices[savedVoice]) {
        select.value = savedVoice;
    } else {
        // Sinon, première voix FR par défaut
        const frIndex = voices.findIndex(v => v.lang.startsWith('fr'));
        if (frIndex !== -1) select.value = frIndex;
    }

    // Changement de voix
    select.onchange = (e) => {
        localStorage.setItem('reader-voice', e.target.value);
        if (isTTSPlaying) {
            // Redémarrer la lecture avec la nouvelle voix
            window.speechSynthesis.cancel();
            setTimeout(() => startTTS(false), 100);
        }
    };
}

// ------------------------------------------------------------------
// 3. TTS (SYNTHÈSE VOCALE) AVEC FALLBACK
// ------------------------------------------------------------------

function toggleTTS() {
    if (isTTSPlaying) stopTTS();
    else startTTS(false);
}

function startTTS(autoContinue = false) {
    const location = rendition.currentLocation();
    
    if (!location || !location.start || !location.end) return;

    // --- ETOILE DU CODE : La logique d'extraction ---
    const startCfi = location.start.cfi;
    const endCfi = location.end.cfi;

    // 1. Essai précis (Page visible)
    book.getRange(startCfi + "-" + endCfi).then(range => {
        let text = range.toString(); 
        
        // Si range.toString() échoue, on tente cloneContents (plus lourd mais capture plus)
        if (!text || text.trim().length === 0) {
            try { text = range.cloneContents().textContent; } catch(e){}
        }

        text = text.replace(/\s+/g, ' ').trim();

        // 2. Fallback : Si le texte est toujours vide (bug fréquent epub.js sur certaines pages)
        // On essaie de lire tout le chapitre visible, c'est mieux que rien
        if (!text || text.length < 5) {
            console.warn("TTS: Texte page vide, tentative lecture chapitre...");
            const chapter = book.spine.get(location.start.index);
            chapter.load(book.load.bind(book)).then(contents => {
                let fullText = contents.textContent.replace(/\s+/g, ' ').trim();
                if(fullText.length > 5) {
                    speakText(fullText, autoContinue); // On lit le chapitre
                } else {
                    if(autoContinue) nextPageTTS(); // Vraiment vide, on passe
                    else { alert("Page vide ou image."); stopTTS(); }
                }
            });
            return;
        }

        // Si on a du texte précis, on le lit
        speakText(text, autoContinue);

    }).catch(err => {
        console.error("Erreur Range TTS:", err);
        stopTTS();
    });
}

function speakText(text, autoContinue) {
    if (speechUtterance) window.speechSynthesis.cancel();
    
    speechUtterance = new SpeechSynthesisUtterance(text);
    
    // Appliquer la voix
    const select = document.getElementById('voice-select');
    const voiceIndex = select ? select.value : 0;
    
    if (voices[voiceIndex]) {
        speechUtterance.voice = voices[voiceIndex];
        speechUtterance.lang = voices[voiceIndex].lang; // Important pour l'accent
    }
    
    speechUtterance.rate = 1.0; // Vitesse normale

    // Fin de lecture -> Page suivante
    speechUtterance.onend = () => {
        if (isTTSPlaying) nextPageTTS();
    };

    speechUtterance.onerror = (e) => {
        console.error("Erreur Audio", e);
        stopTTS();
    };

    window.speechSynthesis.speak(speechUtterance);
    isTTSPlaying = true;
    updateTTSIcon(true);
}

function stopTTS() {
    window.speechSynthesis.cancel();
    isTTSPlaying = false;
    isPageTurningForTTS = false;
    updateTTSIcon(false);
}

function nextPageTTS() {
    isPageTurningForTTS = true;
    rendition.next();
}

function updateTTSIcon(playing) {
    const icon = document.querySelector('#tts-btn i');
    if(icon) icon.className = playing ? "ph-fill ph-stop-circle text-xl text-red-500" : "ph ph-speaker-high text-xl";
}

// ------------------------------------------------------------------
// 4. NAVIGATION & UI
// ------------------------------------------------------------------

function prevPage() { if(rendition) rendition.prev(); }
function nextPage() { if(rendition) rendition.next(); }

function toggleSpread() {
    if (!rendition) return;
    const settings = rendition.settings;
    const newSpread = settings.spread === "none" ? "auto" : "none";
    rendition.spread(newSpread);
    const icon = document.querySelector('#spread-btn i');
    if(icon) icon.className = newSpread === "none" ? "ph ph-file text-xl" : "ph ph-book-open text-xl";
}

function applyTheme(theme) {
    document.body.className = theme === 'dark' ? 'theme-dark' : 'theme-light';
    document.body.style.backgroundColor = theme === 'dark' ? '#111827' : '#f3f4f6';
    document.body.style.color = theme === 'dark' ? '#e5e7eb' : '#1f2937';

    if (rendition) {
        const rules = {
            light: `body { background-color: #ffffff !important; color: #000000 !important; } p, span, div, li, h1, h2, h3 { color: #000000 !important; font-family: 'Merriweather', serif !important; line-height: 1.6 !important; } a { color: #4f46e5 !important; }`,
            dark: `body { background-color: #111827 !important; color: #d1d5db !important; } p, span, div, li { color: #d1d5db !important; font-family: 'Merriweather', serif !important; line-height: 1.6 !important; } h1, h2, h3 { color: #ffffff !important; font-family: 'Inter', sans-serif !important; } a { color: #818cf8 !important; } img { filter: brightness(0.8) contrast(1.2) !important; }`
        };
        rendition.getContents().forEach(contents => {
            let styleTag = contents.document.getElementById("reader-custom-style");
            if (!styleTag) {
                styleTag = contents.document.createElement("style");
                styleTag.id = "reader-custom-style";
                contents.document.head.appendChild(styleTag);
            }
            styleTag.innerHTML = rules[theme];
        });
    }
}

function changeFontSize(amount) {
    if (!rendition) return;
    if (!window.currentFontSize) window.currentFontSize = 100;
    window.currentFontSize += amount;
    if (window.currentFontSize < 50) window.currentFontSize = 50;
    if (window.currentFontSize > 250) window.currentFontSize = 250;
    rendition.themes.fontSize(window.currentFontSize + "%");
}

function updateProgress(location) {
    const percent = location.start.percentage;
    const text = document.getElementById('progress-text');
    if(text) text.innerText = `${Math.round(percent * 100)}%`;
}

function generateTOC() {
    // Implémentation optionnelle TOC
}

function loadMetadataInternal() {
    book.loaded.metadata.then(meta => {
        const title = document.getElementById('book-title');
        const author = document.getElementById('book-author');
        if(title) title.textContent = meta.title;
        if(author) author.textContent = meta.creator;
        book.coverUrl().then(url => {
            const img = document.getElementById('cover-img');
            if(img) img.src = url || "https://placehold.co/300x450/222/fff?text=No+Cover";
        });
    });
}

function fillMetadata() {
    const title = document.getElementById('book-title');
    const author = document.getElementById('book-author');
    const synopsis = document.getElementById('book-synopsis');
    const link = document.getElementById('website-link');
    if(title) title.textContent = config.title;
    if(author) author.textContent = config.author;
    if(synopsis) synopsis.textContent = config.synopsis;
    if(link) link.href = config.website;
    book.coverUrl().then(url => {
        const img = document.getElementById('cover-img');
        if(img) img.src = url || "https://placehold.co/300x450/222/fff?text=No+Cover";
    });
}

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('-translate-x-full'); }
function toggleFullscreen() { 
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else if (document.exitFullscreen) document.exitFullscreen();
}

// Démarrage
init();