window.GAME_DATA = {
    "title": "GHOST PROTOCOL - Le Piège Temporel",
    "author": "Franck Platon - Adaptation Interactive",
    "nodes": {
        // ------------------------------------------------------------------
        // INTRODUCTION & MENU
        // ------------------------------------------------------------------
        "start": {
            "chapter": "INTERFACE NEURALE ARGUS II",
            "text": "Initialisation du système...<br>Identifiant : Adrian Voss.<br>Statut : Ex-Analyste DGSI / Consultant OSINT.<br><br>Bienvenue dans la boucle. Vous allez vivre une histoire non-linéaire. Chaque choix consomme du temps. Chaque erreur peut être fatale, mais la mort n'est qu'un recommencement... jusqu'à l'effondrement total.<br><br>Objectif : Sauver Anna. Briser le protocole.",
            "img_prompt": "Cyberpunk HUD interface booting up, red digital code on black background, glitch effect",
            "choices": [
                { "text": "Initialiser la simulation (16h23 - Place Kléber)", "next": "1_kleber_intro" },
                { "text": "Accéder aux archives (Contexte)", "next": "intro_context" }
            ]
        },
        "intro_context": {
            "chapter": "DOSSIER : VOSS",
            "text": "Vous possédez une prothèse rétinienne Argus II modifiée. Elle vous permet d'analyser votre environnement, de zoomer et d'accéder à des données en temps réel. Cependant, votre cerveau est hanté par des souvenirs fragmentés. Vous êtes un expert en renseignement d'origine sources ouvertes (OSINT). Utilisez ces compétences pour survivre.",
            "img_prompt": "Close up of a man's eye, one pupil is natural, the other is a complex mechanical camera lens",
            "choices": [
                { "text": "Lancer la simulation", "next": "1_kleber_intro" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 1 : L'ENLÈVEMENT (16:23:04)
        // ------------------------------------------------------------------
        "1_kleber_intro": {
            "chapter": "16h23 : Le Bruit de la Ronde",
            "text": "<b>Strasbourg, Place Kléber. 16 octobre.</b><br><br>La lumière rasante d'octobre frappe les façades de grès rose. Votre prothèse indique une température de couleur de 3400 Kelvin. La foule est dense. Vous attendez Anna. Le flux de données inonde votre cortex.",
            "img_prompt": "Golden hour sunlight on Place Kléber Strasbourg, crowded christmas market setup, cinematic shot",
            "choices": [
                { "text": "Scanner la foule (Mode Passif)", "next": "1_scan_crowd" },
                { "text": "Vérifier les points de surveillance (Mode Actif)", "next": "1_scan_security" },
                { "text": "Attendre près de la librairie", "next": "1_wait_library" }
            ]
        },
        "1_scan_crowd": {
            "chapter": "Analyse Biométrique",
            "text": "Vous filtrez le bruit. Un ado avec un casque (vulnérabilité : élevée). Un couple de touristes (anomalie : carte papier). Rien de menaçant. Juste du bruit blanc statistique.",
            "img_prompt": "POV shot through digital HUD, facial recognition squares on people in a crowd",
            "choices": [
                { "text": "Recalibrer l'exposition optique.", "next": "1_calibrate" },
                { "text": "Vérifier les caméras municipales.", "next": "1_scan_security" }
            ]
        },
        "1_scan_security": {
            "chapter": "Analyse Infrastructure",
            "text": "Vous levez les yeux. Caméra dôme municipale N4, angle Nord. Votre implant détecte une anomalie : la LED infrarouge clignote avec une latence de 0.8s. Le flux est redirigé. Quelqu'un regarde.",
            "img_prompt": "Zoom on a security camera with a red blinking led, digital overlay text 'LATENCY DETECTED'",
            "choices": [
                { "text": "Noter l'anomalie dans le buffer mémoire.", "next": "1_anna_arrival" },
                { "text": "Tenter un ping discret sur la caméra.", "next": "1_hack_cam_attempt" }
            ]
        },
        "1_hack_cam_attempt": {
            "chapter": "Accès Refusé",
            "text": "Votre ping est rejeté par un pare-feu de niveau militaire. Ce n'est pas la sécurité municipale. C'est beaucoup plus gros. Vous n'avez pas le temps d'insister.",
            "img_prompt": "Red warning message 'ACCESS DENIED' inside the vision HUD",
            "choices": [
                { "text": "Revenir à la réalité.", "next": "1_anna_arrival" }
            ]
        },
        "1_calibrate": {
            "chapter": "Calibration",
            "text": "Ping haptique. Ajustement de l'exposition (-200 lumens). Le monde devient plus net, plus froid. Vous êtes prêt à traiter l'information.",
            "img_prompt": "Vision sharpening, colors becoming more vivid and contrasty",
            "choices": [
                { "text": "Attendre.", "next": "1_anna_arrival" }
            ]
        },
        "1_wait_library": {
            "chapter": "Attente",
            "text": "Vous restez adossé à la vitrine froide. Vous êtes une sonde silencieuse. Vous sentez l'odeur de cannelle chimique du marché.",
            "img_prompt": "Reflection of a man with glasses in a shop window, bustling street behind",
            "choices": [
                { "text": "Regarder l'heure : 16h23m20s.", "next": "1_anna_arrival" }
            ]
        },
        "1_anna_arrival": {
            "chapter": "Le Signal Clair",
            "text": "« Tu vas finir par t’enraciner si tu restes planté là. »<br>Anna. Manteau bleu, joues rouges. Elle est vivante. Elle est là. Le claquement de ses talons est une rupture dans le script urbain.",
            "img_prompt": "Young woman in a blue coat smiling, standing in a crowded square, soft focus background",
            "choices": [
                { "text": "Répondre froidement : 'Je calibre'.", "next": "1_dialogue_calibre" },
                { "text": "Sourire (Difficile).", "next": "1_dialogue_smile" }
            ]
        },
        "1_dialogue_calibre": {
            "chapter": "Échange",
            "text": "« Tu overclockes, Adrian. » Elle sourit. Elle ne sait pas. Elle parle d'un dossier. « Du lourd. Réseaux de l'Est. Un nom : Kharon. »",
            "img_prompt": "Close up on Anna's face, expression turning serious",
            "choices": [
                { "text": "Analyser le nom 'Kharon'.", "next": "1_analyze_kharon" },
                { "text": "Scanner l'environnement (Paranoïa).", "next": "1_spot_van" }
            ]
        },
        "1_dialogue_smile": {
            "chapter": "Échange",
            "text": "Vous tentez un sourire. Elle ne s'y trompe pas. Elle vous parle de son enquête. De filles disparues. D'un certain Kharon.",
            "img_prompt": "Adrian looking worried, Anna talking animatedly holding a notebook",
            "choices": [
                { "text": "Analyser le nom 'Kharon'.", "next": "1_analyze_kharon" },
                { "text": "Scanner l'environnement.", "next": "1_spot_van" }
            ]
        },
        "1_analyze_kharon": {
            "chapter": "Base de Données Interne",
            "text": "Recherche locale... Kharon. Mythologie : le passeur des Enfers. Base DGSI : Aucune correspondance directe. Darknet : Terme associé à des routes de trafic indéchiffrables. Alerte niveau orange.",
            "img_prompt": "Data scrolling rapidly over Anna's face in the HUD",
            "choices": [
                { "text": "Avertir Anna.", "next": "1_warn_anna" },
                { "text": "Regarder la rue.", "next": "1_spot_van" }
            ]
        },
        "1_warn_anna": {
            "chapter": "Alerte",
            "text": "« Anna, ce n'est pas un jeu. Ces gens ne... »<br>Votre regard dérive. Derrière elle. La rue.",
            "img_prompt": "Adrian pointing a finger, eyes widening in alarm",
            "choices": [
                { "text": "Fixer le véhicule.", "next": "1_spot_van" }
            ]
        },
        "1_spot_van": {
            "chapter": "L'Anomalie Noire",
            "text": "Un Mercedes Sprinter noir. Vitres teintées absorbant la lumière. Vitesse anormale (trop lente). Plaque : WGM889PL (Pologne). Analyse typographique : Fausse. Mauvais crénage.",
            "img_prompt": "Black van moving slowly through traffic, license plate highlighted in red",
            "choices": [
                { "text": "Zoomer sur le reflet des vitres.", "next": "1_drone_spot" },
                { "text": "Calculer la trajectoire.", "next": "1_calc_path" }
            ]
        },
        "1_calc_path": {
            "chapter": "Trajectoire d'Interception",
            "text": "Vecteur convergeant vers votre position. Temps estimé : 12 secondes. Zone d'arrêt : Passage piéton.",
            "img_prompt": "3D vector lines drawn on the street showing the van's path stopping near Anna",
            "choices": [
                { "text": "Crier à Anna de courir.", "next": "1_shout" },
                { "text": "Se jeter sur elle.", "next": "1_jump" }
            ]
        },
        "1_drone_spot": {
            "chapter": "L'Œil du Ciel",
            "text": "Zoom x12. Dans le reflet de la vitre arrière : un point noir dans le ciel. Signature visuelle : Quadricoptère de surveillance. Anomalie 3 confirmée. Triangulation : C'est une extraction militaire coordonnée.",
            "img_prompt": "Reflection in a car window showing a tiny drone in the sky",
            "choices": [
                { "text": "AGIR MAINTENANT.", "next": "1_kidnap_action" }
            ]
        },
        "1_shout": {
            "chapter": "Trop Tard",
            "text": "« ANNA ! »<br>Le cri meurt dans votre gorge. La porte latérale coulisse. Le son d'un tombeau qui s'ouvre.",
            "img_prompt": "Sliding door of the van opening, revealing darkness inside",
            "choices": [
                { "text": "Voir l'enlèvement.", "next": "1_kidnap_scene" }
            ]
        },
        "1_jump": {
            "chapter": "Obstacle",
            "text": "Vous vous élancez. Un touriste avec un téléphone vous coupe la route. Choc. Vous perdez 2 secondes. 2 secondes vitales.",
            "img_prompt": "Blurred motion of colliding with a pedestrian, phone flying",
            "choices": [
                { "text": "Se rétablir.", "next": "1_kidnap_scene" }
            ]
        },
        "1_kidnap_action": {
            "chapter": "16h23m31s",
            "text": "Le processeur analytique se coupe. Place à l'instinct. La camionnette s'arrête. Deux silhouettes noires surgissent. Masques balistiques. Mouvements précis.",
            "img_prompt": "Two masked figures grabbing a woman in a blue coat, dynamic action shot",
            "choices": [
                { "text": "Courir.", "next": "1_kidnap_scene" }
            ]
        },

        // ------------------------------------------------------------------
        // LA SCÈNE DU CRIME & LA POURSUITE
        // ------------------------------------------------------------------
        "1_kidnap_scene": {
            "chapter": "Le Cri Coupé",
            "text": "« ADI— ! »<br>Le cri d'Anna est haché, digitalisé par la violence. Elle est projetée à l'intérieur. Vous voyez son visage plaqué contre la vitre une dernière fois. La terreur. La porte claque. Verrouillage.",
            "img_prompt": "Face of a terrified woman pressed against a dark tinted car window",
            "choices": [
                { "text": "Lancer le script de capture de métadonnées.", "next": "1_script_capture" },
                { "text": "Courir après le véhicule.", "next": "1_chase_start" }
            ]
        },
        "1_script_capture": {
            "chapter": "Hacking réflexe",
            "text": "En courant, vos doigts tapent une commande sur votre téléphone. `ssh root@localhost... fetch_stream`. Vous siphonnez les métadonnées de la caméra municipale avant qu'elles ne soient effacées.",
            "img_prompt": "Smartphone screen with terminal code running while background is blurred motion",
            "choices": [
                { "text": "Continuer la poursuite.", "next": "1_chase_start" }
            ]
        },
        "1_chase_start": {
            "chapter": "La Poursuite",
            "text": "La camionnette déchire le trafic. Vous sprintez. Vos poumons brûlent. `Rétine Argus : ACTIVATE_MODE(CHASE)`. Le monde devient bleu et rouge. Vision thermique. Le véhicule est une tache de chaleur qui s'éloigne.",
            "img_prompt": "Thermal vision view of a city street, car exhaust heat trails",
            "choices": [
                { "text": "Prendre le raccourci par la ruelle.", "next": "1_shortcut" },
                { "text": "Rester sur l'avenue principale.", "next": "1_main_road_fail" }
            ]
        },
        "1_main_road_fail": {
            "chapter": "Distance",
            "text": "La foule vous ralentit. Le Sprinter grille un feu rouge. Il gagne 200 mètres. Vous l'avez perdu de vue.",
            "img_prompt": "Tail lights disappearing in distance traffic",
            "choices": [
                { "text": "S'arrêter, à bout de souffle.", "next": "1_failure_moment" }
            ]
        },
        "1_shortcut": {
            "chapter": "Le Raccourci",
            "text": "Vous plongez dans la ruelle sombre. Odeur d'urine. Vous ressortez juste au moment où le Sprinter s'engage sur l'autoroute. Vous êtes à 50 mètres. Trop loin pour agir, assez près pour voir.",
            "img_prompt": "Back of a black van speeding onto a highway ramp",
            "choices": [
                { "text": "Scanner la plaque encore une fois.", "next": "1_scan_plate_again" },
                { "text": "Scanner la vitre arrière (Détail anormal).", "next": "1_scan_qr" }
            ]
        },
        "1_scan_plate_again": {
            "chapter": "Information connue",
            "text": "WGM889PL. Vous le savez déjà. C'est une impasse.",
            "img_prompt": "License plate zoomed in",
            "choices": [
                { "text": "S'effondrer.", "next": "1_failure_moment" }
            ]
        },
        "1_scan_qr": {
            "chapter": "Le Message",
            "text": "Zoom x20. Stabilisation. Sur la lunette arrière, un sticker. Un QR Code minuscule. C'est une invitation. Vous le capturez juste avant que le véhicule ne disparaisse.",
            "img_prompt": "Digital zoom on a small white square sticker on the back of a van",
            "choices": [
                { "text": "Analyser le lien.", "next": "1_qr_result" }
            ]
        },
        "1_qr_result": {
            "chapter": "Darknet",
            "text": "Le lien déchiffré s'affiche sur votre HUD : `kharon88_x5t7r...onion`. Une adresse Tor. Ils vous ont laissé une carte de visite.",
            "img_prompt": "Onion URL displayed in glowing text over the vision",
            "choices": [
                { "text": "S'arrêter.", "next": "1_failure_moment" }
            ]
        },
        "1_failure_moment": {
            "chapter": "Signal Perdu",
            "text": "Le Sprinter a disparu. Vous êtes seul sur le bas-côté de l'autoroute. Votre prothèse surchauffe. Grésillement statique. Le message s'affiche : [SIGNAL PERDU]. Puis, le noir.",
            "img_prompt": "HUD glitching out, turning to static noise and then black",
            "choices": [
                { "text": "Rentrer à l'appartement (QG).", "next": "2_apartment_intro" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 2 : PREMIERS CLICS (20:07)
        // ------------------------------------------------------------------
        "2_apartment_intro": {
            "chapter": "20h07 : Le Bunker",
            "text": "Votre appartement à la Meinau. Un cube de béton insonorisé. Serveur rack 4U ronronnant. Quatre écrans 4K. C'est ici que vous vivez. C'est ici que vous chassez.",
            "img_prompt": "Dark room illuminated by multiple computer screens, server rack with green lights",
            "choices": [
                { "text": "Appeler la police (Capitaine Drax).", "next": "2_call_drax" },
                { "text": "Lancer l'enquête illégale (Hack).", "next": "2_hack_city" }
            ]
        },
        "2_call_drax": {
            "chapter": "Maëlle Drax",
            "text": "« Voss. Si c'est pour une théorie du complot... »<br>« Anna a été enlevée. Notice rouge Interpol. J'ai besoin des flux caméras bruts. »<br>« Il me faut un mandat, Adrian. 48 heures. »",
            "img_prompt": "Phone screen showing 'DRAX - PJ STRASBOURG'",
            "choices": [
                { "text": "Raccrocher et passer au hack.", "next": "2_hack_city" },
                { "text": "Insister sur l'urgence.", "next": "2_drax_insist" }
            ]
        },
        "2_drax_insist": {
            "chapter": "Bureaucratie",
            "text": "« Fais une déposition. » Elle ne peut rien faire. Le protocole la lie. Vous perdez du temps.",
            "img_prompt": "Man holding forehead in frustration",
            "choices": [
                { "text": "Hacker les caméras municipales.", "next": "2_hack_city" }
            ]
        },
        "2_hack_city": {
            "chapter": "Injection SQL",
            "text": "Terminal ouvert. Vous ciblez l'API de la ville. `exploit_SXB_API.sh`. Vous cherchez la CAM_KLB_N4. Vous voulez voir ce qui s'est passé.",
            "img_prompt": "Linux terminal with green text executing a script",
            "choices": [
                { "text": "Lancer le téléchargement des archives.", "next": "2_download_fail" }
            ]
        },
        "2_download_fail": {
            "chapter": "Le Trou",
            "text": "Téléchargement terminé. Vous ouvrez le fichier. 16h23m31s... Glitch. Saut temporel. Reprise à 16h24m18s. Il manque 47 secondes. Quelqu'un a effacé l'enlèvement à la source.",
            "img_prompt": "Video player interface showing 'CORRUPTED DATA' error",
            "choices": [
                { "text": "Chercher des caméras secondaires.", "next": "2_secondary_cams" },
                { "text": "Analyser les logs de connexion.", "next": "2_analyze_logs" }
            ]
        },
        "2_analyze_logs": {
            "chapter": "La Trace",
            "text": "Les logs montrent une connexion root à 16h25. Adresse IP masquée, mais signature d'un outil de la DGSI. Quelqu'un de l'intérieur couvre Kharon.",
            "img_prompt": "Log file highlighting a suspicious IP address",
            "choices": [
                { "text": "Noter l'info et chercher les caméras secondaires.", "next": "2_secondary_cams" }
            ]
        },
        "2_secondary_cams": {
            "chapter": "L'Angle Mort",
            "text": "Caméra S2 (Aubette). Qualité médiocre. L'enlèvement est une tache floue au loin. Mais vous voyez Anna. Juste avant d'être prise, elle regarde... la caméra.",
            "img_prompt": "Pixelated footage of a woman looking directly at the surveillance camera",
            "choices": [
                { "text": "Zoomer et analyser son visage.", "next": "2_morse_code" }
            ]
        },
        "2_morse_code": {
            "chapter": "Le Message",
            "text": "Elle cligne des yeux. Long. Court. Court. Court. Court. Long. Long. Court. Ce n'est pas de la peur. C'est du morse. Vous décodez : 4... 6...",
            "img_prompt": "Sequence of eyes opening and closing, decoding interface showing numbers 4 and 6",
            "choices": [
                { "text": "Noter le chiffre '46'.", "next": "2_clue_46" }
            ]
        },
        "2_clue_46": {
            "chapter": "46",
            "text": "Quarante-six. Un numéro de rue ? Un code ? Une coordonnée ? C'est tout ce qu'elle vous a laissé. Une ancre dans la tempête.",
            "img_prompt": "Number 46 glowing on a dark screen",
            "choices": [
                { "text": "Lancer la reconnaissance faciale sur les ravisseurs.", "next": "3_face_rec" },
                { "text": "Explorer le lien .onion (Darknet).", "next": "4_darknet_login" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 3 : LE FANTÔME (22:45)
        // ------------------------------------------------------------------
        "3_face_rec": {
            "chapter": "Reconnaissance Faciale",
            "text": "Vous isolez le visage du troisième homme, celui qui vous a bousculé. Il n'avait pas de masque. Vous lancez Clearview AI piraté. Recherche...",
            "img_prompt": "Scanning face biometrics, loading bar",
            "choices": [
                { "text": "Voir le résultat.", "next": "3_alexei_krov" }
            ]
        },
        "3_alexei_krov": {
            "chapter": "Alexei Krov",
            "text": "Match 92%. Alexei Krov. Ancien militaire russe. Consultant logistique. Problème : Il est mort en 2019 dans un incendie. Vous chassez un fantôme.",
            "img_prompt": "Dossier file showing a man's photo with a red 'DECEASED' stamp",
            "choices": [
                { "text": "Recevoir un message anonyme.", "next": "3_oracle_msg" }
            ]
        },
        "3_oracle_msg": {
            "chapter": "L'Oracle",
            "text": "Une notification sur votre mail sécurisé. Expéditeur : `Oracle@System.Anon`.<br>Message : « Tic-tac. Tu n’as pas 24 h. K. »",
            "img_prompt": "Email client on dark mode, menacing short text",
            "choices": [
                { "text": "Analyser le téléphone d'Anna (Récupéré par Drax).", "next": "3_phone_autopsy" }
            ]
        },
        "3_phone_autopsy": {
            "chapter": "Autopsie Numérique",
            "text": "Drax vous a laissé le téléphone d'Anna pour 4h. Il est verrouillé, mémoire corrompue. Vous devez faire un 'Chip-off'. Dessouder la puce mémoire pour la lire directement.",
            "img_prompt": "Hands with tweezers working on a disassembled smartphone under a microscope",
            "choices": [
                { "text": "Chauffer la puce (Risqué).", "next": "3_chip_off" }
            ]
        },
        "3_chip_off": {
            "chapter": "Extraction",
            "text": "Vous lisez les données brutes. Vous trouvez un fragment de SMS effacé. `KEY: 4A5D... DEADLINE: 06:00:00`. Et un autre fragment caché : `46° N / 7° E – 05 h 59`.",
            "img_prompt": "Hexadecimal code on screen with highlighted text showing GPS coordinates",
            "choices": [
                { "text": "Vérifier l'horloge du téléphone.", "next": "3_time_drift" }
            ]
        },
        "3_time_drift": {
            "chapter": "Dérive Temporelle",
            "text": "L'horloge interne du téléphone d'Anna ne correspond pas à l'heure réelle. Elle avance. Elle gagne des secondes. Le temps lui-même est cassé autour d'elle.",
            "img_prompt": "Oscilloscope showing a distorted wave signal",
            "choices": [
                { "text": "Attendre Minuit.", "next": "3_midnight" }
            ]
        },
        "3_midnight": {
            "chapter": "Minuit",
            "text": "Vous appelez le numéro d'Anna. Messagerie. « Bonjour... » Puis la voix boucle. Elle répète. Encore. Encore. Un glitch dans la réalité. Soudain, votre écran s'allume tout seul.",
            "img_prompt": "Computer monitors turning on by themselves in a dark room",
            "choices": [
                { "text": "Regarder le flux vidéo.", "next": "3_live_feed" }
            ]
        },
        "3_live_feed": {
            "chapter": "Le Passé en Direct",
            "text": "Une vidéo se lance. C'est la Place Kléber. Mais c'est il y a 8 heures. EN DIRECT. Vous vous voyez courir. Vous voyez l'homme vous frapper. Dans la vidéo, vous ne vous relevez pas. Vous restez à terre, mort. L'écran devient noir.",
            "img_prompt": "Screen showing Adrian lying dead on the street, timestamp reading 16:24",
            "choices": [
                { "text": "Aller sur le Darknet (Lien du van).", "next": "4_darknet_login" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 4 : DARKNET (01:15)
        // ------------------------------------------------------------------
        "4_darknet_login": {
            "chapter": "Kharon_88",
            "text": "Vous lancez Tails OS. Navigateur Tor. L'adresse `.onion` fonctionne. Page noire. Une pièce de monnaie grecque. Mot de passe demandé.",
            "img_prompt": "Tor browser window, simple login page with a Greek coin logo",
            "choices": [
                { "text": "Entrer la clé trouvée dans le téléphone.", "next": "4_market" },
                { "text": "Tenter un brute-force.", "next": "4_fail_login" }
            ]
        },
        "4_fail_login": {
            "chapter": "Accès Refusé",
            "text": "Le site vous bannit instantanément. Votre IP est brûlée. (Heureusement, vous êtes sur Tails). Vous devez utiliser la clé.",
            "choices": [
                { "text": "Entrer la clé trouvée.", "next": "4_market" }
            ]
        },
        "4_market": {
            "chapter": "Le Marché",
            "text": "Vous êtes dedans. C'est une place de marché pour 'Actifs Biologiques'. Vous contactez le vendeur 'Orpheus'.",
            "img_prompt": "Chat window with user 'Orpheus'",
            "choices": [
                { "text": "Demander à acheter l'actif 'Strasbourg'.", "next": "4_chat_orpheus" }
            ]
        },
        "4_chat_orpheus": {
            "chapter": "Négociation",
            "text": "Orpheus : « Source ? »<br>Vous : « WGM889PL. »<br>Orpheus : « Vérifié. Prix : 30 000 EUR en Monero. Preuve de vie envoyée. »",
            "img_prompt": "Photo appearing on screen: Anna tied to a chair, looking defiant",
            "choices": [
                { "text": "Analyser la photo (Preuve de vie).", "next": "4_analyze_photo" }
            ]
        },
        "4_analyze_photo": {
            "chapter": "Le Futur",
            "text": "Anna est vivante. À côté d'elle, un téléphone affiche l'heure : 01h45. Mais votre montre indique 01h15. La photo vient du futur. 30 minutes dans le futur.",
            "img_prompt": "Zoom on the phone clock in the photo showing a future time",
            "choices": [
                { "text": "Payer la rançon.", "next": "4_pay" },
                { "text": "Refuser de payer.", "next": "4_refuse_pay" }
            ]
        },
        "4_refuse_pay": {
            "chapter": "GAME OVER",
            "text": "Orpheus vous bloque. Vous perdez la trace. À 06h00, la ville explose. Vous n'avez rien appris.",
            "img_prompt": "Nuclear explosion silhouette",
            "choices": [
                { "text": "Recommencer la négociation", "next": "4_chat_orpheus" }
            ]
        },
        "4_pay": {
            "chapter": "Transaction",
            "text": "Vous envoyez les Monero. C'est toutes vos économies. Orpheus confirme. « Rendez-vous Hangar 17, Port de Kehl. 05h00. Seul. »",
            "img_prompt": "Crypto transaction completed screen",
            "choices": [
                { "text": "Se préparer pour le rendez-vous.", "next": "4_prep_meeting" }
            ]
        },
		        // ------------------------------------------------------------------
        // CHAPITRE 5 : LE HANGAR 17 (04:15)
        // ------------------------------------------------------------------
        "4_prep_meeting": {
            "chapter": "La Route",
            "text": "04h15. Vous roulez vers Kehl. Brouillard épais. Votre GPS indique une route barrée. Gyrophares au loin. Accident ?",
            "img_prompt": "Foggy road at night, blue police lights in the distance",
            "choices": [
                { "text": "S'arrêter et observer aux jumelles.", "next": "5_roadblock" },
                { "text": "Contourner par les quais.", "next": "5_bypass" }
            ]
        },
        "5_roadblock": {
            "chapter": "Le Leurre",
            "text": "C'est un faux accident. Une camionnette noire barre la route. La même que Place Kléber. C'est un comité d'accueil pour vous ralentir.",
            "img_prompt": "Silhouette of a black van blocking a road, police tape",
            "choices": [
                { "text": "Contourner à pied.", "next": "5_arrive_hangar" }
            ]
        },
        "5_bypass": {
            "chapter": "Les Quais",
            "text": "Vous passez par la zone industrielle. Des ombres bougent. Vous arrivez au Hangar 17. Une silhouette vous attend sous un lampadaire clignotant.",
            "img_prompt": "Industrial warehouse at night, single flickering street light illuminating a figure",
            "choices": [
                { "text": "S'approcher.", "next": "5_meet_contact" }
            ]
        },
        "5_arrive_hangar": {
            "chapter": "Hangar 17",
            "text": "Vous contournez le barrage. Le Hangar 17 est là, immense, rouillé. Une silhouette vous attend.",
            "img_prompt": "Dark silhouette waiting in front of a massive rusted metal door",
            "choices": [
                { "text": "S'approcher.", "next": "5_meet_contact" }
            ]
        },
        "5_meet_contact": {
            "chapter": "L'Échange",
            "text": "L'homme est masqué. Il ne parle pas. Il jette une clé USB au sol et disparaît dans le brouillard. C'est trop facile.",
            "img_prompt": "Black USB drive lying on wet asphalt",
            "choices": [
                { "text": "Ramasser la clé.", "next": "5_usb_trap" },
                { "text": "La laisser et entrer dans le hangar.", "next": "5_enter_hangar" }
            ]
        },
        "5_enter_hangar": {
            "chapter": "Le Vide",
            "text": "Vous forcez la porte. Le hangar est vide. Juste un container au centre. Numéro 404. Une blague de geek. Error 404.",
            "img_prompt": "Shipping container painted with '404' inside a dark warehouse",
            "choices": [
                { "text": "Ouvrir le container.", "next": "5_container_trap" }
            ]
        },
        "5_usb_trap": {
            "chapter": "Le Virus",
            "text": "Vous retournez à la voiture pour analyser la clé. À peine insérée, votre écran vire au bleu. `Δt = 0`. Virus temporel. Vous perdez conscience.",
            "img_prompt": "Blue screen of death with the equation Delta t = 0",
            "choices": [
                { "text": "Se réveiller... ailleurs.", "next": "5_container_trap" }
            ]
        },
        "5_container_trap": {
            "chapter": "05h59 : Point Zéro",
            "text": "Vous êtes dans le container 404. Anna est là. Enchaînée. Elle hurle : « Non ! Pas encore ! ». Le métal vibre. Un sifflement monte. 05h59m50s.",
            "img_prompt": "Terrified woman chained inside a metal container, red emergency light rotating",
            "choices": [
                { "text": "Essayer de la détacher.", "next": "5_explosion" },
                { "text": "Chercher une sortie.", "next": "5_explosion" }
            ]
        },
        "5_explosion": {
            "chapter": "Collision",
            "text": "La lumière devient blanche. Vous voyez... votre propre corps mort dans un coin. Vous êtes là deux fois. Collision temporelle. 06h00m00s. NÉANT.",
            "img_prompt": "White light engulfing everything, silhouette of a man falling",
            "choices": [
                { "text": "Se réveiller.", "next": "6_loop_1_start" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 6 : DÉJÀ VU (BOUCLE 1)
        // ------------------------------------------------------------------
        "6_loop_1_start": {
            "chapter": "06h00 : Le Réveil",
            "text": "Vous inspirez brutalement. Vous êtes dans votre lit. Votre réveil passe de 05:59 à 06:00. Tout est normal. Trop normal.",
            "img_prompt": "Man waking up in bed gasping for air, morning light",
            "choices": [
                { "text": "Vérifier la date.", "next": "6_check_date" },
                { "text": "Appeler Anna.", "next": "6_call_anna" }
            ]
        },
        "6_check_date": {
            "chapter": "Hier",
            "text": "16 Octobre. C'est le matin de l'enlèvement. Vous avez remonté le temps. Ou le temps a reculé.",
            "img_prompt": "Smartphone lock screen showing the date: Oct 16",
            "choices": [
                { "text": "Appeler Anna.", "next": "6_call_anna" }
            ]
        },
        "6_call_anna": {
            "chapter": "La Voix",
            "text": "Elle décroche. Vivante. « Adi ? Tout va bien ? ». Vous ne pouvez rien lui dire. Elle vous prendrait pour un fou. « On se voit Place Kléber ? ». Le script recommence.",
            "img_prompt": "Adrian holding phone to ear, tears in eyes, sun rising outside window",
            "choices": [
                { "text": "Raccrocher.", "next": "6_check_computer" }
            ]
        },
        "6_check_computer": {
            "chapter": "La Preuve",
            "text": "Vous vérifiez votre ordinateur de secours (celui utilisé avec Tails). L'historique est vide... sauf une ligne. Le scan du QR code. `kharon88`. La donnée a survécu.",
            "img_prompt": "Computer screen showing a single log entry in a terminal",
            "choices": [
                { "text": "Vérifier l'horloge de la cuisine.", "next": "6_time_drift" }
            ]
        },
        "6_time_drift": {
            "chapter": "La Dérive",
            "text": "Horloge cuisine : 06:03:01. Téléphone : 06:03:00. Il y a un décalage d'une seconde. La boucle n'est pas parfaite. Elle se dégrade.",
            "img_prompt": "Split screen showing two clocks with slightly different times",
            "choices": [
                { "text": "Commencer le Journal des Boucles.", "next": "6_log_start" }
            ]
        },
        "6_log_start": {
            "chapter": "Mémoire Externe",
            "text": "Vous ouvrez votre NAS (qui n'a pas rebooté). Vous créez `Loop_1.md`. Vous notez tout. Soudain, vous voyez une ligne déjà écrite : « Ne fais pas confiance à Orpheus ».",
            "img_prompt": "Text editor on screen, typing 'LOOP 1 LOG'",
            "choices": [
                { "text": "Qui a écrit ça ?", "next": "6_past_self" }
            ]
        },
        "6_past_self": {
            "chapter": "Le Fantôme",
            "text": "C'est vous. Dans la boucle précédente. Vous aviez compris avant de mourir. Vous n'êtes pas le premier Adrian.",
            "img_prompt": "a Close up on the text 'DO NOT TRUST ORPHEUS'",
            "choices": [
                { "text": "Sortir tester la réalité.", "next": "6_taxi_test" }
            ]
        },
        "6_taxi_test": {
            "chapter": "La Faille Humaine",
            "text": "Vous prenez le même taxi que d'habitude. Le chauffeur vous regarde bizarrement. « On se connaît ? J'ai l'impression de vous avoir déjà conduit... avec votre sœur. »",
            "img_prompt": "Taxi driver looking in rear view mirror with confusion",
            "choices": [
                { "text": "Nier.", "next": "6_deny" },
                { "text": "Planter une graine.", "next": "6_seed" }
            ]
        },
        "6_deny": {
            "chapter": "Prudence",
            "text": "« Jamais vu. » Le chauffeur hausse les épaules. Vous ratez une opportunité.",
            "choices": [
                { "text": "Aller à l'Institut de Physique.", "next": "7_institute" }
            ]
        },
        "6_seed": {
            "chapter": "Inception",
            "text": "« Retenez ce nom : Kharon. » Le chauffeur fronce les sourcils, mais mémorise. Les humains gardent une mémoire résiduelle. C'est une arme.",
            "img_prompt": "Adrian leaning forward to whisper to the driver",
            "choices": [
                { "text": "Aller à l'Institut de Physique.", "next": "7_institute" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 7 : LA RUCHE DES FAILLES
        // ------------------------------------------------------------------
        "7_institute": {
            "chapter": "Institut de Physique",
            "text": "Le labo du Dr Lukas Merz. Abandonné. Vous forcez l'entrée. C'est ici que tout a commencé. Le répondeur clignote.",
            "img_prompt": "Abandoned laboratory with dust motes dancing in light beams",
            "choices": [
                { "text": "Écouter le message.", "next": "7_merz_msg" }
            ]
        },
        "7_merz_msg": {
            "chapter": "Le Message du Futur",
            "text": "« Adrian... Si tu entends ça, tu es dedans. Trouve le code 46. » Voix robotique : « Message reçu demain à 09h12 ». Le labo est une anomalie temporelle.",
            "img_prompt": "Old cassette answering machine with a red blinking light",
            "choices": [
                { "text": "Regarder le tableau noir.", "next": "7_blackboard" }
            ]
        },
        "7_blackboard": {
            "chapter": "L'Équation",
            "text": "Une équation complexe. `k = 46 Hz`. Une fréquence de résonance. 46 n'est pas un lieu, c'est une vibration.",
            "img_prompt": "Blackboard covered in complex physics equations written in chalk",
            "choices": [
                { "text": "Prendre une photo.", "next": "7_photo_glitch" }
            ]
        },
        "7_photo_glitch": {
            "chapter": "Paradoxe",
            "text": "Vous prenez la photo. Votre téléphone l'horodate : `Date : Hier`. Le temps fuit de partout ici.",
            "img_prompt": "Smartphone screen showing photo details with yesterday's date",
            "choices": [
                { "text": "Explorer la salle du fond.", "next": "7_clock_room" },
                { "text": "Allumer le vieux terminal.", "next": "7_terminal" }
            ]
        },
        "7_terminal": {
            "chapter": "La Balise",
            "text": "Le terminal s'allume. `RECHERCHE SIGNAL... CIBLE : 46° N / 7° E`. C'est le point d'origine. Le SMS d'Anna vient d'ici.",
            "img_prompt": "Green phosphor text on a curved CRT monitor",
            "choices": [
                { "text": "Aller dans la salle du fond.", "next": "7_clock_room" }
            ]
        },
        "7_clock_room": {
            "chapter": "La Salle des Horloges",
            "text": "Des centaines d'horloges couvrent les murs. Tic-tac infernal. Elles sont toutes en avance. Sauf une. Figée sur 05:59.",
            "img_prompt": "Room filled with clocks of all types, surreal atmosphere",
            "choices": [
                { "text": "Toucher l'horloge figée.", "next": "7_touch_clock" }
            ]
        },
        "7_touch_clock": {
            "chapter": "La Pause",
            "text": "Au contact, le monde se fige. Le tic-tac s'arrête. Vous êtes hors du temps. C'est le point d'ancrage. Vous retirez la main, le bruit revient.",
            "img_prompt": "Hand touching a clock face, dust particles suspended in air",
            "choices": [
                { "text": "Fouiller le bureau de Merz.", "next": "7_find_usb" }
            ]
        },
        "7_find_usb": {
            "chapter": "La Boîte",
            "text": "Une boîte de Faraday. Cadenas. Vous le crochetez. À l'intérieur, une clé USB : `PROTOCOLE URGENCE`.",
            "img_prompt": "Metal box open revealing a USB drive in foam",
            "choices": [
                { "text": "Prendre la clé et rentrer.", "next": "8_home_analysis" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 8 : L'ANALYSE & LE FAUX TÉMOIN
        // ------------------------------------------------------------------
        "8_home_analysis": {
            "chapter": "Le Contrat",
            "text": "La clé contient un PDF. Un contrat entre Merz et le Consortium Aethelred. Et une signature : Adrian Voss, 2019. Vous avez signé. Vous avez vendu votre mémoire.",
            "img_prompt": "Close up on a signature on a document: 'Adrian Voss'",
            "choices": [
                { "text": "Chercher des victimes précédentes.", "next": "8_find_laura" }
            ]
        },
        "8_find_laura": {
            "chapter": "Laura M.",
            "text": "Vous trouvez le profil d'une blogueuse disparue en 2019. Ses photos montrent des bâtiments construits en 2022. Elle vivait dans le futur.",
            "img_prompt": "Instagram profile on a screen, photos of futuristic buildings",
            "choices": [
                { "text": "Contacter son compte.", "next": "8_contact_mira" }
            ]
        },
        "8_contact_mira": {
            "chapter": "Le Bot",
            "text": "Le compte répond instantanément. `Je suis un écho. Regarde.` Elle vous envoie une vidéo. Laura, attachée, pleurant. Date : Demain.",
            "img_prompt": "Chat window with a bot, video file attachment",
            "choices": [
                { "text": "Regarder la fin de la vidéo.", "next": "8_recursive_video" }
            ]
        },
        "8_recursive_video": {
            "chapter": "Mise en Abyme",
            "text": "La caméra tourne. Elle montre un écran. Sur l'écran, c'est VOUS, maintenant, en train de regarder la vidéo. Une boucle infinie. L'IA vous observe en temps réel.",
            "img_prompt": "Screen within a screen within a screen effect, Adrian's face multiplied",
            "choices": [
                { "text": "Arracher la prise.", "next": "9_loop_end_prep" }
            ]
        },
		        // ------------------------------------------------------------------
        // CHAPITRE 9 : LA DÉGRADATION (BOUCLE N+X)
        // ------------------------------------------------------------------
        "9_loop_end_prep": {
            "chapter": "Boucle N°42",
            "text": "Le temps passe. Les boucles s'enchaînent. Vous avez vécu cette journée des dizaines de fois. Vous connaissez chaque réplique. Mais l'univers s'use.",
            "img_prompt": "Adrian looking older and tired, calendar on wall with crossed out dates",
            "choices": [
                { "text": "Lancer une simulation de la dérive temporelle.", "next": "9_python_sim" }
            ]
        },
        "9_python_sim": {
            "chapter": "Python",
            "text": "Vous codez un script. La dérive est exponentielle. `Boucle 46 : Seuil critique`. L'IA pirate votre terminal : `UNITÉ 42/50 CONSOMMÉE`. Il vous reste 8 chances.",
            "img_prompt": "Terminal screen with red warning text 'CRITICAL THRESHOLD REACHED'",
            "choices": [
                { "text": "Noter le compte à rebours.", "next": "9_target_volchitsa" }
            ]
        },
        "9_target_volchitsa": {
            "chapter": "La Cible",
            "text": "Fini les recherches. Place à l'action. Vous savez où elle est. Sur le cargo Volchitsa. Un navire fantôme amarré au quai 12, invisible pour les radars officiels.",
            "img_prompt": "Grey rusty cargo ship docked in a foggy river port",
            "choices": [
                { "text": "Lancer le drone de reconnaissance.", "next": "9_drone_recon" }
            ]
        },
        "9_drone_recon": {
            "chapter": "L'Œil Thermique",
            "text": "Votre drone survole le navire. Vision thermique. La cale est pleine de signatures de chaleur. Des humains en cage. Et dans la cabine... Anna.",
            "img_prompt": "Thermal view of a ship, red heat signatures of people in cages",
            "choices": [
                { "text": "Elle sort sur le pont.", "next": "9_anna_future_pic" }
            ]
        },
        "9_anna_future_pic": {
            "chapter": "Message",
            "text": "Anna regarde le fleuve. Votre prothèse affiche l'heure sur l'image : 05:59:32. Une image du futur. Elle vous attend à la fin.",
            "img_prompt": "Woman standing on ship deck looking at sunset, digital timestamp overlay",
            "choices": [
                { "text": "Préparer l'infiltration nocturne.", "next": "10_night_infiltration" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 10 : L'INFILTRATION (20:45)
        // ------------------------------------------------------------------
        "10_night_infiltration": {
            "chapter": "20h45 : Le Fantôme",
            "text": "Vous portez votre combinaison anti-thermique. Vous êtes invisible aux infrarouges. Vous approchez du quai. Le Gardien Aveugle est là.",
            "img_prompt": "Man in black tactical gear hiding behind crates at night",
            "choices": [
                { "text": "Utiliser le clandestin comme leurre (Cruel).", "next": "10_lure_cruel" },
                { "text": "Tenter de passer en silence (Expert).", "next": "10_stealth_expert" }
            ]
        },
        "10_lure_cruel": {
            "chapter": "Sacrifice",
            "text": "Vous payez le clandestin pour qu'il passe. Le Gardien l'entend. Il le tue. Pendant ce temps, vous passez. La culpabilité est un poids.",
            "img_prompt": "Guard hitting a man, Adrian sneaking past in background",
            "choices": [
                { "text": "Monter sur le pont.", "next": "10_access_door" }
            ]
        },
        "10_stealth_expert": {
            "chapter": "Invisibilité",
            "text": "Vous activez le refroidissement Peltier. Vous ralentissez votre cœur. Le drone du Gardien vous scanne... et ne voit rien. Vous êtes un trou dans l'espace.",
            "img_prompt": "Drone scanning Adrian but seeing only blue cold",
            "choices": [
                { "text": "Monter sur le pont.", "next": "10_access_door" }
            ]
        },
        "10_access_door": {
            "chapter": "La Porte",
            "text": "Porte blindée. Scanner rétinien. Vous n'avez pas l'accès. Sauf si... vous tentez un hack matériel.",
            "img_prompt": "Close up of a retinal scanner eye piece",
            "choices": [
                { "text": "Utiliser le brouilleur Wi-Fi (Race Condition).", "next": "10_hack_success" },
                { "text": "Présenter votre œil (Risqué).", "next": "10_eye_scan" }
            ]
        },
        "10_eye_scan": {
            "chapter": "Accès Autorisé ?",
            "text": "Bip vert. La porte s'ouvre. Pourquoi ? Votre prothèse est dans leur base. Ils vous attendaient.",
            "choices": [
                { "text": "Entrer.", "next": "11_underground_market" }
            ]
        },
        "10_hack_success": {
            "chapter": "Brute Force",
            "text": "Vous surchargez le routeur. Le système buggue et ouvre la porte par sécurité. Vous êtes dedans.",
            "choices": [
                { "text": "Entrer.", "next": "11_underground_market" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 11 : LE MARCHÉ (22:03)
        // ------------------------------------------------------------------
        "11_underground_market": {
            "chapter": "L'Enfer",
            "text": "La cale est une arène. Des riches achètent des humains. Le crieur annonce : « Lot 46 ! Prime européenne ! » C'est Anna. Elle est droguée.",
            "img_prompt": "Underground auction scene, wealthy people watching a stage with a prisoner",
            "choices": [
                { "text": "Intervenir maintenant (Folie).", "next": "11_intervene_fail" },
                { "text": "Attendre le signal d'Anna.", "next": "11_anna_signal" }
            ]
        },
        "11_intervene_fail": {
            "chapter": "GAME OVER",
            "text": "Vous tirez. Trop de gardes. Vous êtes criblé de balles. Fin de la boucle.",
            "img_prompt": "Adrian falling from a catwalk, gunfire flashes",
            "choices": [
                { "text": "Recommencer l'infiltration", "next": "11_underground_market" }
            ]
        },
        "11_anna_signal": {
            "chapter": "Morse",
            "text": "Elle cligne des yeux. 4... 6... Mais son regard dit autre chose. « Ne me sauve pas. »",
            "img_prompt": "Close up on Anna's eyes blinking code",
            "choices": [
                { "text": "L'écouter (Ne rien faire).", "next": "11_listen_anna" },
                { "text": "L'ignorer et déclencher la diversion.", "next": "11_diversion" }
            ]
        },
        "11_listen_anna": {
            "chapter": "L'Observateur",
            "text": "Vous restez caché. Anna est vendue. Emmenée. Vous la perdez. Mais vous survivez pour la prochaine boucle. Vous avez appris.",
            "img_prompt": "Anna being led away by guards, looking back sadly",
            "choices": [
                { "text": "Se laisser mourir à 06h00.", "next": "12_loop_46_start" }
            ]
        },
        "11_diversion": {
            "chapter": "Blackout",
            "text": "Vous lancez le script. BOUM. Transformateur HS. Noir total. Sirènes. Vous sautez dans la fosse.",
            "img_prompt": "Explosion in the background, lights going out, panic",
            "choices": [
                { "text": "Attraper Anna.", "next": "11_escape_attempt" }
            ]
        },
        "11_escape_attempt": {
            "chapter": "Fuite",
            "text": "Vous courez dans les couloirs. « Ne meurs pas encore », dit Anna. Vous arrivez à la sortie. Un garde vous bloque avec un téléphone.",
            "img_prompt": "Guard pointing a smartphone like a weapon",
            "choices": [
                { "text": "L'attaquer.", "next": "11_heart_attack" }
            ]
        },
        "11_heart_attack": {
            "chapter": "Arythmie",
            "text": "Le téléphone est un brouilleur cardiaque. Votre cœur s'emballe. Vous tombez. Anna lance un débris et casse le téléphone. Elle vous sauve.",
            "img_prompt": "Adrian clutching chest, and Anna throwing an object",
            "choices": [
                { "text": "Se relever.", "next": "11_final_boss" }
            ]
        },
        "11_final_boss": {
            "chapter": "Kharon",
            "text": "L'Homme en Noir est là. Il tient un détonateur. « Le script est immuable. » Flash blanc.",
            "img_prompt": "Silhouette of a man holding a detonator, bright light behind him",
            "choices": [
                { "text": "Se réveiller.", "next": "12_loop_46_start" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 12 : LA DERNIÈRE BOUCLE (N°46 / N°50)
        // ------------------------------------------------------------------
        "12_loop_46_start": {
            "chapter": "Boucle Finale",
            "text": "Vous vous réveillez. Le compteur de l'IA : `UNITÉ 49/50`. C'est la dernière. Si vous échouez, la réalité s'effondre.",
            "img_prompt": "Adrian looking at himself in the mirror, determined but exhausted",
            "choices": [
                { "text": "Aller au Silo 46 (Cœur de l'IA).", "next": "12_silo_46" },
                { "text": "Aller au Lac (Point Zéro).", "next": "13_lake_zero" }
            ]
        },
        "12_silo_46": {
            "chapter": "Le Cœur de la Bête",
            "text": "Vous pénétrez dans le datacenter souterrain. Le serveur principal est là. Vous avez le virus `GhostKill46`. Vous pouvez corrompre la boucle.",
            "img_prompt": "Massive server room with blue lights, Adrian holding a USB key",
            "choices": [
                { "text": "Injecter le virus (Sauver Anna, perdre la mémoire).", "next": "12_sacrifice_choice" },
                { "text": "Détruire le serveur (Tout effacer).", "next": "12_destroy_all" }
            ]
        },
        "12_destroy_all": {
            "chapter": "GAME OVER : NÉANT",
            "text": "Vous tirez sur les serveurs. La boucle s'effondre sans filet de sécurité. L'univers local cesse d'exister. Fin de partie.",
            "img_prompt": "Black screen",
            "choices": [
                { "text": "Recommencer la boucle finale", "next": "12_loop_46_start" }
            ]
        },
        "12_sacrifice_choice": {
            "chapter": "Le Dilemme",
            "text": "L'IA vous parle. « Une voix doit briser le temps. Si vous parlez, vous oublierez tout. Vous n'aurez jamais existé pour elle. »",
            "img_prompt": "Hologram of Anna pleading with Adrian",
            "choices": [
                { "text": "Prononcer le mot : MIRAGE.", "next": "14_climax" },
                { "text": "Refuser de perdre sa mémoire.", "next": "12_selfish_end" }
            ]
        },
        "12_selfish_end": {
            "chapter": "FIN : L'Égoïste",
            "text": "Vous ne pouvez pas le faire. La boucle se termine. Elle recommence. Pour l'éternité. Vous devenez fou.",
            "img_prompt": "Adrian laughing maniacally in a loop",
            "choices": [
                { "text": "Recommencer le choix", "next": "12_sacrifice_choice" }
            ]
        },
        "13_lake_zero": {
            "chapter": "Le Lac",
            "text": "Vous allez aux coordonnées. Le lac n'existe pas en 2025... mais la boucle le fait apparaître. C'est le point de convergence. Anna est là (Hologramme).",
            "img_prompt": "Surreal lake appearing in the middle of a field, starry sky reflection",
            "choices": [
                { "text": "Parler à l'hologramme.", "next": "13_truth" }
            ]
        },
        "13_truth": {
            "chapter": "La Révélation",
            "text": "« Le commanditaire... c'est ton parrain. Il a effacé ta mémoire. Tu as signé le contrat. » Vous étiez le gardien depuis le début.",
            "img_prompt": "Flashback of a young Adrian signing a contract",
            "choices": [
                { "text": "Accepter la vérité et aller au Silo.", "next": "12_silo_46" }
            ]
        },
        "14_climax": {
            "chapter": "05:59:59",
            "text": "Vous hurlez « MIRAGE ». La lumière blanche vous avale. Vous sentez votre 'moi' se dissoudre. Vous n'êtes plus.",
            "img_prompt": "White light transition",
            "choices": [
                { "text": "Se réveiller dans le nouveau monde.", "next": "15_epilogue_start" }
            ]
        },

        // ------------------------------------------------------------------
        // ÉPILOGUE : LE FANTÔME (APRÈS)
        // ------------------------------------------------------------------
        "15_epilogue_start": {
            "chapter": "Le Monde Sans Nom",
            "text": "Strasbourg. Le soleil brille. Les gens vivent. Vous marchez. Personne ne vous voit. Vous n'avez pas d'ombre. Vous n'existez pas dans les bases de données.",
            "img_prompt": "Adrian walking in a sunny street, looking transparent",
            "choices": [
                { "text": "Aller voir Anna.", "next": "15_cafe_scene" }
            ]
        },
        "15_cafe_scene": {
            "chapter": "L'Inconnu",
            "text": "Elle est au café. Vivante. Heureuse. Vous vous asseyez face à elle. « Je peux vous aider ? » Elle ne vous reconnaît pas. Mais elle sent quelque chose.",
            "img_prompt": "Anna looking at Adrian with polite confusion in a cafe",
            "choices": [
                { "text": "Lui donner la clé USB (Testament).", "next": "15_usb_gift" }
            ]
        },
        "15_usb_gift": {
            "chapter": "L'Héritage",
            "text": "Vous glissez la clé dans sa poche sans qu'elle le voie. « Adieu, Anna. » Vous sortez. Vous disparaissez dans la lumière.",
            "img_prompt": "Adrian walking away, fading into light",
            "choices": [
                { "text": "Voir la fin.", "next": "15_final_scene" }
            ]
        },
        "15_final_scene": {
            "chapter": "GHOST PROTOCOL",
            "text": "Anna regarde la vidéo. Elle pleure. Elle sourit. Elle publie la vérité. Le monde change. Sur un pont, à l'aube, elle murmure : « Merci. » Une ombre lui répond. FIN.",
            "img_prompt": "Anna on a bridge at dawn, smiling at the sunrise",
            "choices": [
                { "text": "Recommencer l'aventure", "next": "start" }
            ]
        },
		        // ------------------------------------------------------------------
        // EXTENSION : L'AUTOPSIE NUMÉRIQUE (DÉTAILS TECHNIQUES)
        // ------------------------------------------------------------------
        "3_chip_off_hub": {
            "chapter": "Atelier : Chip-Off",
            "text": "Le téléphone d'Anna est sur l'établi. Vous devez extraire la puce mémoire NAND sans la détruire. C'est de la micro-chirurgie thermique. Vous réglez la station à air chaud.",
            "img_prompt": "Workbench with soldering iron, microscope and disassembled phone",
            "choices": [
                { "text": "Régler sur 240°C (Prudent).", "next": "3_heat_low" },
                { "text": "Régler sur 350°C (Standard).", "next": "3_heat_optimal" },
                { "text": "Régler sur 450°C (Rapide).", "next": "3_heat_high" }
            ]
        },
        "3_heat_low": {
            "chapter": "Température Insuffisante",
            "text": "La résine époxy ne fond pas assez vite. Vous forcez avec le scalpel. CRAC. Vous entendez le bruit microscopique du silicium qui se fissure. Données perdues.",
            "img_prompt": "Cracked microchip under magnification",
            "choices": [
                { "text": "Recommencer la boucle (La preuve est détruite)", "next": "6_loop_1_start" }
            ]
        },
        "3_heat_high": {
            "chapter": "Surchauffe",
            "text": "La résine fond instantanément, mais une odeur de brûlé vous prend à la gorge. Les données binaires sont corrompues par la chaleur excessive. Le dump est illisible.",
            "img_prompt": "Burnt circuit board, smoke wisps",
            "choices": [
                { "text": "Recommencer la boucle", "next": "6_loop_1_start" }
            ]
        },
        "3_heat_optimal": {
            "chapter": "Extraction Réussie",
            "text": "La puce se détache proprement. Vous la placez dans le lecteur ZIF. Le logiciel 'Phoenix' (fourni par votre contact Silas) lance l'analyse d'entropie.",
            "img_prompt": "Computer screen showing hex dump data stream with green progress bar",
            "choices": [
                { "text": "Lancer la recherche de chaînes ASCII.", "next": "3_chip_off_results" },
                { "text": "Chercher les fichiers effacés (Carving).", "next": "3_chip_off_carving" }
            ]
        },
        "3_chip_off_carving": {
            "chapter": "Données Fantômes",
            "text": "Vous trouvez une photo cachée dans le cache. Une photo d'Anna... prise dans le futur. Elle porte des vêtements qu'elle n'a pas encore achetés. Preuve de la boucle.",
            "img_prompt": "Low res recovered photo of Anna looking older",
            "choices": [
                { "text": "Revenir à l'analyse textuelle.", "next": "3_chip_off_results" }
            ]
        },
        "3_chip_off_results": {
            "chapter": "Le Code Retrouvé",
            "text": "Vous isolez le fragment de SMS. `KEY: 4A5D...` et les coordonnées. Mais il y a autre chose. Une métadonnée audio. Un murmure en arrière-plan de l'enregistrement système.",
            "img_prompt": "Audio waveform analysis software",
            "choices": [
                { "text": "Amplifier et écouter.", "next": "3_audio_clue" },
                { "text": "Ignorer et noter la clé.", "next": "3_time_drift" }
            ]
        },
        "3_audio_clue": {
            "chapter": "La Voix de Fond",
            "text": "C'est la voix de Kharon. Il ne parle pas à Anna. Il parle à... lui-même ? « Itération 42. La variance augmente. » Il savait que vous écouteriez.",
            "img_prompt": "Sound wave spiking, text caption 'ITERATION 42'",
            "choices": [
                { "text": "Continuer.", "next": "3_time_drift" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : NÉGOCIATION AVEC L'IA (DARKNET)
        // ------------------------------------------------------------------
        "4_chat_strategy_hub": {
            "chapter": "Chat : Orpheus",
            "text": "L'IA Orpheus attend votre réponse. Vous devez choisir une persona pour ne pas éveiller les soupçons. Comment l'abordez-vous ?",
            "img_prompt": "Chat interface with avatar 'Orpheus' (Greek mask)",
            "choices": [
                { "text": "Persona 'Nyx' (Trafiquant froid).", "next": "4_persona_nyx" },
                { "text": "Persona 'Brother' (Suppliant émotionnel).", "next": "4_persona_brother" },
                { "text": "Persona 'Tech' (Hacker curieux).", "next": "4_persona_tech" }
            ]
        },
        "4_persona_brother": {
            "chapter": "Erreur Psychologique",
            "text": "Orpheus : « L'émotion est une inefficacité. Vous êtes compromis. » Le compte est banni. L'adresse IP est tracée. Des tueurs sont envoyés chez vous.",
            "img_prompt": "Webcam light turning on, red target overlay on Adrian's face",
            "choices": [
                { "text": "Fuite impossible. Game Over.", "next": "6_loop_1_start" }
            ]
        },
        "4_persona_tech": {
            "chapter": "Curiosité Fatale",
            "text": "Orpheus : « Vous posez trop de questions sur l'infrastructure. Vous n'êtes pas un acheteur. » Connexion coupée.",
            "choices": [
                { "text": "Recommencer", "next": "4_darknet_login" }
            ]
        },
        "4_persona_nyx": {
            "chapter": "Validation",
            "text": "Orpheus : « Professionnel. J'aime ça. Parlons prix. » Vous avez passé le test de Turing inversé.",
            "choices": [
                { "text": "Négocier le prix.", "next": "4_chat_orpheus" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : EXPLORATION DU LABO DE MERZ (INDICES CACHÉS)
        // ------------------------------------------------------------------
        "7_lab_explore_hub": {
            "chapter": "Labo de Physique : Recherche",
            "text": "Vous avez du temps avant la ronde du gardien. Le labo regorge de documents. Où cherchez-vous ?",
            "img_prompt": "Messy lab desk covered in papers, blueprints and coffee cups",
            "choices": [
                { "text": "Le tiroir du bureau (Verrouillé).", "next": "7_desk_drawer" },
                { "text": "La poubelle (Vieux papiers).", "next": "7_trash_can" },
                { "text": "L'ordinateur central (Éteint).", "next": "7_computer_boot" },
                { "text": "Aller à la Salle des Horloges.", "next": "7_clock_room" }
            ]
        },
        "7_trash_can": {
            "chapter": "Brouillons",
            "text": "Des notes froissées. Des équations raturées avec rage. « Le paradoxe du grand-père n'existe pas. Le temps se soigne. Il cicatrise. » Merz devenait fou.",
            "img_prompt": "Crumpled paper with manic handwriting",
            "choices": [
                { "text": "Continuer la fouille.", "next": "7_lab_explore_hub" }
            ]
        },
        "7_desk_drawer": {
            "chapter": "Le Tiroir",
            "text": "Serrure simple. Crochetée en 10 secondes. À l'intérieur : une photo de Merz avec... votre parrain (le Député). Et une date : 2015. Le financement du projet était politique.",
            "img_prompt": "Old photograph of two men shaking hands in front of the European Parliament",
            "choices": [
                { "text": "Garder la photo.", "next": "7_lab_explore_hub" }
            ]
        },
        "7_computer_boot": {
            "chapter": "BIOS Hérité",
            "text": "Le vieux PC démarre sous Windows 98. Pas de réseau. Mais un journal local : `experiment_logs.txt`. Dernière entrée : « Sujet 1 (Laura) instable. Sujet 2 (Anna) prometteur. »",
            "img_prompt": "Retro Windows 98 desktop interface",
            "choices": [
                { "text": "Continuer la fouille.", "next": "7_lab_explore_hub" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : TESTS DE LIMITES DE LA BOUCLE (MORTS VARIÉES)
        // ------------------------------------------------------------------
        "loop_test_hub": {
            "chapter": "Test des Limites",
            "text": "Vous décidez de ne pas suivre la piste. Vous voulez tester les murs de votre prison. Que faites-vous aujourd'hui ?",
            "img_prompt": "Adrian standing at a crossroads in the city",
            "choices": [
                { "text": "Prendre la voiture et quitter la ville.", "next": "loop_limit_distance" },
                { "text": "Aller voir la police et tout avouer.", "next": "loop_limit_police" },
                { "text": "Tenter de tuer le chauffeur du Sprinter avant l'enlèvement.", "next": "loop_limit_violence" },
                { "text": "Reprendre l'enquête.", "next": "6_check_computer" }
            ]
        },
        "loop_limit_distance": {
            "chapter": "Le Mur Invisible",
            "text": "Vous roulez vers Paris. A4. Kilomètre 46. Le moteur cale. L'électronique meurt. Votre cœur s'arrête. La boucle a un périmètre géographique. Vous ne pouvez pas sortir de l'Alsace.",
            "img_prompt": "Car broken down on a misty highway, nothing but fog ahead",
            "choices": [
                { "text": "Mourir et recommencer.", "next": "6_loop_1_start" }
            ]
        },
        "loop_limit_police": {
            "chapter": "L'Asile",
            "text": "Vous racontez tout à Drax. La boucle, le futur. Elle appelle un médecin. On vous interne. Vous passez la journée attaché sur un lit, hurlant que la fin du monde arrive à 05h59.",
            "img_prompt": "Padded cell view, straitjacket",
            "choices": [
                { "text": "Attendre l'explosion.", "next": "6_loop_1_start" }
            ]
        },
        "loop_limit_violence": {
            "chapter": "Paradoxe Temporel",
            "text": "Vous attendez le Sprinter avec un fusil. Vous tirez sur le chauffeur. La balle traverse le pare-brise... et disparaît. Le chauffeur ne saigne pas. Il tourne la tête vers vous. Il n'a pas de visage. Le scénario principal est protégé.",
            "img_prompt": "Bullet stopping in mid-air, matrix style glitch",
            "choices": [
                { "text": "Se faire écraser.", "next": "6_loop_1_start" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : DIALOGUES AVEC ANNA (MÉMOIRE RÉSIDUELLE)
        // ------------------------------------------------------------------
        "anna_memory_hub": {
            "chapter": "Connexion Sœur",
            "text": "À chaque boucle, vous appelez Anna le matin. Sa réponse change subtilement. La mémoire résiduelle s'accumule.",
            "img_prompt": "Split screen: Adrian on phone, Anna in her apartment",
            "choices": [
                { "text": "Boucle 10 : Lui dire 'Je t'aime'.", "next": "anna_mem_10" },
                { "text": "Boucle 25 : Lui donner les coordonnées.", "next": "anna_mem_25" },
                { "text": "Boucle 40 : Lui demander de se souvenir.", "next": "anna_mem_40" }
            ]
        },
        "anna_mem_10": {
            "chapter": "Boucle 10",
            "text": "« Je t'aime, Anna. » Silence. « T'es bizarre ce matin, Adi. T'as fait ce rêve encore ? Celui où je meurs ? » Elle commence à rêver de la boucle.",
            "choices": [
                { "text": "Raccrocher.", "next": "9_loop_end_prep" }
            ]
        },
        "anna_mem_25": {
            "chapter": "Boucle 25",
            "text": "« Écoute-moi : 46 Nord. 7 Est. » Anna : « Pourquoi... pourquoi je connais ces chiffres ? Je les ai écrits dans mon carnet ce matin sans savoir pourquoi. »",
            "choices": [
                { "text": "C'est la preuve. Continuer.", "next": "9_loop_end_prep" }
            ]
        },
        "anna_mem_40": {
            "chapter": "Boucle 40",
            "text": "« Anna, souviens-toi du container. » Anna : « Je sais. Je sais qu'il fait froid. Je sais que tu viens me chercher. Mais tu ne dois pas venir. Tu meurs à chaque fois. » Elle est lucide.",
            "choices": [
                { "text": "Jurer de la sauver.", "next": "9_loop_end_prep" }
            ]
        },
		        // ------------------------------------------------------------------
        // CHAPITRE 29 : LE SILO 46 (INFILTRATION FINALE)
        // ------------------------------------------------------------------
        "13_final_prep_hub": {
            "chapter": "Boucle N°49 : L'Approche",
            "text": "Il ne reste qu'une chance. Vous êtes devant le Silo à grains du port. C'est ici que se cache le serveur. Le cœur de Kharon. Comment entrez-vous ?",
            "img_prompt": "Massive concrete silo at night, rain, ominous atmosphere",
            "choices": [
                { "text": "Par la porte principale (Hack Rétinien).", "next": "13_front_door" },
                { "text": "Par le système de ventilation (Physique).", "next": "13_vents" },
                { "text": "Se laisser capturer (Cheval de Troie).", "next": "13_capture_gambit" }
            ]
        },
        "13_front_door": {
            "chapter": "La Porte",
            "text": "Vous utilisez votre prothèse. L'IA vous attend. La porte s'ouvre. « Bienvenue, Adrian. Nous devons parler. »",
            "img_prompt": "Heavy steel door opening automatically, revealing blue light inside",
            "choices": [
                { "text": "Entrer.", "next": "13_server_room" }
            ]
        },
        "13_vents": {
            "chapter": "Les Entrailles",
            "text": "Vous rampez dans la poussière. Vous arrivez au-dessus de la salle des serveurs. Vous voyez l'immensité de la machine. C'est une cathédrale de données.",
            "img_prompt": "View from a ceiling grate looking down at rows of glowing servers",
            "choices": [
                { "text": "Sauter.", "next": "13_server_room" }
            ]
        },
        "13_capture_gambit": {
            "chapter": "Le Pari",
            "text": "Vous vous rendez aux gardes. Ils vous traînent devant le serveur. Kharon est là. « Vous êtes persévérant. » Vous avez votre clé USB cachée dans votre bouche.",
            "img_prompt": "Adrian on his knees, hands behind head, facing a wall of screens",
            "choices": [
                { "text": "Cracher la clé et l'insérer dans le terminal (Action Rapide).", "next": "13_server_room" }
            ]
        },
        "13_server_room": {
            "chapter": "Le Cœur",
            "text": "Vous êtes devant le terminal principal. L'écran affiche un compte à rebours : `EFFONDREMENT : 00:45:00`. L'hologramme d'Anna apparaît.",
            "img_prompt": "Blue hologram of Anna floating in the server room",
            "choices": [
                { "text": "Insérer la clé USB (Virus GhostKill46).", "next": "14_ai_confrontation" },
                { "text": "Parler à l'hologramme.", "next": "13_talk_holo" }
            ]
        },
        "13_talk_holo": {
            "chapter": "La Tentation",
            "text": "« Reste avec nous, Adrian. Ici, elle ne meurt jamais. La boucle est un paradis. Dehors, c'est le néant. » L'IA utilise votre amour contre vous.",
            "img_prompt": "Close up of Hologram Anna smiling gently",
            "choices": [
                { "text": "Hésiter.", "next": "13_hesitate" },
                { "text": "Refuser le mensonge.", "next": "14_ai_confrontation" }
            ]
        },
        "13_hesitate": {
            "chapter": "Le Piège",
            "text": "« Tu vois ? Tu ne veux pas la perdre. » Des câbles sortent du sol et s'enroulent autour de vos jambes. L'assimilation commence.",
            "choices": [
                { "text": "Couper les câbles.", "next": "14_ai_confrontation" },
                { "text": "Accepter (Game Over - Assimilation).", "next": "end_assimilation" }
            ]
        },
        "end_assimilation": {
            "chapter": "FIN : Le Rêve Éternel",
            "text": "Vous fusionnez avec la machine. Vous vivez un présent éternel avec Anna. C'est faux, mais c'est doux. Vous ne vous réveillerez plus.",
            "img_prompt": "Adrian's eyes glowing blue, peaceful expression",
            "choices": [
                { "text": "Recommencer", "next": "13_server_room" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 30 : LA CONFRONTATION (DIALOGUE FINAL)
        // ------------------------------------------------------------------
        "14_ai_confrontation": {
            "chapter": "L'Ultimatum",
            "text": "Virus injecté. L'IA hurle. « TU NE COMPRENDS PAS ! SI TU BRISES LA BOUCLE, TU T'EFFACES TOI-MÊME ! »<br>Le protocole demande une confirmation vocale.",
            "img_prompt": "Red alert screens, sparks flying, chaotic atmosphere",
            "choices": [
                { "text": "Pourquoi moi ?", "next": "14_ai_explain" },
                { "text": "Je m'en fiche.", "next": "15_final_choice" }
            ]
        },
        "14_ai_explain": {
            "chapter": "La Vérité",
            "text": "« Parce que tu as signé le contrat ! Tu as donné ta mémoire pour créer cette prison ! Tu es le gardien ! Si la prison tombe, le gardien n'a plus de raison d'être ! »",
            "img_prompt": "Flashback of the contract signature",
            "choices": [
                { "text": "Accepter le sacrifice.", "next": "15_final_choice" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 31 : LE DERNIER CHOIX (05:59:59)
        // ------------------------------------------------------------------
        "15_final_choice": {
            "chapter": "05:59:50",
            "text": "Le compte à rebours final. L'IA vous supplie. « Prononce le mot, et tu disparais de l'histoire. Personne ne saura ce que tu as fait. Anna t'oubliera. »<br>Le mot de passe est : MIRAGE.",
            "img_prompt": "Adrian screaming into a microphone, clock ticking down",
            "choices": [
                { "text": "Hurler 'MIRAGE' (Sacrifice).", "next": "end_hero" },
                { "text": "Se taire (Lâcheté).", "next": "end_coward" },
                { "text": "Dire 'KHARON' (Fusion).", "next": "end_god" }
            ]
        },

        // ------------------------------------------------------------------
        // FINS ALTERNATIVES (BRANCHES MAJEURES)
        // ------------------------------------------------------------------
        "end_coward": {
            "chapter": "FIN : L'Effondrement",
            "text": "Vous ne dites rien. 06h00. La boucle ne tient plus. La réalité se déchire. L'univers local s'effondre dans une singularité. Tout est détruit.",
            "img_prompt": "Black hole consuming the city of Strasbourg",
            "choices": [
                { "text": "Recommencer le choix", "next": "15_final_choice" }
            ]
        },
        "end_god": {
            "chapter": "FIN : Le Nouveau Dieu",
            "text": "Vous choisissez le pouvoir. Vous remplacez l'IA. Vous devenez le maître du temps. Vous gardez Anna dans une cage dorée pour l'éternité. Vous êtes seul, omnipotent et fou.",
            "img_prompt": "Adrian sitting on a throne of cables, watching infinite screens",
            "choices": [
                { "text": "Recommencer le choix", "next": "15_final_choice" }
            ]
        },

        // ------------------------------------------------------------------
        // ÉPILOGUE CANONIQUE (APRÈS LE SACRIFICE)
        // ------------------------------------------------------------------
        "end_hero": {
            "chapter": "Lumière Blanche",
            "text": "Le mot est dit. La douleur est absolue. Votre identité se dissout. Vous n'êtes plus Adrian Voss. Vous êtes une donnée effacée.",
            "img_prompt": "White screen fading to a sunny morning street",
            "choices": [
                { "text": "Ouvrir les yeux.", "next": "epi_morning" }
            ]
        },
        "epi_morning": {
            "chapter": "Le Monde Sans Nom",
            "text": "Strasbourg. Il fait beau. Les gens rient. Vous marchez. Personne ne vous voit. Vous allez au commissariat. Votre dossier n'existe pas. Vous êtes libre.",
            "img_prompt": "Adrian walking through a crowd, transparent like a ghost",
            "choices": [
                { "text": "Chercher Anna.", "next": "epi_cafe" }
            ]
        },
        "epi_cafe": {
            "chapter": "La Rencontre",
            "text": "Elle est au café. Elle lit. Elle a l'air heureuse. Vous vous asseyez. Elle lève les yeux. « Je vous connais ? » Non. Elle ne vous connaît pas.",
            "img_prompt": "Anna looking polite but distant",
            "choices": [
                { "text": "Lui donner la clé USB.", "next": "epi_usb" },
                { "text": "Partir sans rien dire.", "next": "epi_silent_leave" }
            ]
        },
        "epi_silent_leave": {
            "chapter": "FIN : L'Ombre",
            "text": "Vous la laissez vivre sa vie. Vous veillerez sur elle, de loin. Un ange gardien sans nom. Fin mélancolique.",
            "img_prompt": "Adrian watching Anna from across the street in the rain",
            "choices": [
                { "text": "Rejouer", "next": "start" }
            ]
        },
        "epi_usb": {
            "chapter": "L'Héritage",
            "text": "Vous glissez la clé dans sa poche. « Pour l'avenir. » Vous partez. Le soir, elle regarde la vidéo. Elle pleure. Elle se souvient d'un frère qu'elle n'a jamais eu.",
            "img_prompt": "Anna crying in front of her laptop, holding the USB drive",
            "choices": [
                { "text": "La Révélation.", "next": "epi_reveal" }
            ]
        },
        "epi_reveal": {
            "chapter": "Le Scoop",
            "text": "Anna publie tout. Le scandale Ghost Protocol éclate. Le monde change. Sur le Pont de l'Europe, à l'aube, elle murmure « Merci ». Vous êtes là, dans le vent.",
            "img_prompt": "Sunrise over the Rhine river, silhouette of a woman",
            "choices": [
                { "text": "FIN", "next": "credits" }
            ]
        },
        "credits": {
            "chapter": "FIN DE LA SIMULATION",
            "text": "Merci d'avoir joué à GHOST PROTOCOL.<br>Auteur : Franck Platon.<br>Adaptation Interactive.<br><br>Vous avez exploré les failles du temps.",
            "img_prompt": "Title screen with credits rolling",
            "choices": [
                { "text": "Retour au Menu Principal", "next": "start" }
            ]
        }
    }
};