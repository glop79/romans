window.GAME_DATA = {
    "title": "LE GÈNE DE QIN",
    "author": "Franck Platon - Adaptation Interactive",
    "nodes": {
        // ------------------------------------------------------------------
        // INTRODUCTION & MENU PRINCIPAL
        // ------------------------------------------------------------------
        "start": {
            "chapter": "ACCUEIL",
            "text": "Bienvenue dans l'adaptation intégrale du <b>GÈNE DE QIN</b>.<br><br>Vos choix auront des conséquences immédiates (mort, blessure) ou retardées (alliances, indices).<br><br>Vous allez explorer l'histoire à travers les yeux de plusieurs personnages à travers les millénaires.",
            "img_prompt": "Cinematic title screen, DNA helix made of ice and ancient bronze, dark background, 8k",
            "choices": [
                { "text": "Commencer l'aventure (Prologue : 221 av. J.-C.)", "next": "p_001_intro" },
                { "text": "En savoir plus sur les règles de survie", "next": "intro_rules" }
            ]
        },
        "intro_rules": {
            "chapter": "RÈGLES DE SURVIE",
            "text": "Dans cette aventure :<br>1. <b>L'observation est clé</b> : Les détails décrits dans le texte contiennent souvent la solution.<br>2. <b>Le temps est compté</b> : Certaines actions précipitées mènent à la mort, mais l'hésitation aussi.<br>3. <b>La science et la guerre</b> : Vous devrez penser parfois comme un scientifique (Léo), parfois comme un soldat (Sam/Jin).",
            "img_prompt": "Tactical HUD interface showing biological stats and a map",
            "choices": [
                { "text": "J'ai compris. Commencer.", "next": "p_001_intro" }
            ]
        },

        // ------------------------------------------------------------------
        // PROLOGUE : 221 AVANT J.C. - BAO LE SCRIBE
        // ------------------------------------------------------------------
        "p_001_intro": {
            "chapter": "PROLOGUE : Le Tombeau des Cieux",
            "text": "<b>Massif du Kunlun, Plateau Tibétain<br>26ème année du règne de Qin Shi Huang</b><br><br>Le vent est un rasoir. Il ne se contente pas de souffler, il écorche. Vous êtes Bao, scribe de troisième rang. Vos doigts, engourdis par le gel, serrent votre pinceau comme une arme dérisoire.",
            "img_prompt": "Ancient chinese scribe shivering in a snow blizzard, high mountains, cinematic",
            "choices": [
                { "text": "Essayer de réchauffer l'encre.", "next": "p_002_ink" },
                { "text": "Observer le campement dévasté.", "next": "p_003_camp" }
            ]
        },
        "p_002_ink": {
            "chapter": "PROLOGUE",
            "text": "Vous soufflez sur le boîtier à encre. Votre haleine forme un nuage blanc qui gèle instantanément sur vos cils. L'encre reste pâteuse, noire comme le sang coagulé. C'est inutile. L'art de l'écriture meurt ici.",
            "img_prompt": "Close up on frozen ink stone and brush, snowy background",
            "choices": [
                { "text": "Regarder autour de vous.", "next": "p_003_camp" }
            ]
        },
        "p_003_camp": {
            "chapter": "PROLOGUE",
            "text": "Il ne reste presque rien. Des cent hommes d'élite partis de Xianyang, il n'en reste que douze. Les yacks sont morts cette nuit. Leurs cadavres forment des monticules sombres sous la neige qui s'accumule. Le silence est total, brisé seulement par le claquement des étendards impériaux en lambeaux.",
            "img_prompt": "Dead yaks covered in snow, tattered chinese flags blowing in wind",
            "choices": [
                { "text": "Aller voir le Capitaine Jin.", "next": "p_004_jin" },
                { "text": "Aller voir Maître Wei.", "next": "p_005_wei" }
            ]
        },
        "p_004_jin": {
            "chapter": "PROLOGUE",
            "text": "Le Capitaine Jin est debout face au vent, immobile comme une statue de terre cuite. Son armure de cuir craque. Il scrute l'horizon blanc. Il sait que la mort arrive. Il ne vous regarde même pas.",
            "img_prompt": "Chinese general in armor looking at the horizon, stern face, snow falling",
            "choices": [
                { "text": "Lui demander si on fait demi-tour.", "next": "p_006_jin_talk" },
                { "text": "Attendre ses ordres en silence.", "next": "p_007_jin_silent" }
            ]
        },
        "p_005_wei": {
            "chapter": "PROLOGUE",
            "text": "Maître Wei est accroupi, ses robes de soie inadaptées claquant au vent. Il sourit. Un sourire fou. Il tient un compas géomantique qui tourne follement. 'Le dragon est proche, Bao. Tu le sens ?'",
            "img_prompt": "Crazy old alchemist holding a spinning compass, manic expression",
            "choices": [
                { "text": "Dire que vous ne sentez que le froid.", "next": "p_008_wei_cold" },
                { "text": "Feindre de comprendre.", "next": "p_009_wei_faith" }
            ]
        },
        "p_006_jin_talk": {
            "chapter": "PROLOGUE",
            "text": "Jin tourne lentement la tête. Ses yeux sont cernés de fatigue. 'Demi-tour ? Il n'y a pas de retour, scribe. L'Empereur veut l'immortalité. Si nous rentrons les mains vides, nous serons exécutés. Si nous restons, nous gèlerons. Choisis ta mort.'",
            "img_prompt": "General Jin talking to the scribe, intense expression, tired eyes",
            "choices": [
                { "text": "Retourner à votre poste.", "next": "p_010_alert" }
            ]
        },
        "p_007_jin_silent": {
            "chapter": "PROLOGUE",
            "text": "Jin apprécie votre silence. Il pointe un doigt ganté vers une crête noire. 'Là-bas. Quelque chose a bougé. Pas le vent.'",
            "img_prompt": "Finger pointing at a dark ridge in the distance",
            "choices": [
                { "text": "Plisser les yeux pour voir.", "next": "p_010_alert" }
            ]
        },
        "p_008_wei_cold": {
            "chapter": "PROLOGUE",
            "text": "Wei ricane. 'Ton esprit est gelé, comme tes doigts. C'est pour cela que tu n'es qu'un scribe et moi un alchimiste. L'énergie ici... elle pourrait faire bouillir le thé sans feu.'",
            "img_prompt": "Alchemist laughing, snow on his beard",
            "choices": [
                { "text": "S'éloigner du fou.", "next": "p_010_alert" }
            ]
        },
        "p_009_wei_faith": {
            "chapter": "PROLOGUE",
            "text": "'Bien. Bien.' Wei vous tape sur l'épaule. 'Les Cieux récompensent ceux qui voient l'invisible.'",
            "img_prompt": "Alchemist nodding approvingly",
            "choices": [
                { "text": "Un cri retentit.", "next": "p_010_alert" }
            ]
        },
        "p_010_alert": {
            "chapter": "PROLOGUE : La Découverte",
            "text": "Soudain, un des éclaireurs, Chen, hurle. Il est posté à cent pas, près d'une paroi rocheuse. Il agite les bras frénétiquement. Il ne pointe pas un ennemi. Il pointe la terre.",
            "img_prompt": "Soldier in distance waving arms, snowy landscape",
            "choices": [
                { "text": "Courir vers lui avec les autres.", "next": "p_011_fissure" },
                { "text": "Attendre que Jin avance.", "next": "p_012_prudence" }
            ]
        },
        "p_011_fissure": {
            "chapter": "PROLOGUE",
            "text": "Vous arrivez essoufflé. Ce n'est pas une simple crevasse. C'est une plaie béante dans la montagne. Une fente verticale, noire, parfaite. La roche autour est lisse, comme fondue.",
            "img_prompt": "Dark unnatural vertical opening in a rocky cliff wall",
            "choices": [
                { "text": "S'approcher du bord.", "next": "p_013_sensation" }
            ]
        },
        "p_012_prudence": {
            "chapter": "PROLOGUE",
            "text": "Jin passe devant vous, épée au clair. Il inspecte l'entrée. Il renifle l'air. 'Ça ne sent pas la bête,' grogne-t-il. 'Ça sent l'orage.'",
            "img_prompt": "General sniffing the air near a dark cave",
            "choices": [
                { "text": "S'approcher à son tour.", "next": "p_013_sensation" }
            ]
        },
        "p_013_sensation": {
            "chapter": "PROLOGUE : Le Seuil",
            "text": "À l'instant où vous franchissez le seuil, le monde change. Le vent s'arrête net. Le froid mordant disparaît, remplacé par une chaleur lourde, humide. Une odeur de terre mouillée et de métal chaud vous prend à la gorge.",
            "img_prompt": "Transition from snowy blizzard to dark humid cave interior",
            "choices": [
                { "text": "Allumer une torche.", "next": "p_014_light" },
                { "text": "Avancer dans l'obscurité.", "next": "p_015_dark_fail" }
            ]
        },
        "p_015_dark_fail": {
            "chapter": "MORT",
            "text": "Vous faites trois pas dans le noir. Le sol se dérobe. C'était un à-pic. Vous tombez dans les entrailles de la montagne. Votre aventure s'arrête ici, brisée sur les rochers.",
            "img_prompt": "Falling into a dark abyss",
            "choices": [
                { "text": "Recommencer le seuil", "next": "p_013_sensation" }
            ]
        },
        "p_014_light": {
            "chapter": "PROLOGUE",
            "text": "Le feu de la torche crépite. Les flammes révèlent des parois couvertes d'une mousse pâle qui semble... pulser. Une lueur verte, maladive, répond à votre feu. Et il y a ce son. Un bourdonnement grave, ressenti dans les dents plus qu'entendu.",
            "img_prompt": "Torch illuminating pulsating green moss on cave walls",
            "choices": [
                { "text": "Toucher la mousse.", "next": "p_016_touch_moss" },
                { "text": "Suivre Wei qui s'enfonce.", "next": "p_017_deep" }
            ]
        },
        "p_016_touch_moss": {
            "chapter": "PROLOGUE",
            "text": "La mousse est chaude, visqueuse. Elle se rétracte sous votre doigt comme un muscle vivant. Vous retirez votre main avec dégoût. Ce n'est pas une plante. C'est de la chair.",
            "img_prompt": "Finger touching alien-looking moss",
            "choices": [
                { "text": "Essuyer sa main et avancer.", "next": "p_017_deep" }
            ]
        },
        "p_017_deep": {
            "chapter": "PROLOGUE : La Caverne",
            "text": "Le tunnel s'ouvre sur une cathédrale naturelle. Au centre, une vasque noire, parfaitement circulaire. Wei tombe à genoux. 'L'élixir ! L'Empereur vivra dix mille ans !' Il court vers la vasque.",
            "img_prompt": "Massive cave chamber with a central black pool",
            "choices": [
                { "text": "Le suivre.", "next": "p_018_basin" },
                { "text": "Rester avec Jin qui examine le sol.", "next": "p_019_clues" }
            ]
        },
        "p_018_basin": {
            "chapter": "PROLOGUE",
            "text": "La vasque contient un liquide noir, épais comme de l'huile, mais qui ne reflète aucune lumière. Wei sort la fiole impériale en bronze. Ses mains tremblent d'excitation.",
            "img_prompt": "Old man holding a bronze vessel over black liquid",
            "choices": [
                { "text": "L'observer.", "next": "p_020_harvest" }
            ]
        },
        "p_019_clues": {
            "chapter": "PROLOGUE : Les Traces",
            "text": "Jin s'accroupit. 'Regarde ça, scribe.' Il éclaire le sol. Des griffures profondes dans la roche dure. Cinq griffes. Et un casque, écrasé comme une coquille d'œuf. 'Ce n'est pas un temple,' dit Jin. 'C'est une mangeoire.'",
            "img_prompt": "Claw marks on stone floor and a crushed helmet",
            "choices": [
                { "text": "Prévenir Wei !", "next": "p_020_harvest" }
            ]
        },
        "p_020_harvest": {
            "chapter": "PROLOGUE : L'Erreur",
            "text": "Wei plonge la fiole dans le liquide. Au moment où la surface est brisée, le bourdonnement s'arrête. Un silence absolu tombe sur la caverne. Lourd. Menaçant.",
            "img_prompt": "Ripples in the black liquid, silence visual representation",
            "choices": [
                { "text": "Regarder le plafond.", "next": "p_021_ceiling" },
                { "text": "Regarder l'entrée du tunnel.", "next": "p_022_entrance" }
            ]
        },
        "p_021_ceiling": {
            "chapter": "PROLOGUE",
            "text": "Là-haut, dans les ténèbres, quelque chose bouge. Une forme pâle se décroche d'une stalactite. Elle ne tombe pas. Elle descend avec une lenteur fluide, comme une araignée.",
            "img_prompt": "Pale creature climbing down from ceiling shadows",
            "choices": [
                { "text": "Crier.", "next": "p_023_attack" }
            ]
        },
        "p_022_entrance": {
            "chapter": "PROLOGUE",
            "text": "Une silhouette se dessine dans l'ombre du tunnel. Humanoïde. Trop grande. Trop maigre. Pas de visage.",
            "img_prompt": "Silhouette of a tall thin faceless creature in backlight",
            "choices": [
                { "text": "Dégainer votre dague.", "next": "p_023_attack" }
            ]
        },
        "p_023_attack": {
            "chapter": "PROLOGUE : Le Massacre",
            "text": "Ça va trop vite. Le soldat près de Wei est soulevé de terre par une main invisible. Sa tête tombe. Wei hurle. Une créature pâle est sur lui. Elle pose sa main sur son front. Wei s'effondre, inerte. La fiole roule au sol.",
            "img_prompt": "Battle scene in cave, monsters attacking soldiers",
            "choices": [
                { "text": "Se cacher derrière un rocher.", "next": "p_024_coward" },
                { "text": "Obéir à Jin : Récupérer la fiole.", "next": "p_025_heroic" }
            ]
        },
        "p_024_coward": {
            "chapter": "FIN : Le Témoin Silencieux",
            "text": "Vous vous cachez. Vous voyez Jin se battre et mourir. Vous voyez les créatures emmener les corps. Vous restez seul. Vous mourez de faim dans le noir, trois jours plus tard.",
            "img_prompt": "Skeleton hiding behind a rock in a cave",
            "choices": [
                { "text": "Recommencer le combat", "next": "p_023_attack" }
            ]
        },
        "p_025_heroic": {
            "chapter": "PROLOGUE",
            "text": "Jin charge les monstres. 'Cours, Bao ! Pour l'Empire !' Vous vous jetez en avant, glissant sur le sang. Vos doigts se referment sur la fiole de bronze. Elle vibre.",
            "img_prompt": "Hand grabbing a bronze vial on a bloody floor",
            "choices": [
                { "text": "Courir vers la sortie.", "next": "p_026_run" }
            ]
        },
        "p_026_run": {
            "chapter": "PROLOGUE : La Fuite",
            "text": "Vous courrez. Derrière vous, le cri de guerre de Jin se transforme en un gargouillis. Vous ne vous retournez pas. Le tunnel semble s'étirer. La chaleur augmente. Votre cœur va exploser.",
            "img_prompt": "Motion blur of running through a cave tunnel",
            "choices": [
                { "text": "Continuer sans s'arrêter.", "next": "p_027_light" }
            ]
        },
        "p_027_light": {
            "chapter": "PROLOGUE : Le Froid",
            "text": "Vous jaillissez dans le blizzard. Le froid vous frappe comme un marteau. Vous tombez dans la neige. Vous rampez. Vous vous attendez à sentir des griffes dans votre dos.",
            "img_prompt": "Man collapsing in snow storm coming out of a cave",
            "choices": [
                { "text": "Se retourner.", "next": "p_028_watchers" }
            ]
        },
        "p_028_watchers": {
            "chapter": "PROLOGUE : Les Observateurs",
            "text": "Elles sont là. À l'entrée de la grotte. Deux créatures. Elles ne sortent pas. Elles vous regardent fuir. Elles penchent la tête sur le côté, curieuses. Elles vous laissent partir. Vous serrez la fiole. Vous avez survécu. Mais vous portez la malédiction.",
            "img_prompt": "Two monsters standing at cave entrance watching, cinematic shot",
            "choices": [
                { "text": "Avancer de 2246 ans.", "next": "c1_001_intro" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 1 : 2025 - LE RÉVEIL
        // ------------------------------------------------------------------
        "c1_001_intro": {
            "chapter": "CHAPITRE 1 : L'Extraction",
            "text": "<b>Massif du Kunlun, 2025</b><br><br>Le Dr Aris Thorne regarde le bloc de glace remonter du puits de forage. Les projecteurs LED éclairent ce qui est piégé à l'intérieur : un homme en tunique ancienne, recroquevillé, tenant un objet en bronze. Les données s'affichent sur sa tablette.",
            "img_prompt": "Modern expedition site in mountains, extracting a block of ice with a laser drill",
            "choices": [
                { "text": "Lire les données biométriques.", "next": "c1_002_data" }
            ]
        },
        "c1_002_data": {
            "chapter": "CHAPITRE 1",
            "text": "C'est impossible. Température corporelle : -30°C. Mais intégrité cellulaire : 100%. Pas de cristallisation. L'homme n'est pas mort. Il est en pause. 'Emballez-le,' ordonne Thorne. 'Destination Genève. Protocole Sterling.'",
            "img_prompt": "Tablet screen showing perfect cell structure diagram",
            "choices": [
                { "text": "Transition : Montpellier.", "next": "c1_003_leo" }
            ]
        },
        "c1_003_leo": {
            "chapter": "CHAPITRE 1 : L'Obsession",
            "text": "<b>Institut de Génétique Humaine, Montpellier.</b><br><br>Léo Valmont se frotte les yeux. Il est 4h du matin. Son labo est un capharnaüm de tasses de café et de papiers. Sur l'écran, une simulation de division cellulaire échoue encore. 'Merde,' murmure-t-il.",
            "img_prompt": "Young scientist messy hair looking frustrated at computer screens in dark lab",
            "choices": [
                { "text": "Regarder la photo au mur.", "next": "c1_004_elise" },
                { "text": "Relancer la simulation.", "next": "c1_005_work" }
            ]
        },
        "c1_004_elise": {
            "chapter": "CHAPITRE 1",
            "text": "La photo d'Élise. 12 ans, chauve, souriante. Morte de progéria. Votre petite sœur. Vous lui avez promis de trouver le bug dans le code humain. Vous avez échoué pour elle. Vous ne voulez pas échouer pour les autres.",
            "img_prompt": "Photo of a smiling bald girl pinned on a corkboard with scientific notes",
            "choices": [
                { "text": "Une notification apparaît sur l'écran.", "next": "c1_006_notif" }
            ]
        },
        "c1_005_work": {
            "chapter": "CHAPITRE 1",
            "text": "Vous changez un paramètre. La simulation tourne... Erreur. Sénescence inévitable. L'ADN se dégrade. C'est une loi physique. On ne peut pas empêcher l'entropie.",
            "img_prompt": "Screen showing ERROR red message on DNA spiral",
            "choices": [
                { "text": "Une notification apparaît sur l'écran.", "next": "c1_006_notif" }
            ]
        },
        "c1_006_notif": {
            "chapter": "CHAPITRE 1 : La Fuite",
            "text": "Un pop-up discret. Un forum de hackers bio-informatiques. 'LEAK : KUNLUN ICE MAN - DATA DUMP'. Quelqu'un a fait fuiter les scans préliminaires de l'expédition de Thorne. C'est illégal de les télécharger.",
            "img_prompt": "Computer notification popping up on screen, dark web forum look",
            "choices": [
                { "text": "Télécharger les données immédiatement.", "next": "c1_007_download" },
                { "text": "Hésiter (Éthique).", "next": "c1_008_hesitate" }
            ]
        },
        "c1_007_download": {
            "chapter": "CHAPITRE 1",
            "text": "Le téléchargement est rapide. Vous ouvrez les fichiers. Vous ne croyez pas ce que vous voyez. Les télomères sont intacts. Les mitochondries sont parfaites. Cet homme a 2000 ans et ses cellules sont plus jeunes que les vôtres.",
            "img_prompt": "Scientist looking shocked at screen with glowing blue biological data",
            "choices": [
                { "text": "Tenter d'isoler le facteur X.", "next": "c1_009_factor" }
            ]
        },
        "c1_008_hesitate": {
            "chapter": "CHAPITRE 1",
            "text": "Vous hésitez. C'est du vol de données. Mais la curiosité est trop forte. Vous cliquez. Trop tard ? Non, le lien est encore actif. Vous avez les données.",
            "img_prompt": "Mouse cursor hovering over a download button",
            "choices": [
                { "text": "Analyser les données.", "next": "c1_007_download" }
            ]
        },
        "c1_009_factor": {
            "chapter": "CHAPITRE 1",
            "text": "Vous lancez vos algorithmes personnels sur les données volées. Votre code cherche des anomalies. Il en trouve une. Une séquence virale inconnue imbriquée dans l'ADN poubelle. Ce n'est pas humain.",
            "img_prompt": "Code scrolling fast, identifying a red anomaly sequence",
            "choices": [
                { "text": "Quelqu'un frappe à la porte.", "next": "c1_010_knock" }
            ]
        },
        "c1_010_knock": {
            "chapter": "CHAPITRE 1 : L'Intrusion",
            "text": "Deux coups secs. Il est 5h du matin. Personne ne vient à cette heure-là. Vous n'attendez personne. Votre cœur s'accélère.",
            "img_prompt": "Shadowy figure seen through frosted glass door of lab",
            "choices": [
                { "text": "Fermer l'ordinateur et ouvrir.", "next": "c1_011_open" },
                { "text": "Demander 'Qui est là ?' sans ouvrir.", "next": "c1_012_ask" }
            ]
        },
        "c1_011_open": {
            "chapter": "CHAPITRE 1",
            "text": "Un homme en costume sur mesure. Oreillette. Visage neutre. Il ne ressemble pas à un collègue. 'Dr Valmont ? M. Sterling aimerait vous parler.'",
            "img_prompt": "Man in black suit standing in doorway holding a tablet",
            "choices": [
                { "text": "Julian Sterling ? Le milliardaire ?", "next": "c1_013_sterling" }
            ]
        },
        "c1_012_ask": {
            "chapter": "CHAPITRE 1",
            "text": "'Ouvrez, Dr Valmont. Nous savons que vous avez téléchargé les données du Kunlun. Nous ne sommes pas la police.' La voix est calme, autoritaire.",
            "img_prompt": "a close up on Leo's worried face",
            "choices": [
                { "text": "Ouvrir la porte.", "next": "c1_011_open" }
            ]
        },
        "c1_013_sterling": {
            "chapter": "CHAPITRE 1 : L'Offre",
            "text": "L'homme vous tend une tablette. Le visage de Julian Sterling apparaît en appel vidéo. Il est dans un jet privé. 'Vous êtes le seul à avoir remarqué la séquence virale, Léo. Mes algorithmes ont détecté votre intrusion. Je ne vais pas vous poursuivre. Je vais vous embaucher.'",
            "img_prompt": "Video call with charismatic billionaire on tablet",
            "choices": [
                { "text": "Refuser.", "next": "c1_014_refuse_hard" },
                { "text": "Écouter la proposition.", "next": "c1_015_listen" }
            ]
        },
        "c1_014_refuse_hard": {
            "chapter": "FIN : La Prudence",
            "text": "'Je ne travaille pas pour des voleurs de tombes.' Vous claquez la porte. Le lendemain, votre disque dur est grillé à distance. Votre carrière est finie. Vous avez gardé votre intégrité, mais perdu votre but.",
            "img_prompt": "Leo packing a box with his belongings in the lab, looking sad",
            "choices": [
                { "text": "Recommencer le choix", "next": "c1_013_sterling" }
            ]
        },
        "c1_015_listen": {
            "chapter": "CHAPITRE 1",
            "text": "'Le corps arrive à Genève. J'ai le meilleur équipement du monde. J'ai l'échantillon. Mais il me manque le cerveau pour le comprendre. Vous voulez sauver des vies comme celle d'Élise ? C'est votre chance.' Il a touché la corde sensible.",
            "img_prompt": "Sterling leaning forward on screen, persuasive look",
            "choices": [
                { "text": "J'accepte. Je viens.", "next": "c1_016_accept" }
            ]
        },
        "c1_016_accept": {
            "chapter": "CHAPITRE 1 : Départ",
            "text": "L'homme en costume sourit sans joie. 'L'hélicoptère attend sur le toit.' Vous prenez juste votre sac à dos et la photo d'Élise. Vous laissez votre vie derrière vous.",
            "img_prompt": "Helicopter waiting on a roof at sunrise",
            "choices": [
                { "text": "Monter dans l'hélicoptère (Vers Chapitre 2)", "next": "c2_001_arrival" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 2 : L'ODYSSÉE - LA SCIENCE
        // ------------------------------------------------------------------
        "c2_001_arrival": {
            "chapter": "CHAPITRE 2 : L'Odyssée",
            "text": "<b>Quelque part en Méditerranée</b><br><br>Vous atterrissez sur le pont d'un yacht de 150 mètres. Ce n'est pas un bateau, c'est une forteresse flottante. Une femme vous attend. Brune, queue de cheval, cicatrice à l'arcade. Elle a l'air de pouvoir tuer avec un stylo.",
            "img_prompt": "Superyacht deck, tough woman standing with arms crossed",
            "choices": [
                { "text": "Se présenter poliment.", "next": "c2_002_sam_polite" },
                { "text": "Lui demander où est Sterling.", "next": "c2_003_sam_direct" }
            ]
        },
        "c2_002_sam_polite": {
            "chapter": "CHAPITRE 2",
            "text": "'Je suis Samira Belkacem. Chef de la sécurité. Appelez-moi Sam. Ne touchez à rien sans permission. Suivez-moi.' Elle est froide, professionnelle.",
            "img_prompt": "Samira guiding Leo through the ship corridors",
            "choices": [
                { "text": "La suivre.", "next": "c2_004_sterling_meet" }
            ]
        },
        "c2_003_sam_direct": {
            "chapter": "CHAPITRE 2",
            "text": "Elle vous dévisage. 'Il est occupé. Et vous êtes un invité, pas un roi. Je suis Samira Belkacem. Si vous sortez des clous, c'est à moi que vous aurez affaire.'",
            "img_prompt": "Samira is looking menacingly at Leo",
            "choices": [
                { "text": "Baisser les yeux et suivre.", "next": "c2_004_sterling_meet" }
            ]
        },
        "c2_004_sterling_meet": {
            "chapter": "CHAPITRE 2 : Le Visionnaire",
            "text": "Le bureau de Sterling. Immense. Vue sur la mer. Il est là, en chair et en os. Il semble... fatigué. Une légère toux. 'Bienvenue à bord, Léo. Prêt à changer l'histoire ?'",
            "img_prompt": "Sterling is standing near a large window overlooking the ocean",
            "choices": [
                { "text": "Je veux voir le corps.", "next": "c2_005_lab" },
                { "text": "Vous êtes malade ?", "next": "c2_006_sick" }
            ]
        },
        "c2_006_sick": {
            "chapter": "CHAPITRE 2",
            "text": "Le visage de Sterling se durcit. 'Nous avons tous une date de péremption, Léo. J'essaie juste de repousser la mienne indéfiniment. Ne perdons pas de temps.'",
            "img_prompt": "Sterling is looking annoyed, checking a watch on his wrist",
            "choices": [
                { "text": "Aller au laboratoire.", "next": "c2_005_lab" }
            ]
        },
        "c2_005_lab": {
            "chapter": "CHAPITRE 2 : Le Sanctuaire",
            "text": "Le laboratoire P4 est au cœur du navire. C'est de la science-fiction. Le bloc de glace est là, au centre. Votre équipe vous attend : Maria (Bio-Info), Tomás (Virologue), Imane (Génomique).",
            "img_prompt": "Futuristic lab with the ice block in center, team of scientists waiting",
            "choices": [
                { "text": "Saluer l'équipe et se mettre au travail.", "next": "c2_007_start_work" }
            ]
        },
        "c2_007_start_work": {
            "chapter": "CHAPITRE 2 : L'Ouverture",
            "text": "Sterling ordonne l'ouverture de la fiole de bronze. Le laser découpe le sceau. Imane manipule les bras robotiques. Le liquide à l'intérieur est une mélasse noire.",
            "img_prompt": "Robot arms opening the ancient vial, black liquid inside",
            "choices": [
                { "text": "Analyser la composition chimique.", "next": "c2_008_chem" },
                { "text": "Séquencer l'ADN viral.", "next": "c2_009_dna" }
            ]
        },
        "c2_008_chem": {
            "chapter": "CHAPITRE 2",
            "text": "C'est un cocktail de poisons : Mercure, Arsenic... et des composés végétaux inconnus. Ça aurait dû tuer n'importe qui. Mais ce n'est pas le poison qui est intéressant.",
            "img_prompt": "Chemical structure diagrams on a holographic screen",
            "choices": [
                { "text": "Passer au séquençage viral.", "next": "c2_009_dna" }
            ]
        },
        "c2_009_dna": {
            "chapter": "CHAPITRE 2 : Le Gène de Qin",
            "text": "Tomás siffle d'admiration. 'C'est un monstre. Un rétrovirus géant.' Il ne détruit pas les cellules. Il s'insère dans l'ADN et répare les erreurs. C'est une machine à rajeunir. Sterling exulte : 'Injectez-le moi !'",
            "img_prompt": "Complex virus model spinning on screen, Sterling looking excited",
            "choices": [
                { "text": "C'est trop dangereux. Il est inactif.", "next": "c2_010_inactive" }
            ]
        },
        "c2_010_inactive": {
            "chapter": "CHAPITRE 2",
            "text": "'Il est dormant,' expliquez-vous. 'Il manque une clé d'activation. Si vous l'injectez maintenant, il ne fera rien.' Sterling frappe du poing sur la table. 'Alors trouvez cette clé !'",
            "img_prompt": "Sterling angry, slamming hand on table",
            "choices": [
                { "text": "Chercher dans les protéines du sang.", "next": "c2_011_protein_fail" },
                { "text": "Chercher dans l'ADN non-codant de Bao.", "next": "c2_012_junk_success" }
            ]
        },
        "c2_011_protein_fail": {
            "chapter": "CHAPITRE 2 : Impasse",
            "text": "Vous cherchez pendant deux jours. Rien. Sterling devient menaçant. Sam vient vous voir. 'Vous cherchez mal, doc. Regardez ce qui n'est pas là.'",
            "img_prompt": "Leo looking tired and desperate, Sam giving advice",
            "choices": [
                { "text": "Analyser les 'silences' de l'ADN.", "next": "c2_012_junk_success" }
            ]
        },
        "c2_012_junk_success": {
            "chapter": "CHAPITRE 2 : La Musique des Sphères",
            "text": "Vous analysez l'ADN poubelle. Des motifs répétitifs. Vous les visualisez en 3D. Ce n'est pas une protéine. C'est une carte. Une carte du ciel d'il y a 2000 ans.",
            "img_prompt": "Star map emerging from DNA code",
            "choices": [
                { "text": "Identifier les constellations.", "next": "c2_013_map" }
            ]
        },
        "c2_013_map": {
            "chapter": "CHAPITRE 2 : Les Trois Points",
            "text": "En superposant la carte à la Terre, trois points s'allument. 1. Une vallée au Bhoutan. 2. Les Vallées Sèches en Antarctique. 3. Une fosse sous-marine au Japon (Yonaguni).",
            "img_prompt": "Holographic globe with three glowing red dots",
            "choices": [
                { "text": "Présenter la découverte à Sterling.", "next": "c2_014_briefing" }
            ]
        },
        "c2_014_briefing": {
            "chapter": "CHAPITRE 2 : La Prochaine Étape",
            "text": "'Magnifique,' dit Sterling. 'La clé d'activation est au Bhoutan. Le stabilisateur en Antarctique. Et la Source... au Japon. Préparez-vous, Léo. On part pour l'Himalaya.'",
            "img_prompt": "Sterling pointing at the Bhutan location on the map",
            "choices": [
                { "text": "Je ne suis pas un soldat.", "next": "c2_015_soldier" }
            ]
        },
        "c2_015_soldier": {
            "chapter": "CHAPITRE 2 : L'Avertissement",
            "text": "Sam vous attrape par le bras. 'Exactement. C'est pour ça que vous allez m'écouter. À partir de maintenant, vous m'appartenez. Je vais essayer de vous garder en vie.'",
            "img_prompt": "Sam grabbing Leo's arm, serious intense look",
            "choices": [
                { "text": "Commencer l'entraînement.", "next": "c3_001_training_start" }
            ]
        },
		// ------------------------------------------------------------------
        // CHAPITRE 3 : L'ENTRAÎNEMENT & LE BHOUTAN
        // ------------------------------------------------------------------
        "c3_001_training_start": {
            "chapter": "CHAPITRE 3 : La Dompteuse",
            "text": "<b>En mer, 05h30 du matin</b><br><br>La lumière s'allume brutalement dans votre cabine. La voix de Sam : 'Debout, Valmont. Le soleil n'attend pas.' Vous avez dormi 3 heures. Vous avez mal partout.",
            "img_prompt": "Leo waking up in a modern ship cabin, harsh light, looking tired",
            "choices": [
                { "text": "Se lever immédiatement.", "next": "c3_002_up" },
                { "text": "Grogner et traîner au lit.", "next": "c3_003_late" }
            ]
        },
        "c3_002_up": {
            "chapter": "CHAPITRE 3",
            "text": "Vous arrivez sur le pont. Sam vous regarde, chronomètre en main. 'Pas mal. On commence par 5km. Suivez-moi.' Elle part en courant.",
            "img_prompt": "Sam running on the deck, Leo following behind",
            "choices": [
                { "text": "Essayer de suivre son rythme.", "next": "c3_004_run_hard" },
                { "text": "Courir à votre rythme.", "next": "c3_005_run_slow" }
            ]
        },
        "c3_003_late": {
            "chapter": "CHAPITRE 3",
            "text": "Sam déboule dans votre cabine. Elle renverse votre lit. 'En mission, le retard c'est la mort. 50 pompes. Maintenant.'",
            "img_prompt": "Sam overturning a mattress, Leo falling on the floor surprised",
            "choices": [
                { "text": "Obéir.", "next": "c3_006_pushups" },
                { "text": "Protester.", "next": "c3_007_protest" }
            ]
        },
        "c3_004_run_hard": {
            "chapter": "CHAPITRE 3",
            "text": "Vous vomissez à la fin, mais vous avez tenu. Sam hoche la tête. 'Vous avez du cran. Ça servira.'",
            "img_prompt": "Leo vomiting on deck, Sam handing him a water bottle with a slight smile",
            "choices": [
                { "text": "Passer à la simulation tactique.", "next": "c3_008_sim_intro" }
            ]
        },
        "c3_005_run_slow": {
            "chapter": "CHAPITRE 3",
            "text": "Vous finissez loin derrière. Sam soupire. 'Si vous courez comme ça face à un Silencieux, vous êtes mort.'",
            "img_prompt": "Sam looking at stopwatch disappointed, Leo far behind panting",
            "choices": [
                { "text": "Passer à la simulation tactique.", "next": "c3_008_sim_intro" }
            ]
        },
        "c3_006_pushups": {
            "chapter": "CHAPITRE 3",
            "text": "Vous faites les pompes. Vos bras tremblent. Sam vous observe. 'La douleur est une information, Valmont. Apprenez à l'écouter.'",
            "img_prompt": "Leo doing pushups on cabin floor, Sam watching arms crossed",
            "choices": [
                { "text": "Passer à la simulation tactique.", "next": "c3_008_sim_intro" }
            ]
        },
        "c3_007_protest": {
            "chapter": "CHAPITRE 3",
            "text": "'Je suis scientifique, pas soldat !' Sam vous plaque contre le mur. 'Vos diplômes ne vous sauveront pas d'une balle. Faites les pompes.' Vous les faites.",
            "img_prompt": "Sam pinning Leo against a wall, intense face to face, tense atmosphere",
            "choices": [
                { "text": "Passer à la simulation tactique.", "next": "c3_008_sim_intro" }
            ]
        },
        "c3_008_sim_intro": {
            "chapter": "CHAPITRE 3 : Le Théâtre",
            "text": "Le hangar est transformé en salle de réalité virtuelle. Sam vous met un casque. 'Scénario : Récupération d'artefact. Vous devez traverser un pont sous le feu ennemi.'",
            "img_prompt": "Leo wearing VR headset and haptic vest in a high tech hangar",
            "choices": [
                { "text": "Lancer la simulation.", "next": "c3_009_sim_bridge" }
            ]
        },
        "c3_009_sim_bridge": {
            "chapter": "CHAPITRE 3",
            "text": "Vous êtes sur une falaise virtuelle. Un pont de singe. De l'autre côté, la mallette. Vous traversez. Vous prenez la mallette. Au retour, votre coéquipier virtuel est touché. Il saigne.",
            "img_prompt": "Virtual reality view of a rope bridge over a canyon, soldier bleeding",
            "choices": [
                { "text": "Lâcher la mallette pour sauver l'homme.", "next": "c3_010_save_man" },
                { "text": "Garder la mallette et laisser l'homme.", "next": "c3_011_save_case" }
            ]
        },
        "c3_010_save_man": {
            "chapter": "ÉCHEC SIMULATION",
            "text": "Vous aidez l'homme. Vous êtes lent. Une balle vous frappe. 'Mort,' dit la voix de Sam. 'Vous avez sacrifié la mission pour une émotion. En situation réelle, des millions de gens comptent sur cet artefact.'",
            "img_prompt": "VR screen showing 'MISSION FAILED' in red",
            "choices": [
                { "text": "Retirer le casque.", "next": "c3_012_lesson" }
            ]
        },
        "c3_011_save_case": {
            "chapter": "RÉUSSITE SIMULATION",
            "text": "Vous courez. L'homme crie derrière vous. Vous arrivez au point d'extraction. Sam hoche la tête. 'C'est froid. Mais c'est le bon choix. La mission prime sur l'individu.'",
            "img_prompt": "Sam nodding approvingly as Leo removes VR headset, looking shaken",
            "choices": [
                { "text": "Retirer le casque.", "next": "c3_012_lesson" }
            ]
        },
        "c3_012_lesson": {
            "chapter": "CHAPITRE 3 : La Leçon",
            "text": "Le soir, sur le pont. Sam regarde les étoiles. 'J'ai perdu un homme au Sahel parce qu'il voulait sauver ses échantillons. Ne soyez pas ce type, Léo. Mais ne devenez pas non plus comme Sterling.'",
            "img_prompt": "Night scene on ship deck, Sam and Leo talking quietly",
            "choices": [
                { "text": "Lui demander pourquoi elle reste avec Sterling.", "next": "c3_013_why_stay" },
                { "text": "Aller se coucher.", "next": "c3_014_sleep" }
            ]
        },
        "c3_013_why_stay": {
            "chapter": "CHAPITRE 3",
            "text": "'Parce qu'il a les moyens. Et parce que le monde est dangereux. Il vaut mieux être du côté du monstre qui tient la laisse.'",
            "img_prompt": "Close up on Sam's face, looking conflicted",
            "choices": [
                { "text": "Aller se coucher.", "next": "c3_014_sleep" }
            ]
        },
        "c3_014_sleep": {
            "chapter": "CHAPITRE 3 : L'Intrusion",
            "text": "Pendant ce temps, à Montpellier. Des ombres dans votre appartement. Le SVR (Services Secrets Russes). Ils ne volent rien. Ils laissent une clé USB sur votre oreiller. Un message.",
            "img_prompt": "Dark apartment, gloved hand placing a USB drive on a pillow",
            "choices": [
                { "text": "Avancer au lendemain (Alerte sécurité).", "next": "c3_015_alert" }
            ]
        },
        "c3_015_alert": {
            "chapter": "CHAPITRE 3 : L'Ours",
            "text": "Sam est furieuse. 'Les Russes savent qui vous êtes.' Elle a identifié l'agent : Anja Petrova. Une experte du SVR. Son grand-père a disparu en Antarctique en cherchant la même chose que vous.",
            "img_prompt": "Screen showing profile of Anja Petrova, blonde woman, cold look",
            "choices": [
                { "text": "Sterling veut accélérer le départ.", "next": "c3_016_departure" }
            ]
        },
        "c3_016_departure": {
            "chapter": "CHAPITRE 3 : Vers le Toit du Monde",
            "text": "Le jet de Sterling atterrit à Paro, Bhoutan. L'air est vif. Vous êtes une 'expédition géologique'. Sam a recruté des mercenaires. Kael, un guide népalais géant, vous attend.",
            "img_prompt": "Private jet on a runway in a deep valley, mountains all around",
            "choices": [
                { "text": "Prendre l'hélicoptère vers le monastère.", "next": "c3_017_heli" }
            ]
        },
        "c3_017_heli": {
            "chapter": "CHAPITRE 3 : L'Approche",
            "text": "L'hélicoptère vous dépose à 4500m. Le Monastère des Murmures est là, invisible depuis la vallée. Une forteresse accrochée au vide. Le vent siffle.",
            "img_prompt": "Helicopter landing on a small snowy plateau, monastery carved in cliff",
            "choices": [
                { "text": "Entrer dans le monastère.", "next": "c3_018_monks" }
            ]
        },
        "c3_018_monks": {
            "chapter": "CHAPITRE 3 : Les Gardiens Usés",
            "text": "Les moines sont... étranges. Ils sont très vieux. Ils bougent au ralenti. Leurs yeux sont laiteux. Ils répètent les mêmes gestes. Balayer. Prier. Ils semblent... vides.",
            "img_prompt": "Old monk sweeping dust in a corridor, robotic movement, empty eyes",
            "choices": [
                { "text": "Parler au Lama Tenzin.", "next": "c3_019_lama" },
                { "text": "Analyser l'air (Onde sonore).", "next": "c3_020_sound_check" }
            ]
        },
        "c3_019_lama": {
            "chapter": "CHAPITRE 3",
            "text": "Le Lama Tenzin est une momie vivante. 'Vous cherchez le son qui réveille la pierre. Prenez garde. La permanence use l'âme.' Il vous indique la direction de la Chambre de l'Écho.",
            "img_prompt": "Very old wrinkled monk sitting in lotus position in shadows",
            "choices": [
                { "text": "Aller à la Chambre.", "next": "c3_021_chamber" }
            ]
        },
        "c3_020_sound_check": {
            "chapter": "CHAPITRE 3",
            "text": "Vous sortez votre analyseur. Une onde de 12 Hz sature l'air. Infrason. C'est ce qui ralentit le métabolisme des moines... et leur cerveau. C'est une stase acoustique.",
            "img_prompt": "Device screen showing a sine wave at 12Hz",
            "choices": [
                { "text": "Aller à la source du son.", "next": "c3_021_chamber" }
            ]
        },
        "c3_021_chamber": {
            "chapter": "CHAPITRE 3 : La Chambre de Cristal",
            "text": "Une géode géante. Des cristaux de quartz partout. Le vent s'y engouffre et crée la résonance. C'est magnifique et terrifiant. Sam déploie ses hommes. Kael reste dehors. Vous installez votre matériel pour enregistrer la fréquence.",
            "img_prompt": "Inside a giant geode, crystals glowing, scientific equipment set up",
            "choices": [
                { "text": "Commencer l'enregistrement.", "next": "c3_022_recording" }
            ]
        },
        "c3_022_recording": {
            "chapter": "CHAPITRE 3 : Contact",
            "text": "L'analyse progresse. 80%... Sam lève le poing. 'Silence.' Elle a vu un reflet. Un miroir télescopique dans le couloir. Les Russes sont là.",
            "img_prompt": "Sam raising a fist, mercenaries aiming guns at the entrance",
            "choices": [
                { "text": "Continuer l'enregistrement (Risqué).", "next": "c3_023_risk_record" },
                { "text": "Se cacher immédiatement.", "next": "c3_024_hide" }
            ]
        },
        "c3_023_risk_record": {
            "chapter": "CHAPITRE 3",
            "text": "Vous restez sur le clavier. Anja Petrova surgit avec ses Spetsnaz. Fusillade. Dubois (mercenaire de Sam) est touché. Une balle frôle votre oreille. Mais vous avez la fréquence ! 100%.",
            "img_prompt": "Gunfight chaos, Leo typing furiously on keyboard, sparks flying",
            "choices": [
                { "text": "Sauvegarder sur le disque dur.", "next": "c3_025_explosion" }
            ]
        },
        "c3_024_hide": {
            "chapter": "CHAPITRE 3",
            "text": "Vous plongez derrière un cristal. La fusillade éclate. Votre écran est brisé par une balle. L'enregistrement est corrompu ! Non... le système de secours l'a sauvé. Juste à temps.",
            "img_prompt": "Leo hiding behind crystal, bullets hitting the equipment",
            "choices": [
                { "text": "Récupérer le disque dur.", "next": "c3_025_explosion" }
            ]
        },
        "c3_025_explosion": {
            "chapter": "CHAPITRE 3 : Le Chant Dissonant",
            "text": "Une grenade flashbang explose près du générateur. Surtension. L'amplificateur s'emballe. Le son de 12 Hz est projeté à une puissance dévastatrice. Tout le monde s'effondre, oreilles en sang. Le combat cesse.",
            "img_prompt": "Explosion near generator, shockwave effect visual",
            "choices": [
                { "text": "Se relever péniblement.", "next": "c3_026_monsters" }
            ]
        },
        "c3_026_monsters": {
            "chapter": "CHAPITRE 3 : Le Réveil",
            "text": "Ce n'est pas fini. Un cri inhumain vient de l'extérieur. Kael entre. Il marche bizarrement. Ses yeux sont blancs. Il chante une berceuse. Un mercenaire l'approche... Kael lui arrache la gorge.",
            "img_prompt": "Giant guide Kael with white eyes attacking a soldier, horror scene",
            "choices": [
                { "text": "Reculer.", "next": "c3_027_invasion" }
            ]
        },
        "c3_027_invasion": {
            "chapter": "CHAPITRE 3 : L'Invasion",
            "text": "Les moines arrivent. Ils ont changé. Le son les a 'activés'. Ils sont rapides, forts, indifférents à la douleur. C'est un massacre. Russes et hommes de Sam se font déchiqueter.",
            "img_prompt": "Monks swarming into the room, crawling on walls like insects",
            "choices": [
                { "text": "Sam vous attrape : 'On se tire !'", "next": "c3_028_run_corridor" }
            ]
        },
        "c3_028_run_corridor": {
            "chapter": "CHAPITRE 3 : La Fuite",
            "text": "Vous courez dans les couloirs. Anja Petrova est seule, blessée. Elle tire sur un moine. Sam hésite une seconde.",
            "img_prompt": "Corridor chase, Sam looking at Anja who is cornered",
            "choices": [
                { "text": "Crier à Sam de l'aider.", "next": "c3_029_help_anja" },
                { "text": "La laisser mourir.", "next": "c3_030_leave_anja" }
            ]
        },
        "c3_029_help_anja": {
            "chapter": "CHAPITRE 3 : Alliance",
            "text": "Sam tire une rafale qui décapite le moine menaçant Anja. 'Bouge, Petrova !' Les deux femmes échangent un regard. L'alliance est née dans le sang.",
            "img_prompt": "Sam shooting a monster to save Anja, shell casings flying",
            "choices": [
                { "text": "Descendre vers les souterrains.", "next": "c3_031_stairs" }
            ]
        },
        "c3_030_leave_anja": {
            "chapter": "FIN : Erreur Stratégique",
            "text": "Vous laissez Anja. Elle meurt. Mais elle avait les codes de sortie. Vous vous perdez dans le labyrinthe. Les moines vous trouvent. Vous rejoignez leur chœur éternel.",
            "img_prompt": "Dark corridor, shadows closing in on Leo",
            "choices": [
                { "text": "Recommencer le choix", "next": "c3_028_run_corridor" }
            ]
        },
        "c3_031_stairs": {
            "chapter": "CHAPITRE 3 : Les Anciens",
            "text": "Dans les escaliers, ce ne sont plus des moines. Ce sont des Silencieux. Les originaux. Pâles, sans visage. Ils sortent des murs. Vous perdez le disque dur !",
            "img_prompt": "Pale faceless creatures emerging from rock walls in a stairwell",
            "choices": [
                { "text": "Le récupérer (Risque extrême).", "next": "c3_032_disk_risk" },
                { "text": "Le laisser.", "next": "c3_033_disk_lost" }
            ]
        },
        "c3_032_disk_risk": {
            "chapter": "CHAPITRE 3",
            "text": "Vous plongez. Une main pâle vous frôle. Le froid vous brûle. Sam vous tire en arrière in extremis. Vous avez le disque. Vous sortez à l'air libre, dans la nuit glaciale.",
            "img_prompt": "Leo grabbing the hard drive while Sam shoots at a monster's hand",
            "choices": [
                { "text": "Courir vers le point d'extraction.", "next": "c4_001_aftermath" }
            ]
        },
        "c3_033_disk_lost": {
            "chapter": "FIN : Mission Échouée",
            "text": "Vous sortez vivant, mais sans les données. Sterling est furieux. Il vous renvoie dans le monastère pour les chercher. Seul.",
            "img_prompt": "Sterling looking disappointed on a screen, Leo standing alone in snow",
            "choices": [
                { "text": "Recommencer l'escalier", "next": "c3_031_stairs" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 4 : ANTARCTIQUE - LE FROID & LA TRAHISON
        // ------------------------------------------------------------------
        "c4_001_aftermath": {
            "chapter": "CHAPITRE 4 : Le Bilan",
            "text": "<b>Hélicoptère de secours, Inde.</b><br><br>Quatre survivants : Vous, Sam, Anja, et Giger (un mercenaire devenu fou). Sterling apparaît sur écran. Il s'en fiche des morts. Il est fasciné par l'effet 'zombie'. 'C'est un bug neurologique. Il faut le stabilisateur. Anja, guidez-nous en Antarctique.'",
            "img_prompt": "Inside helicopter, tired survivors, hologram of Sterling",
            "choices": [
                { "text": "Accepter la mission en Antarctique.", "next": "c4_002_briefing_anja" }
            ]
        },
        "c4_002_briefing_anja": {
            "chapter": "CHAPITRE 4 : L'Alliance des Scribes",
            "text": "Sam vous laisse seul avec Anja. 'Mon grand-père a trouvé un lichen. Lichenus Petrofskaya. Il protège la mémoire. C'est le contre-poison.' Vous réalisez que vous êtes deux scientifiques contre la folie de Sterling.",
            "img_prompt": "Leo and Anja looking at documents together, intimate atmosphere",
            "choices": [
                { "text": "Partager vos doutes sur Sterling.", "next": "c4_003_doubts" },
                { "text": "Rester professionnel.", "next": "c4_004_pro" }
            ]
        },
        "c4_003_doubts": {
            "chapter": "CHAPITRE 4",
            "text": "Anja sourit tristement. 'Il vous tuera quand il aura fini, Léo. Comme il tuera Sam. Préparez-vous.'",
            "img_prompt": "Anja whispering to Leo",
            "choices": [
                { "text": "Départ pour McMurdo.", "next": "c4_005_landing" }
            ]
        },
        "c4_004_pro": {
            "chapter": "CHAPITRE 4",
            "text": "Elle hoche la tête. 'Très bien. Concentrons-nous sur la survie.'",
            "img_prompt": "Anja nodding cold face",
            "choices": [
                { "text": "Départ pour McMurdo.", "next": "c4_005_landing" }
            ]
        },
        "c4_005_landing": {
            "chapter": "CHAPITRE 4 : Le Continent Fantôme",
            "text": "<b>Vallées Sèches, Antarctique.</b><br><br>Le désert le plus froid du monde. Pas de neige, juste de la roche et de la glace. Vous roulez en Hägglunds vers la base soviétique Vostok-7. Une tempête katabatique arrive. Le ciel devient blanc.",
            "img_prompt": "Tracked vehicles driving on barren icy landscape, storm clouds gathering",
            "choices": [
                { "text": "Entrer dans la base Vostok-7.", "next": "c4_006_vostok" }
            ]
        },
        "c4_006_vostok": {
            "chapter": "CHAPITRE 4 : Le Vaisseau Fantôme",
            "text": "La base est un tombeau de glace. Des corps gelés partout. Le grand-père d'Anja a laissé un journal : 'Ils ne dorment pas. Ils attendent.' Des grattements se font entendre dehors. La tempête vous piège.",
            "img_prompt": "Frozen interior of soviet base, icicles hanging from ceiling",
            "choices": [
                { "text": "Lire le journal.", "next": "c4_007_journal" }
            ]
        },
        "c4_007_journal": {
            "chapter": "CHAPITRE 4 : La Vérité",
            "text": "Le journal révèle que l'équipe est devenue des monstres. Ils sont dehors. Ils grattent à la porte. Sam organise la défense. 'Tirs à la tête uniquement.'",
            "img_prompt": "Close up on old diary pages with drawings of monsters",
            "choices": [
                { "text": "Proposer d'utiliser les ultrasons.", "next": "c4_008_ultrasound" },
                { "text": "Prendre une arme.", "next": "c4_009_weapon" }
            ]
        },
        "c4_008_ultrasound": {
            "chapter": "CHAPITRE 4",
            "text": "Vous piratez l'intercom pour diffuser un son suraigu. Les grattements cessent. Les monstres reculent. C'est une victoire temporaire. Sam vous regarde avec respect.",
            "img_prompt": "Leo hacking a old radio console, Sam watching",
            "choices": [
                { "text": "La tempête se calme.", "next": "c4_010_sabotage" }
            ]
        },
        "c4_009_weapon": {
            "chapter": "CHAPITRE 4",
            "text": "Sam vous donne un pistolet. 'Ne vous tirez pas dans le pied.' Vous tremblez. Heureusement, les barricades tiennent.",
            "img_prompt": "Leo holding a gun with shaking hands",
            "choices": [
                { "text": "La tempête se calme.", "next": "c4_010_sabotage" }
            ]
        },
        "c4_010_sabotage": {
            "chapter": "CHAPITRE 4 : Trahison Silencieuse",
            "text": "Pendant le calme, vous voyez Sam manipuler l'équipement d'Anja. Elle dévisse la valve d'oxygène. Elle essaie de la tuer 'accidentellement'.",
            "img_prompt": "Sam secretly tampering with an oxygen tank",
            "choices": [
                { "text": "Dénoncer Sam immédiatement.", "next": "c4_011_confront" },
                { "text": "Réparer la valve discrètement plus tard.", "next": "c4_012_fix_later" },
                { "text": "Ne rien faire (Laisser mourir Anja).", "next": "c4_013_let_die" }
            ]
        },
        "c4_011_confront": {
            "chapter": "CHAPITRE 4 : Le Jugement",
            "text": "Vous hurlez. Anja comprend. Les armes sont braquées. Vous vous interposez. 'Assez ! On a besoin d'elle pour trouver le lichen !' Vous prenez le commandement par la force morale.",
            "img_prompt": "Leo standing between two angry women pointing guns",
            "choices": [
                { "text": "Aller à l'Oasis.", "next": "c4_014_oasis_journey" }
            ]
        },
        "c4_012_fix_later": {
            "chapter": "CHAPITRE 4",
            "text": "Vous resserrez la valve quand Sam a le dos tourné. Anja vous voit faire. Elle comprend. Elle vous doit la vie.",
            "img_prompt": "Anja giving a subtle nod to Leo",
            "choices": [
                { "text": "Aller à l'Oasis.", "next": "c4_014_oasis_journey" }
            ]
        },
        "c4_013_let_die": {
            "chapter": "FIN : Perte d'Atout",
            "text": "Anja meurt d'hypoxie dans le désert. Sans elle, vous ne trouvez pas l'entrée cachée de l'Oasis. Vous mourez de froid en cherchant.",
            "img_prompt": "Body lying in the snow",
            "choices": [
                { "text": "Recommencer le choix", "next": "c4_010_sabotage" }
            ]
        },
        "c4_014_oasis_journey": {
            "chapter": "CHAPITRE 4 : L'Oasis",
            "text": "Le 'Pouce du Titan'. Une anomalie thermique. Une grotte chaude au milieu des glaces. À l'intérieur : le Jardin. Des plantes étranges. Et le Lichen bleu. Il pulse.",
            "img_prompt": "Cave filled with steam and bioluminescent blue plants",
            "choices": [
                { "text": "Analyser le lichen.", "next": "c4_015_lichen_analysis" }
            ]
        },
        "c4_015_lichen_analysis": {
            "chapter": "CHAPITRE 4 : La Révélation",
            "text": "Vous analysez l'enzyme du lichen. C'est la clé parfaite pour la serrure du virus. Trop parfaite. Probabilité naturelle : zéro. 'C'est artificiel,' dites-vous. 'Quelqu'un a placé le virus et l'antidote aux deux bouts du monde.'",
            "img_prompt": "Hologram showing lock and key mechanism of virus and enzyme",
            "choices": [
                { "text": "Récolter les échantillons et partir.", "next": "c4_016_ambush_prep" }
            ]
        },
        "c4_016_ambush_prep": {
            "chapter": "CHAPITRE 4 : Le Retour",
            "text": "Vous retournez aux véhicules. L'ambiance est lourde. Soudain, le véhicule de tête explose. Missile. Des hommes en blanc surgissent. Pas des Russes. Les mercenaires de Sterling.",
            "img_prompt": "Explosion of a tracked vehicle in the snow, men in white armor attacking",
            "choices": [
                { "text": "Se préparer au choc.", "next": "c4_017_betrayal" }
            ]
        },
		// ------------------------------------------------------------------
        // CHAPITRE 4 (SUITE) : LA TRAHISON & LA SURVIE
        // ------------------------------------------------------------------
        "c4_017_betrayal": {
            "chapter": "CHAPITRE 4 : Le Masque Tombe",
            "text": "Les mercenaires en blanc vous encerclent. Sam tente de riposter. Tzzzt. Un taser la foudroie. Anja est désarmée. Un hologramme de Sterling apparaît. 'Désolé Sam. Contrat terminé.'",
            "img_prompt": "Hologram of Sterling looking cruel, Sam on the ground spasming",
            "choices": [
                { "text": "Protester.", "next": "c4_018_protest" },
                { "text": "Regarder Sam.", "next": "c4_019_look_sam" }
            ]
        },
        "c4_018_protest": {
            "chapter": "CHAPITRE 4",
            "text": "'Vous ne pouvez pas faire ça !' criez-vous. Sterling rit. 'Je suis en train de le faire. Vous venez avec moi, Léo. Les filles restent ici pour nourrir les glaces.'",
            "img_prompt": "Sterling laughing, mercenaries grabbing Leo",
            "choices": [
                { "text": "Monter de force dans le véhicule.", "next": "c4_020_kidnap" }
            ]
        },
        "c4_019_look_sam": {
            "chapter": "CHAPITRE 4",
            "text": "Sam vous regarde, impuissante. Ses yeux crient vengeance. 'On se reverra,' semble-t-elle dire. On vous traîne vers le véhicule.",
            "img_prompt": "Close up on Sam's angry eyes",
            "choices": [
                { "text": "Monter de force dans le véhicule.", "next": "c4_020_kidnap" }
            ]
        },
        "c4_020_kidnap": {
            "chapter": "CHAPITRE 4 : L'Abandon",
            "text": "Le véhicule démarre. Vous regardez par la vitre arrière. Deux silhouettes minuscules, Sam et Anja, laissées seules dans le désert blanc, sans véhicule, sans abri. C'est une condamnation à mort.",
            "img_prompt": "View from a vehicle window of two small figures in a vast snowy landscape",
            "choices": [
                { "text": "Changer de point de vue : Sam & Anja.", "next": "c4_021_survivors" }
            ]
        },
        "c4_021_survivors": {
            "chapter": "CHAPITRE 4 : Les Survivantes",
            "text": "Le silence retombe. Le froid mord déjà. Anja vérifie son équipement. 'Ils nous ont laissé nos combinaisons. Erreur de débutant.' Sam se relève péniblement. 'On ne meurt pas aujourd'hui.'",
            "img_prompt": "Two women standing up in the snow, determined expressions",
            "choices": [
                { "text": "Chercher des débris utiles.", "next": "c4_022_scavenge" },
                { "text": "Marcher vers le camp (5km).", "next": "c4_023_walk_death" }
            ]
        },
        "c4_022_scavenge": {
            "chapter": "CHAPITRE 4",
            "text": "Rien d'utile dans l'épave. Mais Anja sort une balise de sa botte. 'Assurance du SVR.' Elle la bricole. Elle n'envoie pas un SOS standard. Elle envoie un code militaire : PRIPYAT.",
            "img_prompt": "Anja modifying a beacon with a knife, wires exposed",
            "choices": [
                { "text": "Attendre.", "next": "c4_024_wait" }
            ]
        },
        "c4_023_walk_death": {
            "chapter": "FIN : Hypothermie",
            "text": "Vous marchez. Le vent se lève. La température chute à -70°C. Vous tombez. Vous ne vous relevez pas. Sterling a gagné.",
            "img_prompt": "Two frozen bodies half buried in snow",
            "choices": [
                { "text": "Recommencer la survie", "next": "c4_021_survivors" }
            ]
        },
        "c4_024_wait": {
            "chapter": "CHAPITRE 4 : L'Attente",
            "text": "Les heures passent. Vous vous blottissez l'une contre l'autre pour la chaleur. Ennemies mortelles, unies par la survie. Anja parle de son grand-père. Sam de ses échecs. Soudain, la glace tremble.",
            "img_prompt": "Two women sitting back to back in snow, sun setting",
            "choices": [
                { "text": "Regarder l'horizon.", "next": "c4_025_submarine" }
            ]
        },
        "c4_025_submarine": {
            "chapter": "CHAPITRE 4 : Le Léviathan Noir",
            "text": "La glace se brise. Une tour noire émerge. Un sous-marin nucléaire russe classe Akula. 'Ma police d'assurance,' sourit Anja. Elles sont sauvées.",
            "img_prompt": "Giant black submarine surfacing through ice, cinematic shot",
            "choices": [
                { "text": "Monter à bord.", "next": "c4_026_pact" }
            ]
        },
        "c4_026_pact": {
            "chapter": "CHAPITRE 4 : Le Pacte de Sang",
            "text": "À bord, au chaud. Sam et Anja concluent un marché. 'On récupère Léo. On tue Sterling. On détruit tout.' Le commandant russe obéit à Anja. Cap sur le Japon.",
            "img_prompt": "Sam and Anja shaking hands in a submarine mess hall, grim faces",
            "choices": [
                { "text": "Transition : Léo à Yonaguni.", "next": "c5_001_abyss" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 5 : YONAGUNI - LA CITÉ ENGLOUTIE
        // ------------------------------------------------------------------
        "c5_001_abyss": {
            "chapter": "CHAPITRE 5 : La Descente",
            "text": "<b>Fosse de Ryukyu, Japon.</b><br><br>Vous êtes dans le submersible de luxe de Sterling, le Triton. Dehors, les abysses. Sterling est mourant, branché à des machines. Il regarde l'écran sonar avec avidité.",
            "img_prompt": "Inside a luxury submarine, view of deep ocean darkness outside",
            "choices": [
                { "text": "Regarder l'écran sonar.", "next": "c5_002_structure" },
                { "text": "Parler à Sterling.", "next": "c5_003_talk_sterling" }
            ]
        },
        "c5_002_structure": {
            "chapter": "CHAPITRE 5",
            "text": "Une structure massive apparaît. Une pyramide à degrés. Le Monument de Yonaguni. Mais ce n'est pas de la pierre. Les analyses indiquent une composition organique. C'est de la chair pétrifiée.",
            "img_prompt": "Sonar image of a massive underwater pyramid, glowing green lines",
            "choices": [
                { "text": "Approcher.", "next": "c5_004_city" }
            ]
        },
        "c5_003_talk_sterling": {
            "chapter": "CHAPITRE 5",
            "text": "'Pourquoi tant de morts, Julian ?' Il sourit faiblement. 'Pour devenir un dieu, Léo. Je ne cherche pas à guérir. Je cherche à évoluer.' Sa folie est totale.",
            "img_prompt": "Sterling looking pale and sick but with manic eyes",
            "choices": [
                { "text": "Regarder dehors.", "next": "c5_004_city" }
            ]
        },
        "c5_004_city": {
            "chapter": "CHAPITRE 5 : La Cité Vivante",
            "text": "Le Triton pénètre par une brèche. À l'intérieur, c'est une cathédrale biologique. Des veines lumineuses parcourent les murs. Des 'Jardiniers' (Silencieux aquatiques) nagent autour. Ils ne vous attaquent pas. Ils attendent.",
            "img_prompt": "Submarine entering a giant bioluminescent underwater cave structure",
            "choices": [
                { "text": "Se poser.", "next": "c5_005_landing" }
            ]
        },
        "c5_005_landing": {
            "chapter": "CHAPITRE 5 : Le Berceau",
            "text": "Vous sortez en combinaison. L'air est respirable dans cette poche. Sterling marche avec difficulté, soutenu par son exosquelette. 'C'est ici. Le cœur.'",
            "img_prompt": "Group of people walking on a fleshy floor in a giant cave",
            "choices": [
                { "text": "Avancer vers le centre.", "next": "c5_006_mother" }
            ]
        },
        "c5_006_mother": {
            "chapter": "CHAPITRE 5 : La Mère",
            "text": "Au centre, flottant dans le vide, une entité. La Créature-Mère. Une chose blanche, translucide, magnifique et horrible. Elle dort. Des milliers de filaments la relient à la cité. Elle est le cerveau.",
            "img_prompt": "Giant alien entity floating in center of chamber, connected by glowing nerves",
            "choices": [
                { "text": "Observer les murs.", "next": "c5_007_harvest_truth" }
            ]
        },
        "c5_007_harvest_truth": {
            "chapter": "CHAPITRE 5 : La Vérité",
            "text": "Dans les murs... des niches. Des milliers. Avec des embryons hybrides. Vous comprenez tout. Le virus n'est pas un cadeau. C'est un agent de terraformation. Il prépare l'humanité à être récoltée. Nous sommes des hôtes.",
            "img_prompt": "Wall with translucent pods containing human-alien hybrid fetuses",
            "choices": [
                { "text": "Le dire à Sterling.", "next": "c5_008_denial" }
            ]
        },
        "c5_008_denial": {
            "chapter": "CHAPITRE 5",
            "text": "'Nous sommes du bétail, Julian !' Sterling refuse. 'Non ! Je serai le maître !' Il sort une seringue de virus pur. Il veut fusionner avec la Mère pour la contrôler.",
            "img_prompt": "Sterling holding a syringe, shouting at Leo",
            "choices": [
                { "text": "Essayer de l'arrêter.", "next": "c5_009_injection" }
            ]
        },
        "c5_009_injection": {
            "chapter": "CHAPITRE 5 : L'Injection",
            "text": "Trop tard. Pshhh. Il s'injecte le virus. Sa transformation commence. Son cancer, dopé par le virus, explose. Il devient une tumeur géante. Il hurle de puissance.",
            "img_prompt": "Man transforming into a monstrous blob of flesh",
            "choices": [
                { "text": "Changer de point de vue : Sam & Anja.", "next": "c5_010_infiltration" }
            ]
        },
        "c5_010_infiltration": {
            "chapter": "CHAPITRE 5 : Les Fantômes",
            "text": "Sam et Anja s'infiltrent par une cheminée thermique. Elles sont en combinaison de combat. Elles voient la scène depuis une corniche. Sterling devient un monstre. Léo est piégé.",
            "img_prompt": "Two women with guns looking down from a high ledge at the monster below",
            "choices": [
                { "text": "Tirer sur les gardes.", "next": "c5_011_sniper" },
                { "text": "Créer une diversion.", "next": "c5_012_diversion" }
            ]
        },
        "c5_011_sniper": {
            "chapter": "CHAPITRE 5",
            "text": "Tirs synchronisés. Les gardes de Sterling tombent. Léo est libre de bouger. Mais le Monstre-Sterling se réveille. 'INSECTES !' La cité tremble.",
            "img_prompt": "Guards falling, Leo looking up at Sam and Anja",
            "choices": [
                { "text": "Rejoindre Léo.", "next": "c5_013_reunion" }
            ]
        },
        "c5_012_diversion": {
            "chapter": "CHAPITRE 5",
            "text": "Sam lance une grenade flash. Les Silencieux deviennent fous et attaquent Sterling. C'est le chaos. Sam en profite pour abattre les gardes.",
            "img_prompt": "Monsters attacking the giant tumor, chaotic battle",
            "choices": [
                { "text": "Rejoindre Léo.", "next": "c5_013_reunion" }
            ]
        },
        "c5_013_reunion": {
            "chapter": "CHAPITRE 5 : Le Plan Final",
            "text": "Sam descend en rappel. 'Salut gamin.' Léo a une idée. 'Je peux tuer la cité. Mais il me faut le virus de la mort.' Il doit modifier le Gène de Qin avec celui de la Progéria.",
            "img_prompt": "Leo typing on an organic console while Sam shoots at tentacles",
            "choices": [
                { "text": "Le couvrir pendant qu'il travaille.", "next": "c5_014_coding" }
            ]
        },
        "c5_014_coding": {
            "chapter": "CHAPITRE 5",
            "text": "Sterling attaque avec des tentacules géants. Anja et Sam tirent tout ce qu'elles ont. Léo termine le code. La seringue rouge est prête. Mais il y a un problème.",
            "img_prompt": "Red syringe ready, giant tentacle smashing the ground nearby",
            "choices": [
                { "text": "Quel problème ?", "next": "c5_015_nexus" }
            ]
        },
        "c5_015_nexus": {
            "chapter": "CHAPITRE 5 : Le Sacrifice",
            "text": "'Il faut l'injecter dans le Nexus,' dit Léo. Il pointe un globe lumineux sous la Mère. 'C'est une zone de radiations mortelles. Celui qui y va ne reviendra pas.'",
            "img_prompt": "Glowing radioactive core pulsing with deadly light",
            "choices": [
                { "text": "Léo décide d'y aller.", "next": "c5_016_leo_run" },
                { "text": "Sam décide d'y aller.", "next": "c5_017_sam_run" }
            ]
        },
        "c5_017_sam_run": {
            "chapter": "FIN ALTERNATIVE : Le Sacrifice du Soldat",
            "text": "Sam vous pousse. 'C'est mon boulot, gamin.' Elle court. Elle plante la seringue. Elle meurt instantanément, vaporisée. La cité meurt. Vous survivez, mais hanté par sa mort.",
            "img_prompt": "Sam running into the light, turning back one last time",
            "choices": [
                { "text": "Recommencer le choix", "next": "c5_015_nexus" }
            ]
        },
        "c5_016_leo_run": {
            "chapter": "CHAPITRE 5 : La Course du Fou",
            "text": "'C'est pour Élise.' Léo court. Sa peau brûle. Sterling essaie de l'écraser. Sam abat un tentacule juste à temps. Léo plonge.",
            "img_prompt": "Leo diving towards the core, skin blistering from radiation",
            "choices": [
                { "text": "Planter la seringue.", "next": "c5_018_climax" }
            ]
        },
        "c5_018_climax": {
            "chapter": "CLIMAX : Le Vieillissement",
            "text": "L'injection est faite. L'effet est instantané. Le virus de vieillissement se propage. Sterling vieillit de mille ans en une seconde. Il tombe en poussière. La Mère se flétrit et meurt. La cité s'effondre.",
            "img_prompt": "Giant monster turning to dust, city crumbling",
            "choices": [
                { "text": "L'extraction.", "next": "c5_019_extraction" }
            ]
        },
        "c5_019_extraction": {
            "chapter": "CHAPITRE 5 : Sauvetage",
            "text": "Sam récupère Léo, brûlé par les radiations. 'Tiens bon !' Elles nagent vers le sous-marin russe. Explosion finale derrière elles. La menace est détruite.",
            "img_prompt": "Sam carrying unconscious Leo, swimming towards submarine lights",
            "choices": [
                { "text": "Épilogue.", "next": "epilogue_hospital" }
            ]
        },

        // ------------------------------------------------------------------
        // ÉPILOGUE : LA VEILLE
        // ------------------------------------------------------------------
        "epilogue_hospital": {
            "chapter": "ÉPILOGUE : Adieu",
            "text": "<b>Genève, un an plus tard.</b><br><br>Léo est dans un lit d'hôpital. Il a l'apparence d'un vieillard de 90 ans. Le syndrome d'irradiation. Sam est là. 'J'ai vécu intensément, Sam. C'est ça qui compte.' Il meurt en paix.",
            "img_prompt": "Old Leo holding Sam's hand in a hospital bed, peaceful sunset",
            "choices": [
                { "text": "Six mois plus tard.", "next": "epilogue_watch" }
            ]
        },
        "epilogue_watch": {
            "chapter": "FIN : La Chasse Continue",
            "text": "<b>Antarctique.</b><br><br>Sam dirige la fondation 'Veille Valmont'. Elle surveille les anomalies. Elle reçoit un message crypté d'Anja : 'Il n'y en avait pas qu'une.' Sam sourit. La chasse ne fait que commencer.",
            "img_prompt": "Sam looking determined on the bridge of an icebreaker ship",
            "choices": [
                { "text": "Rejouer l'aventure", "next": "start" }
            ]
        },
// ------------------------------------------------------------------
        // EXTENSION : PROFONDEUR DU PROLOGUE (221 AV. J.-C.)
        // ------------------------------------------------------------------
        "prologue_examine_tools": {
            "chapter": "PROLOGUE : Les Outils du Savoir",
            "text": "Vous ouvrez votre sacoche de cuir. À l'intérieur, vos pinceaux en poils de loup, vos bâtons d'encre de pin, et les rouleaux de bambou vierges. L'Empereur a exigé une chronique précise. 'Si tu omets un détail, Bao, tu omets ta tête', a-t-il dit.",
            "img_prompt": "Close up of ancient chinese calligraphy tools in a leather satchel",
            "choices": [
                { "text": "Vérifier les rouleaux.", "next": "prologue_scrolls" },
                { "text": "Se remémorer l'audience impériale.", "next": "prologue_flashback" },
                { "text": "Retourner au froid.", "next": "p_001_intro" }
            ]
        },
        "prologue_scrolls": {
            "chapter": "PROLOGUE",
            "text": "Le bambou est froid, cassant. Vous avez déjà rempli trois rouleaux avec la liste des morts. Le froid, la faim, les chutes. Cette expédition est maudite.",
            "img_prompt": "Scrolls made of bamboo strips with chinese characters written on them",
            "choices": [
                { "text": "Ranger les rouleaux.", "next": "prologue_examine_tools" }
            ]
        },
        "prologue_flashback": {
            "chapter": "SOUVENIR : Xianyang",
            "text": "La salle du trône. L'encens. Qin Shi Huang tournant le dos. 'La mort est un voleur, Bao. Je veux arrêter le voleur. Wei dit qu'il y a une montagne où le temps s'arrête. Va. Et reviens avec l'éternité.'",
            "img_prompt": "Silhouette of the Emperor on a throne, massive palace hall, smoke",
            "choices": [
                { "text": "Revenir au présent.", "next": "prologue_examine_tools" }
            ]
        },
        "prologue_talk_chen": {
            "chapter": "PROLOGUE : Le Soldat Mourant",
            "text": "Vous vous approchez de Chen, un jeune lancier assis dans la neige. Sa peau est bleue. Il ne tremble plus. C'est mauvais signe. 'Scribe... écrivez à ma mère... dites-lui que je suis mort bravement.'",
            "img_prompt": "Young soldier dying in the snow, holding a spear",
            "choices": [
                { "text": "Mentir pour le réconforter.", "next": "prologue_chen_lie" },
                { "text": "Lui dire la vérité (Il meurt pour rien).", "next": "prologue_chen_truth" },
                { "text": "Lui donner votre dernière ration d'eau.", "next": "prologue_chen_water" }
            ]
        },
        "prologue_chen_lie": {
            "chapter": "PROLOGUE",
            "text": "'Tu es un héros, Chen. L'Empereur bâtira une statue pour nous.' Il sourit faiblement et ferme les yeux. Il ne se réveillera pas.",
            "img_prompt": "Peaceful face of a dead soldier covered in snow dust",
            "choices": [
                { "text": "Rejoindre le groupe.", "next": "p_003_camp" }
            ]
        },
        "prologue_chen_truth": {
            "chapter": "PROLOGUE",
            "text": "'Nous mourons pour la folie d'un vieillard, Chen.' Le soldat pleure. Il meurt dans la peur. Vous vous sentez coupable.",
            "img_prompt": "Tear freezing on a soldier's cheek",
            "choices": [
                { "text": "Rejoindre le groupe.", "next": "p_003_camp" }
            ]
        },
        "prologue_chen_water": {
            "chapter": "PROLOGUE",
            "text": "L'eau est gelée dans votre gourde. Vous ne pouvez rien faire. L'impuissance est le pire des maux.",
            "img_prompt": "Frozen gourd",
            "choices": [
                { "text": "Rejoindre le groupe.", "next": "p_003_camp" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : ENQUÊTE À MONTPELLIER (2025)
        // ------------------------------------------------------------------
        "c1_explore_lab": {
            "chapter": "CHAPITRE 1 : Le Labo",
            "text": "Votre laboratoire est votre maison. C'est ici que vous menez votre guerre contre la mort. Des piles de revues Nature et Cell s'entassent.",
            "img_prompt": "Detailed view of a messy biology lab, microscopes, papers, coffee cups",
            "choices": [
                { "text": "Examiner le microscope.", "next": "c1_microscope" },
                { "text": "Vérifier les emails.", "next": "c1_emails" },
                { "text": "Regarder par la fenêtre.", "next": "c1_window" },
                { "text": "Retourner au travail principal.", "next": "c1_003_leo" }
            ]
        },
        "c1_microscope": {
            "chapter": "CHAPITRE 1",
            "text": "Une culture de cellules HeLa. Elles sont immortelles, mais cancéreuses. C'est l'ironie biologique. La seule vie éternelle que nous connaissons est une maladie.",
            "img_prompt": "Microscopic view of cancer cells dividing rapidly",
            "choices": [
                { "text": "Retour.", "next": "c1_explore_lab" }
            ]
        },
        "c1_emails": {
            "chapter": "CHAPITRE 1",
            "text": "1. Aïda : 'N'oublie pas ta soutenance.'<br>2. Administration : 'Budget coupé pour le projet Telomères.'<br>3. Spam : 'Gagnez de l'argent facilement.'<br>Rien d'important. Le monde académique vous étouffe.",
            "img_prompt": "Computer screen showing inbox list",
            "choices": [
                { "text": "Retour.", "next": "c1_explore_lab" }
            ]
        },
        "c1_window": {
            "chapter": "CHAPITRE 1",
            "text": "Montpellier la nuit. Les lumières de la ville. Des gens qui vivent, qui dorment, qui vieillissent. Ils ne savent pas que leur horloge tourne.",
            "img_prompt": "Night view of a city through a window with rain drops",
            "choices": [
                { "text": "Retour.", "next": "c1_explore_lab" }
            ]
        },
        "c1_hacking_minigame": {
            "chapter": "PIRATAGE : Le Serveur Chinois",
            "text": "Pour accéder aux données brutes du Kunlun, vous devez contourner le pare-feu de l'université de Pékin. Vous utilisez un VPN et un script que vous avez écrit.",
            "img_prompt": "Green code cascading on a black screen, matrix style",
            "choices": [
                { "text": "Utiliser une attaque par force brute.", "next": "c1_hack_brute" },
                { "text": "Utiliser une injection SQL.", "next": "c1_hack_sql" },
                { "text": "Chercher une porte dérobée (Backdoor).", "next": "c1_hack_backdoor" }
            ]
        },
        "c1_hack_brute": {
            "chapter": "ÉCHEC PIRATAGE",
            "text": "Trop lent. Le système vous repère. Votre IP est bloquée pour 24h. Vous ratez l'opportunité.",
            "img_prompt": "ACCESS DENIED red screen",
            "choices": [
                { "text": "Essayer un autre serveur (Risqué).", "next": "c1_hack_backdoor" },
                { "text": "Abandonner.", "next": "c1_refuse" }
            ]
        },
        "c1_hack_sql": {
            "chapter": "RÉUSSITE PARTIELLE",
            "text": "Vous entrez, mais vous n'avez que les métadonnées. Pas les scans cellulaires. C'est frustrant.",
            "img_prompt": "Loading bar stuck at 50%",
            "choices": [
                { "text": "Pousser l'attaque.", "next": "c1_007_download" }
            ]
        },
        "c1_hack_backdoor": {
            "chapter": "SUCCÈS TOTAL",
            "text": "Vous trouvez une faille laissée par un admin négligent. Vous êtes dedans. Vous avez les droits root. Le téléchargement commence.",
            "img_prompt": "ACCESS GRANTED green screen",
            "choices": [
                { "text": "Analyser les fichiers.", "next": "c1_007_download" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : L'ODYSSÉE - INTERACTIONS D'ÉQUIPE
        // ------------------------------------------------------------------
        "c2_explore_ship": {
            "chapter": "CHAPITRE 2 : Le Navire",
            "text": "L'Odyssée est immense. Vous avez un moment avant le briefing. Que voulez-vous faire ?",
            "img_prompt": "Corridor of a luxury high tech yacht",
            "choices": [
                { "text": "Aller à la salle des machines.", "next": "c2_engine_room" },
                { "text": "Discuter avec Maria (Bio-info).", "next": "c2_talk_maria" },
                { "text": "Discuter avec Tomás (Virologue).", "next": "c2_talk_tomas" },
                { "text": "Aller sur le pont.", "next": "c2_deck_view" }
            ]
        },
        "c2_engine_room": {
            "chapter": "CHAPITRE 2",
            "text": "Le cœur du navire. Des moteurs diesel-électriques silencieux. Vous croisez un ingénieur. 'Ce bateau peut naviguer en autonomie pendant 6 mois.' C'est une arche de Noé.",
            "img_prompt": "Clean engine room with massive pipes and turbines",
            "choices": [
                { "text": "Retour.", "next": "c2_explore_ship" }
            ]
        },
        "c2_talk_maria": {
            "chapter": "CHAPITRE 2",
            "text": "Maria est nerveuse. 'J'ai travaillé pour la CIA avant. Sterling paie mieux, mais il me fait peur. Il a ce regard... comme s'il voulait manger le monde.'",
            "img_prompt": "Woman looking anxious holding a tablet",
            "choices": [
                { "text": "La rassurer.", "next": "c2_maria_calm" },
                { "text": "Partager ses craintes.", "next": "c2_maria_fear" }
            ]
        },
        "c2_maria_calm": {
            "chapter": "CHAPITRE 2",
            "text": "'Tant qu'on lui donne des résultats, on est en sécurité.' Maria ne semble pas convaincue.",
            "choices": [
                { "text": "Retour.", "next": "c2_explore_ship" }
            ]
        },
        "c2_maria_fear": {
            "chapter": "CHAPITRE 2",
            "text": "'Je sais. Je pense qu'il est malade. Et un homme riche et malade est dangereux.' Maria hoche la tête. 'Fais attention à toi, Léo.'",
            "choices": [
                { "text": "Retour.", "next": "c2_explore_ship" }
            ]
        },
        "c2_talk_tomas": {
            "chapter": "CHAPITRE 2",
            "text": "Tomás est excité. 'Tu as vu la structure de la capside ? C'est de l'art ! Je m'en fous de qui paie. Pour voir ça, je vendrais ma mère.' C'est un puriste de la science, sans conscience.",
            "img_prompt": "Young enthusiastic scientist pointing at a screen",
            "choices": [
                { "text": "Lui dire que la conscience compte.", "next": "c2_tomas_ethics" },
                { "text": "Admirer son enthousiasme.", "next": "c2_tomas_science" }
            ]
        },
        "c2_tomas_ethics": {
            "chapter": "CHAPITRE 2",
            "text": "Il hausse les épaules. 'L'éthique, c'est pour ceux qui n'ont pas de budget.'",
            "choices": [
                { "text": "Retour.", "next": "c2_explore_ship" }
            ]
        },
        "c2_tomas_science": {
            "chapter": "CHAPITRE 2",
            "text": "'C'est vrai que c'est beau. Si on arrive à le décoder, c'est le Nobel assuré.' Tomás sourit. 'Le Nobel ? Sterling achètera le comité pour nous.'",
            "choices": [
                { "text": "Retour.", "next": "c2_explore_ship" }
            ]
        },
        "c2_deck_view": {
            "chapter": "CHAPITRE 2",
            "text": "La mer à perte de vue. Vous vous sentez petit. Et prisonnier. Sam est là, à l'autre bout, fumant une cigarette électronique. Elle vous surveille.",
            "img_prompt": "Ocean view from ship rail, silhouette of a woman watching",
            "choices": [
                { "text": "Retour.", "next": "c2_explore_ship" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : ANALYSE SCIENTIFIQUE POUSSÉE
        // ------------------------------------------------------------------
        "c2_009_dna_detailed": {
            "chapter": "LABORATOIRE : Séquençage",
            "text": "Vous devez configurer le séquenceur. Le virus est ancien et fragile.",
            "img_prompt": "Complex scientific machine interface with knobs and screens",
            "choices": [
                { "text": "Utiliser la méthode Sanger (Lent, précis).", "next": "c2_seq_sanger" },
                { "text": "Utiliser le séquençage Nanopore (Rapide, risques d'erreurs).", "next": "c2_seq_nano" },
                { "text": "Demander à Imane de choisir.", "next": "c2_seq_imane" }
            ]
        },
        "c2_seq_sanger": {
            "chapter": "RÉSULTAT SÉQUENÇAGE",
            "text": "C'est long. Sterling s'impatiente. Mais les résultats sont parfaits. Vous identifiez une structure en triple hélice dans certaines sections. C'est inouï.",
            "img_prompt": "Triple helix DNA model on screen",
            "choices": [
                { "text": "Continuer l'analyse.", "next": "c2_010_inactive" }
            ]
        },
        "c2_seq_nano": {
            "chapter": "RÉSULTAT SÉQUENÇAGE",
            "text": "Rapide. Mais il y a du bruit de fond. Vous manquez presque la structure tertiaire. Tomás corrige l'erreur in extremis.",
            "img_prompt": "Data stream with glitch effects",
            "choices": [
                { "text": "Continuer l'analyse.", "next": "c2_010_inactive" }
            ]
        },
        "c2_seq_imane": {
            "chapter": "RÉSULTAT SÉQUENÇAGE",
            "text": "Imane choisit une approche hybride. C'est brillant. Elle mérite plus de crédit. 'Merci Imane,' dites-vous. Elle rougit.",
            "choices": [
                { "text": "Continuer l'analyse.", "next": "c2_010_inactive" }
            ]
        },
		// ------------------------------------------------------------------
        // EXTENSION : ENTRAÎNEMENT TACTIQUE AVEC SAM
        // ------------------------------------------------------------------
        "c3_training_hub": {
            "chapter": "ENTRAÎNEMENT : Le Programme",
            "text": "Sam vous attend dans la salle de sport. 'Vous avez trois jours avant d'arriver au Bhoutan. Choisissez ce que vous voulez travailler. Vous ne pourrez pas tout faire.'",
            "img_prompt": "Gym room on a ship, Sam holding a tablet listing options",
            "choices": [
                { "text": "Conditionnement Physique (Endurance).", "next": "c3_train_cardio" },
                { "text": "Tir et Armement (Combat).", "next": "c3_train_shooting" },
                { "text": "Survie et Premiers Secours (Médical).", "next": "c3_train_med" },
                { "text": "Psychologie et Négociation (Mental).", "next": "c3_train_psy" },
                { "text": "Terminer l'entraînement.", "next": "c3_014_sleep" }
            ]
        },
        "c3_train_cardio": {
            "chapter": "ENTRAÎNEMENT : Cardio",
            "text": "Vous courez sur le tapis jusqu'à l'épuisement. Sam augmente la vitesse. 'Si vous ne pouvez pas fuir, vous mourrez.' Vous gagnez en endurance pour les scènes de fuite.",
            "img_prompt": "Leo sweating on a treadmill, Sam shouting encouragement",
            "choices": [
                { "text": "Continuer.", "next": "c3_training_hub" }
            ]
        },
        "c3_train_shooting": {
            "chapter": "ENTRAÎNEMENT : Tir",
            "text": "Stand de tir. Vous apprenez à manier un Glock 19 et un fusil HK433. 'Ne visez pas la tête, c'est trop petit. Visez le centre de masse,' dit Sam. Vous apprenez à recharger sous stress.",
            "img_prompt": "Leo holding a gun with ear protection, target sheet with bullet holes",
            "choices": [
                { "text": "Continuer.", "next": "c3_training_hub" }
            ]
        },
        "c3_train_med": {
            "chapter": "ENTRAÎNEMENT : Médical",
            "text": "Sam vous apprend à poser un garrot, à traiter une plaie par balle et à reconnaître une hypothermie. 'Vous êtes médecin, mais ici, on ne soigne pas, on répare pour continuer le combat.'",
            "img_prompt": "First aid dummy, tourniquet application practice",
            "choices": [
                { "text": "Continuer.", "next": "c3_training_hub" }
            ]
        },
        "c3_train_psy": {
            "chapter": "ENTRAÎNEMENT : Mental",
            "text": "Sam vous montre des vidéos d'interrogatoire. Elle vous apprend à détecter le mensonge, à garder votre calme. 'La peur est une réaction chimique. Contrôlez la chimie, contrôlez la peur.'",
            "img_prompt": "Screen showing stressful interrogation footage",
            "choices": [
                { "text": "Continuer.", "next": "c3_training_hub" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : EXPLORATION DU MONASTÈRE (BHOUTAN)
        // ------------------------------------------------------------------
        "c3_explore_monastery": {
            "chapter": "EXPLORATION : Le Monastère",
            "text": "Vous êtes dans la cour intérieure. L'architecture est ancienne, organique. L'odeur d'encens et de beurre de yack rance est forte. Où allez-vous ?",
            "img_prompt": "Courtyard of an ancient monastery, dark stone, prayer wheels",
            "choices": [
                { "text": "Parler au moine qui balaie.", "next": "c3_monk_sweep" },
                { "text": "Examiner les moulins à prières.", "next": "c3_prayer_wheels" },
                { "text": "Regarder par-dessus le mur d'enceinte.", "next": "c3_wall_view" },
                { "text": "Rejoindre Sam et le Lama.", "next": "c3_019_lama" }
            ]
        },
        "c3_monk_sweep": {
            "chapter": "EXPLORATION",
            "text": "Le moine ne s'arrête pas. Ses yeux sont vides. Il murmure : 'La pierre écoute. La pierre se souvient.' Il a l'air d'avoir 100 ans, mais ses mains sont lisses.",
            "img_prompt": "Close up on old monk's face, milky eyes",
            "choices": [
                { "text": "Retour.", "next": "c3_explore_monastery" }
            ]
        },
        "c3_prayer_wheels": {
            "chapter": "EXPLORATION",
            "text": "Les moulins tournent, actionnés par le vent constant. Ils émettent un bourdonnement... 12 Hz. C'est la même fréquence que dans la grotte de Bao. Tout le monastère est un instrument de musique.",
            "img_prompt": "Prayer wheels spinning, close up on bronze symbols",
            "choices": [
                { "text": "Retour.", "next": "c3_explore_monastery" }
            ]
        },
        "c3_wall_view": {
            "chapter": "EXPLORATION",
            "text": "Le vide. 1000 mètres de chute verticale. Kael, le guide, fume une cigarette nerveusement. 'Les oiseaux ne volent pas ici,' dit-il. 'Ils ont peur.'",
            "img_prompt": "Vertigo view down a cliff",
            "choices": [
                { "text": "Retour.", "next": "c3_explore_monastery" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : DÉTAILS DE LA FUSILLADE ET DE LA TRANSFORMATION
        // ------------------------------------------------------------------
        "c3_fight_tactics": {
            "chapter": "COMBAT : Tactique",
            "text": "Les Russes attaquent. Vous êtes derrière un pilier de cristal. Sam vous crie des ordres. Vous avez une arme (si entraîné) ou juste votre tablette.",
            "img_prompt": "Gunfight chaos, bullets hitting crystal pillar",
            "choices": [
                { "text": "Tirer à l'aveugle (Si entraîné).", "next": "c3_fight_shoot" },
                { "text": "Analyser la fréquence acoustique des tirs.", "next": "c3_fight_science" },
                { "text": "Ramper vers la sortie.", "next": "c3_fight_crawl" }
            ]
        },
        "c3_fight_shoot": {
            "chapter": "COMBAT",
            "text": "Vous tirez. Le recul vous fait mal. Vous ne touchez rien, mais vous forcez un Russe à se baisser. Sam vous fait un signe de tête approbateur.",
            "choices": [
                { "text": "Le son s'amplifie.", "next": "c3_025_explosion" }
            ]
        },
        "c3_fight_science": {
            "chapter": "COMBAT",
            "text": "Vous remarquez que les coups de feu font résonner les cristaux. Si la fréquence monte, tout va exploser. Vous devez prévenir Sam !",
            "choices": [
                { "text": "Crier 'Arrêtez de tirer !'.", "next": "c3_025_explosion" }
            ]
        },
        "c3_fight_crawl": {
            "chapter": "COMBAT",
            "text": "La lâcheté est une stratégie. Vous rampez. Vous voyez Anja Petrova donner des ordres calmes. Elle est impressionnante.",
            "choices": [
                { "text": "Le son s'amplifie.", "next": "c3_025_explosion" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : LE SOUS-MARIN RUSSE (ANTARCTIQUE -> JAPON)
        // ------------------------------------------------------------------
        "c4_sub_explore": {
            "chapter": "INTERLUDE : Le Gepard",
            "text": "Le sous-marin file vers le Japon. L'ambiance est tendue. Les marins russes vous regardent de travers. Sam et Anja préparent le plan d'attaque.",
            "img_prompt": "Interior of a russian submarine, red lights, pipes, cables",
            "choices": [
                { "text": "Discuter avec le Commandant Dimitri.", "next": "c4_sub_dimitri" },
                { "text": "Regarder les cartes avec Anja.", "next": "c4_sub_anja_map" },
                { "text": "Vérifier l'équipement avec Sam.", "next": "c4_sub_sam_gear" },
                { "text": "Se reposer.", "next": "c5_001_abyss" }
            ]
        },
        "c4_sub_dimitri": {
            "chapter": "INTERLUDE",
            "text": "Dimitri nettoie son arme. 'Je n'aime pas ça. On ne devrait pas se mêler de magie. Mon père était à Tchernobyl. Il a vu ce que l'invisible fait aux hommes.'",
            "img_prompt": "Burly russian captain polishing a pistol",
            "choices": [
                { "text": "Retour.", "next": "c4_sub_explore" }
            ]
        },
        "c4_sub_anja_map": {
            "chapter": "INTERLUDE",
            "text": "Anja pointe Yonaguni. 'C'est le point d'origine. Les nazis pensaient que c'était l'Atlantide. Mon grand-père pensait que c'était un vaisseau spatial écrasé. Nous allons voir qui a raison.'",
            "img_prompt": "Map of Yonaguni underwater structure with tactical markings",
            "choices": [
                { "text": "Retour.", "next": "c4_sub_explore" }
            ]
        },
        "c4_sub_sam_gear": {
            "chapter": "INTERLUDE",
            "text": "Sam vérifie les recycleurs de plongée. 'Pas de bulles. Pas de bruit. On entre, on tue Sterling, on sort. Si ça tourne mal, Léo, tu restes derrière moi.' Elle a l'air protectrice, mais fatiguée.",
            "img_prompt": "Sam checking scuba gear, looking tired",
            "choices": [
                { "text": "Retour.", "next": "c4_sub_explore" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : DÉTAILS DE LA CITÉ ENGLOUTIE
        // ------------------------------------------------------------------
        "c5_city_details": {
            "chapter": "EXPLORATION : La Chair de Pierre",
            "text": "Vous marchez dans la cité. Sterling est devant. Vous touchez un mur. Ce n'est pas de la pierre. C'est tiède. Ça vibre légèrement. C'est de la chitine.",
            "img_prompt": "Close up of hand touching a wall that looks like rock but has veins",
            "choices": [
                { "text": "Prélever un échantillon discret.", "next": "c5_sample_wall" },
                { "text": "Continuer d'avancer.", "next": "c5_006_mother" }
            ]
        },
        "c5_sample_wall": {
            "chapter": "ANALYSE RAPIDE",
            "text": "Votre scanner indique : Tissu vivant. ADN inconnu. Structure à base de silicium. C'est une forme de vie qui imite la matière minérale. La cité elle-même est l'organisme.",
            "img_prompt": "Scanner screen showing 'UNKNOWN ORGANISM'",
            "choices": [
                { "text": "Rejoindre le groupe.", "next": "c5_006_mother" }
            ]
        },
		// ------------------------------------------------------------------
        // EXTENSION : PHILOSOPHIE AVEC LE DIABLE (STERLING)
        // ------------------------------------------------------------------
        "c2_sterling_philosophy": {
            "chapter": "DIALOGUE : L'Homme qui voulait être Dieu",
            "text": "Sterling vous invite à dîner dans sa cabine privée. Il mange une bouillie nutritive, vous avez un steak. Il vous regarde manger avec envie et dégoût. 'Savez-vous pourquoi je fais tout ça, Léo ?'",
            "img_prompt": "Luxury dinner table, Sterling looking pale eating mush, Leo eating steak",
            "choices": [
                { "text": "Parce que vous avez peur de mourir.", "next": "c2_phil_fear" },
                { "text": "Parce que vous voulez le pouvoir.", "next": "c2_phil_power" },
                { "text": "Parce que vous êtes un visionnaire.", "next": "c2_phil_vision" }
            ]
        },
        "c2_phil_fear": {
            "chapter": "DIALOGUE",
            "text": "'La peur ? Bien sûr. Seul un idiot n'a pas peur du néant. Imaginez l'univers sans vos yeux pour le voir. C'est une aberration. La conscience est un accident précieux, il faut la préserver.'",
            "img_prompt": "Sterling staring into a glass of water, intense gaze",
            "choices": [
                { "text": "Mais la mort donne un sens à la vie.", "next": "c2_phil_meaning" }
            ]
        },
        "c2_phil_power": {
            "chapter": "DIALOGUE",
            "text": "'Le pouvoir est un moyen, pas une fin. J'ai déjà tout l'argent du monde. Je peux acheter des pays. Mais je ne peux pas acheter une seconde de plus quand mon heure viendra. C'est la seule monnaie qui compte.'",
            "choices": [
                { "text": "Et le prix à payer ?", "next": "c2_phil_price" }
            ]
        },
        "c2_phil_vision": {
            "chapter": "DIALOGUE",
            "text": "Il sourit. 'Vous me flattez. Je suis juste un homme qui refuse les limites imposées par une biologie obsolète. Nous sommes des logiciels piégés dans du matériel périmé.'",
            "choices": [
                { "text": "Vous voulez uploader votre esprit ?", "next": "c2_phil_upload" }
            ]
        },
        "c2_phil_meaning": {
            "chapter": "DIALOGUE",
            "text": "'Des balivernes de poètes pour consoler les mortels. La mort n'a pas de sens. C'est une panne système. Et je vais la réparer.'",
            "choices": [
                { "text": "Finir le dîner en silence.", "next": "c2_explore_ship" }
            ]
        },
        "c2_phil_price": {
            "chapter": "DIALOGUE",
            "text": "'Tout a un prix. Si je dois brûler la moitié du monde pour sauver l'autre, je le ferai. C'est de l'arithmétique morale.'",
            "choices": [
                { "text": "Quitter la table.", "next": "c2_explore_ship" }
            ]
        },
        "c2_phil_upload": {
            "chapter": "DIALOGUE",
            "text": "'Non. Le numérique est froid. Je veux sentir, toucher, goûter. Je veux la chair, mais une chair parfaite. Éternelle.'",
            "choices": [
                { "text": "Retourner au labo.", "next": "c2_007_start_work" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : LE JOURNAL DE PETROV (LECTURE DÉTAILLÉE)
        // ------------------------------------------------------------------
        "c4_read_petrov_hub": {
            "chapter": "ARCHIVES : Le Journal Maudit",
            "text": "Vous tenez le journal du Dr. Ivan Petrov. Le cuir est froid. Anja vous regarde. 'Lisez. Vous devez comprendre ce qu'ils ont vécu.'",
            "img_prompt": "Old leather diary on a metal table, frozen pages",
            "choices": [
                { "text": "Lire l'entrée du 15 Novembre (L'Espoir).", "next": "c4_petrov_nov15" },
                { "text": "Lire l'entrée du 1er Décembre (Le Doute).", "next": "c4_petrov_dec01" },
                { "text": "Lire l'entrée du 12 Décembre (La Fin).", "next": "c4_petrov_dec12" },
                { "text": "Fermer le journal.", "next": "c4_007_journal" }
            ]
        },
        "c4_petrov_nov15": {
            "chapter": "JOURNAL : L'Aube Rouge",
            "text": "'Victoire ! Le lichen inhibe la dégradation mentale. Le camarade Sergueï a rajeuni de 20 ans en une nuit. Il se souvient de tout. Moscou sera fière. Nous avons vaincu la mort pour la gloire du Parti.'",
            "img_prompt": "Vintage photo of smiling scientists drinking vodka in the snow",
            "choices": [
                { "text": "Continuer.", "next": "c4_read_petrov_hub" }
            ]
        },
        "c4_petrov_dec01": {
            "chapter": "JOURNAL : Les Symptômes",
            "text": "'Dimitri ne dort plus. Il reste debout face au mur. Il répète les mêmes mots. Sergueï... il me regarde comme si j'étais de la viande. Le stabilisateur ne dure pas assez longtemps. Il faut en consommer tout le temps.'",
            "img_prompt": "Sketch of a man standing in a corner, dark scribbles",
            "choices": [
                { "text": "Continuer.", "next": "c4_read_petrov_hub" }
            ]
        },
        "c4_petrov_dec12": {
            "chapter": "JOURNAL : L'Adieu",
            "text": "'Ils sont dehors. Ils ne sentent pas le froid. Ils veulent le lichen. Je suis le dernier. Anja, ma petite... pardonne-moi. Ne cherche pas ce que j'ai trouvé.' La page est tachée de sang séché.",
            "img_prompt": "Last page of diary, blood stains, shaky handwriting",
            "choices": [
                { "text": "Fermer le journal.", "next": "c4_read_petrov_hub" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : MORTS ALTERNATIVES (GAME OVER)
        // ------------------------------------------------------------------
        "death_cold_bhutan": {
            "chapter": "MORT : Le Sommeil Blanc",
            "text": "Vous n'étiez pas assez entraîné. L'altitude et le froid ont eu raison de vous avant même d'atteindre le monastère. Votre cœur s'arrête. Vous devenez une partie du paysage.",
            "img_prompt": "Frozen body partially covered in snow on a mountain path",
            "choices": [
                { "text": "Recommencer l'entraînement", "next": "c3_training_hub" }
            ]
        },
        "death_silencer_bhutan": {
            "chapter": "MORT : La Récolte",
            "text": "Le moine vous attrape. Sa force est surnaturelle. Il ne vous tue pas tout de suite. Il vous emmène dans les profondeurs pour vous 'préparer'. Votre conscience s'éteint lentement.",
            "img_prompt": "POV being dragged into darkness by pale hands",
            "choices": [
                { "text": "Recommencer la fuite", "next": "c3_028_run_corridor" }
            ]
        },
        "death_shot_russians": {
            "chapter": "MORT : Dommage Collatéral",
            "text": "Vous avez hésité pendant la fusillade. Une balle perdue vous frappe en pleine poitrine. Sam crie votre nom, mais c'est trop tard. Le secret meurt avec vous.",
            "img_prompt": "Leo falling backwards, bullet impact, shattered glass",
            "choices": [
                { "text": "Recommencer le combat", "next": "c3_fight_tactics" }
            ]
        },
        "death_frozen_antarctica": {
            "chapter": "MORT : La Statue de Glace",
            "text": "La tempête katabatique a brisé la fenêtre. Le froid est entré instantanément (-80°C). Vous êtes gelé sur place en quelques secondes, préservé pour l'éternité, mais mort.",
            "img_prompt": "Frozen room, icicles on face",
            "choices": [
                { "text": "Recommencer Vostok", "next": "c4_006_vostok" }
            ]
        },
        "death_eaten_vostok": {
            "chapter": "MORT : Le Festin",
            "text": "Les barricades cèdent. Les anciens membres de l'équipe soviétique entrent. Ils n'ont pas mangé depuis 50 ans. Vous êtes chaud. Vous êtes vivant. Plus pour longtemps.",
            "img_prompt": "Many glowing eyes in the dark doorway",
            "choices": [
                { "text": "Recommencer la défense", "next": "c4_008_ultrasound" }
            ]
        },
        "death_sterling_rage": {
            "chapter": "MORT : L'Ego du Dieu",
            "text": "Vous avez défié Sterling trop ouvertement. Il n'a pas de patience. Il fait un signe à ses gardes. Une balle dans la tête. Il trouvera un autre scientifique.",
            "img_prompt": "Sterling looking bored, guard raising pistol",
            "choices": [
                { "text": "Recommencer le dialogue", "next": "c5_008_denial" }
            ]
        },
        "death_city_absorb": {
            "chapter": "MORT : L'Intégration",
            "text": "Vous avez touché la Mère sans protection. Elle se réveille. Elle a faim. Pas de chair, mais d'esprit. Votre conscience est aspirée. Vous devenez une partie de la ruche. Vous êtes partout. Vous êtes nulle part.",
            "img_prompt": "Leo's face melting into white light, blissful and terrifying",
            "choices": [
                { "text": "Recommencer Yonaguni", "next": "c5_006_mother" }
            ]
        },
        "death_radiation": {
            "chapter": "MORT : Brûlé Vif",
            "text": "Vous n'avez pas couru assez vite vers le Nexus. Les radiations vous tuent avant que vous ne puissiez injecter le virus. La seringue tombe. L'humanité est condamnée.",
            "img_prompt": "Hand dropping a syringe, skin blistered",
            "choices": [
                { "text": "Recommencer la course", "next": "c5_016_leo_run" }
            ]
        },

        // ------------------------------------------------------------------
        // EXTENSION : SECRETS DU SOUS-MARIN
        // ------------------------------------------------------------------
        "c4_sub_secret_room": {
            "chapter": "SECRET : La Cabine d'Anja",
            "text": "Pendant qu'Anja dort, vous voyez des documents sur sa table. Des photos d'elle enfant avec son grand-père Petrov. Il sourit. C'est pour ça qu'elle se bat. Pour l'amour, pas pour la patrie.",
            "img_prompt": "Old black and white photo of a scientist holding a little girl",
            "choices": [
                { "text": "Retour.", "next": "c4_sub_explore" }
            ]
        },
        "c4_sub_torpedo": {
            "chapter": "SECRET : L'Armement",
            "text": "Vous passez dans la salle des torpilles. Elles sont peintes en rouge. Têtes nucléaires tactiques. 'Si on échoue,' dit un marin, 'on fait sauter toute la fosse. Mieux vaut l'apocalypse que l'invasion.'",
            "img_prompt": "Red nuclear torpedoes lined up in a submarine",
            "choices": [
                { "text": "Retour.", "next": "c4_sub_explore" }
            ]
        },
		// ------------------------------------------------------------------
        // EXTENSION : FINS ALTERNATIVES & SECRÈTES
        // ------------------------------------------------------------------
        "end_sterling_victory": {
            "chapter": "FIN ALTERNATIVE : Le Dieu Fou",
            "text": "Vous donnez le virus pur à Sterling. Il fusionne avec la Mère. Il ne meurt pas. Sa volonté est trop forte. Il devient la Cité. 'Merci, Léo. Tu seras mon premier prêtre.' Il vous absorbe. L'humanité entre dans un âge d'or sombre et éternel.",
            "img_prompt": "Giant face of Sterling formed by bio-luminescent veins in the cave wall",
            "choices": [
                { "text": "Recommencer l'histoire", "next": "start" }
            ]
        },
        "end_nuclear_option": {
            "chapter": "FIN ALTERNATIVE : Terre Brûlée",
            "text": "Le plan biologique échoue. Vous criez dans votre micro : 'ANJA ! CODE ROUGE !'. Anja ordonne au sous-marin de tirer. Les torpilles nucléaires frappent la fosse. Yonaguni est vaporisé. Vous mourrez tous instantanément. Le secret est détruit, mais à quel prix ?",
            "img_prompt": "Massive underwater nuclear explosion, shockwave",
            "choices": [
                { "text": "Recommencer l'histoire", "next": "start" }
            ]
        },
        "end_cowardice": {
            "chapter": "FIN ALTERNATIVE : La Fuite",
            "text": "La peur vous paralyse à Yonaguni. Vous refusez de courir vers le Nexus. Sterling tue Sam. Anja est submergée. Vous vous cachez dans le Triton. Vous remontez seul. Vous vivez le reste de votre vie en sachant que vous avez condamné le monde.",
            "img_prompt": "Leo sitting alone in a dark room drinking alcohol, looking old and sad",
            "choices": [
                { "text": "Recommencer l'histoire", "next": "start" }
            ]
        },

        // ------------------------------------------------------------------
        // ÉPILOGUE SECRET : LES ARCHITECTES
        // ------------------------------------------------------------------
        "secret_architects": {
            "chapter": "SECRET : Le Signal",
            "text": "<b>Espace Profond, Secteur Inconnu.</b><br><br>Un signal parcourt le vide. 'Unité de Terraformation 454 (Terre) : HORS LIGNE. Cause : Résistance locale.'<br>Une conscience immense, froide et ancienne reçoit le message.<br>'Intéressant. Envoyez la Flotte de Récolte.'",
            "img_prompt": "Alien fleet of bio-ships silhouetted against a nebula, dark sci-fi style",
            "choices": [
                { "text": "Fin de la transmission.", "next": "start" }
            ]
        },
        
        // Nœud de transition pour accéder au secret (à placer potentiellement après la fin classique)
        "epilogue_reflection": {
            "chapter": "FIN",
            "text": "Vous avez terminé l'aventure. Voulez-vous voir ce qui se trame dans l'ombre ?",
            "img_prompt": "Stars in the night sky",
            "choices": [
                { "text": "Voir la vérité cosmique.", "next": "secret_architects" },
                { "text": "Retourner au menu.", "next": "start" }
            ]
        }
    }
};

