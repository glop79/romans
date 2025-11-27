/**
 * SCRIPT.JS - Lecteur EPUB Pro (Version Finale)
 * - Mode: Scrolled (Défilement vertical)
 * - Navigation: Chapitre par Chapitre
 * - TTS: Compatible Mobile (Chunking/Queueing)
 * - UI: Police XXL par défaut
 */

// Config
let config = { bookPath: "", title: "Lecteur Web", author: "", website: "#" };

// Variables Globales
let book, rendition;
let isTTSPlaying = false;
let speechUtterance = null;
let isPageTurningForTTS = false;
let voices = [];
let ttsQueue = []; // File d'attente pour la lecture phrase par phrase (Crucial pour Mobile)

// ------------------------------------------------------------------
// 1. INITIALISATION
// ------------------------------------------------------------------

async function init() {
    initVoices();
    // Chrome/Android nécessitent parfois cet événement pour charger les voix
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
    // Nettoyage de l'écran de chargement
    const loader = document.getElementById('loader');
    if(loader) {
        loader.style.opacity = 0;
        setTimeout(() => loader.remove(), 500);
    }
    document.getElementById('toolbar').classList.remove('opacity-0');
    
    // Création de l'objet Book
    book = ePub(data);

    // --- CONFIGURATION DU RENDU (MODE SCROLL) ---
    rendition = book.renderTo("viewer", {
        width: "100%", 
        height: "100%", 
        flow: "scrolled",       // Active le défilement vertical
        manager: "default"      // "default" est plus stable que "continuous" pour le scroll
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

    // Application des styles au contenu de l'EPUB
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
        
        // Mobile : 220% | PC : 150%
        window.currentFontSize = isMobile ? 220 : 150;
        rendition.themes.fontSize(window.currentFontSize + "%");

        generateTOC(); // Générer le sommaire
        if (!config.title) loadMetadataInternal();
        setTimeout(initVoices, 500);
    });

    // Events Navigation
    rendition.on("relocated", (location) => {
        updateProgress(location);
        
        // Gestion TTS lors du changement automatique de chapitre
        if (isTTSPlaying) {
            if (isPageTurningForTTS) {
                isPageTurningForTTS = false;
                // Petite pause pour laisser le DOM charger avant de relancer la lecture
                setTimeout(() => startTTS(true), 1000); 
            } else {
                // Si l'utilisateur change de chapitre manuellement, on coupe le son
                stopTTS(); 
            }
        }
    });

    // Clavier (Flèches)
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
    
    // Sauvegarde sélection
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
        const label = voice.lang.startsWith('fr') ? '🇫🇷 ' : '';
        option.textContent = `${label}${voice.name}`;
        select.appendChild(option);
    });

    // Restaurer choix
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
            stopTTS();
            setTimeout(() => startTTS(false), 200);
        }
    };
}

// ------------------------------------------------------------------
// 3. TTS (SYNTHÈSE VOCALE) - VERSION MOBILE & SCROLL
// ------------------------------------------------------------------

function toggleTTS() {
    if (isTTSPlaying) stopTTS();
    else startTTS(false);
}

