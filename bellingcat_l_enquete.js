window.GAME_DATA = {
    "title": "BELLINGCAT - L'ENQUÊTE",
    "author": "Franck Platon - Adaptation Interactive",
    "nodes": {
        // ------------------------------------------------------------------
        // INTRODUCTION & MENU
        // ------------------------------------------------------------------
        "start": {
            "chapter": "INTERFACE OSINT - BELLINGCAT",
            "text": "Initialisation du système d'analyse...<br>Identifiant : Anna Voss / Équipe Bellingcat.<br>Statut : Enquêteurs Civils.<br><br>Bienvenue dans la guerre de l'information. Vous n'avez pas d'armes, pas de badges. Juste votre intelligence, des images satellites et des données en source ouverte. Votre mission : prouver l'implication de l'Hydre dans le crash du Vol 714.<br><br>Attention : Chaque erreur peut exposer votre équipe à des représailles mortelles.",
            "img_prompt": "Computer screen with multiple windows showing maps, satellite imagery, and code, dark room, cyber investigation atmosphere",
            "choices": [
                { "text": "Lancer la simulation (Le Crash - Artosie)", "next": "1_dmytro_intro" },
                { "text": "Consulter le dossier 'Hydre' (Contexte)", "next": "intro_context" }
            ]
        },
        "intro_context": {
            "chapter": "DOSSIER : L'HYDRE",
            "text": "L'Hydre est un État autoritaire de l'Est, engagé dans une guerre hybride en Artosie. Ils nient toute implication militaire. Votre but est de percer le brouillard de guerre. Vous utiliserez des outils réels : Géolocalisation, Analyse spectrale, Recherche inversée.",
            "img_prompt": "Map of Eastern Europe with red conflict zones highlighted, military icons",
            "choices": [
                { "text": "Lancer la simulation", "next": "1_dmytro_intro" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 1 : L'IMPACT (ARTOSIE - DMYTRO)
        // ------------------------------------------------------------------
        "1_dmytro_intro": {
            "chapter": "Le Ciel en Découpe",
            "text": "<b>Artosie, Juillet. 14h15.</b><br><br>Chaleur écrasante. Vous êtes Dmytro, 17 ans. Assis sur un vieux tracteur rouillé. Vous streamez en direct pour 3 personnes. L'ennui est total.",
            "img_prompt": "POV shot of a teenager holding a phone, sunflower field in background, rusty tractor",
            "choices": [
                { "text": "Filmer le champ de tournesols.", "next": "1_film_field" },
                { "text": "Filmer le tracteur jaune au loin.", "next": "1_film_tractor" },
                { "text": "Regarder le ciel.", "next": "1_look_sky" }
            ]
        },
        "1_film_field": {
            "chapter": "L'Ennui",
            "text": "« Super passionnant, les gars... » Les fleurs penchent la tête. Rien ne bouge. Une mouche bourdonne.",
            "img_prompt": "Close up of sunflowers under bright sun",
            "choices": [
                { "text": "Lever la caméra vers le ciel.", "next": "1_look_sky" }
            ]
        },
        "1_film_tractor": {
            "chapter": "Le Voisin",
            "text": "Le vieux K-700 laboure. Un point jaune dans la brume de chaleur. Le son du moteur est un grondement sourd.",
            "img_prompt": "Distant yellow tractor in a field, heat haze distortion",
            "choices": [
                { "text": "Lever la caméra vers le ciel.", "next": "1_look_sky" }
            ]
        },
        "1_look_sky": {
            "chapter": "L'Anomalie",
            "text": "Un ciel bleu parfait. Un avion de ligne argenté passe haut, très haut. Mais en dessous... quelque chose cloche. Un trait de crayon gris. Vertical. Il monte vite.",
            "img_prompt": "Blue sky with a commercial plane and a thin grey smoke trail rising towards it",
            "choices": [
                { "text": "Zoomer sur le trait de fumée.", "next": "1_zoom_smoke" },
                { "text": "Dire : « C'est quoi ce truc ? »", "next": "1_comment_smoke" }
            ]
        },
        "1_zoom_smoke": {
            "chapter": "L'Impact",
            "text": "L'image pixelise. Le trait touche l'avion. Pas de son. Juste une fleur de feu orange qui éclot en silence. L'avion disparaît.",
            "img_prompt": "Explosion in the sky, white and orange cloud replacing the plane",
            "choices": [
                { "text": "Rester figé.", "next": "1_sound_shock" }
            ]
        },
        "1_comment_smoke": {
            "chapter": "L'Impact",
            "text": "« Attendez... » BOUM. Visuel seulement. L'explosion est muette pour l'instant. Un champignon noir se forme.",
            "img_prompt": "Black smoke mushroom cloud forming in high altitude",
            "choices": [
                { "text": "Rester figé.", "next": "1_sound_shock" }
            ]
        },
        "1_sound_shock": {
            "chapter": "Le Mur du Son",
            "text": "CRACK ! Le bruit arrive. Une déchirure physique. L'onde de choc vous frappe la poitrine. Le téléphone vole de vos mains.",
            "img_prompt": "Blurred motion of grass and sky as phone falls",
            "choices": [
                { "text": "Se protéger la tête.", "next": "1_rain_debris" }
            ]
        },
        "1_rain_debris": {
            "chapter": "La Pluie de Métal",
            "text": "Ça siffle. Des milliers d'objets tombent. Une portière s'écrase à 200m. Le téléphone est au sol, filmant le ciel souillé. Le direct coupe.",
            "img_prompt": "Smartphone lying in grass, screen cracked, showing smoke trail in sky",
            "choices": [
                { "text": "Transition : Rotterdam (Anna Voss)", "next": "2_anna_rotterdam" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 2 : LA CACOPHONIE (ROTTERDAM - ANNA)
        // ------------------------------------------------------------------
        "2_anna_rotterdam": {
            "chapter": "Rotterdam : La Veille",
            "text": "<b>Rotterdam, Pays-Bas.</b><br><br>Anna Voss est devant son mur d'écrans. La pluie bat la vitre. Une alerte rouge sur son tableau de bord. #ArtosieCrash. De 0 à 50 000 mentions en 3 minutes.",
            "img_prompt": "Woman sitting in front of three monitors in a rainy apartment, red graphs on screen",
            "choices": [
                { "text": "Ouvrir le flux brut Twitter/X.", "next": "2_check_twitter" },
                { "text": "Vérifier Telegram.", "next": "2_check_telegram" },
                { "text": "Lancer le script d'archivage.", "next": "2_launch_script" }
            ]
        },
        "2_check_twitter": {
            "chapter": "Le Chaos",
            "text": "Images pixelisées. Cris. Confusion. Vous trouvez le lien de @TractorBoi404. La vidéo de Dmytro. Le premier commentaire est en russe : « Provocation ukrainienne ».",
            "img_prompt": "Social media feed scrolling fast with images of smoke",
            "choices": [
                { "text": "Analyser l'heure du commentaire.", "next": "2_analyze_bot" },
                { "text": "Sauvegarder la vidéo immédiatement.", "next": "2_save_video" }
            ]
        },
        "2_check_telegram": {
            "chapter": "Rumeurs",
            "text": "Les canaux pro-Hydre s'activent. Ils parlent déjà d'un avion militaire abattu. La narration est prête.",
            "img_prompt": "Telegram chat interface with cyrillic text and military emojis",
            "choices": [
                { "text": "Chercher la source originale.", "next": "2_check_twitter" }
            ]
        },
        "2_launch_script": {
            "chapter": "Réflexe",
            "text": "Vous lancez l'aspirateur de données. Il télécharge tout ce qui a le hashtag. C'est vital. La censure arrive.",
            "img_prompt": "Terminal window with green text scrolling 'DOWNLOADING...'",
            "choices": [
                { "text": "Regarder la vidéo de Dmytro.", "next": "2_check_twitter" }
            ]
        },
        "2_analyze_bot": {
            "chapter": "Le Bot",
            "text": "Heure du post : 13h19. Crash : 13h18. Impossible. Le message était prêt avant l'impact. C'est prémédité.",
            "img_prompt": "Zoom on timestamp of a social media post",
            "choices": [
                { "text": "Sauvegarder la preuve.", "next": "2_save_video" }
            ]
        },
        "2_save_video": {
            "chapter": "La Purge",
            "text": "Vous téléchargez la vidéo. À peine fini, vous rafraîchissez la page. « Ce contenu n'est plus disponible. » Ils effacent tout.",
            "img_prompt": "Web browser showing '404 Content Not Found' error",
            "choices": [
                { "text": "Le téléphone sonne (Maurice Dubois).", "next": "2_call_maurice" }
            ]
        },
        "2_call_maurice": {
            "chapter": "Le Mentor",
            "text": "Maurice, ex-DGSE. « J'espère que tu as tout sauvegardé. Ils nettoient la scène de crime numérique. »",
            "img_prompt": "Phone screen showing 'MAURICE DUBOIS - SECURE CALL'",
            "choices": [
                { "text": "« J'ai la vidéo originale. »", "next": "2_send_data" }
            ]
        },
        "2_send_data": {
            "chapter": "Transfert",
            "text": "Vous envoyez le pack de données chiffré à Maurice à La Haye. Il va l'analyser pixel par pixel.",
            "img_prompt": "File transfer progress bar reaching 100%",
            "choices": [
                { "text": "Changer de point de vue : Maurice.", "next": "3_maurice_analysis" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 3 : LE SIGNAL (LA HAYE - MAURICE)
        // ------------------------------------------------------------------
        "3_maurice_analysis": {
            "chapter": "La Haye : L'Analyse",
            "text": "<b>La Haye. Appartement de Maurice.</b><br><br>Minimaliste. Silencieux. Maurice ouvre le dossier 'Propaganda'. Il cherche le mensonge pour trouver la vérité.",
            "img_prompt": "Clean desk with a laptop and a cup of tea, minimalist room",
            "choices": [
                { "text": "Analyser l'image du 'Chasseur Su-25'.", "next": "3_fake_satellite" },
                { "text": "Analyser la vidéo de Dmytro.", "next": "3_video_analysis" }
            ]
        },
        "3_fake_satellite": {
            "chapter": "Le Faux",
            "text": "Une image satellite montre un chasseur près du Boeing. Maurice regarde les ombres des nuages. Elles sont courtes. Midi. Le crash a eu lieu à 16h. C'est un faux grossier.",
            "img_prompt": "Satellite photo analysis showing shadow angles mismatch",
            "choices": [
                { "text": "Informer Anna.", "next": "3_msg_anna_fake" },
                { "text": "Passer à la vidéo de Dmytro.", "next": "3_video_analysis" }
            ]
        },
        "3_msg_anna_fake": {
            "chapter": "Maskirovka",
            "text": "Maurice > Anna : « Faux. Ombres incorrectes. Doctrine Maskirovka : créer une contre-réalité. »",
            "img_prompt": "Chat window with encrypted messages",
            "choices": [
                { "text": "Analyser la vidéo de Dmytro.", "next": "3_video_analysis" }
            ]
        },
        "3_video_analysis": {
            "chapter": "L'Indice",
            "text": "Maurice lance la vidéo. Il avance image par image lors de la chute du téléphone. Flou... Flou... NET. Une fraction de seconde. Le bord de la route.",
            "img_prompt": "Video player paused on a blurry frame",
            "choices": [
                { "text": "Zoomer sur la forme verte.", "next": "3_enhance_buk" },
                { "text": "Ajuster le contraste.", "next": "3_enhance_buk" }
            ]
        },
        "3_enhance_buk": {
            "chapter": "Le Monstre Vert",
            "text": "Ce n'est pas un tracteur. Silhouette anguleuse. Chenilles. Vert militaire mat. C'est un lanceur de missiles.",
            "img_prompt": "Enhanced grainy image showing the silhouette of a military vehicle hidden in bushes",
            "choices": [
                { "text": "Identifier le véhicule.", "next": "3_identify_buk" }
            ]
        },
        "3_identify_buk": {
            "chapter": "BUK",
            "text": "Système BUK-M1. Un tueur d'avions. Maurice envoie la capture à Anna : « Oublie les faux. On a la vraie arme. »",
            "img_prompt": "Side by side comparison of the blurry shape and a stock photo of a BUK missile launcher",
            "choices": [
                { "text": "Avancer de 3 semaines.", "next": "4_three_weeks_later" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 4 : ÉCOUTE LES IMAGES
        // ------------------------------------------------------------------
        "4_three_weeks_later": {
            "chapter": "L'Enlisement",
            "text": "Trois semaines plus tard. Le mensonge gagne. Les médias parlent de 'mystère'. Anna bout de rage. Un mari de victime poste : « Rendez-lui ses nuages. »",
            "img_prompt": "Anna looking tired, screen showing forum posts of victims' families",
            "choices": [
                { "text": "Appeler Maurice pour publier.", "next": "4_call_publish" },
                { "text": "Continuer la veille passive.", "next": "4_passive_wait" }
            ]
        },
        "4_passive_wait": {
            "chapter": "Patience",
            "text": "Vous attendez. Rien ne change. La colère monte. Vous finissez par appeler Maurice.",
            "choices": [
                { "text": "Appeler Maurice.", "next": "4_call_publish" }
            ]
        },
        "4_call_publish": {
            "chapter": "Nouvelle Piste",
            "text": "Maurice refuse de publier. « Trop tôt. Ils nous détruiraient. » Mais il a une nouvelle : une image satellite privée vient de fuiter. Très haute résolution.",
            "img_prompt": "Anna on phone, looking intense",
            "choices": [
                { "text": "Télécharger l'image satellite.", "next": "4_download_sat" }
            ]
        },
        "4_download_sat": {
            "chapter": "La Cicatrice",
            "text": "L'image charge. C'est le site du crash. Un cratère noir. Des débris sur des kilomètres. Anna divise l'image en grille.",
            "img_prompt": "High res satellite view of a crash site, scorched earth in a field",
            "choices": [
                { "text": "Scanner le secteur G7 (Loin du crash).", "next": "4_scan_g7" },
                { "text": "Scanner le cratère principal.", "next": "4_scan_crater" }
            ]
        },
        "4_scan_crater": {
            "chapter": "Horreur",
            "text": "Le fuselage calciné. Des sièges dans les tournesols. C'est terrible, mais ça ne donne pas le coupable.",
            "choices": [
                { "text": "Scanner le secteur G7.", "next": "4_scan_g7" }
            ]
        },
        "4_scan_g7": {
            "chapter": "Les Traces",
            "text": "Deux lignes fines dans un champ de blé. Des traces de chenilles. Elles mènent à une clairière. Au centre, une tache brûlée rectangulaire.",
            "img_prompt": "Satellite zoom on tank tracks in a wheat field leading to a burnt patch",
            "choices": [
                { "text": "Analyser la tache.", "next": "4_launch_site" }
            ]
        },
        "4_launch_site": {
            "chapter": "Le Point de Tir",
            "text": "La brûlure est typique du souffle d'un lancement de missile. Anna envoie l'image à l'équipe. « Ce n'est pas un impact. C'est le départ. »",
            "img_prompt": "Anna drawing a red circle on the screen around the burnt patch",
            "choices": [
                { "text": "Réunir l'équipe (War Room).", "next": "5_war_room" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 5 : TRACES DANS LE CIEL
        // ------------------------------------------------------------------
        "5_war_room": {
            "chapter": "War Room",
            "text": "L'équipe est chez Anna. Alex 'Pixel' (Tech), Sofia (Langues), Maurice (Stratège). L'air est chaud. Les ordis ronflent.",
            "img_prompt": "Four people working on laptops in a small apartment, wires everywhere",
            "choices": [
                { "text": "Lancer l'analyse géospatiale (Alex).", "next": "5_geo_analysis" },
                { "text": "Surveiller la réaction ennemie (Sofia).", "next": "5_enemy_reaction" }
            ]
        },
        "5_enemy_reaction": {
            "chapter": "Contre-Feu",
            "text": "Sofia : « Ils réagissent ! Des bots postent que le tir venait de Novokaterynivka. Une fausse piste pour noyer la nôtre. Ils savent qu'on a l'image. »",
            "img_prompt": "Screen showing a flood of fake news posts on Telegram",
            "choices": [
                { "text": "Se concentrer sur la vraie piste.", "next": "5_geo_analysis" }
            ]
        },
        "5_geo_analysis": {
            "chapter": "Le Panneau Manquant",
            "text": "Alex compare l'image satellite avec Google Street View de l'an dernier. Sur Street View : un panneau routier bleu. Sur le satellite : rien. Juste de la terre remuée. Ils l'ont enlevé.",
            "img_prompt": "Split screen: Street View with sign vs Satellite view without sign",
            "choices": [
                { "text": "Pourquoi enlever un panneau ?", "next": "5_missing_sign_theory" }
            ]
        },
        "5_missing_sign_theory": {
            "chapter": "Le Repère",
            "text": "Maurice : « Pour empêcher la géolocalisation d'une photo prise à cet endroit. » Anna a un flash. Elle a vu une photo de convoi.",
            "img_prompt": "Anna looking intense, remembering something",
            "choices": [
                { "text": "Chercher la photo du convoi.", "next": "5_convoy_photo" }
            ]
        },
        "5_convoy_photo": {
            "chapter": "La Preuve",
            "text": "Alex trouve la photo. Floue. Un camion blanc porte le BUK. À droite, le panneau bleu. Il a une tache de rouille unique. C'est le MÊME panneau. Le BUK était là.",
            "img_prompt": "Enhancing a blurry photo to match a rust stain on a road sign",
            "choices": [
                { "text": "Analyser le BUK (Maurice).", "next": "6_buk_insignia" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 6 : L'INSIGNE
        // ------------------------------------------------------------------
        "6_buk_insignia": {
            "chapter": "La 53e Brigade",
            "text": "Maurice zooma sur le flanc du BUK. Un losange rouge. « Je connais cet insigne. 53e Brigade Antiaérienne de Koursk. Ils sont à 700km de chez eux. C'est une invasion. »",
            "img_prompt": "Zoom on a military insignia painted on the vehicle",
            "choices": [
                { "text": "Chercher des soldats de cette brigade.", "next": "6_find_soldiers" }
            ]
        },
        "6_find_soldiers": {
            "chapter": "Social Engineering",
            "text": "Sofia cherche sur VKontakte. Elle trouve un blog de spotter. Une photo de parade. Un officier pose devant le BUK. Il a un visage.",
            "img_prompt": "Photo of a proud officer standing in front of a missile launcher",
            "choices": [
                { "text": "Identifier l'officier.", "next": "6_identify_morozov" }
            ]
        },
        "6_identify_morozov": {
            "chapter": "Ivan Morozov",
            "text": "Recherche faciale. C'est le Colonel Ivan Morozov. Alex explore sa liste d'amis. Soudain, les profils disparaissent sous ses yeux. « Deleted ». « Deleted ».",
            "img_prompt": "Computer screen showing social media profiles vanishing one by one",
            "choices": [
                { "text": "Que se passe-t-il ?", "next": "7_digital_trap" }
            ]
        },
        "7_digital_trap": {
            "chapter": "Le Piège de Verre",
            "text": "Maurice se lève. « Coupez tout ! Ils ont un script de surveillance. Ils ont vu notre IP. Ils savent qu'on est là. »",
            "img_prompt": "Team members unplugging cables in panic",
            "choices": [
                { "text": "Regarder par la fenêtre.", "next": "7_black_sedan" },
                { "text": "Détruire les disques durs.", "next": "7_destroy_data" }
            ]
        },
        "7_black_sedan": {
            "chapter": "Ils sont là",
            "text": "Une Mercedes noire est garée en bas. Elle n'était pas là avant. Anna voit un homme à pied avec une oreillette. « Maurice, ils sont déjà là. »",
            "img_prompt": "View from a window of a black car and a man in a coat looking up",
            "choices": [
                { "text": "Lancer l'exfiltration.", "next": "8_exfiltration" }
            ]
        },
        "7_destroy_data": {
            "chapter": "Terre Brûlée",
            "text": "Maurice sort une perceuse. Il perce les disques durs. Alex sauve l'archive sur le Disque Bleu. C'est tout ce qu'il reste.",
            "img_prompt": "Drilling through a hard drive, sparks",
            "choices": [
                { "text": "Fuir par l'escalier de service.", "next": "8_exfiltration" }
            ]
        },
        // ------------------------------------------------------------------
        // CHAPITRE 8 : LA FUITE (ROTTERDAM)
        // ------------------------------------------------------------------
        "8_exfiltration": {
            "chapter": "Exfiltration",
            "text": "Vous sortez par la cave. Pluie battante. Maurice et Sofia partent vers le nord. Anna et Alex vers le sud. « Rendez-vous Brasserie Vondel. 30 minutes. »",
            "img_prompt": "Two pairs of people running in opposite directions in a rainy alley",
            "choices": [
                { "text": "Marcher vite sans se retourner.", "next": "8_street_walking" },
                { "text": "Courir (Suspect).", "next": "8_run_fail" }
            ]
        },
        "8_run_fail": {
            "chapter": "GAME OVER",
            "text": "Vous courez. La Mercedes noire démarre en trombe et vous coupe la route. Des hommes sortent. C'est fini.",
            "img_prompt": "Headlights blinding the camera, silhouettes of men",
            "choices": [
                { "text": "Recommencer l'exfiltration", "next": "8_exfiltration" }
            ]
        },
        "8_street_walking": {
            "chapter": "L'Homme au Journal",
            "text": "Vous marchez. Alex tremble. Vous voyez un homme de l'autre côté de la rue. Il lit un journal sous la pluie. Il a une oreillette.",
            "img_prompt": "Man in trench coat watching from across the street",
            "choices": [
                { "text": "Changer de direction brusquement.", "next": "8_tram_escape" },
                { "text": "Continuer tout droit.", "next": "8_captured" }
            ]
        },
        "8_captured": {
            "chapter": "GAME OVER",
            "text": "L'homme vous suit. Une camionnette arrive à votre hauteur. On vous embarque.",
            "img_prompt": "Van door sliding open",
            "choices": [
                { "text": "Recommencer", "next": "8_street_walking" }
            ]
        },
        "8_tram_escape": {
            "chapter": "Le Tram",
            "text": "Vous sautez dans un tram qui part. L'homme court mais rate la porte. Vous êtes saufs pour l'instant. Alex veut allumer son téléphone.",
            "img_prompt": "View from inside a tram looking at a frustrated man on the platform",
            "choices": [
                { "text": "Lui interdire (« C'est un mouchard ! »).", "next": "8_phone_trap" },
                { "text": "Le laisser faire.", "next": "8_phone_fail" }
            ]
        },
        "8_phone_fail": {
            "chapter": "GAME OVER",
            "text": "Le téléphone borne. L'Hydre triangule. Ils vous attendent au prochain arrêt.",
            "img_prompt": "Police waiting at a tram stop",
            "choices": [
                { "text": "Recommencer", "next": "8_tram_escape" }
            ]
        },
        "8_phone_trap": {
            "chapter": "Le Message Fantôme",
            "text": "Vous l'empêchez. Mais VOTRE téléphone (mode avion) vibre. Une notification locale. Pas de réseau. Comment ? « Rendez-vous annulé. Le Fantôme attend. Métro Blaak. »",
            "img_prompt": "Phone screen showing a calendar notification 'THE GHOST WAITS'",
            "choices": [
                { "text": "Ignorer et aller à la Brasserie (Risqué).", "next": "8_brewery_trap" },
                { "text": "Aller au Métro Blaak.", "next": "9_metro_meet" }
            ]
        },
        "8_brewery_trap": {
            "chapter": "Le Piège Vondel",
            "text": "La Brasserie est cernée. Maurice n'est pas là. Vous voyez des hommes en noir. Vous devez fuir encore.",
            "img_prompt": "Cafe terrace surrounded by black cars",
            "choices": [
                { "text": "Fuir vers le Métro.", "next": "9_metro_meet" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 9 : LE FANTÔME
        // ------------------------------------------------------------------
        "9_metro_meet": {
            "chapter": "Métro Blaak",
            "text": "Foule. Bruit. Vous laissez Alex en retrait. Vous attendez sur le quai. Une femme banale vous bouscule.",
            "img_prompt": "Crowded subway platform, blur of motion",
            "choices": [
                { "text": "Vérifier sa poche.", "next": "9_usb_received" }
            ]
        },
        "9_usb_received": {
            "chapter": "La Clé Noire",
            "text": "Une clé USB dans votre poche. La femme a disparu. Un homme vous regarde depuis l'autre quai. Il hoche la tête et part. C'est un observateur.",
            "img_prompt": "Hand holding a small black USB drive",
            "choices": [
                { "text": "Rejoindre Alex et fuir.", "next": "9_plan_c" }
            ]
        },
        "9_plan_c": {
            "chapter": "Plan C",
            "text": "Nouveau message de Maurice (téléphone sécurisé) : « Entrepôt 4, Docks. » Vous y allez. Maurice et Sofia sont là. Ils ont tout perdu sauf le matériel de secours.",
            "img_prompt": "Empty warehouse with a single table and laptops",
            "choices": [
                { "text": "Montrer la clé USB du Fantôme.", "next": "9_analyze_usb" }
            ]
        },
        "9_analyze_usb": {
            "chapter": "Paranoïa",
            "text": "Maurice : « N'y touche pas. C'est peut-être un virus. » Alex prépare un ordinateur sacrifiable (Air-gapped).",
            "img_prompt": "Inserting USB into an old laptop with no internet connection",
            "choices": [
                { "text": "Ouvrir le contenu.", "next": "10_audio_file" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 10 : LA VOIX DU TUEUR
        // ------------------------------------------------------------------
        "10_audio_file": {
            "chapter": "L'Enregistrement",
            "text": "Un fichier audio : `17_JUILLET.ogg`. Vous écoutez. Du russe. Sofia blêmit. « C'est l'ordre de tir. »",
            "img_prompt": "Audio waveform on screen, Russian text subtitles",
            "choices": [
                { "text": "Célébrer la victoire.", "next": "10_celebrate_fail" },
                { "text": "Douter (Pourquoi nous donner ça ?).", "next": "10_doubt" }
            ]
        },
        "10_celebrate_fail": {
            "chapter": "Naïveté",
            "text": "Vous publiez tout de suite. C'est un faux. L'Hydre vous discrédite. Fin de carrière.",
            "img_prompt": "News headline 'FAKE NEWS SCANDAL'",
            "choices": [
                { "text": "Recommencer l'analyse", "next": "10_doubt" }
            ]
        },
        "10_doubt": {
            "chapter": "Le Message Caché",
            "text": "Alex analyse le spectre audio. Il y a un signal caché dans les hautes fréquences. Stéganographie. Code militaire.",
            "img_prompt": "Spectral analysis showing hidden patterns in sound",
            "choices": [
                { "text": "Décoder le signal.", "next": "10_stegano_result" }
            ]
        },
        "10_stegano_result": {
            "chapter": "La Piste Financière",
            "text": "Message : « Suivez l'argent. Stroykomplekt. » Le Fantôme veut qu'on trouve qui a payé le BUK.",
            "img_prompt": "Decoded text appearing on screen: FOLLOW THE MONEY",
            "choices": [
                { "text": "Lancer l'enquête financière (Pierre).", "next": "11_money_trail" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 11 : LES FANTÔMES DES ENFANTS
        // ------------------------------------------------------------------
        "11_money_trail": {
            "chapter": "Stroykomplekt",
            "text": "Pierre remonte les comptes. C'est une société écran. Mais Sofia trouve autre chose sur les forums nationalistes. « Colis spécial ». « Cargo 300 » (Code pour blessés).",
            "img_prompt": "Spreadsheets linking to a forum post",
            "choices": [
                { "text": "Creuser le terme 'Cargo 300'.", "next": "11_child_soldiers" }
            ]
        },
        "11_child_soldiers": {
            "chapter": "L'Horreur",
            "text": "Une photo effacée. Des ados avec des fusils. Le 'Colis' n'était pas des armes. C'était des enfants soldats. Le BUK protégeait leur camp d'entraînement.",
            "img_prompt": "Blurry photo of teenagers in oversized uniforms holding AK-47s",
            "choices": [
                { "text": "La mission change. Il faut les exposer.", "next": "12_trap_morozov" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 12 : L'INFILTRATION (SOFIA / KATYA)
        // ------------------------------------------------------------------
        "12_trap_morozov": {
            "chapter": "Katya Orlova",
            "text": "Pour coincer Morozov, Sofia doit infiltrer son forum de wargaming. Elle crée le profil 'Valkyrie9'. Elle doit gagner sa confiance.",
            "img_prompt": "Profile creation screen: Avatar of a female pilot, name Valkyrie9",
            "choices": [
                { "text": "L'attaquer sur sa technique (Ego).", "next": "12_ego_trap" },
                { "text": "Le flatter.", "next": "12_flattery_fail" }
            ]
        },
        "12_flattery_fail": {
            "chapter": "Échec",
            "text": "Morozov déteste les sycophantes. Il vous bloque.",
            "img_prompt": "User blocked message",
            "choices": [
                { "text": "Recommencer l'approche", "next": "12_trap_morozov" }
            ]
        },
        "12_ego_trap": {
            "chapter": "Le Piège",
            "text": "Vous critiquez le temps de visée du BUK dans le jeu. Morozov, furieux, vous corrige avec des détails classifiés. Il a mordu.",
            "img_prompt": "Forum thread with angry technical reply from 'General_Winter'",
            "choices": [
                { "text": "Lui envoyer le fichier piégé.", "next": "12_send_payload" }
            ]
        },
        "12_send_payload": {
            "chapter": "Le Fichier",
            "text": "« J'ai fait une simulation, Général. Regardez. » Le fichier contient l'audio de son ordre de tir. S'il l'ouvre, il saura qu'il est grillé.",
            "img_prompt": "File attachment icon 'simulation.exe' sent in private message",
            "choices": [
                { "text": "Attendre.", "next": "13_morozov_panics" }
            ]
        },
        "13_morozov_panics": {
            "chapter": "Déconnexion",
            "text": "Statut : Lu. Morozov se déconnecte immédiatement. Sofia : « Il panique. » Alex : « Un jet privé vient de décoller de Koursk. »",
            "img_prompt": "Map showing a plane taking off from Russia heading West",
            "choices": [
                { "text": "Suivre l'avion.", "next": "13_geneva_flight" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 13 : GENÈVE (LE CLIMAX PARTIE 1)
        // ------------------------------------------------------------------
        "13_geneva_flight": {
            "chapter": "Traque Aérienne",
            "text": "L'avion coupe son transpondeur au-dessus de l'Europe. Maurice active son réseau de radioamateurs. « Signal repéré près de Genève. »",
            "img_prompt": "Radar screen with a blinking dot disappearing and reappearing",
            "choices": [
                { "text": "Surveiller l'aéroport de Genève (Réseaux sociaux).", "next": "13_insta_clue" }
            ]
        },
        "13_insta_clue": {
            "chapter": "Le Reflet",
            "text": "Une photo Instagram d'un cocktail. Dans le reflet des lunettes de soleil sur la table : le jet de Morozov. Et un homme qui l'attend. Le Fantôme.",
            "img_prompt": "Zoom on sunglasses reflection showing two men meeting on a tarmac",
            "choices": [
                { "text": "Observer la rencontre.", "next": "13_assassination" }
            ]
        },
        "13_assassination": {
            "chapter": "Nettoyage",
            "text": "Morozov donne une mallette au Fantôme. Il remonte dans son avion. L'avion décolle... et explose. Boule de feu. Le Fantôme a effacé les traces.",
            "img_prompt": "Explosion on a runway, black smoke rising",
            "choices": [
                { "text": "Réaliser l'horreur.", "next": "14_blackmail" }
            ]
        },
        "14_blackmail": {
            "chapter": "Le Chantage",
            "text": "Message du Fantôme. Une photo de la mallette. Elle contient des passeports... ceux de Sofia et Pierre ! Ils ont été enlevés pendant que vous regardiez l'avion.",
            "img_prompt": "Photo of passports and a gun inside a briefcase",
            "choices": [
                { "text": "Lire la demande de rançon.", "next": "14_publish_or_die" }
            ]
        },
        "14_publish_or_die": {
            "chapter": "Ultimatum",
            "text": "« Publiez le rapport complet demain à 14h. Pendant la conférence de l'Hydre. Sinon, vos amis meurent. »",
            "img_prompt": "Countdown timer set to 14:00",
            "choices": [
                { "text": "Préparer le rapport final.", "next": "15_report_prep" }
            ]
        },
        // ------------------------------------------------------------------
        // CHAPITRE 15 : LE JOUR J (LA PUBLICATION)
        // ------------------------------------------------------------------
        "15_report_prep": {
            "chapter": "L'Héritage de l'Enclume",
            "text": "Nuit blanche. Vous transformez vos preuves en une arme. Cartes interactives, audio, photos. Tout doit être irréfutable.",
            "img_prompt": "Team working exhausted in front of screens, coffee cups, maps on walls",
            "choices": [
                { "text": "Vérifier les sources une dernière fois.", "next": "15_check_sources" },
                { "text": "Préparer les serveurs miroirs.", "next": "15_servers_ready" }
            ]
        },
        "15_check_sources": {
            "chapter": "Rigueur",
            "text": "Vous trouvez une erreur de date mineure. Vous la corrigez. Cette rigueur sauvera votre crédibilité.",
            "img_prompt": "Red pen correcting a date on a document",
            "choices": [
                { "text": "Attendre 14h00.", "next": "15_launch_moment" }
            ]
        },
        "15_servers_ready": {
            "chapter": "Infrastructure",
            "text": "Maurice déploie des miroirs dans 12 pays. L'Hydre ne pourra pas censurer ça.",
            "img_prompt": "Map showing server locations lighting up across the globe",
            "choices": [
                { "text": "Attendre 14h00.", "next": "15_launch_moment" }
            ]
        },
        "15_launch_moment": {
            "chapter": "14h00",
            "text": "Le Ministre de l'Hydre commence son discours à la télé. C'est le signal. Anna a le doigt sur la touche Entrée.",
            "img_prompt": "Finger hovering over the Enter key, TV screen in background",
            "choices": [
                { "text": "PUBLIER.", "next": "15_impact" }
            ]
        },
        "15_impact": {
            "chapter": "L'Ouragan",
            "text": "En 30 secondes, les téléphones des journalistes sonnent à Genève. Le Ministre bégaie. Le mensonge s'effondre en direct. Vous avez gagné la guerre de l'info.",
            "img_prompt": "News ticker showing 'BREAKING NEWS: HYDRA IMPLICATED'",
            "choices": [
                { "text": "Attendre le message du Fantôme.", "next": "16_brussels_trap" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 16 : LE PARC DU CINQUANTENAIRE (BRUXELLES)
        // ------------------------------------------------------------------
        "16_brussels_trap": {
            "chapter": "Rendez-vous",
            "text": "Message : « Parc du Cinquantenaire, Bruxelles. Maintenant. » Anna et Maurice y vont. Le parc est trop ouvert. C'est un mauvais terrain.",
            "img_prompt": "Wide shot of a large park with an archway, grey sky",
            "choices": [
                { "text": "Maurice se poste en hauteur (Sniper/Observateur).", "next": "16_maurice_watch" },
                { "text": "Anna va au banc seule.", "next": "16_anna_bench" }
            ]
        },
        "16_maurice_watch": {
            "chapter": "L'Œil",
            "text": "Maurice voit tout. « Anna, deux silhouettes approchent. C'est eux. Sofia et Pierre. » Ils ont l'air brisés.",
            "img_prompt": "View through binoculars showing two tired figures walking",
            "choices": [
                { "text": "Anna court vers eux.", "next": "16_reunion" }
            ]
        },
        "16_anna_bench": {
            "chapter": "L'Attente",
            "text": "Vous voyez vos amis. Vous vous levez. Mais Maurice hurle dans l'oreillette : « PIÈGE ! Véhicules noirs à l'Est ! »",
            "img_prompt": "Black sedans speeding into the park frame",
            "choices": [
                { "text": "Crier à Sofia et Pierre de courir.", "next": "16_reunion" }
            ]
        },
        "16_reunion": {
            "chapter": "Le Gilet",
            "text": "Vous les rejoignez. Mais Pierre ne bouge pas. Il porte un manteau trop épais. Un voyant rouge clignote sous son col. Il est piégé.",
            "img_prompt": "Close up on a red blinking light under a coat",
            "choices": [
                { "text": "Essayer de désamorcer.", "next": "16_disarm_fail" },
                { "text": "Comprendre son regard.", "next": "16_pierre_choice" }
            ]
        },
        "16_disarm_fail": {
            "chapter": "GAME OVER",
            "text": "Vous vous approchez. Pierre recule. « Pars ! » Il explose avant que vous ne touchiez le gilet.",
            "img_prompt": "White flash",
            "choices": [
                { "text": "Recommencer", "next": "16_reunion" }
            ]
        },
        "16_pierre_choice": {
            "chapter": "Le Sacrifice",
            "text": "Pierre pousse Sofia vers vous. Il se retourne et court vers les tueurs de l'Hydre qui arrivent. « PARDON ANNA ! »",
            "img_prompt": "Man running towards armed agents, pushing a woman away",
            "choices": [
                { "text": "Se jeter au sol.", "next": "16_explosion" }
            ]
        },
        "16_explosion": {
            "chapter": "Lumière Blanche",
            "text": "L'explosion efface le parc. Pierre a emporté l'équipe d'assaut avec lui. Vous êtes sonnée. Maurice vous tire par le bras. « On doit partir ! »",
            "img_prompt": "Crater in the ground, smoke, ringing ears effect",
            "choices": [
                { "text": "Fuir avec Sofia.", "next": "17_dgse_deal" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 17 : LE MARCHÉ (PARIS)
        // ------------------------------------------------------------------
        "17_dgse_deal": {
            "chapter": "DGSE",
            "text": "Planque à Paris. Delacroix (DGSE) vous attend. « Vous avez mis le feu au monde. L'Hydre veut vos têtes. Le Fantôme aussi. »",
            "img_prompt": "Elegant apartment in Paris, stern man in suit talking",
            "choices": [
                { "text": "Accepter sa protection.", "next": "17_accept_deal" },
                { "text": "Refuser et partir.", "next": "17_refuse_deal" }
            ]
        },
        "17_refuse_deal": {
            "chapter": "GAME OVER",
            "text": "Vous sortez. Vous êtes abattue dans la rue 10 minutes plus tard. On ne refuse pas la DGSE.",
            "img_prompt": "Silhouette falling in a rainy street",
            "choices": [
                { "text": "Recommencer la négociation", "next": "17_dgse_deal" }
            ]
        },
        "17_accept_deal": {
            "chapter": "Le Pacte",
            "text": "« On vous protège. En échange, vous partagez vos infos. » Anna impose une condition : « Nous décidons de la publication finale. » Delacroix accepte.",
            "img_prompt": "Handshake over a table covered in files",
            "choices": [
                { "text": "Découvrir l'identité du Fantôme.", "next": "17_reveal_volkov" }
            ]
        },
        "17_reveal_volkov": {
            "chapter": "Le Syrien",
            "text": "Delacroix vous donne un nom : Général Dimitri Volkov. Le rival du SVR. Il a tout orchestré pour purger ses ennemis. Vous n'étiez que son arme.",
            "img_prompt": "Photo of a stern general with medals",
            "choices": [
                { "text": "Partir en exil.", "next": "18_ireland_epilogue" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 18 : BELLINGCAT (IRLANDE)
        // ------------------------------------------------------------------
        "18_ireland_epilogue": {
            "chapter": "Le Cottage",
            "text": "<b>Côte Irlandaise, 6 mois plus tard.</b><br><br>Le vent, la mer. Vous vivez cachés. Mais Volkov est toujours là. Un nouvel hélicoptère vient de s'écraser en Artosie. Mêmes méthodes.",
            "img_prompt": "Lonely cottage on a cliff edge, grey sea, melancholic atmosphere",
            "choices": [
                { "text": "Ignorer (Rester caché).", "next": "18_ignore_news" },
                { "text": "Rouvrir l'ordinateur.", "next": "18_new_mission" }
            ]
        },
        "18_ignore_news": {
            "chapter": "FIN : L'Oubli",
            "text": "Vous éteignez l'écran. Vous vivez votre vie dans la peur et le silence. Le monde oublie. Fin triste.",
            "img_prompt": "Anna looking out the window, screen black",
            "choices": [
                { "text": "Recommencer le choix", "next": "18_ireland_epilogue" }
            ]
        },
        "18_new_mission": {
            "chapter": "Bellingcat",
            "text": "« Il veut jouer ? On va jouer. » Vous créez un nouveau dossier. Vous ne fuyez plus. Vous êtes Bellingcat. La traque continue.",
            "img_prompt": "Anna typing furiously, screen glowing in the dark, title 'BELLINGCAT' appearing",
            "choices": [
                { "text": "Générique de fin.", "next": "credits" }
            ]
        },
        "credits": {
            "chapter": "FIN",
            "text": "Merci d'avoir joué à BELLINGCAT - L'ENQUÊTE.<br>Auteur : Franck Platon.<br>Adaptation Interactive.<br><br>Dédié à ceux qui cherchent la vérité.",
            "img_prompt": "Credits rolling over a satellite map of the world",
            "choices": [
                { "text": "Retour au Menu Principal", "next": "start" }
            ]
        }
    }
};