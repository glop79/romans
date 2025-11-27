/**
 * SCRIPT.JS - Lecteur EPUB Pro (Version Scroll Vertical)
 * - Mode: Scrolled (Défilement vertical)
 * - TTS: Extraction robuste
 * - Zoom: Jusqu'à 500%
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
    initVoices();
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
        console.log("Mode local ou erreur config.");
    }
}

function initReader(data) {
    // Nettoyage UI
    const loader = document.getElementById('loader');
    if(loader) {
        loader.style.opacity = 0;
        setTimeout(() => loader.remove(), 500);
    }
    document.getElementById('toolbar').classList.remove('opacity-0');
    document.querySelectorAll('button').forEach(b => b.classList.remove('opacity-0'));

    // Création de l'objet Book
    book = ePub(data);

    // --- CONFIGURATION DU RENDU (MODE SCROLL) ---
    rendition = book.renderTo("viewer", {
        width: "100%", 
        height: "100%", 
        flow: "scrolled",       // Active le défilement vertical
        manager: "default"   // Charge les chapitres à la suite
    });

    // Thèmes CSS (Injection de règles pour forcer la lisibilité)
    const themeRules = {
        light: `
            body { background-color: #ffffff !important; color: #000000 !important; } 
            p, span, div, li, h1, h2, h3 { font-size: 100% !important; color: #000000 !important; font-family: 'Merriweather', serif !important; line-height: 1.6 !important; } 
            a { color: #4f46e5 !important; }
        `,
        dark: `
            body { background-color: #111827 !important; color: #d1d5db !important; } 
            p, span, div, li { font-size: 100% !important; color: #d1d5db !important; font-family: 'Merriweather', serif !important; line-height: 1.6 !important; } 
            h1, h2, h3 { color: #ffffff !important; font-family: 'Inter', sans-serif !important; } 
            a { color: #818cf8 !important; } 
            img { filter: brightness(0.8) contrast(1.2) !important; }
        `
    };

    rendition.hooks.content.register(function(contents) {
        const style = contents.document.createElement("style");
        style.id = "reader-custom-style";
        const currentTheme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
        style.innerHTML = themeRules[currentTheme];
        contents.document.head.appendChild(style);
    });
    
	// Affichage initial
    rendition.display().then(() => {
        // --- REGLAGE TAILLE POLICE PAR DEFAUT ---
        const isMobile = window.innerWidth < 768;
        
        // MODIFICATION ICI :
        // Si mobile : on met 220% (très grand). 
        // Si PC : on met 150% (confortable).
        // Vous pouvez changer ces chiffres : 250, 300, etc.
        window.currentFontSize = isMobile ? 300 : 150;
        
        rendition.themes.fontSize(window.currentFontSize + "%");

        generateTOC();
        if (!config.title) loadMetadataInternal();
        setTimeout(initVoices, 500);
    });

    // Events Navigation
    rendition.on("relocated", (location) => {
        updateProgress(location);
        
        // Gestion TTS lors du changement de chapitre
        if (isTTSPlaying) {
            if (isPageTurningForTTS) {
                isPageTurningForTTS = false;
                setTimeout(() => startTTS(true), 600); 
            } else {
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
    
    const currentVal = select.value;
    select.innerHTML = "";
    
    if (voices.length === 0) {
        const option = document.createElement('option');
        option.text = "Aucune voix détectée";
        select.appendChild(option);
        return;
    }

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
        const label = voice.lang.startsWith('fr') ? '🇫🇷 ' : '';
        option.textContent = `${label}${voice.name}`;
        select.appendChild(option);
    });

    const savedVoice = localStorage.getItem('reader-voice');
    if (savedVoice && voices[savedVoice]) {
        select.value = savedVoice;
    } else {
        const frIndex = voices.findIndex(v => v.lang.startsWith('fr'));
        if (frIndex !== -1) select.value = frIndex;
    }

    select.onchange = (e) => {
        localStorage.setItem('reader-voice', e.target.value);
        if (isTTSPlaying) {
            window.speechSynthesis.cancel();
            setTimeout(() => startTTS(false), 100);
        }
    };
}

// ------------------------------------------------------------------
// 3. TTS (SYNTHÈSE VOCALE)
// ------------------------------------------------------------------

function toggleTTS() {
    if (isTTSPlaying) stopTTS();
    else startTTS(false);
}


function startTTS(autoContinue = false) {
    // 1. On vérifie s'il y a un contenu affiché
    const currentViews = rendition.getContents();
    if (!currentViews || currentViews.length === 0) {
        console.warn("TTS: Aucun contenu détecté.");
        return;
    }

    // 2. En mode "scrolled", on prend simplement tout le texte du chapitre
    // C'est beaucoup plus robuste que de chercher des coordonnées CFI
    const view = currentViews[0];
    let text = view.document.body.innerText; // "innerText" respecte la mise en forme visible

    // 3. Nettoyage du texte (enlève les retours à la ligne inutiles)
    text = text.replace(/\s+/g, ' ').trim();

    if (!text || text.length < 5) {
        // Si le chapitre est vide (ex: juste une image), on passe au suivant
        console.warn("TTS: Chapitre vide ou image seule.");
        if (autoContinue) {
            nextPageTTS();
        } else {
            alert("Ce chapitre ne contient pas de texte lisible.");
            stopTTS();
        }
        return;
    }

    // 4. Lancer la lecture
    // Note : Si on est en "autoContinue", on ne relit pas le titre s'il est redondant, 
    // mais ici on lit tout pour être sûr.
    speakText(text, autoContinue);
}


function speakText(text, autoContinue) {
    if (speechUtterance) window.speechSynthesis.cancel();
    
    speechUtterance = new SpeechSynthesisUtterance(text);
    
    const select = document.getElementById('voice-select');
    const voiceIndex = select ? select.value : 0;
    
    if (voices[voiceIndex]) {
        speechUtterance.voice = voices[voiceIndex];
        speechUtterance.lang = voices[voiceIndex].lang;
    }
    
    speechUtterance.rate = 1.0;

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
    window.speechSynthesis.cancel(); // Coupe net le son
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

// Note: En mode "scrolled", spread ne fait rien visuellement, mais on garde la fonction pour éviter les erreurs
function toggleSpread() {
    console.log("Mode Spread désactivé en mode défilement");
}

function applyTheme(theme) {
    document.body.className = theme === 'dark' ? 'theme-dark' : 'theme-light';
    document.body.style.backgroundColor = theme === 'dark' ? '#111827' : '#f3f4f6';
    document.body.style.color = theme === 'dark' ? '#e5e7eb' : '#1f2937';

    if (rendition) {
        const rules = {
            light: `body { background-color: #ffffff !important; color: #000000 !important; } p, span, div, li, h1, h2, h3 { font-size: 100% !important; color: #000000 !important; font-family: 'Merriweather', serif !important; line-height: 1.6 !important; } a { color: #4f46e5 !important; }`,
            dark: `body { background-color: #111827 !important; color: #d1d5db !important; } p, span, div, li { font-size: 100% !important; color: #d1d5db !important; font-family: 'Merriweather', serif !important; line-height: 1.6 !important; } h1, h2, h3 { color: #ffffff !important; font-family: 'Inter', sans-serif !important; } a { color: #818cf8 !important; } img { filter: brightness(0.8) contrast(1.2) !important; }`
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
    
    // LIMITES : 50% à 500%
    if (window.currentFontSize < 50) window.currentFontSize = 50;
    if (window.currentFontSize > 500) window.currentFontSize = 500;
    
    rendition.themes.fontSize(window.currentFontSize + "%");
    console.log("Taille actuelle : " + window.currentFontSize + "%");
}

function updateProgress(location) {
    const percent = location.start.percentage;
    const text = document.getElementById('progress-text');
    if(text) text.innerText = `${Math.round(percent * 100)}%`;
}

function generateTOC() {
    // On attend que les données de navigation soient chargées
    book.loaded.navigation.then(function(toc) {
        const tocContainer = document.getElementById('toc-container');
        if (!tocContainer) return;
        
        // On vide le message "Chargement..."
        tocContainer.innerHTML = "";
        
        // toc est un tableau d'objets (label, href, subitems...)
        toc.forEach(function(chapter) {
            // Création du bouton pour le chapitre
            const item = document.createElement('button');
            
            // Style Tailwind pour faire joli (aligné à gauche, padding, hover)
            item.className = "text-left w-full py-2 px-3 rounded hover:bg-indigo-500/10 transition-colors border-b border-gray-500/10 last:border-0 truncate";
            
            // Nettoyage du titre (enlève les espaces inutiles)
            item.textContent = chapter.label.trim();
            item.title = chapter.label; // Bulle d'info si le titre est coupé
            
            // L'action au clic
            item.onclick = function() {
                rendition.display(chapter.href); // Aller au chapitre
                toggleSidebar(); // Fermer le menu automatiquement
            };
            
            tocContainer.appendChild(item);
        });
        
        // Si le sommaire est vide
        if (toc.length === 0) {
            tocContainer.innerHTML = "<p class='text-xs opacity-50'>Aucun sommaire détecté.</p>";
        }
    });
}
function loadMetadataInternal() {
    book.loaded.metadata.then(meta => {
        const title = document.getElementById('book-title');
        const author = document.getElementById('book-author');
        if(title) title.textContent = meta.title;
        if(author) author.textContent = meta.creator;
        book.coverUrl().then(url => {
            const img = document.getElementById('cover-img');
            if(img) img.src = url || "https://m.media-amazon.com/images/I/81sPmkNKz8L._SY466_.jpg";
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
        if(img) img.src = url || "https://m.media-amazon.com/images/I/81sPmkNKz8L._SY466_.jpg";
    });
}

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('-translate-x-full'); }
function toggleFullscreen() { 
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else if (document.exitFullscreen) document.exitFullscreen();
}

// Démarrage
init();