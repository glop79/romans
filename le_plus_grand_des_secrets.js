window.GAME_DATA = {
    "title": "Le Plus Grand Des Secrets",
    "author": "Franck Platon - Adaptation Interactive",
    "nodes": {
        // ------------------------------------------------------------------
        // MENU PRINCIPAL & INTRODUCTION
        // ------------------------------------------------------------------
        "start": {
            "chapter": "ACCUEIL",
            "text": "Bienvenue dans l'adaptation interactive du roman <b>Le Plus Grand Des Secrets</b>.<br><br>Vous allez plonger dans une conspiration millénaire qui mêle archéologie, cryptographie et prophéties apocalyptiques. Vous incarnerez plusieurs personnages clés, dont le Professeur Elijah Shepherd et sa fille, Rébecca.<br><br>Ce récit contient plus de 500 embranchements. Vos choix détermineront la survie de l'humanité face à Nathanaël Burke et ses Veilleurs.",
            "img_prompt": "Ancient clay tablet glowing with digital binary code, cinematic lighting, mysterious atmosphere, 8k",
            "choices": [
                { "text": "Commencer l'aventure (Prologue : Babylone)", "next": "p_001_babylon_night" },
                { "text": "En savoir plus sur les règles", "next": "intro_rules" }
            ]
        },
        "intro_rules": {
            "chapter": "RÈGLES DU JEU",
            "text": "1. <b>Réflexion</b> : Certains codes nécessitent de la logique (dates, noms).<br>2. <b>Action</b> : Dans les moments de crise, la rapidité ou la discrétion seront vitales.<br>3. <b>Conséquences</b> : Une mauvaise décision peut mener à la mort (Game Over), mais vous pourrez recommencer le chapitre.",
            "img_prompt": "Tactical hud interface with map and biological stats",
            "choices": [
                { "text": "Je suis prêt.", "next": "p_001_babylon_night" }
            ]
        },

        // ------------------------------------------------------------------
        // PROLOGUE : ELIJAH SHEPHERD - BABYLONE
        // ------------------------------------------------------------------
        "p_001_babylon_night": {
            "chapter": "PROLOGUE : La Tablette Oubliée",
            "text": "<b>Site archéologique de Babylone, Irak – 4h14 du matin.</b><br><br>La lune dessine des ombres spectrales sur les ruines. Le vent du désert soulève la poussière. Vous êtes le professeur Elijah Shepherd. Votre lampe frontale éclaire une section de mur que vous avez mis des mois à localiser. Votre main tremble légèrement.",
            "img_prompt": "Archaeologist with headlamp exploring ancient babylon ruins at night, dust particles, mysterious",
            "choices": [
                { "text": "Inspecter les briques cuites.", "next": "p_002_wall_inspect" },
                { "text": "Vérifier si vous êtes suivi.", "next": "p_002_check_surroundings" }
            ]
        },
        "p_002_check_surroundings": {
            "chapter": "PROLOGUE",
            "text": "Vous éteignez votre lampe une seconde. Le silence du désert est pesant. Rien ne bouge, à part les ombres. Mais vous avez ce sentiment... cette impression d'être épié. Vous rallumez la lampe. Le mur est là.",
            "img_prompt": "Dark desert landscape with ancient ruins silhouette against starry sky",
            "choices": [
                { "text": "Se concentrer sur le mur.", "next": "p_002_wall_inspect" }
            ]
        },
        "p_002_wall_inspect": {
            "chapter": "PROLOGUE",
            "text": "Vos doigts tracent les lignes de mortier. Une anomalie. Un rectangle presque parfait. Les joints sont trop réguliers pour être d'origine. Quelqu'un a caché quelque chose ici, il y a très longtemps.",
            "img_prompt": "Close up of hands touching ancient brick wall with a hidden cavity",
            "choices": [
                { "text": "Utiliser la truelle pour gratter.", "next": "p_003_digging" },
                { "text": "Essayer de desceller la brique à mains nues.", "next": "p_003_hands_fail" }
            ]
        },
        "p_003_hands_fail": {
            "chapter": "PROLOGUE",
            "text": "Impossible. Le mortier est vieux mais solide. Vous risquez de vous blesser les doigts. Vous devez utiliser vos outils.",
            "img_prompt": "Hands struggling with a stone brick",
            "choices": [
                { "text": "Prendre la truelle.", "next": "p_003_digging" }
            ]
        },
        "p_003_digging": {
            "chapter": "PROLOGUE",
            "text": "Criss... Criss... Le bruit du métal contre la pierre semble assourdissant dans la nuit. La pierre cède enfin avec un grincement. Une cavité noire apparaît. À l'intérieur, un objet enveloppé de lin.",
            "img_prompt": "A dark hole in a wall revealing a linen wrapped object",
            "choices": [
                { "text": "Sortir l'objet délicatement.", "next": "p_004_reveal" }
            ]
        },
        "p_004_reveal": {
            "chapter": "PROLOGUE",
            "text": "Vous déballez l'objet. C'est une tablette d'argile. Mais les inscriptions... C'est inouï. Des cercles concentriques. Des diagrammes géométriques. Et au centre, le sceau de Nabonide.",
            "img_prompt": "Ancient clay tablet with circular cuneiform writings and geometric shapes",
            "choices": [
                { "text": "Analyser les chiffres au centre.", "next": "p_005_decipher" },
                { "text": "Chercher une signature.", "next": "p_006_signature" }
            ]
        },
        "p_006_signature": {
            "chapter": "PROLOGUE",
            "text": "Une étoile à huit branches surmontant un œil stylisé. C'est bien Nabonide, le dernier roi. Mais c'est aussi le symbole d'un savoir interdit.",
            "img_prompt": "Close up of an eight pointed star symbol on clay",
            "choices": [
                { "text": "Regarder les chiffres.", "next": "p_005_decipher" }
            ]
        },
        "p_005_decipher": {
            "chapter": "PROLOGUE : Le Code",
            "text": "Les séquences pulsent sous votre lampe. 6, 7, 10. Votre cerveau mathématique s'enclenche. 6 × 7 × 6 × 7 × 10 = 17640. C'est une clé.",
            "img_prompt": "Glowing numbers overlaying the tablet in the archaeologist's mind",
            "choices": [
                { "text": "Noter les calculs dans le carnet.", "next": "p_007_noise" }
            ]
        },
        "p_007_noise": {
            "chapter": "PROLOGUE",
            "text": "CLAC. Un bruit sec au dehors. Métallique. Ce n'est pas le vent. Votre campement est à 200 mètres. Vous voyez une lueur. Des flammes.",
            "img_prompt": "Fire burning in the distance through stone arches",
            "choices": [
                { "text": "Ils brûlent le camp ! Paniquer.", "next": "p_008_panic" },
                { "text": "Sauvegarder les preuves immédiatement.", "next": "p_009_photo" }
            ]
        },
        "p_008_panic": {
            "chapter": "ECHEC",
            "text": "Vous vous levez précipitamment pour courir. Vous trébuchez. Votre tête heurte une pierre. Le noir complet. Les Veilleurs vous trouvent inconscient. Le secret meurt avec vous.",
            "img_prompt": "Vision blurring and fading to black",
            "choices": [
                { "text": "Recommencer", "next": "p_007_noise" }
            ]
        },
        "p_009_photo": {
            "chapter": "PROLOGUE",
            "text": "Vous sortez votre téléphone. Les doigts moites. Vous cadrez la tablette. Clic. Une autre. Clic. Le carnet avec vos notes. Clic. Vous lancez l'envoi à Rébecca.",
            "img_prompt": "Smartphone screen taking photo of tablet, loading bar at 10%",
            "choices": [
                { "text": "Attendre la fin du chargement.", "next": "p_010_uploading" }
            ]
        },
        "p_010_uploading": {
            "chapter": "PROLOGUE",
            "text": "La barre de progression avance trop lentement. 40%... 60%... Des cris se rapprochent. Des hommes armés. Ils fouillent les ruines.",
            "img_prompt": "Silhouette of armed mercenaries with flashlights searching ruins",
            "choices": [
                { "text": "Rester caché jusqu'au bout.", "next": "p_011_sent" },
                { "text": "Fuir maintenant avec la tablette.", "next": "p_012_run_fail" }
            ]
        },
        "p_012_run_fail": {
            "chapter": "ECHEC",
            "text": "Vous courez avant la fin de l'envoi. Le signal coupe. Vous êtes repéré par un drone thermique. Une balle vous stoppe. Rébecca ne recevra rien.",
            "img_prompt": "Drone view of a running man, red target lock",
            "choices": [
                { "text": "Recommencer", "next": "p_010_uploading" }
            ]
        },
        "p_011_sent": {
            "chapter": "PROLOGUE : Le Sacrifice",
            "text": "100%. Message envoyé. Vous glissez la tablette dans votre sac. Vous vous levez pour fuir, mais une douleur fulgurante vous traverse la jambe. Un dard tranquillisant.",
            "img_prompt": "Vision getting blurry, a man in a black suit walking towards you",
            "choices": [
                { "text": "Cacher le téléphone.", "next": "p_013_hide_phone" },
                { "text": "Essayer de combattre.", "next": "p_014_fight_fail" }
            ]
        },
        "p_014_fight_fail": {
            "chapter": "ECHEC",
            "text": "Vous essayez de frapper, mais vos membres sont du coton. L'homme en noir rit et vous assomme.",
            "img_prompt": "Fist moving in slow motion, easily blocked",
            "choices": [
                { "text": "Recommencer", "next": "p_011_sent" }
            ]
        },
        "p_013_hide_phone": {
            "chapter": "PROLOGUE : La Fin d'Elijah",
            "text": "Dans un dernier geste, vous glissez le téléphone sous un éboulis. L'homme en noir arrive. Il prend votre sac. 'La tablette, merci Professeur.' Il sourit. Il lève son arme. Le coup part avant que vous ne l'entendiez.",
            "img_prompt": "Black screen with the sound of a gunshot",
            "choices": [
                { "text": "Transition : Rébecca à Princeton", "next": "c1_001_princeton" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 1 : RÉBECCA - LE DÉCHIFFREMENT
        // ------------------------------------------------------------------
        "c1_001_princeton": {
            "chapter": "CHAPITRE 1 : L'Héritage",
            "text": "<b>Université de Princeton – 21h21.</b><br><br>Vous êtes le Dr. Rébecca Shepherd. Votre bureau est plongé dans l'ombre. Votre écran clignote. Une intrusion réseau ? Non. Un paquet de données crypté venant d'Irak.",
            "img_prompt": "Woman mathematician in university office at night, computer screen glowing blue",
            "choices": [
                { "text": "Analyser la source.", "next": "c1_002_source" },
                { "text": "Ouvrir le fichier immédiatement.", "next": "c1_003_password" }
            ]
        },
        "c1_002_source": {
            "chapter": "CHAPITRE 1",
            "text": "Adresse IP masquée par des proxys. Relais satellite au-dessus de Babylone. C'est votre père. Il n'utilise ce canal qu'en cas d'urgence extrême.",
            "img_prompt": "Computer code scrolling showing IP address trace",
            "choices": [
                { "text": "Ouvrir le fichier.", "next": "c1_003_password" }
            ]
        },
        "c1_003_password": {
            "chapter": "CHAPITRE 1 : Le Mot de Passe",
            "text": "Le fichier est verrouillé. Indice : 'Notre forteresse'. Vous essayez les dates d'anniversaire. Échec.",
            "img_prompt": "Password prompt on screen, Access Denied red text",
            "choices": [
                { "text": "Essayer 'BABYLONE'.", "next": "c1_004_fail" },
                { "text": "Essayer 'EINSTEIN'.", "next": "c1_004_fail" },
                { "text": "Essayer 'XADRINA'.", "next": "c1_005_success" }
            ]
        },
        "c1_004_fail": {
            "chapter": "ACCÈS REFUSÉ",
            "text": "Le système se verrouille pour 30 secondes. Pensez, Rébecca. Votre sanctuaire imaginaire d'enfance.",
            "img_prompt": "Screen glitching",
            "choices": [
                { "text": "Essayer 'XADRINA'.", "next": "c1_005_success" }
            ]
        },
        "c1_005_success": {
            "chapter": "CHAPITRE 1 : Les Images",
            "text": "ACCÈS ACCORDÉ. Les photos s'affichent. La tablette. Le carnet. Et cette note tachée de sang : 'PRÉVIENS GALLOWAY. NE FAIS CONFIANCE À PERSO-'.",
            "img_prompt": "Photos of clay tablets and bloody handwritten notes on a computer monitor",
            "choices": [
                { "text": "Zoomer sur les équations.", "next": "c1_006_math" },
                { "text": "Le téléphone sonne.", "next": "c1_007_phone" }
            ]
        },
        "c1_006_math": {
            "chapter": "CHAPITRE 1",
            "text": "17640. 2034 - 394 = 1640. C'est de la gématrie. Un code biblique mathématique. Votre père a trouvé la clé de la chronologie divine.",
            "img_prompt": "Mathematical formulas floating over ancient text",
            "choices": [
                { "text": "Le téléphone sonne.", "next": "c1_007_phone" }
            ]
        },
        "c1_007_phone": {
            "chapter": "CHAPITRE 1 : L'Appel",
            "text": "Numéro inconnu. Vous décrochez. 'Dr. Shepherd ? Ici Thomas Blackwood, Interpol. Je suis désolé... votre père est mort.'",
            "img_prompt": "Rebecca holding phone, looking shocked, tears in eyes",
            "choices": [
                { "text": "Demander comment c'est arrivé.", "next": "c1_008_how" },
                { "text": "Raccrocher immédiatement.", "next": "c1_009_hangup" }
            ]
        },
        "c1_008_how": {
            "chapter": "CHAPITRE 1",
            "text": "'Un vol qui a mal tourné. Avez-vous reçu des fichiers de sa part ?' La question est trop rapide. Trop précise.",
            "img_prompt": "Suspicious man silhouette on the other end of the line",
            "choices": [
                { "text": "Dire la vérité : 'Oui'.", "next": "c1_010_truth_death" },
                { "text": "Mentir : 'Non, rien.'", "next": "c1_011_lie" }
            ]
        },
        "c1_009_hangup": {
            "chapter": "CHAPITRE 1",
            "text": "Vous raccrochez. Votre instinct vous hurle que c'est un piège. Le téléphone sonne à nouveau. Vous l'éteignez.",
            "img_prompt": "Black screen of phone",
            "choices": [
                { "text": "Appeler le Père Galloway (sur le fixe).", "next": "c1_012_galloway" }
            ]
        },
        "c1_010_truth_death": {
            "chapter": "GAME OVER",
            "text": "À l'instant où vous dites oui, Blackwood change de ton. 'Restez là.' Deux minutes plus tard, des hommes entrent. Vous en savez trop. Vous disparaissez.",
            "img_prompt": "Tactical team breaking door",
            "choices": [
                { "text": "Recommencer l'appel", "next": "c1_007_phone" }
            ]
        },
        "c1_011_lie": {
            "chapter": "CHAPITRE 1",
            "text": "'Je vois. Si vous recevez quelque chose, contactez-moi.' Il raccroche. Vous ne le croyez pas une seconde.",
            "img_prompt": "Rebecca looking at the phone with suspicion",
            "choices": [
                { "text": "Appeler le Père Galloway.", "next": "c1_012_galloway" }
            ]
        },
        "c1_012_galloway": {
            "chapter": "CHAPITRE 1 : L'Avertissement",
            "text": "Galloway répond, ensommeillé. 'Michael, papa est mort. Il a dit de te prévenir.' Silence. 'Il l'a trouvée... Rébecca, détruis ton téléphone. Ils arrivent.'",
            "img_prompt": "Old priest on phone looking terrified",
            "choices": [
                { "text": "Recevoir un SMS mystérieux.", "next": "c1_013_sms" }
            ]
        },
        "c1_013_sms": {
            "chapter": "CHAPITRE 1",
            "text": "Le SMS vient du numéro de Blackwood : 'Éteignez vos lumières et fuyez. Ils sont dans le couloir.'",
            "img_prompt": "Smartphone screen with warning message",
            "choices": [
                { "text": "Ignorer et rester.", "next": "c1_014_captured" },
                { "text": "Éteindre et fuir.", "next": "c1_015_escape_start" }
            ]
        },
        "c1_014_captured": {
            "chapter": "GAME OVER",
            "text": "La porte s'ouvre. Un silencieux tousse deux fois. C'est la fin.",
            "img_prompt": "Gun barrel in the dark",
            "choices": [
                { "text": "Recommencer le choix", "next": "c1_013_sms" }
            ]
        },
        "c1_015_escape_start": {
            "chapter": "CHAPITRE 1 : Le Protocole Prométhée",
            "text": "Vous éteignez tout. Vous entendez la serrure être crochetée. Il y a une porte dérobée vers le labo informatique.",
            "img_prompt": "Silhouette of Rebecca slipping through a hidden door in bookcase",
            "choices": [
                { "text": "Prendre l'ordinateur et fuir par la porte dérobée.", "next": "c1_016_backdoor" }
            ]
        },
        "c1_016_backdoor": {
            "chapter": "CHAPITRE 1",
            "text": "Vous vous glissez dans le local technique. La porte de votre bureau s'ouvre avec fracas. Vous retenez votre souffle. Vous traversez le labo désert et sortez dans la nuit.",
            "img_prompt": "Night campus of Princeton, shadows",
            "choices": [
                { "text": "Aller à sa voiture.", "next": "c1_017_car_trap" },
                { "text": "Contacter Alex Keller (Le Hacker).", "next": "c1_018_keller" }
            ]
        },
        "c1_017_car_trap": {
            "chapter": "GAME OVER",
            "text": "Votre voiture est piégée. Ou surveillée. Dès que vous approchez, deux hommes vous saisissent. Erreur de débutante.",
            "img_prompt": "Men grabbing a woman near a car",
            "choices": [
                { "text": "Recommencer la fuite", "next": "c1_016_backdoor" }
            ]
        },
        "c1_018_keller": {
            "chapter": "CHAPITRE 1 : Le Fantôme",
            "text": "Vous utilisez votre téléphone d'urgence. Mail crypté à Keller : 'Protocole Prométhée activé'. Réponse immédiate : 'Angle Nassau. 15 min. Seule.'",
            "img_prompt": "Text message on an old burner phone",
            "choices": [
                { "text": "Rejoindre le point de rendez-vous.", "next": "c1_019_pickup" }
            ]
        },
        "c1_019_pickup": {
            "chapter": "CHAPITRE 1 : L'Exfiltration",
            "text": "Une vieille Crown Victoria s'arrête. Keller est au volant. Crâne rasé, regard nerveux. 'Monte. Et prie pour que tu ne sois pas suivie.'",
            "img_prompt": "Interior of a messy car with hacking gear, man driving",
            "choices": [
                { "text": "Lui raconter pour la tablette.", "next": "c1_020_safehouse" }
            ]
        },
        "c1_020_safehouse": {
            "chapter": "CHAPITRE 2 : La Planque",
            "text": "Dans une maison de banlieue anonyme, Keller analyse les données. '394... Ce n'est pas une date. C'est la différence entre le calendrier grégorien et hébraïque ! Ton père a trouvé la correction temporelle !'",
            "img_prompt": "Screens showing calendar conversions and code",
            "choices": [
                { "text": "Calculer la date de la Fin.", "next": "c2_001_calc" },
                { "text": "Demander à Keller de vérifier Blackwood.", "next": "c2_002_check_blackwood" }
            ]
        },
        "c2_001_calc": {
            "chapter": "CHAPITRE 2",
            "text": "2034. Dans 10 ans. La fin du cycle de 6000 ans. Le début du 'Sabbat' millénaire. C'est ce que les Veilleurs veulent cacher.",
            "img_prompt": "Timeline showing 2034 as a red line",
            "choices": [
                { "text": "Le téléphone vibre.", "next": "c2_003_attack" }
            ]
        },
        "c2_002_check_blackwood": {
            "chapter": "CHAPITRE 2",
            "text": "Keller tape furieusement. 'Blackwood... Il n'existe pas chez Interpol. C'est un fantôme. Ou pire... C'est un Gardien.'",
            "img_prompt": "Profile dossier on screen with 'NO RECORD FOUND'",
            "choices": [
                { "text": "Le téléphone vibre.", "next": "c2_003_attack" }
            ]
        },
        "c2_003_attack": {
            "chapter": "CHAPITRE 2 : L'Assaut",
            "text": "Message de Blackwood : 'Ils vous ont trouvés. Partez !'. Une grenade fumigène traverse la fenêtre du salon !",
            "img_prompt": "Smoke grenade crashing through window, glass shattering",
            "choices": [
                { "text": "Tenter de sauver l'ordinateur.", "next": "c2_004_computer_death" },
                { "text": "Suivre Keller vers la trappe.", "next": "c2_005_trapdoor" }
            ]
        },
        "c2_004_computer_death": {
            "chapter": "GAME OVER",
            "text": "La fumée vous étouffe. Les commandos entrent. Vous êtes trop lente. Une balle dans la poitrine.",
            "img_prompt": "Gas mask soldier standing over fallen woman",
            "choices": [
                { "text": "Recommencer l'assaut", "next": "c2_003_attack" }
            ]
        },
        "c2_005_trapdoor": {
            "chapter": "CHAPITRE 2 : Sacrifice",
            "text": "Keller ouvre une trappe sous le tapis. 'Prends la clé USB ! Va ! Je les retiens !' Il vous pousse dans le noir et referme sur vous. Des coups de feu éclatent au-dessus.",
            "img_prompt": "POV looking up at a closing trapdoor, light disappearing",
            "choices": [
                { "text": "Avancer dans le tunnel.", "next": "c2_006_sewers" }
            ]
        },
        "c2_006_sewers": {
            "chapter": "CHAPITRE 2 : Les Égouts",
            "text": "Vous rampez dans la boue. Vous ressortez deux rues plus loin. Vous êtes seule. Keller est mort ou capturé. Vous devez aller au Temple Beth El voir le Rabbin Lévi.",
            "img_prompt": "Woman climbing out of a sewer manhole in a dark alley",
            "choices": [
                { "text": "Prendre un taxi (Risqué).", "next": "c2_007_taxi" },
                { "text": "Voler une voiture.", "next": "c2_008_steal_car" },
                { "text": "Marcher dans l'ombre.", "next": "c2_009_walk" }
            ]
        },
        "c2_007_taxi": {
            "chapter": "CHAPITRE 2",
            "text": "Le chauffeur vous regarde bizarrement mais vous conduit. Vous descendez avant l'adresse. Le Temple est sombre.",
            "img_prompt": "Taxi driving in rain, temple silhouette",
            "choices": [
                { "text": "Frapper à la porte de service.", "next": "c2_010_rabbi" }
            ]
        },
        "c2_008_steal_car": {
            "chapter": "GAME OVER",
            "text": "Vous n'êtes pas une voleuse. L'alarme sonne. La police arrive. Les Veilleurs interceptent la communication radio de la police. Ils arrivent avant eux.",
            "img_prompt": "Police lights reflecting on wet pavement",
            "choices": [
                { "text": "Recommencer le choix de transport", "next": "c2_006_sewers" }
            ]
        },
        "c2_009_walk": {
            "chapter": "CHAPITRE 2",
            "text": "C'est long. Trop long. Mais vous évitez les caméras. Vous arrivez au Temple à l'aube. Épuisée.",
            "img_prompt": "Sunrise over city skyline, tired woman walking",
            "choices": [
                { "text": "Frapper à la porte.", "next": "c2_010_rabbi" }
            ]
        },
        "c2_010_rabbi": {
            "chapter": "CHAPITRE 2 : Le Rabbin Lévi",
            "text": "Le Rabbin vous ouvre. Il sait qui vous êtes. 'Votre père m'a laissé une lettre.' Il vous tend une enveloppe et un livre : le Sefer Yetzirah.",
            "img_prompt": "Old rabbi with white beard handing over a letter in candlelight",
            "choices": [
                { "text": "Lire la lettre.", "next": "c2_011_letter" }
            ]
        },
        "c2_011_letter": {
            "chapter": "CHAPITRE 2",
            "text": "'Ma chérie, la tablette est la clé de déchiffrement. Le plan de Dieu est mathématique. Méfie-toi des Veilleurs.' Soudain, un grand bruit à l'entrée principale.",
            "img_prompt": "Handwritten letter close up, door shaking in background",
            "choices": [
                { "text": "Fuir par le passage secret.", "next": "c2_012_secret_passage" },
                { "text": "Essayer de sauver le Rabbin.", "next": "c2_013_save_rabbi_fail" }
            ]
        },
        "c2_012_secret_passage": {
            "chapter": "CHAPITRE 2 : La Fuite",
            "text": "Lévi vous pousse dans un passage derrière la bibliothèque. 'Partez !' Vous entendez une détonation. Lévi est mort. Vous êtes dans une ruelle.",
            "img_prompt": "Narrow alleyway at dawn, birds flying away",
            "choices": [
                { "text": "Aller au Musée d'Art (Message de Blackwood).", "next": "c3_001_museum" },
                { "text": "(TO BE CONTINUED...)", "next": "" }
            ]
        },
        "c2_013_save_rabbi_fail": {
            "chapter": "GAME OVER",
            "text": "Vous refusez de partir. Les Veilleurs entrent. Ils tuent le Rabbin. Puis vous. Votre courage vous a perdue.",
            "img_prompt": "Shadow of a gunman in a doorway",
            "choices": [
                { "text": "Recommencer la fuite", "next": "c2_011_letter" }
            ]
        },
        // ------------------------------------------------------------------
        // CHAPITRE 3 : LE MUSÉE & LA BIBLIOTHÈQUE
        // ------------------------------------------------------------------
        "c3_001_museum": {
            "chapter": "CHAPITRE 3 : Le Rendez-vous",
            "text": "<b>Musée d'Art de Princeton – 6h15.</b><br><br>Vous arrivez essoufflée. L'entrée Est est déserte. Vous vous cachez derrière un bosquet. Une silhouette apparaît. Grand manteau noir. C'est Blackwood.",
            "img_prompt": "Man in black trench coat standing alone in front of a museum at dawn",
            "choices": [
                { "text": "Attendre et observer.", "next": "c3_002_observe" },
                { "text": "S'approcher prudemment.", "next": "c3_003_approach" }
            ]
        },
        "c3_002_observe": {
            "chapter": "CHAPITRE 3",
            "text": "Il a l'air tendu. Il vérifie sa montre. Il porte un badge universitaire : 'Département d'Études Théologiques'. Pas Interpol. Votre téléphone vibre : 'Je vous vois, Dr Shepherd. Je suis seul.'",
            "img_prompt": "Close up of a university ID badge on a coat lapel",
            "choices": [
                { "text": "Sortir de sa cachette.", "next": "c3_003_approach" }
            ]
        },
        "c3_003_approach": {
            "chapter": "CHAPITRE 3 : La Vérité",
            "text": "Vous sortez. 'Vous n'êtes pas d'Interpol.' Blackwood sourit tristement. 'Non. Je suis un Gardien. Comme votre père l'était sans le savoir.'",
            "img_prompt": "Woman confronting a mysterious man in a park",
            "choices": [
                { "text": "Lui demander ce que sont les Gardiens.", "next": "c3_004_guardians" },
                { "text": "Lui demander pourquoi les Veilleurs tuent.", "next": "c3_005_watchers" }
            ]
        },
        "c3_004_guardians": {
            "chapter": "CHAPITRE 3",
            "text": "'Nous protégeons la vérité que les Veilleurs veulent détruire. Ils pensent que la connaissance de la Fin mènera au chaos. Nous pensons qu'elle mènera au salut.'",
            "img_prompt": "Symbol of an open eye inside a shield",
            "choices": [
                { "text": "Une voiture noire approche.", "next": "c3_006_car_threat" }
            ]
        },
        "c3_005_watchers": {
            "chapter": "CHAPITRE 3",
            "text": "'Ils ont peur. Ils croient que le destin est écrit et que toute tentative de le lire accélère la fin. Ils tuent par pitié, selon eux.'",
            "img_prompt": "Symbol of a closed fist crushing a scroll",
            "choices": [
                { "text": "Une voiture noire approche.", "next": "c3_006_car_threat" }
            ]
        },
        "c3_006_car_threat": {
            "chapter": "CHAPITRE 3 : Embuscade",
            "text": "Une berline aux vitres teintées tourne le coin. Blackwood vous pousse derrière une colonne. 'Ils vous ont tracée via votre téléphone ! Jetez la carte SIM !'",
            "img_prompt": "Black sedan car driving slowly, menacingly",
            "choices": [
                { "text": "Jeter la carte SIM.", "next": "c3_007_sim_out" },
                { "text": "Garder la carte (Besoin des contacts).", "next": "c3_008_sim_keep_fail" }
            ]
        },
        "c3_008_sim_keep_fail": {
            "chapter": "GAME OVER",
            "text": "Grave erreur. Ils triangulent votre position exacte à 2 mètres près. Des hommes sortent de la voiture et vous encerclent avant que Blackwood ne puisse agir.",
            "img_prompt": "Red laser dots on a woman's chest",
            "choices": [
                { "text": "Recommencer l'embuscade", "next": "c3_006_car_threat" }
            ]
        },
        "c3_007_sim_out": {
            "chapter": "CHAPITRE 3 : Le Sacrifice de Blackwood",
            "text": "Vous écrasez la puce. Blackwood sort un revolver. 'Allez à la bibliothèque de théologie. Code 4973. Sarah Cohen vous attend. Je vais les retenir.' Il sort de sa cachette en tirant en l'air.",
            "img_prompt": "Man shooting a gun into the air to create a diversion",
            "choices": [
                { "text": "Courir vers la bibliothèque.", "next": "c3_009_library_run" },
                { "text": "Rester pour l'aider.", "next": "c3_010_stay_fail" }
            ]
        },
        "c3_010_stay_fail": {
            "chapter": "GAME OVER",
            "text": "Vous n'êtes pas armée. Vous êtes un poids mort. Blackwood est touché en essayant de vous protéger. Vous êtes capturée.",
            "img_prompt": "Man falling to the ground, reaching out",
            "choices": [
                { "text": "Recommencer la fuite", "next": "c3_007_sim_out" }
            ]
        },
        "c3_009_library_run": {
            "chapter": "CHAPITRE 3 : La Bibliothèque",
            "text": "Vous courez. Le bâtiment néogothique se dresse devant vous. Porte arrière. Digicode.",
            "img_prompt": "Gothic library door with electronic keypad",
            "choices": [
                { "text": "Taper 4-9-7-3.", "next": "c3_011_inside" },
                { "text": "Taper 4-7-9-3 (Erreur).", "next": "c3_012_code_error" }
            ]
        },
        "c3_012_code_error": {
            "chapter": "ACCÈS REFUSÉ",
            "text": "Bip rouge. Vous entendez des sirènes. Calmez-vous. Blackwood a dit 4973.",
            "img_prompt": "Red light blinking on keypad",
            "choices": [
                { "text": "Taper 4-9-7-3.", "next": "c3_011_inside" }
            ]
        },
        "c3_011_inside": {
            "chapter": "CHAPITRE 3 : Sarah Cohen",
            "text": "La porte s'ouvre. Une femme vous attend dans l'ombre. Dr Sarah Cohen. 'Vite. J'ai un ordinateur sécurisé.' Vous branchez la clé USB de Keller.",
            "img_prompt": "Woman with glasses beckoning in a dark library corridor",
            "choices": [
                { "text": "Analyser la chronologie.", "next": "c3_013_timeline" }
            ]
        },
        "c3_013_timeline": {
            "chapter": "CHAPITRE 3 : Le Millénaire",
            "text": "Les calculs s'affichent. 2034 marque 6000 ans depuis Adam. Le début du 'Règne Millénaire'. Mais les Veilleurs veulent empêcher cette transition.",
            "img_prompt": "Computer screen showing a timeline ending in 2034 with a bright light",
            "choices": [
                { "text": "Un bruit à l'entrée.", "next": "c3_014_galloway_entry" }
            ]
        },
        "c3_014_galloway_entry": {
            "chapter": "CHAPITRE 3 : La Trahison",
            "text": "La porte principale s'ouvre. C'est le Père Michael Galloway ! Vous êtes soulagée... jusqu'à ce qu'il pointe une arme sur vous. 'Donne-moi la clé, Rébecca.'",
            "img_prompt": "Priest holding a gun with shaking hands, looking desperate",
            "choices": [
                { "text": "Essayer de le raisonner.", "next": "c3_015_reason" },
                { "text": "Refuser.", "next": "c3_016_refuse" }
            ]
        },
        "c3_015_reason": {
            "chapter": "CHAPITRE 3",
            "text": "'Michael, papa te faisait confiance !' Ses yeux sont pleins de larmes. 'Ils m'ont montré la vérité, Rébecca. On ne peut pas changer le destin. Donne-moi la clé et ils te laisseront vivre.'",
            "img_prompt": "Close up of Galloway's tearful eyes",
            "choices": [
                { "text": "Sarah sort son arme.", "next": "c3_017_standoff" }
            ]
        },
        "c3_016_refuse": {
            "chapter": "CHAPITRE 3",
            "text": "'Jamais.' Galloway arme son chien. Sarah Cohen surgit de l'ombre avec un petit pistolet. 'Lâche ça, Michael !'",
            "img_prompt": "Mexican standoff in a library",
            "choices": [
                { "text": "Se jeter au sol.", "next": "c3_018_assault" }
            ]
        },
        "c3_017_standoff": {
            "chapter": "CHAPITRE 3 : L'Impasse",
            "text": "Deux amis, deux armes. 'Les Veilleurs sont à la porte', dit Galloway. 'C'est fini.' BOUM. La porte principale explose sous l'impact d'un bélier.",
            "img_prompt": "Wooden door splintering inwards, smoke",
            "choices": [
                { "text": "Profiter de la confusion.", "next": "c3_018_assault" }
            ]
        },
        "c3_018_assault": {
            "chapter": "CHAPITRE 3 : Le Chaos",
            "text": "Les Veilleurs entrent avec des masques à gaz. Sarah tire en l'air. Galloway s'enfuit. Sarah vous pousse vers une fenêtre arrière. 'Va au cimetière ! Trouve Elias !'",
            "img_prompt": "Tactical team entering through smoke, library books flying",
            "choices": [
                { "text": "Sauter par la fenêtre.", "next": "c3_019_jump" },
                { "text": "Aider Sarah.", "next": "c3_020_help_sarah_fail" }
            ]
        },
        "c3_020_help_sarah_fail": {
            "chapter": "GAME OVER",
            "text": "Sarah vous crie de partir. Une balle la frappe. Vous êtes capturée. Votre hésitation a tué votre alliée et condamné la mission.",
            "img_prompt": "Woman falling, blood on books",
            "choices": [
                { "text": "Recommencer l'assaut", "next": "c3_018_assault" }
            ]
        },
        "c3_019_jump": {
            "chapter": "CHAPITRE 3 : La Chute",
            "text": "Vous atterrissez dans les buissons. Vous entendez des tirs derrière vous. Sarah vous couvre. Vous courez vers le vieux cimetière de Princeton.",
            "img_prompt": "Woman running through dark bushes, library lights in background",
            "choices": [
                { "text": "Entrer dans le cimetière.", "next": "c4_001_cemetery" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 4 : LE CIMETIÈRE & L'AMULETTE
        // ------------------------------------------------------------------
        "c4_001_cemetery": {
            "chapter": "CHAPITRE 4 : Les Tombes",
            "text": "<b>Cimetière de Princeton – 23h00.</b><br><br>Le vent siffle entre les pierres tombales. Vous cherchez la chapelle abandonnée mentionnée par le Rabbin Lévi dans ses notes.",
            "img_prompt": "Spooky old cemetery at night, fog, moonlight on gravestones",
            "choices": [
                { "text": "Aller vers la structure en pierre au centre.", "next": "c4_002_chapel" },
                { "text": "Se cacher et écouter.", "next": "c4_003_listen" }
            ]
        },
        "c4_002_chapel": {
            "chapter": "CHAPITRE 4",
            "text": "Une petite chapelle gothique. La porte est entrouverte. Une lanterne vacille à l'intérieur. Quelqu'un est là.",
            "img_prompt": "Small gothic chapel with a faint light inside",
            "choices": [
                { "text": "Entrer.", "next": "c4_004_elias" }
            ]
        },
        "c4_003_listen": {
            "chapter": "CHAPITRE 4",
            "text": "Rien. Juste le vent. Pas de sirènes. Vous avez semé les Veilleurs pour l'instant. Vous vous dirigez vers la chapelle.",
            "img_prompt": "Silhouette of a woman moving between graves",
            "choices": [
                { "text": "Entrer dans la chapelle.", "next": "c4_004_elias" }
            ]
        },
        "c4_004_elias": {
            "chapter": "CHAPITRE 4 : Le Gardien des Mémoires",
            "text": "Un homme en manteau sombre se tient près de l'autel. Il a l'air ancien, intemporel. 'Je suis Elias. Je vous attendais, Rébecca.'",
            "img_prompt": "Mysterious old man in a hooded coat holding a lantern",
            "choices": [
                { "text": "Lui demander ce qu'il sait.", "next": "c4_005_knowledge" }
            ]
        },
        "c4_005_knowledge": {
            "chapter": "CHAPITRE 4",
            "text": "'Vous avez la Clé (la tablette), mais pas la serrure. La tablette contient un algorithme. Mais il vous faut le décodeur.' Il sort un objet de sa poche.",
            "img_prompt": "Bronze medallion with concentric circles and symbols",
            "choices": [
                { "text": "Prendre l'objet.", "next": "c4_006_amulet" }
            ]
        },
        "c4_006_amulet": {
            "chapter": "CHAPITRE 4 : L'Amulette de Nabonide",
            "text": "C'est un médaillon en bronze. Des cercles mobiles. 'Ceci est l'Amulette. Elle permet de lire la tablette. Allez en Europe. Cherchez les fils d'Ignace sous le regard de Benoît.'",
            "img_prompt": "Close up of the amulet in Rebecca's hand",
            "choices": [
                { "text": "Résoudre l'énigme : 'Fils d'Ignace'.", "next": "c4_007_riddle" }
            ]
        },
        "c4_007_riddle": {
            "chapter": "CHAPITRE 4 : L'Énigme",
            "text": "'Fils d'Ignace' = Jésuites. 'Regard de Benoît' = Bénédictins. Un lieu où les deux se croisent. 'Le lac de la Vierge'.",
            "img_prompt": "Thought bubble showing a lake and a monastery",
            "choices": [
                { "text": "Abbaye de Maria Laach, Allemagne.", "next": "c4_008_germany" },
                { "text": "Lac de Tibériade, Israël.", "next": "c4_009_wrong_location" }
            ]
        },
        "c4_009_wrong_location": {
            "chapter": "MAUVAISE PISTE",
            "text": "Non, l'architecture ne correspond pas. Maria Laach. En Allemagne. C'est là que les Jésuites ont caché leur savoir au XIXe siècle.",
            "img_prompt": "Map of Germany highlighting a lake",
            "choices": [
                { "text": "Choisir l'Allemagne.", "next": "c4_008_germany" }
            ]
        },
        "c4_008_germany": {
            "chapter": "CHAPITRE 4 : La Fuite",
            "text": "Des bruits de pas dehors. 'Ils sont là', dit Elias. Il ouvre un passage secret dans un mausolée. 'Partez ! Ce tunnel mène hors de la ville. Prenez l'avion. Devenez un fantôme.'",
            "img_prompt": "Secret stone door opening in a mausoleum wall",
            "choices": [
                { "text": "Entrer dans le tunnel.", "next": "c4_010_tunnel" }
            ]
        },
        "c4_010_tunnel": {
            "chapter": "CHAPITRE 4 : Le Fantôme",
            "text": "Vous fuyez sous la terre. Vous ressortez loin. Vous utilisez le kit de Keller pour changer d'identité. Rébecca Shepherd meurt ce soir. Susan Reid prend le premier vol pour Francfort.",
            "img_prompt": "Woman putting on a wig and glasses in an airport bathroom",
            "choices": [
                { "text": "Prendre l'avion pour l'Europe.", "next": "c5_001_train" },
                { "text": "(TO BE CONTINUED...)", "next": "" }
            ]
        },
        // ------------------------------------------------------------------
        // CHAPITRE 5 : LE VIEUX CONTINENT & LE TRAIN
        // ------------------------------------------------------------------
        "c5_001_train": {
            "chapter": "CHAPITRE 5 : Sur les rails",
            "text": "<b>Quelque part en Allemagne – 2 jours plus tard.</b><br><br>Sous l'identité de Susan Reid, vous avez atterri à Francfort. Vous êtes maintenant dans un train régional vers Mendig. Le paysage défile. Vous vous sentez observée.",
            "img_prompt": "Woman looking out of a train window, rainy german landscape",
            "choices": [
                { "text": "Changer de wagon.", "next": "c5_002_change_car" },
                { "text": "Rester à sa place et feindre de dormir.", "next": "c5_003_sleep" }
            ]
        },
        "c5_002_change_car": {
            "chapter": "CHAPITRE 5",
            "text": "Vous traversez le train. Un homme en costume lit un journal qui date de la veille. Il ne tourne pas les pages. C'est un guetteur.",
            "img_prompt": "Suspicious man in suit on a train reading newspaper",
            "choices": [
                { "text": "Descendre à la prochaine station (Avant Mendig).", "next": "c5_004_early_stop" },
                { "text": "S'enfermer dans les toilettes jusqu'au terminus.", "next": "c5_005_toilet_trap" }
            ]
        },
        "c5_003_sleep": {
            "chapter": "CHAPITRE 5",
            "text": "Vous baissez votre chapeau. Une main se pose sur votre épaule. Votre cœur s'arrête. 'Mademoiselle ? Contrôle des billets.' Juste le contrôleur. Fausse alerte.",
            "img_prompt": "Train conductor checking tickets",
            "choices": [
                { "text": "Montrer le billet.", "next": "c5_006_arrival" }
            ]
        },
        "c5_005_toilet_trap": {
            "chapter": "GAME OVER",
            "text": "Mauvaise idée. Le train s'arrête. Les portes des toilettes sont déverrouillées de l'extérieur. Deux hommes vous attendent. Vous êtes piégée dans un espace clos.",
            "img_prompt": "Men waiting outside a train toilet door",
            "choices": [
                { "text": "Recommencer le voyage", "next": "c5_001_train" }
            ]
        },
        "c5_004_early_stop": {
            "chapter": "CHAPITRE 5 : L'Imprévu",
            "text": "Vous descendez à une petite gare de campagne. L'homme au journal reste dans le train. Vous êtes seule sur le quai. Une silhouette sort de l'ombre d'un pilier.",
            "img_prompt": "Foggy train station platform, silhouette emerging",
            "choices": [
                { "text": "Fuir vers la sortie.", "next": "c5_007_run_station" },
                { "text": "Affronter l'inconnu.", "next": "c5_008_confront_keller" }
            ]
        },
        "c5_006_arrival": {
            "chapter": "CHAPITRE 5 : Mendig",
            "text": "Vous arrivez à Mendig. Le village est calme. Vous marchez vers l'abbaye. Soudain, une main vous tire dans une ruelle.",
            "img_prompt": "Hand pulling a woman into a dark alley",
            "choices": [
                { "text": "Crier.", "next": "c5_009_scream" },
                { "text": "Se retourner et frapper.", "next": "c5_008_confront_keller" }
            ]
        },
        "c5_009_scream": {
            "chapter": "CHAPITRE 5",
            "text": "Une main se plaque sur votre bouche. 'Tais-toi, Shepherd ! C'est moi !'",
            "img_prompt": "Close up of Alex Keller's face, tired and unshaven",
            "choices": [
                { "text": "Keller ?", "next": "c5_010_reunion" }
            ]
        },
        "c5_007_run_station": {
            "chapter": "CHAPITRE 5",
            "text": "Vous courez. 'Rébecca ! Attends !' La voix est familière. Vous vous arrêtez.",
            "img_prompt": "Man running after woman",
            "choices": [
                { "text": "Se retourner.", "next": "c5_008_confront_keller" }
            ]
        },
        "c5_008_confront_keller": {
            "chapter": "CHAPITRE 5 : Le Revenant",
            "text": "C'est Alex Keller ! Il est vivant. Sale, fatigué, mais vivant. Il a survécu à l'assaut de Princeton.",
            "img_prompt": "Alex Keller smiling weakly, wearing dirty clothes",
            "choices": [
                { "text": "Le serrer dans ses bras.", "next": "c5_010_reunion" },
                { "text": "Lui demander comment il a survécu.", "next": "c5_011_explanation" }
            ]
        },
        "c5_010_reunion": {
            "chapter": "CHAPITRE 5 : L'Alliance",
            "text": "'Pas le temps pour les sentiments. J'ai tracé ton téléphone jetable jusqu'ici. Tu vas à Maria Laach ?'",
            "img_prompt": "Two characters talking intensely in a German alleyway",
            "choices": [
                { "text": "Oui. L'indice d'Elias.", "next": "c5_012_plan" }
            ]
        },
        "c5_011_explanation": {
            "chapter": "CHAPITRE 5",
            "text": "'J'ai fait sauter ma propre maison avec eux dedans. Je suis passé par les égouts. J'ai pris un cargo. Je suis là. On y va ?'",
            "img_prompt": "Flashback of an explosion in a suburban house",
            "choices": [
                { "text": "Aller à l'Abbaye.", "next": "c5_012_plan" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 6 : MARIA LAACH
        // ------------------------------------------------------------------
        "c5_012_plan": {
            "chapter": "CHAPITRE 6 : L'Abbaye",
            "text": "<b>Abbaye de Maria Laach.</b><br><br>L'édifice roman se dresse au bord du lac volcanique. C'est magnifique et austère. Mais il n'y a aucune trace de Jésuites ici. C'est un monastère bénédictin.",
            "img_prompt": "Beautiful romanque abbey near a lake, grey stone, moody sky",
            "choices": [
                { "text": "Chercher une bibliothèque.", "next": "c6_001_search_lib" },
                { "text": "Observer le sol de la cour intérieure.", "next": "c6_002_floor" }
            ]
        },
        "c6_001_search_lib": {
            "chapter": "CHAPITRE 6",
            "text": "Vous demandez à voir la bibliothèque. Un moine vous indique une petite salle moderne. Rien d'ancien. C'est une impasse.",
            "img_prompt": "Modern library room with standard books",
            "choices": [
                { "text": "Revenir dans la cour.", "next": "c6_003_courtyard" }
            ]
        },
        "c6_003_courtyard": {
            "chapter": "CHAPITRE 6",
            "text": "Vous retournez dans le cloître. L'énigme parlait de 'traces dans la pierre'.",
            "img_prompt": "Cloister garden with stone pavement",
            "choices": [
                { "text": "Observer le sol.", "next": "c6_002_floor" }
            ]
        },
        "c6_002_floor": {
            "chapter": "CHAPITRE 6 : La Mosaïque",
            "text": "Le sol est couvert de dalles géométriques. Keller ne voit rien. Mais vous, vous voyez des mathématiques. La note de votre père : 6 × 7 × 6 × 7 × 10.",
            "img_prompt": "Geometric stone floor tiles pattern viewed from above",
            "choices": [
                { "text": "Compter les dalles : 6 Nord, 7 Est...", "next": "c6_004_steps" },
                { "text": "Chercher une dalle marquée du chiffre 6.", "next": "c6_005_wrong_logic" }
            ]
        },
        "c6_005_wrong_logic": {
            "chapter": "IMPASSE",
            "text": "Aucun chiffre n'est gravé. Ce n'est pas littéral. C'est un itinéraire.",
            "img_prompt": "Rebecca looking confused at the floor",
            "choices": [
                { "text": "Suivre la séquence comme des pas.", "next": "c6_004_steps" }
            ]
        },
        "c6_004_steps": {
            "chapter": "CHAPITRE 6 : Le Mur",
            "text": "Vous suivez le tracé invisible. 6 pas. 7 pas. 6 pas... Vous arrivez devant un mur anodin sous une arcade. Rien. Sauf une petite sculpture à hauteur d'yeux.",
            "img_prompt": "Stone wall with a small worn carving of letters",
            "choices": [
                { "text": "Examiner la sculpture.", "next": "c6_006_ihs" }
            ]
        },
        "c6_006_ihs": {
            "chapter": "CHAPITRE 6 : Le Sceau",
            "text": "C'est le sceau des Jésuites : IHS. 'Iesus Hominum Salvator'. Ici, chez les Bénédictins. C'est l'anomalie. Vous appuyez dessus.",
            "img_prompt": "Close up of IHS symbol carved in stone being pressed",
            "choices": [
                { "text": "Pousser.", "next": "c6_007_secret_door" }
            ]
        },
        "c6_007_secret_door": {
            "chapter": "CHAPITRE 6 : L'Ouverture",
            "text": "Un déclic. Le mur pivote. Un escalier en colimaçon plonge dans le noir. Une voix monte des profondeurs : 'Vous avez mis du temps, Dr Shepherd.'",
            "img_prompt": "Secret passage opening in a stone wall, stairs going down",
            "choices": [
                { "text": "Descendre.", "next": "c6_008_adrien" },
                { "text": "S'enfuir.", "next": "c6_009_flee_fail" }
            ]
        },
        "c6_009_flee_fail": {
            "chapter": "GAME OVER",
            "text": "Vous fuyez la découverte. Dehors, les Veilleurs vous attendent. Sans le savoir caché dans la bibliothèque, vous êtes vulnérable. Ils vous capturent.",
            "img_prompt": "Silhouette of Rebecca running away into the arms of soldiers",
            "choices": [
                { "text": "Recommencer", "next": "c6_007_secret_door" }
            ]
        },
        "c6_008_adrien": {
            "chapter": "CHAPITRE 6 : Frère Adrien",
            "text": "Un moine vous attend. Frère Adrien. Il vous mène à une bibliothèque cachée. Des milliers de livres interdits. 'Les Jésuites ont laissé ceci en 1862. Nous le gardons pour vous.'",
            "img_prompt": "Massive secret library with iron spiral staircases and old books",
            "choices": [
                { "text": "Chercher des informations sur la chronologie.", "next": "c6_010_manuscripts" }
            ]
        },
        "c6_010_manuscripts": {
            "chapter": "CHAPITRE 6 : Les Manuscrits",
            "text": "Sur une table, des manuscrits. Vous reconnaissez l'écriture de votre père dans les marges ! Il est venu ici. Il a étudié ces textes.",
            "img_prompt": "Old parchment with modern handwriting notes in red ink",
            "choices": [
                { "text": "Lire les notes d'Elijah.", "next": "c6_011_revelation" }
            ]
        },
        "c6_011_revelation": {
            "chapter": "CHAPITRE 6 : La Prophétie",
            "text": "Les calculs confirment tout. 2034 est la fin du cycle. Mais la tablette de Babylone n'est pas le message. C'est la CLÉ pour décoder le message. Et le message est à Rome.",
            "img_prompt": "Close up of a map of Rome with coordinates",
            "choices": [
                { "text": "Pourquoi Rome ?", "next": "c6_012_vatican_link" }
            ]
        },
        "c6_012_vatican_link": {
            "chapter": "CHAPITRE 6 : La Piste",
            "text": "Adrien explique : 'Il y a une bibliothèque secrète au Vatican. Seuls eux ont la 'Serrure' qui va avec votre 'Clé' (L'amulette). Vous devez trouver l'archiviste Domenico.'",
            "img_prompt": "Monk handing a sealed letter to Rebecca",
            "choices": [
                { "text": "Nous devons partir pour Rome.", "next": "c6_013_departure" }
            ]
        },
        "c6_013_departure": {
            "chapter": "CHAPITRE 6 : Le Départ",
            "text": "Une alarme sonne. 'Ils arrivent', dit Adrien. Il vous guide vers une sortie dérobée. Une voiture diplomatique du Vatican vous attend. 'Allez. Dieu vous garde.'",
            "img_prompt": "Black diplomatic car waiting in the mist outside the abbey",
            "choices": [
                { "text": "Monter dans la voiture.", "next": "c7_001_rome" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 7 : ROME & LES ARCHIVES
        // ------------------------------------------------------------------
        "c7_001_rome": {
            "chapter": "CHAPITRE 7 : La Cité Éternelle",
            "text": "<b>Rome, Italie.</b><br><br>La voiture vous dépose près du Vatican. La nuit. Vous devez entrer dans la Bibliothèque Apostolique sans être vus. Domenico vous attend à la porte de service.",
            "img_prompt": "St Peter's Basilica dome at night, shadows in the streets",
            "choices": [
                { "text": "Rejoindre Domenico.", "next": "c7_002_domenico" },
                { "text": "Vérifier les alentours (Paranoïa).", "next": "c7_003_check" }
            ]
        },
        "c7_003_check": {
            "chapter": "CHAPITRE 7",
            "text": "Des touristes. Des gardes suisses. Rien de suspect. Keller est nerveux. 'C'est trop facile.'",
            "img_prompt": "Crowded street in Rome at night",
            "choices": [
                { "text": "Rejoindre Domenico.", "next": "c7_002_domenico" }
            ]
        },
        "c7_002_domenico": {
            "chapter": "CHAPITRE 7 : L'Archiviste",
            "text": "Domenico est un petit homme nerveux. 'Vite. Les cardinaux dorment, mais les Veilleurs ne dorment jamais.' Il vous mène dans les sous-sols.",
            "img_prompt": "Old man opening a heavy wooden door",
            "choices": [
                { "text": "Le suivre dans les archives secrètes.", "next": "c7_004_secret_archives" }
            ]
        },
        "c7_004_secret_archives": {
            "chapter": "CHAPITRE 7 : La Crypte",
            "text": "Des kilomètres de rayonnages. Domenico vous mène à une section scellée. 'Ici. Les Textes Interdits.' Il sort un parchemin. 'Regardez.'",
            "img_prompt": "Ancient scroll unrolled on a table under candlelight",
            "choices": [
                { "text": "Utiliser l'Amulette pour décoder.", "next": "c7_005_decoding" }
            ]
        },
        "c7_005_decoding": {
            "chapter": "CHAPITRE 7 : La Carte du Temps",
            "text": "Vous posez l'amulette sur le parchemin. Les cercles s'alignent. Keller tape sur son ordi. 'Ça marche ! Les symboles deviennent des coordonnées !'",
            "img_prompt": "Bronze amulet overlaid on parchment, glowing symbols",
            "choices": [
                { "text": "Lire les résultats.", "next": "c7_006_results" }
            ]
        },
        "c7_006_results": {
            "chapter": "CHAPITRE 7 : L'Histoire",
            "text": "Chute de Babylone. Pompéi. Peste Noire. Tout y est. Daté à la seconde près. C'est une liste de tous les cataclysmes passés... et futurs.",
            "img_prompt": "Holographic map of the world with red dots appearing on historical sites",
            "choices": [
                { "text": "Regarder les dates futures.", "next": "c7_007_future" }
            ]
        },
        "c7_007_future": {
            "chapter": "CHAPITRE 7 : Le Plan",
            "text": "2025 : CERN. 2026 : Blackout NY. 2027 : Peste. Ce n'est pas une prophétie religieuse. C'est un agenda. Quelqu'un VA provoquer ces événements.",
            "img_prompt": "List of future dates with ominous titles like 'Fire from Below'",
            "choices": [
                { "text": "Comprendre qui est derrière tout ça.", "next": "c7_008_burke" }
            ]
        },
        "c7_008_burke": {
            "chapter": "CHAPITRE 7 : Nathanaël Burke",
            "text": "Keller croise les données. 'Les Veilleurs ne sont pas des fanatiques. C'est une entreprise. Burke & Co. Ils veulent provoquer l'Apocalypse pour la privatiser !'",
            "img_prompt": "Photo of a handsome, cold-looking man in a suit: Nathaniel Burke",
            "choices": [
                { "text": "Un bruit à la porte.", "next": "c7_009_intrusion" }
            ]
        },
        "c7_009_intrusion": {
            "chapter": "CHAPITRE 7 : L'Attaque",
            "text": "BOUM. La porte vole en éclats. Des commandos tactiques. Pas des prêtres. Les Veilleurs sont là. Domenico crie : 'Le sol ! La mosaïque !'",
            "img_prompt": "Explosion at the door, smoke filling the room",
            "choices": [
                { "text": "Chercher le mécanisme au sol.", "next": "c7_010_mosaic" },
                { "text": "Se battre.", "next": "c7_011_fight_fail" }
            ]
        },
        "c7_011_fight_fail": {
            "chapter": "GAME OVER",
            "text": "Vous n'êtes pas de taille. Ils vous abattent. Domenico est exécuté. Le secret retourne à l'ombre.",
            "img_prompt": "Gun firing",
            "choices": [
                { "text": "Recommencer l'attaque", "next": "c7_009_intrusion" }
            ]
        },
        "c7_010_mosaic": {
            "chapter": "CHAPITRE 7 : L'Énigme du Sol",
            "text": "La mosaïque représente la Création. Domenico hurle : 'Les 7 jours ! Trouvez l'Homme !' Il faut appuyer sur les symboles dans l'ordre.",
            "img_prompt": "Mosaic floor with symbols of sun, moon, animals, man",
            "choices": [
                { "text": "Lumière, Ciel, Terre, Astres, Animaux, Homme.", "next": "c7_012_success" },
                { "text": "Homme, Animaux, Terre...", "next": "c7_013_fail_code" }
            ]
        },
        "c7_013_fail_code": {
            "chapter": "ÉCHEC",
            "text": "Rien ne se passe. Les Veilleurs entrent. C'est fini.",
            "img_prompt": "Soldiers entering room",
            "choices": [
                { "text": "Recommencer le code", "next": "c7_010_mosaic" }
            ]
        },
        "c7_012_success": {
            "chapter": "CHAPITRE 7 : Le Passetto",
            "text": "Le sol s'ouvre. Un toboggan de pierre. Vous sautez dedans avec Keller et le manuscrit. Domenico reste pour les retenir. 'Allez à Prague !'",
            "img_prompt": "Sliding down a dark stone chute",
            "choices": [
                { "text": "Glisser vers les égouts.", "next": "c7_014_sewers" }
            ]
        },
        "c7_014_sewers": {
            "chapter": "CHAPITRE 7 : Le Tibre",
            "text": "Vous atterrissez dans l'eau glacée d'un ancien aqueduc. Vous débouchez sur le Tibre. Vous êtes vivants. Vous avez la liste des catastrophes. Prochaine étape : Prague.",
            "img_prompt": "Two figures climbing out of a river at night, St Peter's basilica in background",
            "choices": [
                { "text": "Rejoindre les Gardiens à Prague.", "next": "c8_001_prague" }
            ]
        },
        // ------------------------------------------------------------------
        // CHAPITRE 8 : PRAGUE - LE QG DES GARDIENS
        // ------------------------------------------------------------------
        "c8_001_prague": {
            "chapter": "CHAPITRE 8 : Notre-Dame-sous-la-Chaîne",
            "text": "<b>Prague, République Tchèque.</b><br><br>Vous arrivez épuisés. L'église est une forteresse baroque. Keller tape un code sur une porte latérale. Sous l'autel, une crypte aménagée en centre de commandement high-tech.",
            "img_prompt": "High tech servers and screens inside an ancient stone crypt, contrast of old and new",
            "choices": [
                { "text": "Entrer dans le QG.", "next": "c8_002_team" }
            ]
        },
        "c8_002_team": {
            "chapter": "CHAPITRE 8 : L'Équipe",
            "text": "Des gens vous attendent. Thomas Blackwood (le Gardien infiltré), Sarah Cohen (qui a survécu !), Miriam (Bibliste), David (Ingénieur), Samuel (Historien). Vous n'êtes plus seule.",
            "img_prompt": "Group of diverse people standing around a digital map table in a crypt",
            "choices": [
                { "text": "Saluer Sarah (Soulagement).", "next": "c8_003_sarah" },
                { "text": "Aller directement aux données.", "next": "c8_004_analysis" }
            ]
        },
        "c8_003_sarah": {
            "chapter": "CHAPITRE 8",
            "text": "Sarah a le bras en écharpe. 'Galloway s'est enfui. Mais nous sommes là. Nous sommes les Gardiens.' Elle sourit. L'espoir renaît.",
            "img_prompt": "Sarah Cohen smiling weakly with arm in a sling",
            "choices": [
                { "text": "Se mettre au travail.", "next": "c8_004_analysis" }
            ]
        },
        "c8_004_analysis": {
            "chapter": "CHAPITRE 8 : Le Déchiffrement",
            "text": "Rébecca connecte le disque dur. L'algorithme 'Cassandre' tourne. Les dates et lieux s'affichent sur la carte du monde. Ce n'est pas aléatoire. C'est une séquence.",
            "img_prompt": "World map with glowing red dots and dates connecting them",
            "choices": [
                { "text": "Lire la première prophétie (10 Juin 2025).", "next": "c8_005_cern_prophecy" }
            ]
        },
        "c8_005_cern_prophecy": {
            "chapter": "CHAPITRE 8 : Le Feu sans Flamme",
            "text": "<b>10 JUIN 2025 : CERN, GENÈVE.</b><br>'Quand l'homme brisera la chaîne du premier matin... un feu sans flamme dévorera la matière.'<br>C'est dans 3 semaines.",
            "img_prompt": "CERN particle collider tunnel, futuristic and ominous",
            "choices": [
                { "text": "Analyser la signification.", "next": "c8_006_meaning" }
            ]
        },
        "c8_006_meaning": {
            "chapter": "CHAPITRE 8",
            "text": "David (Ingénieur) : 'Le Large Hadron Collider (LHC). Ils vont provoquer une collision catastrophique. Un trou noir ? Non, une rupture de confinement.'",
            "img_prompt": "Diagram of a particle collision going wrong",
            "choices": [
                { "text": "Comprendre le but de Burke.", "next": "c8_007_motive" }
            ]
        },
        "c8_007_motive": {
            "chapter": "CHAPITRE 8 : Le Business Plan",
            "text": "Rébecca comprend : 'Burke ne veut pas détruire le monde. Il veut le voler. Il va créer une crise pour voler les données sur l'antimatière et l'énergie infinie.' C'est un braquage déguisé en apocalypse.",
            "img_prompt": "Nathaniel Burke silhouette watching screens with stock market crashes",
            "choices": [
                { "text": "Préparer la mission CERN.", "next": "c9_001_geneva_prep" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 9 : LE CERN (SUISSE)
        // ------------------------------------------------------------------
        "c9_001_geneva_prep": {
            "chapter": "CHAPITRE 9 : Infiltration",
            "text": "<b>Genève, Suisse.</b><br><br>L'équipe est en place. Blackwood gère la logistique. Vous et Keller devez entrer dans le tunnel du LHC pendant la maintenance. David guide par radio.",
            "img_prompt": "Night view of CERN globe, two figures sneaking in shadows",
            "choices": [
                { "text": "Entrer par les égouts (Sale mais sûr).", "next": "c9_002_sewers" },
                { "text": "Pirater un badge d'accès (Rapide mais risqué).", "next": "c9_003_badge" }
            ]
        },
        "c9_002_sewers": {
            "chapter": "CHAPITRE 9",
            "text": "L'odeur est atroce, mais pas de caméras. Vous arrivez sous le secteur 7G. Keller ouvre la trappe de maintenance.",
            "img_prompt": "Flashlight beam in a dark tunnel with pipes",
            "choices": [
                { "text": "Monter dans le tunnel du collisionneur.", "next": "c9_004_collider" }
            ]
        },
        "c9_003_badge": {
            "chapter": "ÉCHEC PARTIEL",
            "text": "Le badge fonctionne, mais une alarme silencieuse se déclenche. Vous avez moins de temps. Les gardes sont en alerte.",
            "img_prompt": "Red light blinking on a card reader",
            "choices": [
                { "text": "Courir vers le tunnel.", "next": "c9_004_collider" }
            ]
        },
        "c9_004_collider": {
            "chapter": "CHAPITRE 9 : Le Tunnel",
            "text": "Vous êtes dans le tube de 27km. Des aimants bleus géants à perte de vue. L'air vibre. L'expérience va commencer. 'Branchez-vous sur le terminal cryogénique !' crie David.",
            "img_prompt": "Futuristic LHC tunnel with massive blue machinery, perspective shot",
            "choices": [
                { "text": "Trouver le terminal.", "next": "c9_005_terminal" }
            ]
        },
        "c9_005_terminal": {
            "chapter": "CHAPITRE 9 : Le Hack",
            "text": "Keller se branche. 'Je suis dedans.' CLAC. Des portes d'acier tombent des deux côtés du tunnel. Vous êtes piégés. 'Confinement d'urgence !' C'est un piège de Burke.",
            "img_prompt": "Heavy steel blast doors closing, red alarm lights rotating",
            "choices": [
                { "text": "Continuer le piratage.", "next": "c9_006_virus" },
                { "text": "Chercher une sortie.", "next": "c9_007_panic" }
            ]
        },
        "c9_006_virus": {
            "chapter": "CHAPITRE 9 : Le Virus",
            "text": "Keller voit le code de Burke. 'C'est un virus ! Il surchauffe les aimants pour provoquer une explosion (Quench) ET il vole les données en même temps !'",
            "img_prompt": "Screen showing temperature rising rapidly in red",
            "choices": [
                { "text": "Arrêter la surchauffe (Sauver le CERN).", "next": "c9_008_dilemma_save" },
                { "text": "Bloquer le transfert de données (Stopper Burke).", "next": "c9_009_dilemma_stop" }
            ]
        },
        "c9_007_panic": {
            "chapter": "GAME OVER",
            "text": "Vous paniquez et frappez la porte. Le temps s'écoule. Les aimants explosent. L'hélium liquide vous vaporise instantanément.",
            "img_prompt": "White cloud of gas filling the tunnel",
            "choices": [
                { "text": "Recommencer le tunnel", "next": "c9_004_collider" }
            ]
        },
        "c9_009_dilemma_stop": {
            "chapter": "FIN TRAGIQUE",
            "text": "Vous bloquez les données. Burke n'a rien. MAIS les aimants explosent. Le CERN est détruit. Genève est irradiée. Vous mourez en héros, mais à quel prix ?",
            "img_prompt": "Explosion destroying the machine",
            "choices": [
                { "text": "Recommencer le choix", "next": "c9_006_virus" }
            ]
        },
        "c9_008_dilemma_save": {
            "chapter": "CHAPITRE 9 : Le Choix",
            "text": "Rébecca ordonne : 'Sauve la machine !'. Keller isole la surchauffe. Le système se stabilise. MAIS... 'Transfert terminé'. Burke a volé les données. Il a gagné technologiquement, mais vous avez évité le désastre.",
            "img_prompt": "Green 'SYSTEM STABLE' message, but 'UPLOAD COMPLETE' in background",
            "choices": [
                { "text": "Chercher une sortie (Les gardes arrivent).", "next": "c9_010_escape_vent" }
            ]
        },
        "c9_010_escape_vent": {
            "chapter": "CHAPITRE 9 : L'Évasion",
            "text": "Les portes vont s'ouvrir sur les gardes. 'Là-haut !' David indique les tuyaux d'évacuation d'hélium. 'Ils débouchent dehors !' Mais les vannes sont fermées.",
            "img_prompt": "Looking up at massive pipes in the ceiling",
            "choices": [
                { "text": "Utiliser l'impulsion magnétique pour ouvrir les vannes.", "next": "c9_011_magnet_pulse" },
                { "text": "Forcer manuellement (Impossible).", "next": "c9_012_force_fail" }
            ]
        },
        "c9_012_force_fail": {
            "chapter": "GAME OVER",
            "text": "La vanne ne bouge pas. Les gardes entrent. Vous êtes arrêtés pour terrorisme.",
            "img_prompt": "Soldiers aiming rifles at you",
            "choices": [
                { "text": "Recommencer l'évasion", "next": "c9_010_escape_vent" }
            ]
        },
        "c9_011_magnet_pulse": {
            "chapter": "CHAPITRE 9 : Le Saut",
            "text": "Keller crée une micro-surtension. L'impulsion magnétique fait sauter les verrous des vannes. CLANG. Vous grimpez dans le tube glacé. Vous glissez vers la liberté.",
            "img_prompt": "Sliding down a dark metallic tube, ice crystals",
            "choices": [
                { "text": "Sortir dans le bassin de refroidissement.", "next": "c9_013_success" }
            ]
        },
        "c9_013_success": {
            "chapter": "CHAPITRE 9 : Bilan",
            "text": "Vous nagez dans l'eau froide à l'extérieur. Blackwood vous récupère en camionnette. Vous avez survécu. Le CERN est sauf. Mais Burke a les plans de l'antimatière.",
            "img_prompt": "Wet characters shivering in a van, looking at a laptop",
            "choices": [
                { "text": "Retourner à Prague.", "next": "c10_001_prague_return" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 10 : LA GUERRE DES ÉLÉMENTS (AÇORES & NEW YORK)
        // ------------------------------------------------------------------
        "c10_001_prague_return": {
            "chapter": "CHAPITRE 10 : L'Escalade",
            "text": "De retour au QG. Pas de répit. La carte s'allume. <b>3 SEPTEMBRE 2025 : AÇORES.</b> 'La montagne sous la mer se réveillera'. Tsunami.",
            "img_prompt": "Map zooming on the Atlantic Ocean, red waves simulation",
            "choices": [
                { "text": "Organiser la défense.", "next": "c10_002_azores" }
            ]
        },
        "c10_002_azores": {
            "chapter": "CHAPITRE 10 : La Vague",
            "text": "Vous ne pouvez pas arrêter le séisme, mais vous pouvez atténuer la vague. Vous déployez des drones sous-marins pour créer des contre-ondes. C'est une victoire partielle. Des dégâts, mais pas d'apocalypse.",
            "img_prompt": "Giant wave breaking against a sea wall, drones in the water",
            "choices": [
                { "text": "La prochaine cible : New York.", "next": "c10_003_ny_blackout" }
            ]
        },
        "c10_003_ny_blackout": {
            "chapter": "CHAPITRE 10 : Blackout",
            "text": "<b>1 JANVIER 2026 : NEW YORK.</b> Burke veut plonger la côte Est dans le noir. Il attaque la fréquence du réseau (60Hz). Vous devez aller à Grand Central Terminal.",
            "img_prompt": "Times Square at night, lights flickering",
            "choices": [
                { "text": "Infiltrer les tunnels de Grand Central.", "next": "c10_004_grand_central" }
            ]
        },
        "c10_004_grand_central": {
            "chapter": "CHAPITRE 10 : Le Cœur",
            "text": "Avec Blackwood, vous trouvez le vieux câble maître. Keller vous guide. Vous devez injecter un faux signal pour tromper le virus de Burke.",
            "img_prompt": "Dusty tunnels under NYC, old cables, rat running",
            "choices": [
                { "text": "Injecter le signal à 59.98 Hz.", "next": "c10_005_success_ny" },
                { "text": "Injecter le signal à 60.02 Hz.", "next": "c10_006_fail_ny" }
            ]
        },
        "c10_006_fail_ny": {
            "chapter": "GAME OVER",
            "text": "Erreur de calcul. Le réseau s'effondre. New York est dans le noir. Émeutes. Fin de la mission.",
            "img_prompt": "New York skyline going dark instantly",
            "choices": [
                { "text": "Recommencer le piratage", "next": "c10_004_grand_central" }
            ]
        },
        "c10_005_success_ny": {
            "chapter": "CHAPITRE 10 : Victoire",
            "text": "Minuit sonne. Les lumières vacillent... et restent allumées ! Le virus s'est neutralisé. Burke a perdu cette manche.",
            "img_prompt": "Fireworks over NYC, lights shining bright",
            "choices": [
                { "text": "Retourner à Prague pour la suite.", "next": "c11_001_years_later" }
            ]
        },
        // ------------------------------------------------------------------
        // CHAPITRE 11 : LES ABYSSES (2027)
        // ------------------------------------------------------------------
        "c11_001_years_later": {
            "chapter": "CHAPITRE 11 : La Guerre d'Usure",
            "text": "<b>10 Juillet 2027.</b><br><br>Deux ans ont passé. Vous avez déjoué la 'Rouille du Blé' en utilisant des éoliennes pour pulvériser le virus. Mais Burke ne s'arrête jamais. Nouvelle prophétie : 'Quand les continents cesseront de se parler'.",
            "img_prompt": "Montage of newspaper headlines showing averted disasters, tired team in Prague",
            "choices": [
                { "text": "Analyser la menace.", "next": "c11_002_threat" }
            ]
        },
        "c11_002_threat": {
            "chapter": "CHAPITRE 11",
            "text": "Les câbles sous-marins. L'épine dorsale d'Internet. Burke a déployé des drones 'Mégalodons' pour les couper. S'il réussit, le monde devient sourd et aveugle. Son réseau privé prendra le relais.",
            "img_prompt": "Map of underwater cables in the Atlantic, red warning lights",
            "choices": [
                { "text": "Lancer la mission 'Orphée' (Atlantique Nord).", "next": "c11_003_sub" }
            ]
        },
        "c11_003_sub": {
            "chapter": "CHAPITRE 11 : La Fosse",
            "text": "Vous êtes à bord du navire Sophia. David pilote le ROV (robot sous-marin) à 7000m de fond. Keller surveille les signaux. Un drone Mégalodon approche du câble 'Amitié'.",
            "img_prompt": "Underwater drone with a giant claw approaching a cable on the ocean floor",
            "choices": [
                { "text": "Attaquer le drone avec le bras du ROV.", "next": "c11_004_attack" },
                { "text": "Tenter un brouillage IEM.", "next": "c11_005_iem" }
            ]
        },
        "c11_004_attack": {
            "chapter": "ÉCHEC",
            "text": "Le Mégalodon est trop rapide. Il évite le ROV et sectionne le câble. L'Europe perd 40% de sa connexion. C'est un désastre.",
            "img_prompt": "Sparks underwater, cable cut",
            "choices": [
                { "text": "Recommencer l'interception", "next": "c11_003_sub" }
            ]
        },
        "c11_005_iem": {
            "chapter": "CHAPITRE 11 : La Ruse",
            "text": "L'IEM ne suffit pas. Il y en a trop. Rébecca a une idée : 'Le vieux câble télégraphique de 1858 est juste à côté ! Keller, amplifie son signal fantôme !'",
            "img_prompt": "Old copper cable lying in the sand next to a modern fiber optic one",
            "choices": [
                { "text": "Leurrer le drone vers le vieux câble.", "next": "c11_006_lure" }
            ]
        },
        "c11_006_lure": {
            "chapter": "CHAPITRE 11 : Victoire",
            "text": "Le drone mord à l'hameçon. Il attaque le vieux câble en cuivre. Ses pinces se brisent sur le métal solide. Le câble moderne est sauf. Mais David détecte une substance : un bactériophage mangeur de plastique.",
            "img_prompt": "Drone broken on the ocean floor, releasing a black goo",
            "choices": [
                { "text": "Analyser le poison.", "next": "c11_007_poison" }
            ]
        },
        "c11_007_poison": {
            "chapter": "CHAPITRE 11 : Le Contre-Poison",
            "text": "Le poison va ronger l'isolant. Rébecca ordonne : 'Inversez la polarité du câble !'. Le choc électrique repousse les bactéries. L'océan est sauvé. Pour l'instant.",
            "img_prompt": "Electric pulse rippling through the water",
            "choices": [
                { "text": "Retourner à la surface.", "next": "c12_001_rotterdam" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 12 : LA PESTE DE L'ACIER (2030)
        // ------------------------------------------------------------------
        "c12_001_rotterdam": {
            "chapter": "CHAPITRE 12 : Rotterdam",
            "text": "<b>Port de Rotterdam, 18 Avril 2030.</b><br><br>La 'Peste de l'Acier'. Burke a contaminé de la ferraille avec une bactérie qui fragilise le métal à la fusion. Le navire 'Iron Queen' va décharger sa cargaison maudite.",
            "img_prompt": "Rainy night at a massive industrial port, cranes and containers",
            "choices": [
                { "text": "Infiltrer le quai déguisés en douaniers.", "next": "c12_002_docks" }
            ]
        },
        "c12_002_docks": {
            "chapter": "CHAPITRE 12 : Le Rayon",
            "text": "David et Miriam sont sur une barge avec un canon à micro-ondes pour stériliser la ferraille pendant le déchargement. Vous (Rébecca) et Keller surveillez depuis le quai.",
            "img_prompt": "Sniper-like device pointing at a crane lifting scrap metal",
            "choices": [
                { "text": "Donner le signal de tir.", "next": "c12_003_fire" }
            ]
        },
        "c12_003_fire": {
            "chapter": "CHAPITRE 12 : Repérés",
            "text": "Le rayon fonctionne, mais la chaleur résiduelle alerte les capteurs thermiques des Veilleurs. Le superviseur sur le quai repère la barge. Il tourne la grue vers David et Miriam !",
            "img_prompt": "Giant crane swinging a load of metal towards a small boat",
            "choices": [
                { "text": "Crier à David de sauter.", "next": "c12_004_jump" }
            ]
        },
        "c12_004_jump": {
            "chapter": "CHAPITRE 12 : Chaos",
            "text": "La ferraille écrase la barge. Ils sautent à l'eau juste à temps. Keller déclenche l'alarme incendie pour créer la confusion. Le superviseur s'enfuit, mais il fait tomber sa tablette.",
            "img_prompt": "Boat exploding under metal, alarm lights flashing",
            "choices": [
                { "text": "Courir récupérer la tablette.", "next": "c12_005_tablet" }
            ]
        },
        "c12_005_tablet": {
            "chapter": "CHAPITRE 12 : La Preuve",
            "text": "Un docker vous bloque. Keller utilise un chariot élévateur pour faire diversion. Vous chopez la tablette. Elle contient toute la liste des navires contaminés.",
            "img_prompt": "Hand grabbing a rugged tablet from a puddle",
            "choices": [
                { "text": "Fuir et publier les données.", "next": "c12_006_leak" }
            ]
        },
        "c12_006_leak": {
            "chapter": "CHAPITRE 12 : Victoire",
            "text": "Avec les preuves, vous forcez la mise en quarantaine mondiale de l'acier de Burke. Son plan s'effondre. Mais il devient plus dangereux.",
            "img_prompt": "News headlines: 'STEEL SCANDAL', 'BURKE INDUSTRIES UNDER INVESTIGATION'",
            "choices": [
                { "text": "Se préparer pour la suite (2032).", "next": "c13_001_space" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 13 : LE CIEL TOMBE (2032)
        // ------------------------------------------------------------------
        "c13_001_space": {
            "chapter": "CHAPITRE 13 : Syndrome de Kessler",
            "text": "<b>22 Mars 2032.</b><br><br>Burke attaque l'espace. Il veut détruire les satellites pour imposer son propre réseau. Il va provoquer une réaction en chaîne de débris spatiaux.",
            "img_prompt": "Earth orbit filled with exploding satellites",
            "choices": [
                { "text": "Identifier la cible initiale.", "next": "c13_002_target" }
            ]
        },
        "c13_002_target": {
            "chapter": "CHAPITRE 13",
            "text": "Il va pousser un vieux débris russe sur un satellite Iridium. L'impact créera un nuage qui frappera... Envisat. Un bus de 8 tonnes. Si Envisat explose, c'est la fin de l'ère spatiale.",
            "img_prompt": "Diagram of orbital mechanics showing collision course",
            "choices": [
                { "text": "Pirater le satellite de Burke (Impossible).", "next": "c13_003_fail_hack" },
                { "text": "Déplacer Envisat.", "next": "c13_004_move_envisat" }
            ]
        },
        "c13_003_fail_hack": {
            "chapter": "IMPASSE",
            "text": "Son cryptage est quantique. Impossible de passer. Le temps presse.",
            "choices": [
                { "text": "Essayer de bouger la cible (Envisat).", "next": "c13_004_move_envisat" }
            ]
        },
        "c13_004_move_envisat": {
            "chapter": "CHAPITRE 13 : Kiruna",
            "text": "Vous infiltrez la station de l'ESA en Suède. Keller doit réactiver les propulseurs d'un satellite mort depuis 10 ans. T-moins 2 minutes.",
            "img_prompt": "Hacker typing furiously, screen showing 'CONNECTION ESTABLISHED'",
            "choices": [
                { "text": "Allumer les propulseurs.", "next": "c13_005_dodge" }
            ]
        },
        "c13_005_dodge": {
            "chapter": "CHAPITRE 13 : L'Esquive",
            "text": "Dans l'espace, le géant mort crache une bouffée de gaz. Il bouge de 50 mètres. Le nuage de débris passe à côté. Silence radio. Puis... 'Trajectoire claire'. Vous avez sauvé le ciel.",
            "img_prompt": "Satellite drifting slowly as debris flies past it",
            "choices": [
                { "text": "Retour au QG.", "next": "c14_001_svalbard_discovery" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 14 : SVALBARD - LE CŒUR DU DRAGON (2033)
        // ------------------------------------------------------------------
        "c14_001_svalbard_discovery": {
            "chapter": "CHAPITRE 14 : L'Indice",
            "text": "<b>Prague, Octobre 2033.</b><br><br>Vous avez gagné toutes les batailles, mais Burke est toujours là. Rébecca a une révélation. 'Il ne faut pas chercher ses armes, mais son architecture.' En analysant les flux de données, tout converge vers un point.",
            "img_prompt": "Holographic globe with lines converging on the Arctic",
            "choices": [
                { "text": "Le Pôle Nord ?", "next": "c14_002_pole" },
                { "text": "Svalbard (Norvège).", "next": "c14_003_seed_vault" }
            ]
        },
        "c14_002_pole": {
            "chapter": "IMPASSE",
            "text": "Il n'y a rien au pôle géographique. Regardez les données magnétiques.",
            "choices": [
                { "text": "Svalbard.", "next": "c14_003_seed_vault" }
            ]
        },
        "c14_003_seed_vault": {
            "chapter": "CHAPITRE 14 : L'Arche",
            "text": "La Réserve Mondiale de Semences. L'endroit le plus sûr du monde. Burke a creusé SON bunker juste en dessous. Le 'Projet Arca'. C'est là qu'il se cache. C'est là qu'est l'arme finale.",
            "img_prompt": "Concrete entrance of the seed vault protruding from the snow",
            "choices": [
                { "text": "Lancer l'Opération Icebreaker.", "next": "c14_004_mission_start" }
            ]
        },
        "c14_004_mission_start": {
            "chapter": "CHAPITRE 14 : Infiltration Polaire",
            "text": "Vous arrivez en brise-glace. Keller et Blackwood neutralisent les gardes extérieurs. Rébecca et David entrent par les conduits géothermiques. Il fait -20°C.",
            "img_prompt": "Team in white tactical gear approaching the bunker in a blizzard",
            "choices": [
                { "text": "Placer la charge explosive sur le mur du serveur.", "next": "c14_005_breach" }
            ]
        },
        "c14_005_breach": {
            "chapter": "CHAPITRE 14 : Le Cœur de l'Hydre",
            "text": "BOUM. Le mur cède. Vous entrez dans la salle des serveurs. Rébecca se connecte. Elle voit tout. GENESIS-12. Ce n'est pas une bombe. C'est un satellite qui doit lancer un virus mortel.",
            "img_prompt": "Server room bathed in blue light, Rebecca downloading data",
            "choices": [
                { "text": "Télécharger les plans.", "next": "c14_006_trap" }
            ]
        },
        "c14_006_trap": {
            "chapter": "CHAPITRE 14 : Le Piège",
            "text": "ALARME. 'Intrusion détectée. Autodestruction activée.' Burke savait que vous viendriez. Le bunker commence à s'effondrer. La glace craque.",
            "img_prompt": "Red lights flashing, ceiling cracking, ice falling",
            "choices": [
                { "text": "Fuir avec le disque dur.", "next": "c14_007_blackwood_sacrifice" }
            ]
        },
        "c14_007_blackwood_sacrifice": {
            "chapter": "CHAPITRE 14 : L'Adieu",
            "text": "Un bloc de glace bloque la sortie. Blackwood le retient. 'Partez ! C'est mon tour.' Il vous pousse dehors. Le bloc tombe. Blackwood disparaît sous la glace. Vous êtes dehors, vivants, avec les plans. Mais le prix était terrible.",
            "img_prompt": "Blackwood holding a heavy door, looking back one last time",
            "choices": [
                { "text": "Retourner au navire.", "next": "c15_001_jerusalem_intro" }
            ]
        },
        // ------------------------------------------------------------------
        // CHAPITRE 15 : L'ULTIMATUM (2034)
        // ------------------------------------------------------------------
        "c15_001_jerusalem_intro": {
            "chapter": "CHAPITRE 15 : La Cité Sainte",
            "text": "<b>Jérusalem, 21 Mars 2034.</b><br><br>Vous êtes arrivés. L'équipe (Rébecca, Keller, David, Miriam) est installée dans la suite présidentielle du King David Hotel, transformée en QG. Le Dôme du Rocher brille au loin.",
            "img_prompt": "View of the Dome of the Rock from a high balcony, servers and cables on the floor",
            "choices": [
                { "text": "Scanner les fréquences.", "next": "c15_002_scan" }
            ]
        },
        "c15_002_scan": {
            "chapter": "CHAPITRE 15",
            "text": "Miriam capte un signal. 'La Pierre Angulaire... elle émet. Une onde pure.' Soudain, tous les écrans du monde s'éteignent. Le visage de Nathanaël Burke apparaît.",
            "img_prompt": "Burke's face on every screen in Times Square, Tokyo, and the hotel room",
            "choices": [
                { "text": "Écouter le message.", "next": "c15_003_ultimatum" }
            ]
        },
        "c15_003_ultimatum": {
            "chapter": "CHAPITRE 15 : Genesis-12",
            "text": "'L'humanité est une expérience ratée. Elle doit être réinitialisée.' Burke révèle le satellite Genesis-12. Ce n'est pas un virus. C'est de l'antimatière. Un micro-trou noir qui va stériliser la Terre.",
            "img_prompt": "Satellite in orbit opening bay doors, glowing antimatter containment field",
            "choices": [
                { "text": "Tenter une cyber-attaque désespérée.", "next": "c15_004_hack_fail" },
                { "text": "Chercher une solution dans les manuscrits.", "next": "c15_005_epiphany" }
            ]
        },
        "c15_004_hack_fail": {
            "chapter": "IMPASSE",
            "text": "Keller tape comme un fou. 'Accès refusé'. Burke rit à l'écran. 'Ma technologie est divine, Dr Shepherd.' Il a gagné sur le terrain numérique.",
            "img_prompt": "Red 'ACCESS DENIED' screens everywhere",
            "choices": [
                { "text": "Chercher une autre voie.", "next": "c15_005_epiphany" }
            ]
        },
        "c15_005_epiphany": {
            "chapter": "CHAPITRE 15 : La Musique du Monde",
            "text": "Rébecca se souvient du manuscrit du Vatican : 'De Musica Mundana'. La Terre chante. L'Amulette de Nabonide n'est pas une clé... c'est un diapason ! 'On ne doit pas détruire l'arme. On doit la faire chanter.'",
            "img_prompt": "Close up of the bronze amulet vibrating",
            "choices": [
                { "text": "Le Plan : Utiliser la Pierre Angulaire comme amplificateur.", "next": "c15_006_plan" }
            ]
        },
        "c15_006_plan": {
            "chapter": "CHAPITRE 15 : La Division",
            "text": "Il faut se séparer. Rébecca et Miriam doivent aller au Dôme du Rocher poser l'amulette. Keller et David restent à l'hôtel pour moduler le signal.",
            "img_prompt": "Team splitting up, grabbing gear",
            "choices": [
                { "text": "Foncer au Dôme (Rébecca).", "next": "c15_007_dome_run" }
            ]
        },
        "c15_007_dome_run": {
            "chapter": "CHAPITRE 15",
            "text": "Les rues sont paniquées. Vous arrivez sur l'Esplanade. Vous entrez dans le Dôme. La roche sacrée est là. Vous posez l'amulette.",
            "img_prompt": "Woman placing a glowing artifact on a rugged rock inside a golden dome",
            "choices": [
                { "text": "Donner le signal à Keller.", "next": "c15_008_transmission" }
            ]
        },
        "c15_008_transmission": {
            "chapter": "CHAPITRE 15 : La Résonance",
            "text": "Keller envoie la modulation. David pousse la puissance. L'amulette vibre. La Pierre répond. Un faisceau de pure information jaillit vers le ciel. Invisible à l'œil, aveuglant pour les capteurs.",
            "img_prompt": "Beam of light shooting up from Jerusalem into space",
            "choices": [
                { "text": "Regarder le ciel.", "next": "c16_001_impact" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 16 : LA TRANSMUTATION & LA CHUTE
        // ------------------------------------------------------------------
        "c16_001_impact": {
            "chapter": "CHAPITRE 16 : Le Miracle",
            "text": "Le signal frappe le satellite. Burke ordonne de tirer, mais ses lasers traversent le faisceau. La résonance atteint l'antimatière. Elle ne détruit pas. Elle transmute.",
            "img_prompt": "Satellite turning into a giant flower of pure light in space",
            "choices": [
                { "text": "Admirer la nouvelle étoile.", "next": "c16_002_nova" }
            ]
        },
        "c16_002_nova": {
            "chapter": "CHAPITRE 16",
            "text": "Une nova silencieuse éclaire la nuit. E=mc². La matière devient lumière. Pas de radiation. Juste de la beauté. Le monde entier regarde, ébahi.",
            "img_prompt": "Crowds in streets looking up in awe at a bright light",
            "choices": [
                { "text": "Et Burke ?", "next": "c16_003_burke_fall" }
            ]
        },
        "c16_003_burke_fall": {
            "chapter": "CHAPITRE 16 : L'Erreur Système",
            "text": "Le satellite était l'horloge maîtresse du cryptage de Burke. Sans signal, son système passe en 'Maintenance d'Urgence'. Il ouvre une porte dérobée pendant 60 secondes.",
            "img_prompt": "Red screens turning green with 'SYSTEM UNLOCKED'",
            "choices": [
                { "text": "Keller lance l'assaut final.", "next": "c16_004_hack_complete" }
            ]
        },
        "c16_004_hack_complete": {
            "chapter": "CHAPITRE 16 : La Révélation",
            "text": "Keller vole tout. Comptes bancaires, preuves, noms. Il diffuse tout sur Internet. L'empire de Burke s'effondre en direct. Interpol défonce la porte de son bunker.",
            "img_prompt": "Nathaniel Burke arrested in his bunker, looking defeated",
            "choices": [
                { "text": "C'est fini.", "next": "c17_001_epilogue_start" }
            ]
        },

        // ------------------------------------------------------------------
        // ÉPILOGUE : 2074
        // ------------------------------------------------------------------
        "c17_001_epilogue_start": {
            "chapter": "ÉPILOGUE : L'Aube",
            "text": "<b>Jérusalem, 40 ans plus tard.</b><br><br>Rébecca est une vieille dame aux cheveux d'argent. Elle est assise sur l'Esplanade, devenue un jardin de paix. Le monde a changé. Le 'Millénaire' n'est pas un royaume magique, c'est un choix collectif.",
            "img_prompt": "Old woman sitting on a bench in a lush garden near the Dome of the Rock",
            "choices": [
                { "text": "Quelqu'un approche.", "next": "c17_002_galloway" }
            ]
        },
        "c17_002_galloway": {
            "chapter": "ÉPILOGUE : Rédemption",
            "text": "C'est Michael Galloway. Il a passé sa vie à réparer ses erreurs. Il sourit. 'Tu avais raison, Rébecca. Le secret n'était pas la fin. C'était le commencement.'",
            "img_prompt": "Old priest in simple clothes shaking hands with Rebecca",
            "choices": [
                { "text": "Regarder l'olivier.", "next": "c17_003_tree" }
            ]
        },
        "c17_003_tree": {
            "chapter": "FIN",
            "text": "Des enfants jouent autour d'un olivier millénaire qui a refleuri. Rébecca ferme les yeux. Elle entend la voix de son père : 'Le millénaire n'est pas un lieu. C'est un choix.'<br><br>Merci d'avoir joué.",
            "img_prompt": "Children playing around a glowing olive tree, peaceful atmosphere",
            "choices": [
                { "text": "Recommencer l'aventure", "next": "start" }
            ]
        }
    }
};