function startTTS(autoContinue = false) {
    // 1. Récupération du texte du chapitre entier
    const currentViews = rendition.getContents();
    if (!currentViews || currentViews.length === 0) return;

    const view = currentViews[0];
    let text = view.document.body.innerText; 
    
    // Nettoyage basique
    text = text.replace(/\s+/g, ' ').trim();

    if (!text || text.length < 5) {
        console.warn("TTS: Chapitre vide ou image.");
        if (autoContinue) nextPageTTS();
        else { alert("Ce chapitre ne contient pas de texte."); stopTTS(); }
        return;
    }

    // 2. DÉCOUPAGE EN PHRASES (Chunking)
    // Indispensable pour Android qui plante si le texte > 4000 caractères
    const sentences = text.match(/[^.!?:]+[.!?:]+["']?|[^.!?:]+$/g);
    
    if (sentences) {
        ttsQueue = sentences; // On remplit la file d'attente
        playNextChunk(autoContinue); // On lance la première phrase
        isTTSPlaying = true;
        updateTTSIcon(true);
    }
}

function playNextChunk(autoContinue) {
    // Si la file est vide, le chapitre est fini
    if (ttsQueue.length === 0) {
        nextPageTTS(); // On passe au chapitre suivant
        return;
    }

    // On prend la première phrase de la liste
    const chunk = ttsQueue.shift();

    if (speechUtterance) window.speechSynthesis.cancel();

    speechUtterance = new SpeechSynthesisUtterance(chunk);

    // Configuration de la voix
    const select = document.getElementById('voice-select');
    const voiceIndex = select ? select.value : 0;
    if (voices[voiceIndex]) {
        speechUtterance.voice = voices[voiceIndex];
        speechUtterance.lang = voices[voiceIndex].lang;
    }
    
    speechUtterance.rate = 1.0;

    // Quand cette phrase est finie, on lance la suivante (Récursivité)
    speechUtterance.onend = () => {
        if (isTTSPlaying) {
            playNextChunk(autoContinue);
        }
    };

    speechUtterance.onerror = (e) => {
        console.error("Erreur TTS Chunk", e);
        // En cas d'erreur ponctuelle, on essaie de forcer la suite
        if (isTTSPlaying) playNextChunk(autoContinue);
    };

    window.speechSynthesis.speak(speechUtterance);
}

function stopTTS() {
    window.speechSynthesis.cancel();
    ttsQueue = []; // Important : on vide la file pour ne pas que ça reparte
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
    if(icon) icon.className = playing ? "ph-fill ph-stop-circle text-3xl text-red-500" : "ph ph-speaker-high text-3xl";
}

// ------------------------------------------------------------------
// 4. NAVIGATION & UI
// ------------------------------------------------------------------

function prevPage() { if(rendition) rendition.prev(); }
function nextPage() { if(rendition) rendition.next(); }

// Spread désactivé en mode scroll, mais fonction gardée pour éviter erreur JS
function toggleSpread() {
    console.log("Mode Spread inactif en défilement vertical");
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

// Génération du Sommaire (NOUVEAU)
function generateTOC() {
    book.loaded.navigation.then(function(toc) {
        const tocContainer = document.getElementById('toc-container');
        if (!tocContainer) return;
        
        tocContainer.innerHTML = "";
        
        toc.forEach(function(chapter, index) {
            const item = document.createElement('button');
            
            // DESIGN AMÉLIORÉ : Plus grand, plus aéré
            item.className = "text-left w-full py-3 px-4 text-base font-medium rounded-lg hover:bg-indigo-500/10 transition-all border-b border-gray-500/5 last:border-0 flex items-center group";
            
            // Ajout d'un petit numéro ou puce pour faire joli
            item.innerHTML = `
                <span class="w-6 h-6 flex items-center justify-center bg-gray-500/10 rounded-full text-xs mr-3 opacity-50 group-hover:bg-indigo-500 group-hover:text-white transition-colors">${index + 1}</span>
                <span class="truncate opacity-90 group-hover:opacity-100">${chapter.label.trim()}</span>
            `;
            
            item.onclick = function() {
                rendition.display(chapter.href);
                // Sur mobile, on ferme le menu après le clic. Sur grand écran, on peut laisser le choix.
                if(window.innerWidth < 768) toggleSidebar(); 
            };
            
            tocContainer.appendChild(item);
        });
        
        if (toc.length === 0) {
            tocContainer.innerHTML = "<div class='p-4 text-center opacity-50'>Aucun chapitre détecté.</div>";
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

// Fonction pour changer d'onglet dans le menu
function switchTab(tabName) {
    const tabToc = document.getElementById('tab-toc');
    const tabInfo = document.getElementById('tab-info');
    const contentToc = document.getElementById('content-toc');
    const contentInfo = document.getElementById('content-info');

    if (tabName === 'toc') {
        // Activer l'onglet TOC
        contentToc.classList.remove('hidden');
        contentInfo.classList.add('hidden');
        
        // Styles des boutons
        tabToc.classList.add('border-indigo-500', 'text-indigo-600', 'dark:text-indigo-400', 'bg-indigo-500/10', 'opacity-100');
        tabToc.classList.remove('border-transparent', 'opacity-60');
        
        tabInfo.classList.remove('border-indigo-500', 'text-indigo-600', 'dark:text-indigo-400', 'bg-indigo-500/10', 'opacity-100');
        tabInfo.classList.add('border-transparent', 'opacity-60');
    } else {
        // Activer l'onglet Info
        contentInfo.classList.remove('hidden');
        contentToc.classList.add('hidden');
        
        // Styles des boutons
        tabInfo.classList.add('border-indigo-500', 'text-indigo-600', 'dark:text-indigo-400', 'bg-indigo-500/10', 'opacity-100');
        tabInfo.classList.remove('border-transparent', 'opacity-60');
        
        tabToc.classList.remove('border-indigo-500', 'text-indigo-600', 'dark:text-indigo-400', 'bg-indigo-500/10', 'opacity-100');
        tabToc.classList.add('border-transparent', 'opacity-60');
    }
}

// Démarrage
init();