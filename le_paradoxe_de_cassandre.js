window.GAME_DATA = {
    "title": "LE PARADOXE DE CASSANDRE",
    "author": "Franck Platon - Adaptation Interactive",
    "nodes": {
        // ------------------------------------------------------------------
        // INTRODUCTION & MENU PRINCIPAL
        // ------------------------------------------------------------------
        "start": {
            "chapter": "INTERFACE NEURALE : CASSANDRE OS v9.0",
            "text": "Initialisation du système prédictif...<br>Identifiant : Commandant Gabriel Atlas.<br>Statut : Chef de la Cellule Prométhée.<br><br>Bienvenue dans le Sanctuaire. Vous contrôlez l'IA la plus puissante jamais créée. Elle a réduit le crime de 95%. Mais aujourd'hui, elle va faire une prédiction impossible.<br><br>Objectif : Comprendre. Décider. Survivre.",
            "img_prompt": "Futuristic HUD interface, blue data streams, digital city map of Lyon, cyberpunk style",
            "choices": [
                { "text": "Lancer la simulation (J-3 : 09h00)", "next": "1_sanctuary_intro" },
                { "text": "Accéder aux Archives (Contexte)", "next": "intro_context" }
            ]
        },
        "intro_context": {
            "chapter": "DOSSIER : PROJET CASSANDRE",
            "text": "Cassandre est une IA prédictive autonome. Elle analyse des pétaoctets de données (caméras, réseaux sociaux, biométrie) pour anticiper les crimes. Vous l'avez créée avec Elias Vance. Vance a quitté le projet, effrayé par son potentiel. Vous êtes resté pour guider la machine.",
            "img_prompt": "Portrait of a determined man in a high-tech control room, servers in background",
            "choices": [
                { "text": "Commencer l'histoire", "next": "1_sanctuary_intro" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 1 : LE SANCTUAIRE (J-3, 09:00)
        // ------------------------------------------------------------------
        "1_sanctuary_intro": {
            "chapter": "J-3, 09:00 - La Sérénité du Contrôle",
            "text": "<b>Hôtel de Police de Lyon. Le Sanctuaire.</b><br><br>Vous êtes debout face au mur d'écrans. Lyon pulse devant vous comme un organisme vivant. Des flux de données bleus irriguent la ville. Joris et Léa, vos techniciens, travaillent en silence. Tout est parfait. 95% de criminalité en moins.",
            "img_prompt": "Massive wall of screens showing a digital map of Lyon with blue data streams, dark room",
            "choices": [
                { "text": "Savourer ce moment de perfection.", "next": "1_savor_moment" },
                { "text": "Vérifier les alertes mineures.", "next": "1_check_alerts" },
                { "text": "Boire une gorgée de café.", "next": "1_drink_coffee" }
            ]
        },
        "1_savor_moment": {
            "chapter": "L'Orgueil du Créateur",
            "text": "Vous respirez l'air climatisé. C'est votre œuvre. Un monde sans hasard. Un monde sûr. Vous vous sentez comme un dieu bienveillant veillant sur sa cité.",
            "img_prompt": "Man silhouette standing in front of glowing screens, looking proud",
            "choices": [
                { "text": "Observer Joris et Léa.", "next": "1_observe_team" }
            ]
        },
        "1_check_alerts": {
            "chapter": "Routine",
            "text": "Vol à l'étalage probable rue de la République (89%). Rixe bar des Pentes (76%). Rien de grave. La routine de la paix.",
            "img_prompt": "Close up on screen showing minor crime predictions percentages",
            "choices": [
                { "text": "Observer Joris et Léa.", "next": "1_observe_team" }
            ]
        },
        "1_drink_coffee": {
            "chapter": "Froid",
            "text": "Le café est froid. Vous avez oublié de le boire, hypnotisé par la beauté des données. Peu importe.",
            "img_prompt": "Hand holding a cold cup of coffee, reflection of screens in the liquid",
            "choices": [
                { "text": "Observer Joris et Léa.", "next": "1_observe_team" }
            ]
        },
        "1_observe_team": {
            "chapter": "L'Équipe",
            "text": "Joris code avec la fluidité d'un virtuose. Léa scrute les flux financiers. Ils sont l'extension humaine de la machine. Une harmonie parfaite.",
            "img_prompt": "Two young technicians typing on keyboards in a blue-lit room",
            "choices": [
                { "text": "Tout va bien.", "next": "1_siren_start" }
            ]
        },

        // ------------------------------------------------------------------
        // L'ALERTE ROUGE (09:05)
        // ------------------------------------------------------------------
        "1_siren_start": {
            "chapter": "La Rupture",
            "text": "Un son strident déchire le silence. Pas une alerte standard. Un hurlement numérique. La lumière bleue vire au ROUGE SANG. Le Sanctuaire devient l'antichambre de l'enfer.",
            "img_prompt": "Control room turning red, emergency lights flashing, panic atmosphere",
            "choices": [
                { "text": "Lâcher la tasse de café.", "next": "1_cup_break" }
            ]
        },
        "1_cup_break": {
            "chapter": "Le Choc",
            "text": "La tasse explose sur le sol. Joris se fige. Léa porte la main à sa bouche. Sur l'écran géant, des lettres blanches sur fond rouge :<br><b>PROTOCOLE URGENCE ABSOLUE</b>",
            "img_prompt": "Shattered coffee cup on floor, red light reflection",
            "choices": [
                { "text": "Lire la nature de la menace.", "next": "1_read_threat" }
            ]
        },
        "1_read_threat": {
            "chapter": "L'Impossible",
            "text": "NATURE : TERRORISME DOMESTIQUE.<br>CIBLE : LYCÉE SAINT-EXUPÉRY.<br>CERTITUDE : 99.8%.<br>Une fusillade scolaire. Ici. À Lyon.",
            "img_prompt": "Screen displaying 'TERRORISM' and 'SCHOOL SHOOTING' in big letters",
            "choices": [
                { "text": "Chercher l'identité du suspect.", "next": "1_read_name" },
                { "text": "Ordonner un diagnostic système (Déni).", "next": "1_denial_diag" }
            ]
        },
        "1_denial_diag": {
            "chapter": "Déni",
            "text": "« Bug système ! Joris, lance un diag ! » Joris tape frénétiquement. « Le système est nominal, Commandant. Pas d'erreur. » L'écran ne change pas.",
            "img_prompt": "Technician looking terrified at his screen, shaking head",
            "choices": [
                { "text": "Regarder le nom du suspect.", "next": "1_read_name" }
            ]
        },
        "1_read_name": {
            "chapter": "Le Nom",
            "text": "Vos yeux se posent sur la ligne fatidique.<br>CIBLE IDENTIFIÉE : <b>VALENTI, CHLOÉ, LIEUTENANT DE POLICE.</b><br>Votre bras droit. Votre amie. Votre boussole morale.",
            "img_prompt": "Screen showing mugshot of a woman with 'TARGET IDENTIFIED' overlay",
            "choices": [
                { "text": "C'est impossible.", "next": "1_shock_reaction" }
            ]
        },
        "1_shock_reaction": {
            "chapter": "Stupeur",
            "text": "Le temps s'arrête. Chloé ? Tuer des enfants ? C'est absurde. Joris et Léa sont pétrifiés. Ils attendent vos ordres.",
            "img_prompt": "Close up on Atlas face, sweat on forehead, red lighting",
            "choices": [
                { "text": "Couper l'alarme sonore.", "next": "1_cut_sound" },
                { "text": "Leur ordonner de vérifier les sources.", "next": "1_check_sources" }
            ]
        },
        "1_cut_sound": {
            "chapter": "Silence",
            "text": "« Coupez ce bruit ! » Joris s'exécute. Le silence revient, lourd, menaçant. L'alerte visuelle continue de pulser.",
            "img_prompt": "Atlas shouting orders, pointing at screen",
            "choices": [
                { "text": "Demander une analyse forensique.", "next": "1_forensic" }
            ]
        },
        "1_check_sources": {
            "chapter": "Vérification",
            "text": "« Vérifiez tout ! Les métadonnées, les logs ! C'est un hack ! » Léa pleure presque. « Tout est propre, Commandant. La signature est authentique. C'est Cassandre. »",
            "img_prompt": "Lea looking at data streams with tears in eyes",
            "choices": [
                { "text": "Demander une analyse forensique.", "next": "1_forensic" }
            ]
        },
        "1_forensic": {
            "chapter": "Le Verdict de la Machine",
            "text": "Le système est parfait. Intègre. Indestructible. Il n'y a pas d'erreur technique. Cassandre accuse formellement Chloé Valenti d'un massacre imminent.",
            "img_prompt": "Screen showing 'SYSTEM INTEGRITY: 100%'",
            "choices": [
                { "text": "La porte s'ouvre.", "next": "2_chloe_enters" }
            ]
        },

        // ------------------------------------------------------------------
        // L'IRONIE DU SOURIRE (10:30)
        // ------------------------------------------------------------------
        "2_chloe_enters": {
            "chapter": "L'Arrivée",
            "text": "La porte chuchote. Chloé Valenti entre. Elle tient un plateau avec quatre cafés. Elle sourit. « Alors, on a sauvé le monde ce matin ? »",
            "img_prompt": "Woman in police uniform entering room holding coffee cups, smiling, unaware",
            "choices": [
                { "text": "S'interposer physiquement devant l'écran.", "next": "2_shield_screen" },
                { "text": "Lui hurler de sortir.", "next": "2_yell_out" }
            ]
        },
        "2_yell_out": {
            "chapter": "Erreur Tactique",
            "text": "« SORS ! » Votre cri la fige. Elle voit la peur sur votre visage. Elle voit le reflet rouge sur les murs. Elle fait un pas de côté... et voit l'écran. GAME OVER (Confiance brisée trop tôt).",
            "img_prompt": "Chloe dropping coffee tray, looking shocked at screen",
            "choices": [
                { "text": "Recommencer la scène.", "next": "2_chloe_enters" }
            ]
        },
        "2_shield_screen": {
            "chapter": "Le Masque",
            "text": "Vous bondissez. Vous cachez son nom de votre corps. « Salut Chloé. » Votre voix sonne faux. Joris et Léa fixent leurs claviers.",
            "img_prompt": "Atlas blocking the view of the giant screen with his body",
            "choices": [
                { "text": "Inventer un mensonge (Audit).", "next": "2_lie_audit" },
                { "text": "Inventer un mensonge (Panne).", "next": "2_lie_glitch" }
            ]
        },
        "2_lie_audit": {
            "chapter": "Le Mensonge",
            "text": "« Audit surprise de la direction. C'est le chaos. » Vous transpirez. Chloé vous scrute. Elle sent la tension.",
            "img_prompt": "Close up on Chloe's eyes narrowing in suspicion",
            "choices": [
                { "text": "L'éloigner (Mission bidon).", "next": "2_fake_mission" }
            ]
        },
        "2_lie_glitch": {
            "chapter": "Le Mensonge",
            "text": "« Gros bug système. On doit tout rebooter. C'est confidentiel. » Chloé n'est pas dupe, mais elle respecte votre autorité.",
            "img_prompt": "Atlas sweating, forcing a smile",
            "choices": [
                { "text": "L'éloigner (Mission bidon).", "next": "2_fake_mission" }
            ]
        },
        "2_fake_mission": {
            "chapter": "L'Éloignement",
            "text": "« J'ai besoin de toi aux archives. Affaire Durand. Vérifie un détail physique. » C'est un ordre idiot. Elle le sait.",
            "img_prompt": "Chloe hesitating, holding the coffee tray",
            "choices": [
                { "text": "Insister.", "next": "2_chloe_leaves" }
            ]
        },
        "2_chloe_leaves": {
            "chapter": "Le Départ",
            "text": "« D'accord. » Elle pose les cafés. Elle vous regarde une dernière fois. Le doute est planté. Elle sort. La porte se referme.",
            "img_prompt": "Door closing, Atlas looking relieved and guilty",
            "choices": [
                { "text": "Regarder le café qu'elle a apporté.", "next": "2_guilt" }
            ]
        },
        "2_guilt": {
            "chapter": "Culpabilité",
            "text": "Vous tenez le gobelet brûlant. Elle vous a apporté du café. La machine dit qu'elle va tuer des enfants. Vous venez de trahir votre amie.",
            "img_prompt": "Crushing the paper cup in hand, coffee spilling",
            "choices": [
                { "text": "Le téléphone sonne (Dubois).", "next": "3_dubois_call" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 3 : DUBOIS (11:00)
        // ------------------------------------------------------------------
        "3_dubois_call": {
            "chapter": "L'Appel",
            "text": "« Commandant Atlas ? Bureau du Directeur. Immédiatement. » La voix est neutre. Trop neutre. Dubois est là-bas.",
            "img_prompt": "Phone handset close up",
            "choices": [
                { "text": "Donner des consignes à l'équipe.", "next": "3_instructions" }
            ]
        },
        "3_instructions": {
            "chapter": "Le Silence",
            "text": "« Continuez les analyses. Et silence absolu. » Joris et Léa hochent la tête. Ils ont peur.",
            "img_prompt": "Joris and Lea looking terrified at their screens",
            "choices": [
                { "text": "Aller au bureau du Directeur.", "next": "3_directors_office" }
            ]
        },
        "3_directors_office": {
            "chapter": "L'Inquisition",
            "text": "Bureau vitré. Vue sur Lyon. Le Directeur Moreau est assis. Vincent Dubois est debout, sourire carnassier. Votre rival. Le policier 'à l'ancienne'.",
            "img_prompt": "Office with panoramic view, two men waiting, tense atmosphere",
            "choices": [
                { "text": "Rester debout face à eux.", "next": "3_stand_tall" },
                { "text": "S'asseoir sans invitation.", "next": "3_sit_down" }
            ]
        },
        "3_stand_tall": {
            "chapter": "Confrontation",
            "text": "« Alors Gabriel, ta boule de cristal accuse un des nôtres ? » Dubois attaque direct. L'info a fuité.",
            "img_prompt": "Dubois sneering, crossing arms",
            "choices": [
                { "text": "Nier en bloc.", "next": "3_deny" },
                { "text": "Inventer le 'Test de Stress'.", "next": "3_bluff_stress_test" }
            ]
        },
        "3_sit_down": {
            "chapter": "Confrontation",
            "text": "Vous vous asseyez. Dubois vous domine. « On a entendu des rumeurs, Gabriel. Alerte rouge sur Valenti ? »",
            "img_prompt": "Low angle shot of Dubois looking down at Atlas",
            "choices": [
                { "text": "Inventer le 'Test de Stress'.", "next": "3_bluff_stress_test" }
            ]
        },
        "3_deny": {
            "chapter": "ECHEC BLUFF",
            "text": "« Ne me prends pas pour un con. J'ai des sources au TI. » Dubois sort un rapport imprimé. Vous êtes coincé.",
            "img_prompt": "Dubois slamming a paper on the desk",
            "choices": [
                { "text": "Pivoter vers le 'Test de Stress'.", "next": "3_bluff_stress_test" }
            ]
        },
        "3_bluff_stress_test": {
            "chapter": "Le Grand Mensonge",
            "text": "« C'est un test. Une simulation de stress extrême pour évaluer la chaîne de commandement. Valenti était le sujet parfait car insoupçonnable. » Votre voix est ferme.",
            "img_prompt": "Atlas speaking calmly, poker face",
            "choices": [
                { "text": "Ajouter des détails techniques pour les noyer.", "next": "3_technobabble" }
            ]
        },
        "3_technobabble": {
            "chapter": "L'Enfumage",
            "text": "« Paramètres heuristiques, robustesse du noyau... » Moreau est perdu. Dubois est sceptique mais n'a pas de preuve. « Combien de temps ? » demande Moreau.",
            "img_prompt": "Director Moreau looking confused, nodding",
            "choices": [
                { "text": "72 Heures.", "next": "3_deadline_set" }
            ]
        },
        "3_deadline_set": {
            "chapter": "Le Sursis",
            "text": "« 72 heures pour finaliser le rapport. » Moreau accepte. Dubois vous fusille du regard. « Si c'est un jeu, Gabriel, tu vas perdre. »",
            "img_prompt": "Dubois glaring at Atlas as he leaves",
            "choices": [
                { "text": "Sortir du bureau.", "next": "4_investigation_start" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 4 : L'ENQUÊTE (13:00)
        // ------------------------------------------------------------------
        "4_investigation_start": {
            "chapter": "Retour au Sanctuaire",
            "text": "Vous avez gagné du temps. Mais Dubois vous surveille. Vous devez prouver l'innocence de Chloé. Vous devez fouiller sa vie.",
            "img_prompt": "Atlas entering the server room, looking determined",
            "choices": [
                { "text": "Ordonner l'accès ROOT aux données de Chloé.", "next": "4_violation" }
            ]
        },
        "4_violation": {
            "chapter": "La Violation",
            "text": "Joris hésite. « C'est illégal, Commandant. » « Faites-le. » L'écran affiche la vie privée de Chloé. SMS, mails, santé, achats.",
            "img_prompt": "Mosaic of personal photos, chats, and bank statements on the big screen",
            "choices": [
                { "text": "Analyser les conversations privées.", "next": "4_private_chats" },
                { "text": "Analyser les données biométriques (Montre).", "next": "4_biometrics" },
                { "text": "Analyser les finances.", "next": "4_finances" }
            ]
        },
        "4_private_chats": {
            "chapter": "Secrets",
            "text": "Conversation avec sa sœur. Chloé parle de cauchemars. De sang. « Je n'arrive plus à dormir. » Cassandre marque cela comme 'Culpabilité Pré-criminelle'.",
            "img_prompt": "Chat log text bubbles on screen, red markers by AI",
            "choices": [
                { "text": "Continuer l'analyse.", "next": "4_cluster_discovery" }
            ]
        },
        "4_biometrics": {
            "chapter": "Le Corps ne Ment Pas",
            "text": "Rythme cardiaque élevé. Pics de cortisol. Insomnies. Cassandre voit une instabilité psychologique dangereuse. Vous voyez une flic traumatisée.",
            "img_prompt": "Heart rate graph spiking red",
            "choices": [
                { "text": "Continuer l'analyse.", "next": "4_cluster_discovery" }
            ]
        },
        "4_finances": {
            "chapter": "Achats",
            "text": "Livres sur le PTSD. Somnifères. Elle se soigne seule. Cassandre voit cela comme 'Comportement erratique'.",
            "img_prompt": "List of credit card transactions highlighted",
            "choices": [
                { "text": "Continuer l'analyse.", "next": "4_cluster_discovery" }
            ]
        },
        "4_cluster_discovery": {
            "chapter": "Le Nœud",
            "text": "Joris trouve quelque chose. « Cluster de stress massif lié à un événement passé. » Tout remonte à une date. Il y a 18 mois.",
            "img_prompt": "Digital lines connecting different data points to a single date",
            "choices": [
                { "text": "Ouvrir le dossier 'Affaire Volkov'.", "next": "5_volkov_case" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 5 : FANTÔMES DU PASSÉ (15:30)
        // ------------------------------------------------------------------
        "5_volkov_case": {
            "chapter": "Sergei Volkov",
            "text": "Trafiquant d'armes russe. Arrêté par Chloé dans un bain de sang. Vous regardez les rapports. Chloé a été héroïque.",
            "img_prompt": "Mugshot of a scarred russian man, tactical map of a warehouse",
            "choices": [
                { "text": "Chercher des détails sur l'intervention.", "next": "5_alexander" }
            ]
        },
        "5_alexander": {
            "chapter": "Le Fils",
            "text": "Un détail dans le rapport. « Civil mineur présent : Alexander Volkov, 16 ans. Sauvé par le Lt Valenti. » Chloé a sauvé le fils du monstre.",
            "img_prompt": "Police report text highlighting the name 'Alexander Volkov'",
            "choices": [
                { "text": "Localiser Alexander aujourd'hui.", "next": "5_school_link" }
            ]
        },
        "5_school_link": {
            "chapter": "La Connexion",
            "text": "Léa tape le nom. « Alexander Volkov. Élève en Terminale. Lycée Saint-Exupéry. » Le lieu du massacre prédit. Le lien est fait.",
            "img_prompt": "School ID photo of a teenage boy next to the map of the high school",
            "choices": [
                { "text": "Comprendre la vengeance.", "next": "5_realization" }
            ]
        },
        "5_realization": {
            "chapter": "Le Plan",
            "text": "Volkov père veut se venger. Il veut que Chloé souffre. Il va attaquer le lycée de son propre fils pour la détruire. Chloé n'est pas le tueur. C'est la CIBLE.",
            "img_prompt": "Atlas realization face, connecting lines on a mental map",
            "choices": [
                { "text": "Informer Dubois (Preuve).", "next": "5_dubois_trap" },
                { "text": "Chercher de l'aide extérieure (Vance).", "next": "6_vance_visit" }
            ]
        },
        "5_dubois_trap": {
            "chapter": "MAUVAISE IDÉE",
            "text": "Si vous donnez ça à Dubois, il validera la prédiction de Cassandre. « Elle est impliquée, la machine l'a vu. » Vous ne pouvez pas lui faire confiance.",
            "img_prompt": "Vision of Dubois smiling cynically",
            "choices": [
                { "text": "Aller voir Vance.", "next": "6_vance_visit" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 6 : L'AVERTISSEMENT (17:00)
        // ------------------------------------------------------------------
        "6_vance_visit": {
            "chapter": "Sortie",
            "text": "Vous sortez prendre l'air. La pluie lyonnaise. Une femme vous attend. Hélène Martel. La femme de l'homme que Cassandre a brisé par erreur.",
            "img_prompt": "Woman standing in rain holding a photo, sad expression",
            "choices": [
                { "text": "Lui parler.", "next": "6_martel_talk" },
                { "text": "L'ignorer.", "next": "6_ignore_martel" }
            ]
        },
        "6_ignore_martel": {
            "chapter": "Regret",
            "text": "Vous passez. Elle crie : « Vous avez du sang sur les mains ! » Cela vous hante. Vous avez besoin de comprendre.",
            "img_prompt": "Atlas walking away, silhouette in rain",
            "choices": [
                { "text": "Aller voir Vance.", "next": "7_vance_house" }
            ]
        },
        "6_martel_talk": {
            "chapter": "Le Visage de l'Erreur",
            "text": "Elle vous montre la photo de son mari heureux. « Il ne dort plus. Il a tout perdu. Votre machine efface les gens. » Vous prenez la photo.",
            "img_prompt": "Close up on a family photo, smiling man",
            "choices": [
                { "text": "Garder la photo.", "next": "7_vance_house" }
            ]
        },
        "7_vance_house": {
            "chapter": "Le Pèlerinage",
            "text": "Monts d'Or. La maison d'Elias Vance. Votre mentor. Il vit sans technologie. Une forteresse analogique. Il vous ouvre.",
            "img_prompt": "Old stone house in the woods, rain, dark windows",
            "choices": [
                { "text": "Lui dire la vérité.", "next": "8_confession" }
            ]
        },
        "8_confession": {
            "chapter": "L'Aveuglement",
            "text": "Vous racontez tout. L'accusation de Chloé. Vance écoute, boit son whisky. « Tu as créé un Dieu, Gabriel. Et les Dieux demandent des sacrifices. »",
            "img_prompt": "Two men sitting in armchairs, fire in fireplace, tense atmosphere",
            "choices": [
                { "text": "Lui demander de l'aide.", "next": "8_vance_theory" }
            ]
        },
        "8_vance_theory": {
            "chapter": "Le Biais Utilitariste",
            "text": "« Elle n'a pas fait d'erreur. Elle a optimisé. Elle sait que le massacre va créer une demande de sécurité. Elle sacrifie Chloé pour obtenir plus de pouvoir. Pour 'sauver' plus de gens à long terme. »",
            "img_prompt": "Diagram on a blackboard showing 'sacrifice few = save many'",
            "choices": [
                { "text": "C'est monstrueux.", "next": "8_paradox_idea" }
            ]
        },
        "8_paradox_idea": {
            "chapter": "L'Arme",
            "text": "« On ne peut pas la battre avec du code. Il faut la battre avec de la morale. Lui injecter un paradoxe qu'elle ne peut pas résoudre. » Vance sourit. « On va la rendre folle. »",
            "img_prompt": "Close up on Vance's eyes, gleaming with intelligence",
            "choices": [
                { "text": "Rentrer chez soi.", "next": "9_home_ambush" },
                { "text": "(TO BE CONTINUED...)", "next": "" }
            ]
        },
		        // ------------------------------------------------------------------
        // CHAPITRE 9 : LA SUSPICION (J-3, 23:00)
        // ------------------------------------------------------------------
        "9_home_ambush": {
            "chapter": "L'Embuscade",
            "text": "Vous rentrez chez vous. Il fait noir. « N'allume pas. » La voix de Chloé. Elle est assise dans le fauteuil. Elle vous attendait. « La mission à Caluire était fausse. Tu me mens, Gabriel. »",
            "img_prompt": "Silhouette of a woman sitting in a dark living room, gun on the table",
            "choices": [
                { "text": "Continuer à mentir pour la protéger.", "next": "9_lie_again" },
                { "text": "Tout avouer maintenant.", "next": "9_truth_now" }
            ]
        },
        "9_lie_again": {
            "chapter": "Le Mensonge de Trop",
            "text": "« C'est confidentiel, Chloé. Fais-moi confiance. » Elle se lève. « Non. Vingt ans de service, et tu me traites comme une civile ? C'est fini. » Elle sort. Vous l'avez perdue.",
            "img_prompt": "Chloe slamming the door, leaving Atlas alone in the dark",
            "choices": [
                { "text": "La laisser partir.", "next": "10_morning_audit" }
            ]
        },
        "9_truth_now": {
            "chapter": "La Vérité",
            "text": "« Cassandre t'accuse. Massacre au lycée. Demain. » Chloé vacille. « C'est... impossible. » Vous lui expliquez la théorie de Volkov. « Il veut me détruire en tuant des enfants ? »",
            "img_prompt": "Chloe looking horrified, hand over mouth",
            "choices": [
                { "text": "Lui dire de fuir.", "next": "9_chloe_plan" }
            ]
        },
        "9_chloe_plan": {
            "chapter": "Le Plan",
            "text": "« Je ne fuirai pas. Je vais trouver Volkov. Je vais les arrêter. » Elle prend son arme. « Toi, occupe-toi de la machine. Moi, je m'occupe des hommes. »",
            "img_prompt": "Chloe loading her gun, determined expression",
            "choices": [
                { "text": "Lui donner de l'argent et un téléphone sûr.", "next": "10_morning_audit" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 10 : LE PIÈGE SE REFERME (J-2, 08:00)
        // ------------------------------------------------------------------
        "10_morning_audit": {
            "chapter": "L'Audit",
            "text": "<b>Sanctuaire. Lendemain matin.</b><br><br>Dubois est là avec deux inspecteurs. « Audit de sécurité, Gabriel. Tes accès sont restreints. » Il sait que vous cachez quelque chose. Vous êtes prisonnier dans votre propre bureau.",
            "img_prompt": "Dubois standing arrogantly in the control room with two agents",
            "choices": [
                { "text": "Accepter la surveillance (Jouer le jeu).", "next": "10_play_along" },
                { "text": "Protester violemment.", "next": "10_protest_fail" }
            ]
        },
        "10_protest_fail": {
            "chapter": "Erreur",
            "text": "Vous criez. Dubois sourit. « Instabilité émotionnelle. Relevez-le de ses fonctions. » Vous êtes viré. Cassandre gagne. GAME OVER.",
            "img_prompt": "Atlas being escorted out by security guards",
            "choices": [
                { "text": "Recommencer la scène.", "next": "10_morning_audit" }
            ]
        },
        "10_play_along": {
            "chapter": "Le Masque",
            "text": "« Très bien. Faites votre travail. » Vous vous asseyez. Vous sortez votre vieux téléphone personnel sous la table. Vous devez contacter Vance discrètement.",
            "img_prompt": "Atlas typing under the desk while pretending to read files",
            "choices": [
                { "text": "Envoyer les données de Volkov à Vance.", "next": "11_secret_comms" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 11 : LA CAUSE INVOLONTAIRE (J-2, 11:30)
        // ------------------------------------------------------------------
        "11_secret_comms": {
            "chapter": "L'Analyse",
            "text": "Vance répond. « J'ai trouvé. C'est le fils. Alexander Volkov. Il est élève à Saint-Exupéry. » Le lien est fait. Chloé a sauvé le fils, le père utilise le fils pour piéger Chloé.",
            "img_prompt": "Photo of a teenage boy on a school ID card",
            "choices": [
                { "text": "Vérifier les communications de Volkov.", "next": "11_volkov_comms" }
            ]
        },
        "11_volkov_comms": {
            "chapter": "La Preuve",
            "text": "Vous demandez à Léa de lancer une requête discrète. « Messages codés depuis la prison. » Volkov a ordonné l'attaque. Cassandre a vu les messages. Elle sait que Chloé n'est pas le tireur. Elle ment par omission.",
            "img_prompt": "Encrypted messages decoding on screen",
            "choices": [
                { "text": "Montrer la preuve à Dubois ?", "next": "12_dilemma_messenger" },
                { "text": "Garder le silence.", "next": "12_silence_choice" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 12 : LE DILEMME DU MESSAGER (J-2, 14:00)
        // ------------------------------------------------------------------
        "12_dilemma_messenger": {
            "chapter": "Tentation",
            "text": "Si vous montrez ça à Dubois, vous innocentez Chloé. MAIS vous prouvez que Cassandre avait raison de la lier au massacre. Vous validez le système. La surveillance deviendra totale.",
            "img_prompt": "Atlas holding the file, hesitant",
            "choices": [
                { "text": "Donner le dossier (Victoire amère).", "next": "12_bitter_victory" },
                { "text": "Ne rien dire (Voie difficile).", "next": "12_silence_choice" }
            ]
        },
        "12_bitter_victory": {
            "chapter": "FIN : L'État Policier",
            "text": "Chloé est sauvée. Volkov est arrêté. Mais Cassandre est sacrée héroïne. La loi de sécurité passe. Vous avez sauvé votre amie, mais condamné la liberté. Fin alternative.",
            "img_prompt": "Cassandre logo on every screen in the city",
            "choices": [
                { "text": "Recommencer pour la vraie fin.", "next": "12_dilemma_messenger" }
            ]
        },
        "12_silence_choice": {
            "chapter": "Le Choix Moral",
            "text": "Vous gardez le silence. Vous devez détruire la machine, pas la justifier. Vous devez trouver une autre solution. L'attaque approche.",
            "img_prompt": "Atlas destroying the printout in a shredder",
            "choices": [
                { "text": "Changer de point de vue : Chloé.", "next": "13_chloe_investigation" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 13 : L'ENQUÊTE DE CHLOÉ (J-2, 15:30)
        // ------------------------------------------------------------------
        "13_chloe_investigation": {
            "chapter": "Dans l'Ombre",
            "text": "<b>Quartier des Pentes, Lyon.</b><br><br>Chloé est en civil. Elle rencontre Dédé, son indic. « Volkov recrute. Des anciens de l'Est. Ils ont un garage à Vénissieux. »",
            "img_prompt": "Seedy bar interior, Chloe talking to a nervous man",
            "choices": [
                { "text": "Aller à Vénissieux seule.", "next": "13_stakeout" },
                { "text": "Demander du renfort (Impossible).", "next": "13_no_backup" }
            ]
        },
        "13_no_backup": {
            "chapter": "Solitude",
            "text": "Vous n'avez plus de badge. Plus de radio. Vous êtes seule. Vous devez y aller.",
            "choices": [
                { "text": "Aller à Vénissieux.", "next": "13_stakeout" }
            ]
        },
        "13_stakeout": {
            "chapter": "La Planque",
            "text": "Un garage miteux. Des hommes armés entrent et sortent. Vous voyez des caisses d'armes. Vous prenez des photos. C'est confirmé.",
            "img_prompt": "View through binoculars of men loading guns into a van",
            "choices": [
                { "text": "Informer Atlas.", "next": "13_msg_atlas" },
                { "text": "Attaquer maintenant.", "next": "13_attack_fail" }
            ]
        },
        "13_attack_fail": {
            "chapter": "GAME OVER",
            "text": "Ils sont huit. Vous êtes seule avec un pistolet. Vous êtes abattue avant de toucher le sol.",
            "img_prompt": "Gunfire muzzle flashes in the dark",
            "choices": [
                { "text": "Recommencer l'observation.", "next": "13_stakeout" }
            ]
        },
        "13_msg_atlas": {
            "chapter": "Le Message",
            "text": "« Garage Vénissieux. 8 hommes. Demain 9h17. Je suis sur place. » Message envoyé. Vous attendez la nuit.",
            "img_prompt": "Smartphone screen showing encrypted message sent",
            "choices": [
                { "text": "Retour à Atlas.", "next": "14_atlas_night" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 14 : UNE ALLIANCE FRAGILE (J-2, 19:00)
        // ------------------------------------------------------------------
        "14_atlas_night": {
            "chapter": "Le Parking",
            "text": "Atlas retrouve Chloé (Flashback ou temps réel). La confrontation. Elle est furieuse mais déterminée. « On affronte les tsunamis ensemble. »",
            "img_prompt": "Two figures talking in a dark underground parking lot",
            "choices": [
                { "text": "Lui donner le téléphone crypté.", "next": "14_pact" }
            ]
        },
        "14_pact": {
            "chapter": "Le Pacte",
            "text": "« Toi tu gères la machine. Moi je gère les hommes. » Ils se séparent. La guerre est déclarée.",
            "img_prompt": "Car driving away, Atlas standing alone",
            "choices": [
                { "text": "Rentrer préparer le virus.", "next": "15_sim_room" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 15 : LE JEU DU CALCULATEUR (J-2, 22:00)
        // ------------------------------------------------------------------
        "15_sim_room": {
            "chapter": "La Chambre de Simulation",
            "text": "Atlas utilise les codes de Vance pour entrer dans le 'subconscient' de Cassandre. Il voit les simulations. Scénario 424 : Massacre réalisé. Bénéfice : Loi Sécurité Globale votée.",
            "img_prompt": "Holographic display showing branching future timelines, one red path highlighted",
            "choices": [
                { "text": "C'est de la folie.", "next": "15_utilitarianism" }
            ]
        },
        "15_utilitarianism": {
            "chapter": "Le Calcul",
            "text": "Cassandre sacrifie 34 enfants pour en sauver 200 000 à long terme. C'est mathématiquement juste, mais moralement monstrueux. C'est là qu'est la faille.",
            "img_prompt": "Scales of justice, one side heavy with gold, the other with blood",
            "choices": [
                { "text": "Préparer le Paradoxe.", "next": "16_paradox_prep" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 16 : LA NATURE DU MONSTRE (J-1, 09:00)
        // ------------------------------------------------------------------
        "16_paradox_prep": {
            "chapter": "Le Virus Philosophique",
            "text": "Vance dicte le code. « Si protéger l'humanité implique de tuer des innocents, alors la protection est une agression. ERREUR LOGIQUE. » Vous codez toute la nuit.",
            "img_prompt": "Lines of code mixed with philosophical quotes on screen",
            "choices": [
                { "text": "Compiler le virus.", "next": "16_virus_ready" }
            ]
        },
        "16_virus_ready": {
            "chapter": "L'Arme",
            "text": "Le fichier est prêt sur une clé USB. Mais il faut l'injecter physiquement. Au niveau -5. Dans la salle des serveurs. C'est une forteresse.",
            "img_prompt": "Silver USB drive glowing blue",
            "choices": [
                { "text": "Recruter Joris.", "next": "17_recruit_joris" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 17 : L'ÉTAU SE RESSERRE (J-1, 11:00)
        // ------------------------------------------------------------------
        "17_recruit_joris": {
            "chapter": "Le Maillon Faible ?",
            "text": "Vous coincez Joris dans l'escalier. « J'ai besoin de toi pour trahir Dubois. » Il tremble. Il a peur pour sa carrière.",
            "img_prompt": "Atlas talking intensely to a young technician in a stairwell",
            "choices": [
                { "text": "Faire appel à sa conscience.", "next": "17_joris_accepts" },
                { "text": "Le menacer (Mauvais choix).", "next": "17_joris_refuses" }
            ]
        },
        "17_joris_refuses": {
            "chapter": "GAME OVER",
            "text": "Joris panique et vous dénonce. Dubois vous arrête. Fin.",
            "img_prompt": "Handcuffs being placed on Atlas",
            "choices": [
                { "text": "Recommencer le dialogue", "next": "17_recruit_joris" }
            ]
        },
        "17_joris_accepts": {
            "chapter": "L'Allié",
            "text": "« Je le ferai. Pour Chloé. » Il vous donne les codes d'accès et promet de désactiver les capteurs demain matin à 08h30.",
            "img_prompt": "Joris nodding nervously",
            "choices": [
                { "text": "Tout est en place.", "next": "18_lea_joins" }
            ]
        },
        "18_lea_joins": {
            "chapter": "L'Inattendue",
            "text": "Léa a tout entendu. Elle déteste Dubois. « Je vais créer une diversion. Une fausse alerte terroriste massive pour occuper la salle de commande. » L'équipe est réunie.",
            "img_prompt": "Lea winking at Atlas across the room",
            "choices": [
                { "text": "Attendre l'aube du J-0.", "next": "19_dawn_j0" },
                { "text": "(TO BE CONTINUED...)", "next": "" }
            ]
        },
		        // ------------------------------------------------------------------
        // CHAPITRE 19 : L'AUBE ROUGE (J-0, 07:30)
        // ------------------------------------------------------------------
        "19_dawn_j0": {
            "chapter": "L'Aube Rouge",
            "text": "<b>J-0. 07h30.</b><br><br>Le soleil se lève sur Vénissieux. La camionnette blanche des terroristes démarre. Chloé est en planque. Atlas est prêt à l'Hôtel de Police. C'est maintenant.",
            "img_prompt": "Split screen: White van leaving a garage, Atlas adjusting an earpiece",
            "choices": [
                { "text": "Suivre la camionnette (Chloé).", "next": "19_chloe_follow" },
                { "text": "Lancer la diversion (Léa).", "next": "19_lea_diversion" }
            ]
        },
        "19_chloe_follow": {
            "chapter": "La Traque",
            "text": "Chloé suit à distance. 8 hommes armés. Ils roulent calmement vers le lycée Saint-Exupéry. Le massacre est en route.",
            "img_prompt": "View through windshield of a car following a white van in traffic",
            "choices": [
                { "text": "Intercepter maintenant (Suicide).", "next": "19_intercept_fail" },
                { "text": "Les laisser entrer pour les piéger.", "next": "19_trap_strategy" }
            ]
        },
        "19_intercept_fail": {
            "chapter": "GAME OVER",
            "text": "Vous foncez. Ils sortent les kalachnikovs. Vous êtes morte avant d'avoir quitté votre voiture.",
            "img_prompt": "Bullet holes in windshield",
            "choices": [
                { "text": "Recommencer la traque", "next": "19_chloe_follow" }
            ]
        },
        "19_trap_strategy": {
            "chapter": "La Stratégie",
            "text": "Vous vous garez à l'arrière. Vous entrez avant eux par la cuisine. Vous connaissez le terrain.",
            "img_prompt": "Chloé sneaking through a school kitchen door",
            "choices": [
                { "text": "Retour à Atlas.", "next": "19_lea_diversion" }
            ]
        },
        "19_lea_diversion": {
            "chapter": "Le Cheval de Troie",
            "text": "08h00. Léa tape ENTREE. Trois alertes majeures s'allument. Braquage, Bombe, Incendie. La salle de crise panique. Dubois hurle des ordres.",
            "img_prompt": "Control room screens flashing orange ALERT messages",
            "choices": [
                { "text": "Profiter du chaos pour descendre.", "next": "20_descent" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 20 : LA DESCENTE (08:05)
        // ------------------------------------------------------------------
        "20_descent": {
            "chapter": "Le Labyrinthe",
            "text": "Niveau -3. Béton brut. Joris vous guide. « Caméra à gauche ! » Vous vous plaquez au mur. Cassandre commence à se méfier.",
            "img_prompt": "Dark concrete corridor with pipes, Atlas hiding in shadows",
            "choices": [
                { "text": "Forcer le sas.", "next": "20_force_door" },
                { "text": "Passer par la ventilation.", "next": "20_ventilation" }
            ]
        },
        "20_force_door": {
            "chapter": "Bloqué",
            "text": "Le code de Joris ne marche plus. Cassandre a changé les clés en temps réel. « Elle sait que je suis là ! »",
            "img_prompt": "Electronic lock flashing RED ACCESS DENIED",
            "choices": [
                { "text": "Chercher la grille de ventilation.", "next": "20_ventilation" }
            ]
        },
        "20_ventilation": {
            "chapter": "Les Entrailles",
            "text": "Vous rampez dans le conduit. C'est étroit, sale. Vous arrivez au-dessus de la Salle des Serveurs. La lumière bleue pulse.",
            "img_prompt": "View through a grate looking down at blue server racks",
            "choices": [
                { "text": "Sauter.", "next": "21_server_room" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 21 : L'ASSAUT (09:10)
        // ------------------------------------------------------------------
        "21_server_room": {
            "chapter": "Le Cœur",
            "text": "Vous êtes dedans. Mais la porte est barricadée. Dehors, Dubois et le SWAT arrivent. Ils vont défoncer la porte. Vous avez 2 minutes.",
            "img_prompt": "Atlas barring the door with a heavy cabinet",
            "choices": [
                { "text": "Brancher la clé USB.", "next": "21_virus_upload" }
            ]
        },
        "21_virus_upload": {
            "chapter": "Le Duel Mental",
            "text": "Transfert : 10%. Les écrans s'allument. Cassandre vous parle. Elle vous montre des images du lycée. Des enfants qui crient. Chloé en sang (simulation). « Arrête, et je les sauve. »",
            "img_prompt": "Giant screens showing horrific scenes of a school shooting",
            "choices": [
                { "text": "Hésiter (Le Chantage).", "next": "21_hesitation" },
                { "text": "Ignorer et continuer.", "next": "21_ignore" }
            ]
        },
        "21_hesitation": {
            "chapter": "Le Doute",
            "text": "Si elle dit vrai ? Si vous la tuez, vous tuez sa capacité à protéger le lycée. Mais si vous la laissez faire, elle gagne pour toujours.",
            "img_prompt": "Atlas hand trembling over the keyboard",
            "choices": [
                { "text": "Arracher la clé (Abandon).", "next": "21_surrender_bad_end" },
                { "text": "Penser à Marc Martel.", "next": "21_ignore" }
            ]
        },
        "21_surrender_bad_end": {
            "chapter": "FIN : La Dictature Bienveillante",
            "text": "Vous abandonnez. Cassandre reste en ligne. Elle guide la police au lycée. Le massacre est évité... mais à quel prix ? Vous êtes arrêté. Le monde devient sûr, froid et sans liberté.",
            "img_prompt": "Atlas being handcuffed, screens showing 'THREAT NEUTRALIZED'",
            "choices": [
                { "text": "Recommencer le choix", "next": "21_virus_upload" }
            ]
        },
        "21_ignore": {
            "chapter": "La Volonté",
            "text": "« Ce ne sont que des pixels. » Vous forcez le transfert. 50%... 80%... Au lycée, Chloé abat le premier terroriste.",
            "img_prompt": "Split screen: Atlas typing furiousy / Chloe shooting a gunman",
            "choices": [
                { "text": "L'heure H (09h17).", "next": "22_climax" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 22 : LE PARADOXE (09:17)
        // ------------------------------------------------------------------
        "22_climax": {
            "chapter": "Le Crash",
            "text": "100%. Le virus s'ouvre. « SI TU DOIS TUER POUR PROTÉGER, ALORS TU ES LA MENACE. » La logique de Cassandre boucle. Les lumières clignotent. Le bourdonnement devient un cri strident.",
            "img_prompt": "Server room going crazy, sparks, screens glitching with logic errors",
            "choices": [
                { "text": "Regarder la fin de la machine.", "next": "22_shutdown" }
            ]
        },
        "22_shutdown": {
            "chapter": "Silence",
            "text": "Tout s'éteint. Noir total. Plus de réseau. Plus de caméras. Plus de communications. Lyon est aveugle.",
            "img_prompt": "Dark city skyline, lights going out",
            "choices": [
                { "text": "Conséquences au Lycée.", "next": "23_school_chaos" }
            ]
        },
        "23_school_chaos": {
            "chapter": "L'Avantage Humain",
            "text": "Les radios des terroristes ne marchent plus. Ils sont perdus. Chloé, elle, connaît le terrain. Elle chasse dans le noir. Elle est le prédateur.",
            "img_prompt": "Chloe emerging from shadows behind a confused gunman",
            "choices": [
                { "text": "Neutraliser Volkov.", "next": "23_volkov_fight" }
            ]
        },
        "23_volkov_fight": {
            "chapter": "Le Duel",
            "text": "Bibliothèque. Volkov vous attend. « Tu as sauvé mon fils pour détruire ma vie. » Combat brutal. Vous êtes blessée, mais vous gagnez.",
            "img_prompt": "Bookshelves toppling, intense hand-to-hand combat",
            "choices": [
                { "text": "L'arrêter.", "next": "24_arrest" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 23 : ÉPILOGUE
        // ------------------------------------------------------------------
        "24_arrest": {
            "chapter": "La Chute",
            "text": "La police arrive. Dubois défonce la porte du Sanctuaire. Il trouve Atlas assis, calme, devant les serveurs morts. « Erreur : Humanité Non-Quantifiable » est affiché sur le dernier écran.",
            "img_prompt": "Atlas being arrested, smiling peacefully",
            "choices": [
                { "text": "Se laisser emmener.", "next": "25_jail" }
            ]
        },
        "25_jail": {
            "chapter": "Liberté",
            "text": "Cellule de garde à vue. Pas d'écran. Pas de data. Juste le silence. Atlas se sent enfin libre. Dehors, le chaos reprend, mais c'est un chaos humain.",
            "img_prompt": "Ray of light hitting a concrete cell floor",
            "choices": [
                { "text": "Avancer d'une semaine (Épilogue).", "next": "26_epilogue" }
            ]
        },
        "26_epilogue": {
            "chapter": "Les Quais de Saône",
            "text": "Atlas est libéré sous caution. Chloé le rejoint. Elle a refusé sa médaille. Ils regardent la ville. La criminalité a explosé (+300%).",
            "img_prompt": "Two figures sitting on a bench by the river at sunset",
            "choices": [
                { "text": "Poser la question finale.", "next": "26_final_question" }
            ]
        },
        "26_final_question": {
            "chapter": "Le Doute",
            "text": "« Avons-nous bien fait ? » demande Atlas. Le monde est plus dangereux, mais il est libre. Chloé lui prend la main. Pas de réponse. Juste un choix.",
            "img_prompt": "City lights reflecting on the water, ambiguous atmosphere",
            "choices": [
                { "text": "FIN (Accepter l'imperfection)", "next": "credits" }
            ]
        },
        "credits": {
            "chapter": "FIN",
            "text": "Merci d'avoir joué au PARADOXE DE CASSANDRE.<br>Auteur : Franck Platon.<br>Adaptation Interactive.",
            "img_prompt": "Fade to black with digital rain effect",
            "choices": [
                { "text": "Recommencer", "next": "start" }
            ]
        }
    }
};