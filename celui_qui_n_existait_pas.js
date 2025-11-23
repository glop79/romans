window.GAME_DATA = {
    "title": "CELUI QUI N'EXISTAIT PAS",
    "author": "Franck Platon - Adaptation Interactive",
    "nodes": {
        // ------------------------------------------------------------------
        // INTRODUCTION & MENU
        // ------------------------------------------------------------------
        "start": {
            "chapter": "LA FORTERESSE INVISIBLE",
            "text": "Vous êtes Hélène Sorel. Mère, graphiste, et gardienne d'une forteresse invisible. Votre fille, Chloé, 8 ans, joue en ligne. Votre fils, Lucas, est un adolescent silencieux.<br><br>Ce matin, tout semble normal. Mais le silence est trompeur.<br><br>Objectif : Protéger vos enfants à tout prix.",
            "img_prompt": "Cinematic shot of a worried mother standing in a dark hallway looking at a glowing bedroom door",
            "choices": [
                { "text": "Commencer la journée (Vérifier la maison)", "next": "1_morning_routine" },
                { "text": "Consulter le logiciel 'Guardian Angel'", "next": "1_check_software" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 1 : UNE MÈRE SURPROTECTRICE
        // ------------------------------------------------------------------
        "1_morning_routine": {
            "chapter": "Le Rituel",
            "text": "Il est 6h00. Le réveil n'a pas sonné. Vous vous levez. Le silence règne. Vous faites votre ronde. Porte d'entrée : fermée à double tour. Fenêtres : verrouillées.",
            "img_prompt": "Close up of a hand checking a door lock in the dark",
            "choices": [
                { "text": "Vérifier la chambre de Chloé.", "next": "1_check_chloe" },
                { "text": "Vérifier la chambre de Lucas.", "next": "1_check_lucas" },
                { "text": "Aller au salon vérifier l'ordinateur.", "next": "1_check_software" }
            ]
        },
        "1_check_lucas": {
            "chapter": "Lucas",
            "text": "Lucas dort, enfoui sous sa couette. Une respiration d'adolescent, lourde et régulière. Rien à signaler ici. Il est dans sa bulle.",
            "img_prompt": "Teenager sleeping in a messy room with posters",
            "choices": [
                { "text": "Aller vérifier l'ordinateur familial.", "next": "1_check_software" }
            ]
        },
        "1_check_software": {
            "chapter": "Guardian Angel 4.0",
            "text": "Vous vous asseyez devant l'écran. Mot de passe complexe. Le tableau de bord s'ouvre. Temps de connexion de Chloé : 2h12 hier. Sites : École, Jeux. Rien de rouge. Tout est vert.",
            "img_prompt": "Computer screen showing a parental control dashboard with green checkmarks",
            "choices": [
                { "text": "Analyser les logs de conversation.", "next": "1_logs_clean" },
                { "text": "Se rassurer et aller faire du café.", "next": "1_coffee" }
            ]
        },
        "1_logs_clean": {
            "chapter": "Le Vide Rassurant",
            "text": "Aucun mot-clé suspect. Aucune interaction non autorisée. Le logiciel dit que tout va bien. Vous vous détendez. La forteresse tient bon.",
            "img_prompt": "Screen showing 'NO THREAT DETECTED'",
            "choices": [
                { "text": "Aller faire du café.", "next": "1_coffee" }
            ]
        },
        "1_coffee": {
            "chapter": "L'Odeur du Matin",
            "text": "Cuisine. Odeur de café. Bruit familier. Mais vous entendez autre chose. Des sons électroniques venant de la chambre de Chloé. Elle joue déjà.",
            "img_prompt": "Coffee machine brewing, sun rising through kitchen window",
            "choices": [
                { "text": "Aller la voir doucement.", "next": "1_chloe_room" },
                { "text": "L'appeler depuis la cuisine.", "next": "1_call_chloe" }
            ]
        },
        "1_call_chloe": {
            "chapter": "Pas de Réponse",
            "text": "« Chloé ? » Aucune réponse. Le jeu couvre votre voix. Ou elle est trop absorbée.",
            "img_prompt": "Empty hallway leading to a closed door with light coming from under it",
            "choices": [
                { "text": "Aller la voir.", "next": "1_chloe_room" }
            ]
        },
        "1_chloe_room": {
            "chapter": "Le Monde de Chloé",
            "text": "Pénombre. Écran lumineux. Chloé tape frénétiquement. Un monde de dragons et de couleurs. « On a réussi ! » crie-t-elle.",
            "img_prompt": "Little girl playing on a computer in a dark room, colorful screen reflection on her face",
            "choices": [
                { "text": "« On ? » Demander avec qui elle joue.", "next": "1_who_is_on" },
                { "text": "Lui apporter son petit-déjeuner.", "next": "1_breakfast_room" }
            ]
        },
        "1_breakfast_room": {
            "chapter": "Diversion",
            "text": "Vous posez l'assiette. Elle ne vous regarde pas. « Maxime a dit que je dessinais bien. » Le nom est lâché.",
            "img_prompt": "Plate of toast on a desk next to drawings of dragons",
            "choices": [
                { "text": "« Qui est Maxime ? »", "next": "1_who_is_maxime" }
            ]
        },
        "1_who_is_on": {
            "chapter": "L'Ami",
            "text": "« Avec mes amis. Maxime dit que je suis forte. » Le nom claque comme un fouet. Maxime.",
            "img_prompt": "Close up of Hélène's worried face",
            "choices": [
                { "text": "Demander qui est Maxime (Calme).", "next": "1_who_is_maxime" },
                { "text": "S'énerver tout de suite.", "next": "1_angry_mom" }
            ]
        },
        "1_angry_mom": {
            "chapter": "Erreur Tactique",
            "text": "« C'est qui ce garçon ? Tu ne parles pas aux inconnus ! » Chloé se ferme. « C'est juste un ami du jeu ! Laisse-moi ! »",
            "img_prompt": "Girl pouting and turning away from her mother",
            "choices": [
                { "text": "Reculer pour ne pas braquer.", "next": "1_retreat" }
            ]
        },
        "1_who_is_maxime": {
            "chapter": "L'Inconnu",
            "text": "« C'est un ami du jeu. Il connaît tous les secrets. » Elle parle de lui avec une familiarité qui vous glace. Ce n'est pas un enfant de l'école.",
            "img_prompt": "Chat window on screen with username 'Maxime'",
            "choices": [
                { "text": "Minimiser pour l'instant.", "next": "1_retreat" },
                { "text": "Insister pour voir le profil.", "next": "1_force_check" }
            ]
        },
        "1_force_check": {
            "chapter": "Mur de Silence",
            "text": "Chloé ferme la fenêtre de chat. « T'es pas cool maman. » Elle éteint l'écran. Vous avez perdu l'opportunité.",
            "img_prompt": "Black laptop screen reflection",
            "choices": [
                { "text": "Sortir.", "next": "1_retreat" }
            ]
        },
        "1_retreat": {
            "chapter": "Repli Stratégique",
            "text": "Vous retournez à la cuisine. Maxime. Ce nom tourne en boucle. Vous devez en savoir plus. Mais ce soir.",
            "img_prompt": "Hélène drinking coffee alone in the kitchen, looking thoughtful",
            "choices": [
                { "text": "Avancer jusqu'au soir (Le Coucher).", "next": "1_bedtime" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 2 : MURMURES DANS LA NUIT
        // ------------------------------------------------------------------
        "1_bedtime": {
            "chapter": "Le Murmure",
            "text": "Le soir. Vous lisez une histoire. Chloé s'endort. « Bonne nuit maman... Dis bonne nuit à Maxime aussi. »",
            "img_prompt": "Mother tucking her daughter in bed, warm night light",
            "choices": [
                { "text": "Sortir en silence, le cœur battant.", "next": "2_insomnia" }
            ]
        },
        "2_insomnia": {
            "chapter": "Insomnie",
            "text": "Impossible de dormir. Vous errez dans le salon. Puis vous entendez un bruit. Un chuchotement. Venant de la chambre de Chloé.",
            "img_prompt": "Dark hallway with a sliver of light coming from a door",
            "choices": [
                { "text": "Écouter à la porte.", "next": "2_listen_door" },
                { "text": "Entrer brusquement.", "next": "2_barge_in" }
            ]
        },
        "2_barge_in": {
            "chapter": "Confrontation",
            "text": "Vous ouvrez la porte. Chloé sursaute et ferme son ordinateur. « Tu m'espionnes ? » Elle crie. Vous ne saurez pas ce qu'elle disait.",
            "img_prompt": "Girl looking angry in bed holding a laptop shut",
            "choices": [
                { "text": "Confisquer l'ordinateur.", "next": "2_confiscate" }
            ]
        },
        "2_listen_door": {
            "chapter": "La Conversation",
            "text": "Vous collez votre oreille. « ...non, elle ne sait pas. C'est notre secret. » Elle parle à quelqu'un. Une vraie conversation. Intime.",
            "img_prompt": "Ear pressed against a wooden door, tense atmosphere",
            "choices": [
                { "text": "Attendre qu'elle dorme pour agir.", "next": "2_steal_laptop" }
            ]
        },
        "2_steal_laptop": {
            "chapter": "Vol Nocturne",
            "text": "Silence. Elle dort. Vous entrez comme une voleuse. Vous prenez l'ordinateur. Vous allez au salon.",
            "img_prompt": "Woman sneaking out of a child's room with a laptop",
            "choices": [
                { "text": "Vérifier Guardian Angel.", "next": "2_check_guardian_fail" }
            ]
        },
        "2_check_guardian_fail": {
            "chapter": "L'Aveuglement",
            "text": "Vous ouvrez les logs. RIEN. « Aucune activité détectée ». « Aucune conversation ». Le logiciel est aveugle. Il a contourné vos défenses.",
            "img_prompt": "Screen showing 'NO ACTIVITY' logs despite the earlier noise",
            "choices": [
                { "text": "C'est un expert. Je dois devenir une experte.", "next": "3_investigation_start" }
            ]
        },
        "2_confiscate": {
            "chapter": "Guerre Ouverte",
            "text": "Vous prenez l'ordi de force. Chloé pleure. « Je te déteste ! » Vous allez au salon. Vous vérifiez les logs : VIDES.",
            "img_prompt": "Crying child face, angry mother walking away",
            "choices": [
                { "text": "Je dois comprendre comment il fait.", "next": "3_investigation_start" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 3 : PREMIÈRE INVESTIGATION (LA MÈRE DEVIENT ESPIONNE)
        // ------------------------------------------------------------------
        "3_investigation_start": {
            "chapter": "Le Terrier du Lapin",
            "text": "Vous êtes seule. La police ne vous croira pas. Vous tapez : « Comment savoir à qui parle mon enfant ? ». Vous découvrez l'OSINT.",
            "img_prompt": "Woman typing furiously on computer at night, coffee cups piling up",
            "choices": [
                { "text": "Se renseigner sur les logiciels espions (SpectreKey).", "next": "3_spectrekey" },
                { "text": "Fouiller manuellement l'ordinateur de Chloé.", "next": "3_manual_search" }
            ]
        },
        "3_manual_search": {
            "chapter": "Nettoyage",
            "text": "Historique effacé. Cache vidé. Il lui a appris à nettoyer ses traces. C'est un professionnel.",
            "img_prompt": "Browser history window showing 'Empty'",
            "choices": [
                { "text": "Il faut un mouchard. Chercher SpectreKey.", "next": "3_spectrekey" }
            ]
        },
        "3_spectrekey": {
            "chapter": "Franchir la Ligne",
            "text": "Vous trouvez 'SpectreKey'. Un keylogger invisible. C'est illégal. C'est une trahison. C'est nécessaire.",
            "img_prompt": "Software purchase page 'SpectreKey - Total Control'",
            "choices": [
                { "text": "Acheter et installer sur le PC de Chloé.", "next": "4_install_trap" },
                { "text": "Hésiter (Morale).", "next": "3_hesitate_moral" }
            ]
        },
        "3_hesitate_moral": {
            "chapter": "Doute",
            "text": "Vous regardez la porte de sa chambre. Si vous ne faites rien, vous la perdez. Si vous le faites, vous la trahissez.",
            "img_prompt": "Mother looking at closed door with sadness",
            "choices": [
                { "text": "Le faire pour sa sécurité.", "next": "4_install_trap" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 4 : LE SPECTRE DANS LA MACHINE
        // ------------------------------------------------------------------
        "4_install_trap": {
            "chapter": "Le Piège",
            "text": "Vous installez le logiciel pendant qu'elle est à l'école. Invisible. Démarrage automatique. Maintenant, vous attendez.",
            "img_prompt": "Loading bar 'Installation Complete', hidden icon",
            "choices": [
                { "text": "Attendre le soir.", "next": "4_surveillance_live" }
            ]
        },
        "4_surveillance_live": {
            "chapter": "Voyeurisme",
            "text": "17h00. Alerte sur votre téléphone. Chloé est connectée. Vous ouvrez votre écran. Vous voyez ce qu'elle tape en direct.",
            "img_prompt": "Split screen: Chloé typing in her room / Hélène watching on her phone in the kitchen",
            "choices": [
                { "text": "Lire la conversation.", "next": "4_the_chat" }
            ]
        },
        "4_the_chat": {
            "chapter": "L'Endoctrinement",
            "text": "Maxime : « Ta mère ne te comprend pas. Elle veut te garder en cage. »<br>Chloé : « C'est vrai. Elle m'énerve. »<br>Maxime : « Bientôt, je viendrai te chercher. C'est notre secret. »",
            "img_prompt": "Chat logs scrolling on screen, menacing text",
            "choices": [
                { "text": "Paniquer et couper Internet.", "next": "4_cut_internet" },
                { "text": "Continuer à regarder pour avoir plus d'infos.", "next": "4_watch_more" }
            ]
        },
        "4_watch_more": {
            "chapter": "Trop Loin",
            "text": "Maxime : « Prépare ton sac pour demain. » DEMAIN ? Vous ne pouvez plus attendre.",
            "img_prompt": "Close up of the word 'TOMORROW' on screen",
            "choices": [
                { "text": "Couper Internet brutalement.", "next": "4_cut_internet" }
            ]
        },
        "4_cut_internet": {
            "chapter": "La Rupture",
            "text": "Vous arrachez le câble de la box. Chloé sort en hurlant. « Qu'est-ce que tu as fait ?! »",
            "img_prompt": "Angry child screaming at mother holding a cable",
            "choices": [
                { "text": "L'envoyer dans sa chambre sans explication.", "next": "5_morning_gone" },
                { "text": "Essayer d'expliquer (Trop tard).", "next": "5_morning_gone" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 5 : UNE MATINÉE SANS CHLOÉ
        // ------------------------------------------------------------------
        "5_morning_gone": {
            "chapter": "Le Silence",
            "text": "Lendemain matin. 7h30. Pas de bruit. Vous toquez. Pas de réponse. Vous ouvrez.",
            "img_prompt": "Open bedroom door, empty bed perfectly made, open window",
            "choices": [
                { "text": "Entrer dans la chambre.", "next": "5_empty_room" }
            ]
        },
        "5_empty_room": {
            "chapter": "Disparition",
            "text": "Le lit est fait. La fenêtre est ouverte. Elle est partie. Son téléphone sonne dans le vide sur le bureau.",
            "img_prompt": "Curtains blowing in the wind, empty room",
            "choices": [
                { "text": "Appeler la Police (17).", "next": "6_police_interview" },
                { "text": "Chercher une lettre ou un indice d'abord.", "next": "6_search_clue" }
            ]
        },
        "6_search_clue": {
            "chapter": "Le Dessin",
            "text": "Sur le bureau, un dessin. Chloé tient la main d'une silhouette noire sans visage. En dessous : « MAXIME ».",
            "img_prompt": "Drawing of a girl holding hands with a black scribbled figure",
            "choices": [
                { "text": "Appeler la Police maintenant.", "next": "6_police_interview" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 6 : LA THÈSE DE LA FUGUE
        // ------------------------------------------------------------------
        "6_police_interview": {
            "chapter": "Scepticisme",
            "text": "Capitaine Duroc. Il regarde la chambre. Pas d'effraction. Dispute la veille. « C'est une fugue classique, Madame. Elle reviendra. »",
            "img_prompt": "Police officer taking notes, looking bored and skeptical",
            "choices": [
                { "text": "Lui montrer le dessin.", "next": "6_show_drawing" },
                { "text": "Lui parler de Maxime et du logiciel espion.", "next": "6_talk_spyware" }
            ]
        },
        "6_show_drawing": {
            "chapter": "Incompréhension",
            "text": "« Un ami imaginaire ? C'est fréquent. » Il ne voit pas la menace.",
            "img_prompt": "Officer glancing at the drawing and shrugging",
            "choices": [
                { "text": "Insister sur le danger.", "next": "6_alone" }
            ]
        },
        "6_talk_spyware": {
            "chapter": "Jugement",
            "text": "« Vous espionniez votre fille ? Ça explique la fugue. Elle s'est sentie étouffée. » Il vous juge.",
            "img_prompt": "Officer looking disapprovingly at Hélène",
            "choices": [
                { "text": "Il ne fera rien. Je suis seule.", "next": "6_alone" }
            ]
        },
        "6_alone": {
            "chapter": "Seule Contre Tous",
            "text": "Ils sont partis. Votre ex-mari vous blâme aussi. Personne ne croit au prédateur. Vous devez le trouver vous-même.",
            "img_prompt": "Hélène sitting alone on the floor of the empty room",
            "choices": [
                { "text": "Ouvrir l'ordinateur. La guerre commence.", "next": "7_osint_start" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 7 : L'ENQUÊTE OSINT
        // ------------------------------------------------------------------
        "7_osint_start": {
            "chapter": "Méthodologie",
            "text": "Vous ne cherchez plus au hasard. Vous appliquez le cycle du renseignement. 1. Objectif. 2. Collecte. 3. Analyse. Carnet noir : « QUI EST MAXIME ? »",
            "img_prompt": "Black notebook with 'WHO IS MAXIME?' written in bold",
            "choices": [
                { "text": "Chercher 'Maxime' sur Google (Trop vague).", "next": "7_google_fail" },
                { "text": "Utiliser des 'Google Dorks' (Recherche avancée).", "next": "7_dorks" }
            ]
        },
        "7_google_fail": {
            "chapter": "Bruit",
            "text": "140 millions de résultats. Impasse. Il faut affiner.",
            "img_prompt": "Screen filled with useless search results",
            "choices": [
                { "text": "Utiliser des 'Google Dorks'.", "next": "7_dorks" }
            ]
        },
        "7_dorks": {
            "chapter": "Le Scalpel",
            "text": "`\"Maxime\" AND \"gardien\" inurl:forum`. Les résultats chutent. Vous trouvez un vieux forum de jeu. Utilisateur : 'Maxime_G'.",
            "img_prompt": "Search bar with advanced operators, one relevant result highlighted",
            "choices": [
                { "text": "Analyser le profil Maxime_G.", "next": "7_profile_maxime_g" }
            ]
        },
        "7_profile_maxime_g": {
            "chapter": "La Signature",
            "text": "Profil vide. Mais un avatar : un œil labyrinthique. C'est un logo professionnel. Vous faites une recherche d'image inversée.",
            "img_prompt": "Complex geometric eye logo on screen",
            "choices": [
                { "text": "Lancer la recherche inversée.", "next": "8_vigile_securite" }
            ]
        },
        "8_vigile_securite": {
            "chapter": "Vigile Sécurité",
            "text": "Le logo appartient à une entreprise dissoute : 'Vigile Sécurité'. Fondateurs : Thomas Granger et... Sébastien Leduc.",
            "img_prompt": "Old corporate website archive showing the logo and two names",
            "choices": [
                { "text": "Enquêter sur Thomas Granger (L'Associé).", "next": "8_investigate_granger" },
                { "text": "Enquêter sur Sébastien Leduc (Le Technicien).", "next": "8_investigate_leduc" }
            ]
        },
        "8_investigate_leduc": {
            "chapter": "L'Ombre",
            "text": "Peu de traces. Un ingénieur brillant. Mais vous trouvez un rapport d'incident volé sur un serveur mal sécurisé. 'Délire messianique post-traumatique'. Il a perdu sa fille.",
            "img_prompt": "Confidential PDF document on screen",
            "choices": [
                { "text": "Noter : Leduc est le suspect principal.", "next": "9_leduc_motive" }
            ]
        },
        "8_investigate_granger": {
            "chapter": "La Cible Facile",
            "text": "Granger est public. LinkedIn, Facebook. Il aime les jeux de stratégie. Vous pouvez l'approcher.",
            "img_prompt": "Social media profile of a smiling man in a suit",
            "choices": [
                { "text": "Créer un faux profil pour lui parler.", "next": "9_social_engineering" }
            ]
        },
        
        // ------------------------------------------------------------------
        // CHAPITRE 8 : INGÉNIERIE SOCIALE
        // ------------------------------------------------------------------
        "9_social_engineering": {
            "chapter": "Noa_Lune",
            "text": "Vous devenez 'Noa_Lune', une ado fan de jeux. Vous contactez Granger sur un forum. Il mord à l'hameçon.",
            "img_prompt": "Chat window, Hélène typing carefully",
            "choices": [
                { "text": "Tisser un lien de confiance.", "next": "9_chat_progress" },
                { "text": "Poser la question sur Leduc trop tôt.", "next": "9_chat_fail" }
            ]
        },
        "9_chat_fail": {
            "chapter": "Blocage",
            "text": "Granger prend peur. « Ne me contacte plus. » Il vous bloque. Piste brûlée.",
            "img_prompt": "User has blocked you message",
            "choices": [
                { "text": "Revenir à la piste Leduc.", "next": "8_investigate_leduc" }
            ]
        },
        "9_chat_progress": {
            "chapter": "Confidences",
            "text": "Après une semaine, vous mentionnez 'Vigile'. Granger craque. « Sébastien... il est devenu fou après la mort de Lila. Il voulait 'sauver' les enfants. »",
            "img_prompt": "Chat message revealing Leduc's madness",
            "choices": [
                { "text": "Lui demander où est Leduc.", "next": "9_leduc_location_clue" }
            ]
        },
        "9_leduc_location_clue": {
            "chapter": "La Piste Russe",
            "text": "« Il est parti. À l'Est. Il disait qu'il retournait à la source. Sa femme était russe. »",
            "img_prompt": "Map of Europe scrolling to Russia",
            "choices": [
                { "text": "Chercher les liens de Leduc avec la Russie.", "next": "10_russian_connection" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 9 : LA PISTE RUSSE & LES MÉTADONNÉES
        // ------------------------------------------------------------------
        "10_russian_connection": {
            "chapter": "VKontakte",
            "text": "Vous fouillez le web russe. Vous trouvez la famille de sa femme. Et une photo. Un paysage de neige envoyé à Chloé par Maxime.",
            "img_prompt": "Photo of a birch forest in winter",
            "choices": [
                { "text": "Analyser les métadonnées de la photo.", "next": "10_exif_data" }
            ]
        },
        "10_exif_data": {
            "chapter": "GPS",
            "text": "Le fichier n'a pas été nettoyé ! Coordonnées GPS : Banlieue de Moscou. Konkovo. Vous avez une adresse.",
            "img_prompt": "Map zooming on a district in Moscow",
            "choices": [
                { "text": "Préparer le voyage.", "next": "11_departure" }
            ]
        },
        "9_leduc_motive": {
            "chapter": "Le Mobile",
            "text": "Il ne kidnappe pas pour l'argent. Il 'sauve' les enfants du monde numérique. Il crée une Arche. Chloé est sa première élue.",
            "img_prompt": "Manifesto text on a dark forum",
            "choices": [
                { "text": "Chercher où est l'Arche.", "next": "10_russian_connection" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 10 : MOSCOU (L'ACTION)
        // ------------------------------------------------------------------
        "11_departure": {
            "chapter": "Le Saut",
            "text": "Vous laissez Lucas. Vous prenez un billet pour Moscou. Vous recevez un SMS anonyme à l'aéroport : « Je t'attends. » Il sait que vous venez.",
            "img_prompt": "Airplane wing view at night, city lights below",
            "choices": [
                { "text": "Monter dans l'avion malgré tout.", "next": "12_moscow_arrival" },
                { "text": "Faire demi-tour (Abandonner Chloé).", "next": "11_game_over_coward" }
            ]
        },
        "11_game_over_coward": {
            "chapter": "GAME OVER",
            "text": "Vous rentrez chez vous. Vous ne revoyez jamais Chloé. Vous vivez avec la honte.",
            "img_prompt": "Hélène crying alone in her kitchen",
            "choices": [
                { "text": "Recommencer le choix", "next": "11_departure" }
            ]
        },
        "12_moscow_arrival": {
            "chapter": "Moscou",
            "text": "Froid. Cyrillique. Vous êtes seule. Vous avez l'adresse à Konkovo. Mais le message disait : « Parc Gorky, 15h ».",
            "img_prompt": "Red Square in the distance, grey sky, cold atmosphere",
            "choices": [
                { "text": "Aller à l'adresse de Konkovo (L'immeuble).", "next": "12_konkovo_stakeout" },
                { "text": "Aller au rendez-vous du Parc Gorky.", "next": "13_gorky_park" }
            ]
        },
        "12_konkovo_stakeout": {
            "chapter": "L'Immeuble",
            "text": "Briques rouges. Vous reconnaissez le balcon d'une photo de Chloé. Elle est là ! Mais c'est fermé. Un voisin vous regarde.",
            "img_prompt": "Red brick building, a child's toy on a balcony",
            "choices": [
                { "text": "Tenter d'entrer.", "next": "12_break_in_fail" },
                { "text": "Attendre et observer.", "next": "12_wait_and_see" }
            ]
        },
        "12_break_in_fail": {
            "chapter": "Échec",
            "text": "Vous forcez la porte. La police arrive. Leduc a des amis haut placés. Vous êtes arrêtée et expulsée. Chloé reste prisonnière.",
            "img_prompt": "Russian police car lights",
            "choices": [
                { "text": "Recommencer le choix", "next": "12_moscow_arrival" }
            ]
        },
        "12_wait_and_see": {
            "chapter": "Patience",
            "text": "Vous attendez. Leduc sort. Il part vers le Parc Gorky. Vous le suivez.",
            "img_prompt": "Man in black coat walking away in snow",
            "choices": [
                { "text": "Le suivre au Parc.", "next": "13_gorky_park" }
            ]
        },
        "13_gorky_park": {
            "chapter": "Le Jeu de Piste",
            "text": "Le parc est immense. Leduc n'est pas là. Mais vous trouvez un téléphone scotché sous un banc. Il sonne.",
            "img_prompt": "Burner phone ringing under a park bench",
            "choices": [
                { "text": "Répondre.", "next": "13_phone_riddle" }
            ]
        },
        "13_phone_riddle": {
            "chapter": "La Voix",
            "text": "« Tu es persévérante, Hélène. Mais tu cherches au mauvais endroit. Le vrai sanctuaire est loin d'ici. Viens en Sibérie. »",
            "img_prompt": "Hélène listening to phone with intense focus",
            "choices": [
                { "text": "C'est un piège. Retourner à Konkovo.", "next": "14_konkovo_trap" },
                { "text": "Prendre le train pour Novossibirsk.", "next": "15_siberia_train" }
            ]
        },
        "14_konkovo_trap": {
            "chapter": "Vide",
            "text": "L'appartement de Konkovo est vide. Ils sont partis. Vous avez raté votre chance. Il vous a baladée.",
            "img_prompt": "Empty apartment, a child's drawing left on the floor",
            "choices": [
                { "text": "Aller en Sibérie (Dernier espoir).", "next": "15_siberia_train" }
            ]
        },
        
        // ------------------------------------------------------------------
        // CHAPITRE 11 : SIBÉRIE (LE DÉNOUEMENT)
        // ------------------------------------------------------------------
        "15_siberia_train": {
            "chapter": "Le Transsibérien",
            "text": "Des jours de train. Paysage blanc infini. Vous arrivez à Akademgorodok, la cité des scientifiques. C'est là qu'il travaillait. C'est là qu'est sa fille enterrée.",
            "img_prompt": "View from train window of endless snowy forest",
            "choices": [
                { "text": "Chercher l'ancien observatoire (Indice précédent).", "next": "16_observatory" }
            ]
        },
        "16_observatory": {
            "chapter": "L'Observatoire",
            "text": "Une ruine soviétique dans la forêt. De la fumée sort de la cheminée. C'est son Arche. Vous êtes armée d'une bombe lacrymo.",
            "img_prompt": "Concrete dome structure in the middle of a snowy forest",
            "choices": [
                { "text": "Entrer discrètement.", "next": "16_confrontation" }
            ]
        },
        "16_confrontation": {
            "chapter": "Le Face à Face",
            "text": "Leduc est là. Il vous attendait. « Bienvenue dans le monde réel, Hélène. » Il n'est pas armé. Il veut vous convaincre.",
            "img_prompt": "Man sitting calm in a chair in a large circular room, screens showing surveillance",
            "choices": [
                { "text": "L'écouter (Risque de manipulation).", "next": "16_listen_monologue" },
                { "text": "L'attaquer tout de suite.", "next": "17_fight" }
            ]
        },
        "16_listen_monologue": {
            "chapter": "La Folie",
            "text": "Il parle de sauver les enfants de la toxicité. Il est convaincant. Mais vous voyez Chloé sur un écran. Elle dort, droguée. La rage vous prend.",
            "img_prompt": "Monitor showing Chloé sleeping in a cell-like room",
            "choices": [
                { "text": "Attaquer.", "next": "17_fight" }
            ]
        },
        "17_fight": {
            "chapter": "La Lutte",
            "text": "Vous utilisez le lacrymo. Il hurle. Vous le frappez avec une chaise. Il tombe. Vous cherchez la clé de la chambre.",
            "img_prompt": "Action blur, gas cloud, man falling",
            "choices": [
                { "text": "Le clavier numérique demande un mot de passe.", "next": "17_password_puzzle" }
            ]
        },
        "17_password_puzzle": {
            "chapter": "L'Énigme Finale",
            "text": "« Le nom de ta trahison. » Il parle du logiciel espion que vous avez utilisé. C'est le mot de passe.",
            "img_prompt": "Digital keypad asking for password",
            "choices": [
                { "text": "Taper 'SPECTREKEY'.", "next": "18_rescue" },
                { "text": "Taper 'MAXIME'.", "next": "17_fail_code" }
            ]
        },
        "17_fail_code": {
            "chapter": "Erreur",
            "text": "Bip rouge. Leduc se relève. Il a un couteau.",
            "img_prompt": "Man rising from floor with a knife",
            "choices": [
                { "text": "Taper 'SPECTREKEY' vite !", "next": "18_rescue" }
            ]
        },
        "18_rescue": {
            "chapter": "Libération",
            "text": "La porte s'ouvre. Chloé est là. Vous la prenez dans vos bras. Vous fuyez dans la neige. Un camionneur vous prend en stop.",
            "img_prompt": "Mother carrying child running through snow towards a road",
            "choices": [
                { "text": "Rentrer à Paris.", "next": "19_epilogue" }
            ]
        },
        "19_epilogue": {
            "chapter": "ÉPILOGUE : La Nouvelle Vie",
            "text": "Six mois plus tard. Leduc est en prison russe. Vous avez jeté les logiciels espions. Vous dessinez avec Chloé. La confiance se reconstruit, lentement.",
            "img_prompt": "Mother and daughter drawing together at a sunny kitchen table",
            "choices": [
                { "text": "Fin", "next": "start" }
            ]
        },
		        // ------------------------------------------------------------------
        // EXTENSION : L'ENQUÊTE NUMÉRIQUE DÉTAILLÉE
        // ------------------------------------------------------------------
        "7_osint_hub": {
            "chapter": "ENQUÊTE : Le Bureau",
            "text": "Vous êtes devant votre écran. La nuit est tombée. Vous avez plusieurs pistes à explorer pour comprendre qui est Maxime. Par où commencer ?",
            "img_prompt": "Computer screen with multiple browser tabs open, investigative atmosphere",
            "choices": [
                { "text": "Analyser le pseudonyme 'Maxime'.", "next": "7_search_maxime" },
                { "text": "Analyser le jeu 'Dragon's World'.", "next": "7_search_game" },
                { "text": "Chercher des cas similaires (Disparitions).", "next": "7_search_cases" },
                { "text": "Se reposer un peu (Risque de manquer des indices).", "next": "7_sleep_fail" }
            ]
        },
        "7_sleep_fail": {
            "chapter": "Cauchemar",
            "text": "Vous vous endormez sur le clavier. Vous rêvez de Chloé qui crie. Vous vous réveillez 4 heures plus tard. Vous avez perdu un temps précieux.",
            "img_prompt": "Blurred vision of a clock showing 4 AM",
            "choices": [
                { "text": "Reprendre l'enquête en panique.", "next": "7_osint_hub" }
            ]
        },
        "7_search_game": {
            "chapter": "Dragon's World",
            "text": "Le jeu est un MMORPG pour enfants. Graphismes colorés. Mais les forums regorgent de plaintes de parents. La modération est inexistante.",
            "img_prompt": "Screenshot of a colorful video game world with a chat box",
            "choices": [
                { "text": "Lire les avis négatifs.", "next": "7_game_reviews" },
                { "text": "Chercher le pseudo 'Maxime' dans les joueurs.", "next": "7_game_search_player" }
            ]
        },
        "7_game_reviews": {
            "chapter": "Les Plaintes",
            "text": "« Mon fils a été contacté par un adulte. » « Attention aux prédateurs. » Vous trouvez un nom récurrent : 'Le Gardien'.",
            "img_prompt": "Forum thread with angry parents comments",
            "choices": [
                { "text": "Noter 'Le Gardien' dans le carnet.", "next": "7_osint_hub" }
            ]
        },
        "7_game_search_player": {
            "chapter": "404 Not Found",
            "text": "Le joueur 'Maxime' n'existe pas. Il a supprimé son compte ou utilise un caractère invisible. C'est une impasse technique.",
            "choices": [
                { "text": "Retourner au menu d'enquête.", "next": "7_osint_hub" }
            ]
        },
        "7_search_cases": {
            "chapter": "Les Autres",
            "text": "Vous cherchez 'disparition enfant jeu vidéo'. Vous tombez sur le blog d'une mère, 'MamanInquiète78'. Son fils a disparu il y a 6 mois. Le ravisseur se faisait appeler 'Vigile'.",
            "img_prompt": "Blog post titled 'Where is my son?', sad atmosphere",
            "choices": [
                { "text": "Contacter cette mère.", "next": "7_contact_mom" },
                { "text": "Noter 'Vigile' et continuer.", "next": "7_osint_hub" }
            ]
        },
        "7_contact_mom": {
            "chapter": "Bouteille à la Mer",
            "text": "Vous envoyez un message privé. Pas de réponse immédiate. C'est une piste lente.",
            "choices": [
                { "text": "Retourner à l'enquête.", "next": "7_osint_hub" }
            ]
        },
        "7_search_maxime": {
            "chapter": "Le Prénom",
            "text": "Maxime. Trop commun. Mais associé à 'Gardien' ? Vous lancez un Google Dork : `\"Maxime\" AND \"Gardien\" -film -livre`.",
            "img_prompt": "Google search bar with complex operators",
            "choices": [
                { "text": "Analyser les résultats.", "next": "7_dorks_results" }
            ]
        },
        "7_dorks_results": {
            "chapter": "La Piste du Forum",
            "text": "Un vieux forum de jeu de rôle, 'Les Royaumes d'Ophir'. Un utilisateur 'Maxime_G' signait : 'Gardien des innocents perdus'.",
            "img_prompt": "Old school forum interface, dark theme",
            "choices": [
                { "text": "Ouvrir le profil de Maxime_G.", "next": "7_profile_maxime_g" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : LA VIE DE FAMILLE FRACTURÉE
        // ------------------------------------------------------------------
        "8_family_interlude": {
            "chapter": "Lucas",
            "text": "Votre fils Lucas (14 ans) sort de sa chambre. Il a faim. Il voit votre état. « Maman ? T'as dormi ? Où est Chloé ? »",
            "img_prompt": "Teenager standing in doorway looking concerned",
            "choices": [
                { "text": "Lui mentir pour le protéger.", "next": "8_lie_lucas" },
                { "text": "Lui dire la vérité partielle.", "next": "8_truth_lucas" },
                { "text": "L'ignorer et continuer l'enquête.", "next": "8_ignore_lucas" }
            ]
        },
        "8_ignore_lucas": {
            "chapter": "Froid",
            "text": "Lucas claque la porte. Vous l'avez blessé. Il pourrait faire une bêtise. (Malus relationnel)",
            "choices": [
                { "text": "Se reconcentrer.", "next": "8_vigile_securite" }
            ]
        },
        "8_lie_lucas": {
            "chapter": "Le Mensonge",
            "text": "« Elle est chez une copine. Tout va bien. » Il ne vous croit pas. « Tu mens tout le temps. »",
            "choices": [
                { "text": "Se reconcentrer.", "next": "8_vigile_securite" }
            ]
        },
        "8_truth_lucas": {
            "chapter": "L'Allié ?",
            "text": "« Elle a disparu. Je la cherche. » Lucas blêmit. « Je peux aider ? Je connais les ordis. »",
            "img_prompt": "Lucas sitting next to his mother, looking at the screen",
            "choices": [
                { "text": "Accepter son aide (Risqué mais utile).", "next": "8_lucas_help" },
                { "text": "Refuser (Trop dangereux).", "next": "8_vigile_securite" }
            ]
        },
        "8_lucas_help": {
            "chapter": "Le Hacker",
            "text": "Lucas connaît des outils que vous ignorez. Il vous montre 'Wayback Machine' pour voir les sites supprimés. C'est grâce à lui que vous trouvez l'archive de 'Vigile Sécurité'.",
            "img_prompt": "Teenager pointing at screen, mother taking notes",
            "choices": [
                { "text": "Le remercier et l'envoyer se coucher.", "next": "8_vigile_securite" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : CRÉATION DE L'AVATAR (INGÉNIERIE SOCIALE)
        // ------------------------------------------------------------------
        "9_create_avatar": {
            "chapter": "Noa_Lune",
            "text": "Pour approcher Granger, il faut un masque. Vous devez créer 'Noa_Lune', une ado crédible. Tout doit être parfait.",
            "img_prompt": "Character creation screen concept art",
            "choices": [
                { "text": "Choisir une photo volée sur Instagram (Risqué).", "next": "9_stolen_photo" },
                { "text": "Dessiner un avatar original (Vous êtes graphiste).", "next": "9_draw_avatar" }
            ]
        },
        "9_stolen_photo": {
            "chapter": "Erreur Débutante",
            "text": "Vous prenez une photo d'ado. Granger fait une recherche d'image inversée. Il vous bloque immédiatement. « Faux profil. Adieu. »",
            "img_prompt": "Screen showing 'BLOCK USER'",
            "choices": [
                { "text": "Recommencer la création (Perte de temps).", "next": "9_create_avatar" }
            ]
        },
        "9_draw_avatar": {
            "chapter": "L'Elfe",
            "text": "Vous dessinez une elfe mélancolique. C'est unique. C'est crédible. Ça prouve que 'Noa' est créative. Granger va adorer.",
            "img_prompt": "Drawing of a sad elf girl with purple eyes",
            "choices": [
                { "text": "Rédiger la biographie.", "next": "9_bio_write" }
            ]
        },
        "9_bio_write": {
            "chapter": "Le Backstory",
            "text": "Il faut une histoire. Que dites-vous ?",
            "choices": [
                { "text": "« Je suis joyeuse et j'aime les jeux ! » (Trop simple).", "next": "9_bio_happy" },
                { "text": "« Personne ne me comprend, je cherche un refuge. » (L'appât).", "next": "9_bio_sad" }
            ]
        },
        "9_bio_happy": {
            "chapter": "Invisible",
            "text": "Granger ignore les gens heureux. Il cherche les failles. Il ne répond pas.",
            "choices": [
                { "text": "Réécrire le profil.", "next": "9_bio_write" }
            ]
        },
        "9_bio_sad": {
            "chapter": "La Cible Parfaite",
            "text": "C'est exactement le profil que Leduc ciblait. Granger, par nostalgie ou culpabilité, répondra à une âme en peine.",
            "choices": [
                { "text": "Lancer le contact.", "next": "9_social_engineering" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : LE PIÈGE DE GRANGER
        // ------------------------------------------------------------------
        "9_granger_trap_detail": {
            "chapter": "Le Jeu de Go",
            "text": "Granger vous teste. Il pose une question technique sur 'Age of Empires II'. « Quelle est la meilleure unité contre les Paladins Francs ? »",
            "img_prompt": "Retro strategy game screenshot",
            "choices": [
                { "text": "Répondre : « Les Archers ? » (Faux).", "next": "9_quiz_fail" },
                { "text": "Répondre : « Les Mamelouks ou les Hallebardiers. » (Juste).", "next": "9_quiz_success" },
                { "text": "Chercher sur Google avant de répondre.", "next": "9_google_cheat" }
            ]
        },
        "9_quiz_fail": {
            "chapter": "Démasquée",
            "text": "« Tu n'es pas une joueuse. Qui es-tu ? » Il se déconnecte.",
            "choices": [
                { "text": "Recommencer l'approche", "next": "9_create_avatar" }
            ]
        },
        "9_google_cheat": {
            "chapter": "La Triche",
            "text": "Vous prenez 2 minutes pour chercher. Granger : « Tu as mis trop de temps. Tu as cherché sur le wiki. Pas grave, j'aime les curieux. » Ça passe de justesse.",
            "choices": [
                { "text": "Continuer la discussion.", "next": "9_chat_progress" }
            ]
        },
        "9_quiz_success": {
            "chapter": "Respect",
            "text": "« Bien joué. Tu connais tes classiques. » La porte est ouverte.",
            "choices": [
                { "text": "Continuer la discussion.", "next": "9_chat_progress" }
            ]
        },
		        // ------------------------------------------------------------------
        // CHAPITRE 17-BIS : LA PIXEL HUNT (ANALYSE D'IMAGE AVANCÉE)
        // ------------------------------------------------------------------
        "10_pixel_hunt_start": {
            "chapter": "ANALYSE : Le Reflet",
            "text": "Vous avez la photo de 'Maxime' tenant la main de la fillette. L'image est de mauvaise qualité. Vous l'ouvrez dans Photoshop. Vous devez trouver un indice. Où regardez-vous ?",
            "img_prompt": "Close-up of a blurry photo on a computer screen, graphic design software interface",
            "choices": [
                { "text": "Zoomer sur le visage de l'homme (Flou).", "next": "10_zoom_face" },
                { "text": "Zoomer sur la fillette (Manteau rouge).", "next": "10_zoom_girl" },
                { "text": "Analyser l'arrière-plan (Paysage).", "next": "10_zoom_background" },
                { "text": "Chercher un reflet (Objet brillant).", "next": "10_zoom_reflection" }
            ]
        },
        "10_zoom_face": {
            "chapter": "Pixelisation",
            "text": "Impossible. Le visage est une bouillie de pixels. Il a été flouté volontairement avant l'upload. C'est une impasse.",
            "img_prompt": "Highly pixelated face, unrecognizable",
            "choices": [
                { "text": "Revenir à l'image globale.", "next": "10_pixel_hunt_start" }
            ]
        },
        "10_zoom_girl": {
            "chapter": "L'Écho",
            "text": "Elle ressemble à Chloé. Même taille. Même blondeur. Mais ce n'est pas elle. C'est Lila. La fille morte. Il cherche à la remplacer. Ça vous donne la nausée.",
            "img_prompt": "Girl in red coat, faceless",
            "choices": [
                { "text": "Revenir à l'image globale.", "next": "10_pixel_hunt_start" }
            ]
        },
        "10_zoom_background": {
            "chapter": "Le Dôme",
            "text": "Au loin, dans la brume. Une forme bulbeuse. Dorée. Ce n'est pas un arbre. C'est une architecture spécifique.",
            "img_prompt": "Zoom on a golden onion dome in the distance",
            "choices": [
                { "text": "Lancer une recherche d'image sur ce détail.", "next": "10_church_found" }
            ]
        },
        "10_zoom_reflection": {
            "chapter": "L'Orbe",
            "text": "Sur une autre capture (celle du jeu), vous voyez un orbe magique. Il reflète la pièce du joueur. Vous inversez les couleurs, augmentez le contraste.",
            "img_prompt": "Inverted colors image revealing a room reflection",
            "choices": [
                { "text": "Déchiffrer le texte inversé.", "next": "10_ip_found" }
            ]
        },
        "10_ip_found": {
            "chapter": "L'Erreur",
            "text": "Il a oublié de cacher son écran de debug. Une IP s'affiche : `212.58.244.70`. C'est une IP russe. Mais est-ce un VPN ?",
            "img_prompt": "IP address glowing on screen",
            "choices": [
                { "text": "Géolocaliser l'IP.", "next": "10_exif_data" }
            ]
        },
        "10_church_found": {
            "chapter": "Konkovo",
            "text": "C'est l'église de la Trinité-Vivifiante. Quartier de Konkovo, Moscou. Vous avez un lieu physique. Une ancre dans le réel.",
            "img_prompt": "Photo of a Russian church with golden domes in snow",
            "choices": [
                { "text": "Noter l'adresse.", "next": "10_exif_data" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : PRÉPARATIFS DE VOYAGE (LOGISTIQUE)
        // ------------------------------------------------------------------
        "11_prep_hub": {
            "chapter": "LOGISTIQUE : Le Départ",
            "text": "Vous avez décidé de partir. Mais on ne va pas en Russie comme on va à la plage. Il faut se préparer. Vous avez 24h.",
            "img_prompt": "Open suitcase on bed, passport, money, map",
            "choices": [
                { "text": "Gérer l'argent (Le nerf de la guerre).", "next": "11_money" },
                { "text": "Gérer la sécurité numérique (Téléphone).", "next": "11_tech_sec" },
                { "text": "Gérer la couverture (Lucas et Marc).", "next": "11_cover_story" },
                { "text": "Tout est prêt. Départ.", "next": "11_airport" }
            ]
        },
        "11_money": {
            "chapter": "Cash",
            "text": "Vos cartes seront tracées. Vous videz vos comptes. 5000 euros en liquide. Vous les cachez dans la doublure de votre manteau.",
            "img_prompt": "Hands sewing money into a coat lining",
            "choices": [
                { "text": "Retour aux préparatifs.", "next": "11_prep_hub" }
            ]
        },
        "11_tech_sec": {
            "chapter": "Burner Phone",
            "text": "Vous achetez un téléphone jetable. Vous installez Signal et un VPN. Vous détruisez la carte SIM de votre iPhone actuel. Adieu vie numérique.",
            "img_prompt": "Breaking a SIM card in half",
            "choices": [
                { "text": "Retour aux préparatifs.", "next": "11_prep_hub" }
            ]
        },
        "11_cover_story": {
            "chapter": "Le Mensonge",
            "text": "Que dire à Lucas ? Et à votre ex-mari Marc ? Si vous dites la vérité, ils appelleront la police et vous empêcheront de partir.",
            "choices": [
                { "text": "Dire : « Je pars pour le travail, une urgence client. »", "next": "11_lie_work" },
                { "text": "Dire : « Je vais me reposer chez ma sœur. »", "next": "11_lie_sister" }
            ]
        },
        "11_lie_work": {
            "chapter": "Credible",
            "text": "Marc est sceptique mais accepte de garder Lucas. « Tâche de revenir vite. » Vous avez gagné du temps.",
            "choices": [
                { "text": "Retour aux préparatifs.", "next": "11_prep_hub" }
            ]
        },
        "11_lie_sister": {
            "chapter": "Erreur",
            "text": "Marc appelle votre sœur. Elle dément. Il débarque chez vous. « Tu deviens folle ! » Vous devez fuir précipitamment.",
            "img_prompt": "Angry man shouting at Hélène",
            "choices": [
                { "text": "Partir maintenant !", "next": "11_airport" }
            ]
        },
        "11_airport": {
            "chapter": "Roissy-CDG",
            "text": "L'aéroport est une zone de transition. Vous êtes une anonyme. Vous recevez le SMS : « Je t'attends. »",
            "img_prompt": "Airport departure board showing 'MOSCOW - BOARDING'",
            "choices": [
                { "text": "Embarquer.", "next": "12_flight" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 12 : ARRIVÉE À MOSCOU (CHOC CULTUREL)
        // ------------------------------------------------------------------
        "12_flight": {
            "chapter": "Vol de Nuit",
            "text": "4 heures de vol. L'angoisse monte. Vous ne parlez pas russe. Vous êtes seule. L'avion atterrit à Sheremetyevo. La douane.",
            "img_prompt": "Airplane window view of Moscow lights at night",
            "choices": [
                { "text": "Passer la douane (Rester calme).", "next": "12_customs" }
            ]
        },
        "12_customs": {
            "chapter": "Le Garde",
            "text": "Le douanier vous fixe. Il scanne votre passeport. Il fronce les sourcils. « Purpose of visit ? »",
            "choices": [
                { "text": "« Tourism. » (Simple).", "next": "12_taxi" },
                { "text": "« Business. » (Risqué sans visa business).", "next": "12_customs_trouble" }
            ]
        },
        "12_customs_trouble": {
            "chapter": "Interrogatoire",
            "text": "Ils vous emmènent à part. Fouille des bagages. Ils trouvent l'argent liquide. Vous perdez 3 heures et devez payer une 'amende'.",
            "img_prompt": "Customs room, bag open, money on table",
            "choices": [
                { "text": "Sortir enfin.", "next": "12_taxi" }
            ]
        },
        "12_taxi": {
            "chapter": "La Ville",
            "text": "Moscou est gigantesque. Brutale. Le taxi roule vite. Vous arrivez à votre hôtel miteux à Konkovo.",
            "img_prompt": "View from taxi window, massive soviet buildings, snow",
            "choices": [
                { "text": "S'installer et dormir.", "next": "12_hotel_sleep" },
                { "text": "Sortir faire du repérage tout de suite.", "next": "12_konkovo_night" }
            ]
        },
        "12_hotel_sleep": {
            "chapter": "Nuit Agitée",
            "text": "Impossible de dormir. Vous entendez des bruits. La paranoïa vous tient éveillée. Au matin, vous êtes épuisée.",
            "img_prompt": "Hélène sitting on bed looking at the door",
            "choices": [
                { "text": "Commencer la surveillance.", "next": "12_konkovo_stakeout" }
            ]
        },
        "12_konkovo_night": {
            "chapter": "Repérage Nocturne",
            "text": "Vous trouvez l'immeuble. Il fait froid. Vous voyez de la lumière au 3ème étage. Une ombre passe. C'est peut-être lui.",
            "img_prompt": "Street view of a brick building at night, one window lit",
            "choices": [
                { "text": "Rentrer à l'hôtel.", "next": "12_hotel_sleep" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 12 BIS : LE CAFÉ ET L'HOMME
        // ------------------------------------------------------------------
        "12_cafe_scene": {
            "chapter": "Le Café",
            "text": "Le lendemain. Vous attendez dans un café en face de l'immeuble. Vous faites semblant de lire. Un homme entre. Il commande un thé. Il vous regarde.",
            "img_prompt": "View from inside a cafe, man in coat entering",
            "choices": [
                { "text": "Soutenir son regard.", "next": "12_man_confront" },
                { "text": "Baisser les yeux.", "next": "12_man_ignore" }
            ]
        },
        "12_man_confront": {
            "chapter": "Le Regard",
            "text": "Il ne cille pas. Ses yeux sont froids. Il sait. Il sort un journal. Il ne lit pas. Il surveille.",
            "img_prompt": "Close up on man's eyes",
            "choices": [
                { "text": "Payer et partir vite.", "next": "12_chase_start" }
            ]
        },
        "12_man_ignore": {
            "chapter": "Le Doute",
            "text": "Vous regardez votre tasse. Vous sentez son regard brûler votre nuque. Vous ne pouvez pas rester.",
            "choices": [
                { "text": "Partir discrètement.", "next": "12_chase_start" }
            ]
        },
        "12_chase_start": {
            "chapter": "La Filature",
            "text": "Vous marchez. Il vous suit. Il ne se cache pas. C'est de l'intimidation. Vous devez le semer.",
            "img_prompt": "Hélène walking fast on a snowy sidewalk, silhouette behind her",
            "choices": [
                { "text": "Entrer dans le métro (Foule).", "next": "12_metro_escape" },
                { "text": "Courir dans une ruelle (Risqué).", "next": "12_alley_fail" }
            ]
        },
        "12_alley_fail": {
            "chapter": "Impasse",
            "text": "La ruelle est un cul-de-sac. Il arrive. Il sourit. « Pas par là, Hélène. » Il vous laisse partir. Il joue avec vous.",
            "img_prompt": "Man blocking the exit of an alley",
            "choices": [
                { "text": "Rentrer à l'hôtel en tremblant.", "next": "13_gorky_park" }
            ]
        },
        "12_metro_escape": {
            "chapter": "Le Métro",
            "text": "Le métro de Moscou est profond. Un palais. Vous sautez dans une rame au dernier moment. Les portes se ferment sur son visage impassible.",
            "img_prompt": "Closing subway doors",
            "choices": [
                { "text": "Changer de ligne et rentrer.", "next": "13_gorky_park" }
            ]
        }
    }
};