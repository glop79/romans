window.GAME_DATA = {
    "title": "LE SYNDROME DE L'IMPOSTEUR",
    "author": "Franck Platon - Adaptation Interactive",
    "nodes": {
        // ------------------------------------------------------------------
        // INTRODUCTION & MENU PRINCIPAL
        // ------------------------------------------------------------------
        "start": {
            "chapter": "INTRODUCTION",
            "text": "Vous êtes le Dr Elena Rossi. Chirurgienne cardiaque de renommée mondiale. Mère. Épouse. Héroïne.<br><br>Ce soir, vous recevez le Prix Laennec, la consécration ultime. Mais un message anonyme s'apprête à détruire votre vie. Votre mémoire est-elle fiable ? Êtes-vous une imposteur ?<br><br>Objectif : Retrouver la vérité avant de tout perdre.",
            "img_prompt": "Cinematic close up of a woman surgeon looking at her reflection in a mirror, face split in two, psychological thriller",
            "choices": [
                { "text": "Commencer l'histoire (La Cérémonie)", "next": "1_ceremony_start" },
                { "text": "Consulter le dossier 'Elena Rossi' (Contexte)", "next": "intro_context" }
            ]
        },
        "intro_context": {
            "chapter": "DOSSIER : ELENA ROSSI",
            "text": "38 ans. Spécialiste du pontage minimalement invasif. Mariée à David (Architecte). Mère d'Emma et Lucas (Jumeaux, 12 ans). Traumatisme d'enfance : Mort de son frère Tony par noyade.<br>Vous êtes perfectionniste, mais rongée par un doute secret.",
            "img_prompt": "Medical file with a photo of a serious woman doctor, red stamp 'CONFIDENTIAL'",
            "choices": [
                { "text": "Lancer la simulation", "next": "1_ceremony_start" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 1 : LE PRIX DE L'EXCELLENCE
        // ------------------------------------------------------------------
        "1_ceremony_start": {
            "chapter": "CHAPITRE 1 : La Consécration",
            "text": "<b>Amphithéâtre Laennec, Paris. 19h30.</b><br><br>800 personnes. La lumière dorée. Vous êtes au pupitre, en robe Chanel noire. Le Pr. Dubois vous remet le prix. Les applaudissements sont assourdissants. Votre famille est au premier rang.",
            "img_prompt": "Elegant woman giving a speech in a grand golden amphitheater, crowd applauding",
            "choices": [
                { "text": "Regarder David et les enfants.", "next": "1_speech_family" },
                { "text": "Regarder le Pr. Dubois (Mentor).", "next": "1_speech_mentor" },
                { "text": "Regarder la salle (Foule).", "next": "1_speech_crowd" }
            ]
        },
        "1_speech_family": {
            "chapter": "Ancrage",
            "text": "David vous envoie un baiser. Emma et Lucas rayonnent de fierté. Ils sont votre roc. Vous leur dédiez ce prix. Mais vos mains tremblent.",
            "img_prompt": "Family in front row smiling, husband and two kids dressed formally",
            "choices": [
                { "text": "Terminer le discours sur une note personnelle.", "next": "1_speech_end" }
            ]
        },
        "1_speech_mentor": {
            "chapter": "Le Père Spirituel",
            "text": "Dubois vous sourit paternellement. Il connaît votre parcours, vos sacrifices. Il semble si fier. Pourtant, vous vous sentez... illégitime.",
            "img_prompt": "Old professor with white hair clapping hands, looking proud",
            "choices": [
                { "text": "Terminer le discours sur une note professionnelle.", "next": "1_speech_end" }
            ]
        },
        "1_speech_crowd": {
            "chapter": "Le Public",
            "text": "Des centaines de visages. Collègues, rivaux, étudiants. Ils vous admirent. Mais vous avez l'impression de jouer un rôle. Le syndrome de l'imposteur vous serre la gorge.",
            "img_prompt": "Blurry sea of faces looking at the camera, spotlight effect",
            "choices": [
                { "text": "Terminer le discours rapidement.", "next": "1_speech_end" }
            ]
        },
        "1_speech_end": {
            "chapter": "L'Ovation",
            "text": "Vous descendez de l'estrade. Les félicitations fusent. Vous prétextez un besoin de fraîcheur pour vous réfugier aux toilettes. Le silence du marbre froid vous apaise. Votre téléphone vibre.",
            "img_prompt": "Woman in black dress leaning on a marble sink in a luxury bathroom, looking tired",
            "choices": [
                { "text": "Regarder le message.", "next": "1_the_message" },
                { "text": "Ignorer et se rincer le visage.", "next": "1_ignore_phone" }
            ]
        },
        "1_ignore_phone": {
            "chapter": "Insistance",
            "text": "Il vibre encore. Une fois. Deux fois. C'est insistant. Vous finissez par le sortir de votre pochette.",
            "img_prompt": "Smartphone vibrating on marble surface",
            "choices": [
                { "text": "Lire le message.", "next": "1_the_message" }
            ]
        },
        "1_the_message": {
            "chapter": "Le Poison",
            "text": "Email inconnu : `notrumpscret2025`. Objet : 'Félicitations, Docteur Imposteur'.<br>Texte : 'Tu ne mérites pas ce prix. Tu sais ce que tu as fait à Thomas Vance. Je sais tout.'<br>Pièce jointe : Une photo de vous, prise il y a 2 minutes, sur l'estrade.",
            "img_prompt": "Smartphone screen showing a threatening email and a photo of Elena giving speech",
            "choices": [
                { "text": "Thomas Vance ? Chercher dans sa mémoire.", "next": "1_memory_vance" },
                { "text": "Regarder autour de soi (Paranoïa).", "next": "1_paranoia_bathroom" }
            ]
        },
        "1_memory_vance": {
            "chapter": "Le Trou Noir",
            "text": "Vance... 2018. Un infarctus. Opération réussie. Mort 3 jours plus tard d'une embolie. Un cas classique. Pourquoi ce message ? Pourquoi 'Je sais tout' ?",
            "img_prompt": "Flashback effect, blurry image of a patient in a hospital bed",
            "choices": [
                { "text": "Sortir des toilettes.", "next": "1_dubois_warning" }
            ]
        },
        "1_paranoia_bathroom": {
            "chapter": "L'Observateur",
            "text": "La photo a été prise de la salle. L'expéditeur est ici. Parmi les invités. Vous avez envie de vomir. Vous sortez.",
            "img_prompt": "Elena opening the bathroom door, looking scared",
            "choices": [
                { "text": "Rejoindre la réception.", "next": "1_dubois_warning" }
            ]
        },
        "1_dubois_warning": {
            "chapter": "L'Avertissement",
            "text": "Dubois vous intercepte. 'Elena ? Ça va ?' Il se penche et murmure : 'Ne vole pas trop près du soleil.'",
            "img_prompt": "Dubois whispering in Elena's ear, ominous atmosphere",
            "choices": [
                { "text": "Lui demander ce qu'il veut dire.", "next": "1_ask_dubois" },
                { "text": "Sourire et partir.", "next": "1_leave_party" }
            ]
        },
        "1_ask_dubois": {
            "chapter": "Évasion",
            "text": "Il rit. 'C'est une métaphore, ma chère. La gloire brûle.' Il s'éloigne. Était-ce une menace ?",
            "choices": [
                { "text": "Rejoindre David et partir.", "next": "1_leave_party" }
            ]
        },
        "1_leave_party": {
            "chapter": "Le Retour",
            "text": "Voiture. David conduit. Les enfants dorment. Vous regardez Paris défiler. Le nom 'Thomas Vance' tourne en boucle. David vous parle, mais vous n'écoutez pas.",
            "img_prompt": "Night city lights reflecting on car window, Elena looking pensive",
            "choices": [
                { "text": "Arriver à la Villa.", "next": "2_villa_night" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 2 : PREMIÈRES FISSURES
        // ------------------------------------------------------------------
        "2_villa_night": {
            "chapter": "CHAPITRE 2 : La Villa",
            "text": "<b>Neuilly-sur-Seine. 22h30.</b><br><br>Votre maison. Symbole de réussite. Les enfants ont préparé une surprise : 'BRAVO MAMAN'. Emma vous donne un dessin : 'Super-Héroïne'.",
            "img_prompt": "Living room decorated with balloons and a childish banner",
            "choices": [
                { "text": "Cacher son angoisse et remercier.", "next": "2_kids_bed" },
                { "text": "S'effondrer en larmes (Fatigue).", "next": "2_breakdown" }
            ]
        },
        "2_breakdown": {
            "chapter": "Fragilité",
            "text": "David s'inquiète. 'C'est l'émotion,' dites-vous. Vous montez coucher les enfants. Emma : 'Pourquoi tu es triste maman ?'",
            "img_prompt": "Mother hugging daughter, sad expression",
            "choices": [
                { "text": "La rassurer.", "next": "2_kids_bed" }
            ]
        },
        "2_kids_bed": {
            "chapter": "Nuit Blanche",
            "text": "Les enfants dorment. David ouvre du champagne. 'À toi, Nina.' Vous buvez. 'David... te souviens-tu de Thomas Vance ?'",
            "img_prompt": "Couple drinking champagne on a sofa, dim light",
            "choices": [
                { "text": "Lui avouer le message.", "next": "2_confess_david" },
                { "text": "Minimiser ('Juste un vieux cas').", "next": "2_minimize" }
            ]
        },
        "2_confess_david": {
            "chapter": "Doutes",
            "text": "David fronce les sourcils. 'Un corbeau ? Ignore-le. C'est de la jalousie.' Il ne comprend pas votre terreur.",
            "choices": [
                { "text": "Aller se coucher.", "next": "2_nightmare" }
            ]
        },
        "2_minimize": {
            "chapter": "Secret",
            "text": "« Non, rien. Juste un souvenir. » Vous gardez le poison pour vous. David vous serre dans ses bras. Vous vous sentez seule.",
            "choices": [
                { "text": "Aller se coucher.", "next": "2_nightmare" }
            ]
        },
        "2_nightmare": {
            "chapter": "Le Cauchemar",
            "text": "3h du matin. Vous rêvez de Tony. La piscine. L'eau bleue. Vous ne bougez pas. Vous le laissez couler. 'Pourquoi tu n'as pas sauté ?' hurle votre mère. Réveil en sursaut.",
            "img_prompt": "Underwater shot of a child sinking, distorted vision",
            "choices": [
                { "text": "Regarder le téléphone (Vibration).", "next": "2_second_message" }
            ]
        },
        "2_second_message": {
            "chapter": "La Menace",
            "text": "Nouveau mail. 'Tu as laissé mourir ton frère. Tu laisses mourir tes patients. Vance était le premier. Il y en aura d'autres.'",
            "img_prompt": "Phone screen in the dark showing text message",
            "choices": [
                { "text": "Réveiller David.", "next": "2_wake_david" },
                { "text": "Garder le silence.", "next": "2_keep_quiet" }
            ]
        },
        "2_wake_david": {
            "chapter": "Tension",
            "text": "David se réveille. Il voit votre état. Vous lui parlez des messages. Il veut appeler la police. Vous refusez. 'Non ! Ça détruirait ma carrière !'",
            "img_prompt": "Argument in bedroom, man looking worried",
            "choices": [
                { "text": "Attendre le matin.", "next": "3_hospital_morning" }
            ]
        },
        "2_keep_quiet": {
            "chapter": "Isolement",
            "text": "Vous effacez le message. Vous ne dormez plus. L'aube arrive.",
            "choices": [
                { "text": "Partir à l'hôpital.", "next": "3_hospital_morning" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 3 : LE SYNDROME (16 SEPTEMBRE)
        // ------------------------------------------------------------------
        "3_hospital_morning": {
            "chapter": "CHAPITRE 3 : Le Doute",
            "text": "<b>Hôpital Saint-Louis. 8h00.</b><br><br>Vous croisez Sarah Chen, la psychiatre du personnel. Elle vous observe. 'Tu as l'air épuisée, Elena. Syndrome de l'imposteur ?'",
            "img_prompt": "Hospital corridor, Asian woman doctor looking concerned",
            "choices": [
                { "text": "Se confier à Sarah.", "next": "3_confide_sarah" },
                { "text": "Prétexter la fatigue.", "next": "3_fake_tired" }
            ]
        },
        "3_confide_sarah": {
            "chapter": "Le Diagnostic",
            "text": "Sarah vous emmène prendre un café. Vous parlez de votre sentiment de fraude. Elle sourit doucement. 'C'est classique après un prix. Si tu as besoin d'aide, ma porte est ouverte.'",
            "img_prompt": "Two women talking at a hospital cafeteria table",
            "choices": [
                { "text": "Aller au bloc opératoire.", "next": "3_operation" }
            ]
        },
        "3_fake_tired": {
            "chapter": "Méfiance",
            "text": "« Juste la fête d'hier. » Sarah n'est pas dupe mais vous laisse partir. Vous sentez son regard dans votre dos.",
            "choices": [
                { "text": "Aller au bloc opératoire.", "next": "3_operation" }
            ]
        },
        "3_operation": {
            "chapter": "L'Hésitation",
            "text": "Bloc 7. Patient : M. Lemaire. Pontage triple. Vous tenez le bistouri. Au moment d'inciser le péricarde... votre main se fige. 5 secondes. L'éternité. Sophie (l'infirmière) vous regarde.",
            "img_prompt": "Surgeon hands holding scalpel frozen over patient chest, tense eyes above mask",
            "choices": [
                { "text": "Se ressaisir et opérer.", "next": "3_op_success" },
                { "text": "Demander à Maxime (l'interne) de le faire.", "next": "3_op_weakness" }
            ]
        },
        "3_op_weakness": {
            "chapter": "La Faiblesse",
            "text": "Maxime prend le relais. L'opération réussit, mais l'équipe a vu votre faille. La rumeur va courir.",
            "img_prompt": "Surgical team looking at Elena with concern",
            "choices": [
                { "text": "Retourner au bureau.", "next": "3_office_search" }
            ]
        },
        "3_op_success": {
            "chapter": "Réussite",
            "text": "Vous incisez. La mémoire musculaire prend le dessus. Opération parfaite. Mais la peur ne part pas.",
            "img_prompt": "Bloody gloves being removed, sigh of relief",
            "choices": [
                { "text": "Retourner au bureau.", "next": "3_office_search" }
            ]
        },
        "3_office_search": {
            "chapter": "L'Enquête",
            "text": "Seule. Vous accédez aux archives numériques. Recherche : 'Thomas Vance'. Dossier trouvé. Décès : Embolie. R.A.S. Mais... les notes opératoires. Le style n'est pas le vôtre.",
            "img_prompt": "Computer screen showing medical records",
            "choices": [
                { "text": "Imprimer le dossier.", "next": "3_print_file" },
                { "text": "Chercher des modifications récentes (Logs).", "next": "3_check_logs" }
            ]
        },
        "3_check_logs": {
            "chapter": "Trace",
            "text": "Dernière modification : Hier. Par 'Admin'. C'est impossible. Le dossier est clos depuis 2018.",
            "img_prompt": "Log file showing recent date",
            "choices": [
                { "text": "Le téléphone sonne (Inconnu).", "next": "4_jensen_call" }
            ]
        },
        "3_print_file": {
            "chapter": "Papier",
            "text": "Vous imprimez. Vous relisez. Une phrase vous choque : 'Complications hémorragiques'. Vous ne vous en souvenez pas.",
            "img_prompt": "Hand holding paper with highlighted text",
            "choices": [
                { "text": "Le téléphone sonne (Inconnu).", "next": "4_jensen_call" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 4 : L'ENQUÊTEUR
        // ------------------------------------------------------------------
        "4_jensen_call": {
            "chapter": "CHAPITRE 4 : Mark Jensen",
            "text": "Une voix d'homme. 'Dr Rossi. Je suis Mark Jensen, journaliste. J'ai des infos sur Vance. Café de la Paix. 14h.'",
            "img_prompt": "Man silhouette in a phone booth",
            "choices": [
                { "text": "Accepter le rendez-vous.", "next": "4_cafe_paix" },
                { "text": "Refuser.", "next": "4_refuse_jensen" }
            ]
        },
        "4_refuse_jensen": {
            "chapter": "Menace",
            "text": "'Alors vous lirez tout dans le Figaro demain.' Il raccroche. Vous n'avez pas le choix.",
            "choices": [
                { "text": "Aller au Café de la Paix.", "next": "4_cafe_paix" }
            ]
        },
        "4_cafe_paix": {
            "chapter": "Le Dossier Noir",
            "text": "Jensen vous attend. Il pose un dossier sur la table. 'Vance n'est pas mort d'une embolie. Vous avez sectionné l'artère mammaire. Hémorragie. Vous l'avez tué.'",
            "img_prompt": "Journalist showing documents on a café table",
            "choices": [
                { "text": "Nier en bloc.", "next": "4_deny" },
                { "text": "Regarder les preuves.", "next": "4_look_proof" }
            ]
        },
        "4_look_proof": {
            "chapter": "La Falsification",
            "text": "Rapport d'autopsie. Votre signature. Cause du décès : Choc hémorragique. Et un virement bancaire. 50 000 euros sur votre compte, le lendemain.",
            "img_prompt": "Bank statement showing large transfer",
            "choices": [
                { "text": "Je n'ai jamais reçu cet argent !", "next": "4_blackmail" }
            ]
        },
        "4_deny": {
            "chapter": "Confrontation",
            "text": "'C'est faux !' Jensen sourit. 'J'ai les relevés bancaires, Docteur. Le silence s'achète.'",
            "choices": [
                { "text": "Regarder les preuves.", "next": "4_look_proof" }
            ]
        },
        "4_blackmail": {
            "chapter": "Le Chantage",
            "text": "'Je veux 50 000 euros. Le prix de votre silence. Vous avez une semaine.' Il part.",
            "img_prompt": "Man leaving the table, Elena left alone looking shocked",
            "choices": [
                { "text": "Rentrer chez soi.", "next": "4_home_david" }
            ]
        },
        "4_home_david": {
            "chapter": "La Ruine",
            "text": "Vous rentrez. David est là, en pleurs. 'J'ai tout perdu, Elena. Le poker. Les comptes sont vides. J'ai hypothéqué la maison.'",
            "img_prompt": "Husband crying on the sofa, empty bottle of whiskey",
            "choices": [
                { "text": "Hurler de rage.", "next": "4_anger" },
                { "text": "Lui avouer pour le chantage.", "next": "4_confess_blackmail" }
            ]
        },
        "4_anger": {
            "chapter": "La Fracture",
            "text": "Vous explosez. 'Comment as-tu pu ?!' Vous ne lui dites rien pour Jensen. Vous êtes seule et ruinée.",
            "choices": [
                { "text": "Monter dans la chambre.", "next": "4_camera_discovery" }
            ]
        },
        "4_confess_blackmail": {
            "chapter": "Impasse",
            "text": "Vous lui dites tout. David est anéanti. 'On n'a pas l'argent, Elena. On est finis.'",
            "choices": [
                { "text": "Monter dans la chambre.", "next": "4_camera_discovery" }
            ]
        },
        "4_camera_discovery": {
            "chapter": "L'Espion",
            "text": "Nuit. Cuisine. Vous cherchez de l'eau. Le bouquet de fleurs du Prix Laennec. Une lumière rouge clignote dedans. Une micro-caméra.",
            "img_prompt": "Tiny camera hidden inside a white lily flower",
            "choices": [
                { "text": "L'écraser.", "next": "5_media_storm" },
                { "text": "La laisser et faire semblant de rien.", "next": "5_play_along" }
            ]
        },
        "5_play_along": {
            "chapter": "Le Jeu",
            "text": "Vous la laissez. Ils voient que vous savez. Mais vous gagnez du temps.",
            "choices": [
                { "text": "Le lendemain matin.", "next": "5_media_storm" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 5 : L'EFFONDREMENT (18 SEPTEMBRE)
        // ------------------------------------------------------------------
        "5_media_storm": {
            "chapter": "CHAPITRE 5 : La Une",
            "text": "<b>18 Septembre.</b><br><br>Le Figaro : 'La chirurgienne qui cache un mort'. Jensen n'a pas attendu. Journalistes devant l'hôpital.",
            "img_prompt": "Newspaper front page with Elena's photo and scandalous headline",
            "choices": [
                { "text": "Affronter la presse.", "next": "5_press_confront" },
                { "text": "Entrer par le parking.", "next": "5_director_office" }
            ]
        },
        "5_press_confront": {
            "chapter": "La Meute",
            "text": "Microphones. Cris. 'Avez-vous tué Vance ?' Vous paniquez. Une photo de vous l'air coupable fait le tour du web.",
            "img_prompt": "Paparazzi flashes blinding Elena",
            "choices": [
                { "text": "Fuir vers le bureau du Directeur.", "next": "5_director_office" }
            ]
        },
        "5_director_office": {
            "chapter": "La Suspension",
            "text": "Pr. Monteil. Dr. Delacroix. L'avocat. 'Suspension immédiate. Enquête interne.' Vous devez rendre votre badge.",
            "img_prompt": "Hand putting ID badge on a mahogany desk",
            "choices": [
                { "text": "Obéir et partir dignement.", "next": "5_walk_of_shame" },
                { "text": "Supplier.", "next": "5_begging_fail" }
            ]
        },
        "5_begging_fail": {
            "chapter": "Humiliation",
            "text": "Vous pleurez. Ils sont gênés. Vous sortez brisée.",
            "choices": [
                { "text": "Sortir de l'hôpital.", "next": "5_walk_of_shame" }
            ]
        },
        "5_walk_of_shame": {
            "chapter": "La Paria",
            "text": "Les collègues vous évitent. Sauf Sophie. 'Je vous crois, Elena.' Et Sarah Chen. 'Viens me voir, tu as besoin d'aide.'",
            "img_prompt": "Nurse Sophie touching Elena's arm, Sarah watching from distance",
            "choices": [
                { "text": "Rentrer à la maison.", "next": "5_home_siege" }
            ]
        },
        "5_home_siege": {
            "chapter": "Le Siège",
            "text": "Journalistes devant la villa. David ivre. Enfants harcelés à l'école. 'Maman, tu es une meurtrière ?'",
            "img_prompt": "Children crying in the living room, flashes outside the window",
            "choices": [
                { "text": "Décider de fuir avec les enfants.", "next": "6_the_escape" },
                { "text": "Rester et se barricader.", "next": "5_stay_fail" }
            ]
        },
        "5_stay_fail": {
            "chapter": "GAME OVER",
            "text": "La pression monte. David craque. Les services sociaux s'en mêlent. Vous perdez la garde des enfants.",
            "choices": [
                { "text": "Recommencer le choix", "next": "5_home_siege" }
            ]
        },
        "6_the_escape": {
            "chapter": "CHAPITRE 6 : La Fuite",
            "text": "Nuit. Vous réveillez les enfants. 'On part en vacances.' David reste. Voiture de location. Direction : Chamonix. Chalet de Giulia.",
            "img_prompt": "Car driving on a dark highway, rain",
            "choices": [
                { "text": "Conduire toute la nuit.", "next": "6_chamonix" }
            ]
        },
        "6_chamonix": {
            "chapter": "Refuge ?",
            "text": "Le chalet est isolé. Calme. Vous allumez votre téléphone jetable. Message : 'Belle vue sur les enfants.' Photo d'eux dormant prise il y a 10 secondes à travers la fenêtre.",
            "img_prompt": "Photo of sleeping children with a timestamp",
            "choices": [
                { "text": "Appeler Sarah Chen à l'aide.", "next": "6_call_sarah" },
                { "text": "S'armer d'un couteau et veiller.", "next": "6_vigil" }
            ]
        },
        "6_vigil": {
            "chapter": "La Nuit Longue",
            "text": "Rien ne se passe. Ils jouent avec vous. Au matin, vous êtes épuisée. Vous devez appeler de l'aide.",
            "choices": [
                { "text": "Appeler Sarah Chen.", "next": "6_call_sarah" }
            ]
        },
        "6_call_sarah": {
            "chapter": "L'Alliée ?",
            "text": "Sarah : 'Rentre à Paris. Je peux t'aider. J'ai du matériel pour les piéger.' Elle semble trop bien préparée. Mais vous n'avez pas le choix.",
            "img_prompt": "Sarah Chen on phone, split screen",
            "choices": [
                { "text": "Accepter et rentrer.", "next": "7_return_paris" }
            ]
        },
		        // ------------------------------------------------------------------
        // CHAPITRE 7 : L'ENQUÊTE CLANDESTINE (22 SEPTEMBRE)
        // ------------------------------------------------------------------
        "7_return_paris": {
            "chapter": "CHAPITRE 7 : Le Retour",
            "text": "Vous rentrez. David cache les enfants en Normandie. Vous retrouvez Sarah au Flore. Elle vous donne une mallette d'espionnage : micro, caméra-stylo, brouilleur. Elle semble trop experte.",
            "img_prompt": "Briefcase opening revealing spy gadgets in a café",
            "choices": [
                { "text": "Lui faire confiance aveuglément.", "next": "7_blind_trust" },
                { "text": "Se méfier (Garder le matériel mais douter).", "next": "7_meet_claire" }
            ]
        },
        "7_blind_trust": {
            "chapter": "Erreur de Jugement",
            "text": "Sarah sourit. Vous ne voyez pas le piège. Vous prenez le matériel.",
            "choices": [
                { "text": "Aller voir Claire Vance.", "next": "7_meet_claire" }
            ]
        },
        "7_meet_claire": {
            "chapter": "L'Avocate",
            "text": "Claire Vance. Avenue Foch. Elle n'est pas la sœur de Thomas. 'Thomas Vance n'existe pas. C'était Antonio Benedetti, témoin protégé contre un trafic d'organes.'",
            "img_prompt": "Elegant lawyer showing a photo of Antonio Benedetti",
            "choices": [
                { "text": "Nier l'avoir connu.", "next": "7_deny_antonio" },
                { "text": "Écouter la suite.", "next": "7_truth_antonio" }
            ]
        },
        "7_deny_antonio": {
            "chapter": "Impasse",
            "text": "« Ne mentez pas, Docteur. Vous l'avez sauvé. Puis vous avez maquillé sa mort pour le faire fuir. Vous avez oublié ? »",
            "choices": [
                { "text": "Essayer de se souvenir.", "next": "7_memory_flash" }
            ]
        },
        "7_truth_antonio": {
            "chapter": "La Révélation",
            "text": "« Il a été empoisonné par le Dr. Vidal. Vous l'avez sauvé. Vous l'avez exfiltré en Espagne. Mais quelqu'un a effacé votre mémoire. »",
            "img_prompt": "Flashback: Elena helping a patient escape at night",
            "choices": [
                { "text": "Accepter d'espionner Vidal.", "next": "7_spy_vidal" }
            ]
        },
        "7_memory_flash": {
            "chapter": "Le Flash",
            "text": "Une image : Vidal qui vous menace. Vous qui signez le faux certificat. C'est vrai. Vous êtes une héroïne amnésique.",
            "choices": [
                { "text": "Accepter d'espionner Vidal.", "next": "7_spy_vidal" }
            ]
        },
        "7_spy_vidal": {
            "chapter": "Le Traceur",
            "text": "En sortant, vous trouvez un traceur sous votre voiture. Vous êtes surveillée. Vous recevez un SMS : « Sarah t'a donné les jouets ? » Ils savent pour Sarah.",
            "img_prompt": "Hand holding a black GPS tracker found under a car bumper",
            "choices": [
                { "text": "Douter de Sarah.", "next": "8_hospital_infiltration" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 8 : L'HÔPITAL (23 SEPTEMBRE)
        // ------------------------------------------------------------------
        "8_hospital_infiltration": {
            "chapter": "CHAPITRE 8 : L'Infiltration",
            "text": "Déguisée en infirmière intérimaire 'Isabelle'. Sophie vous aide. Vous entrez dans les archives.",
            "img_prompt": "Elena in nurse uniform looking through files in a dark archive room",
            "choices": [
                { "text": "Chercher le dossier Vance.", "next": "8_vance_file" },
                { "text": "Chercher les dossiers de greffes.", "next": "8_organ_files" }
            ]
        },
        "8_vance_file": {
            "chapter": "Falsification",
            "text": "Le dossier a été réécrit. Mais vous trouvez l'original caché derrière. Vidal a tout changé.",
            "img_prompt": "Two medical files side by side with differences highlighted",
            "choices": [
                { "text": "Photographier les preuves.", "next": "8_caught" }
            ]
        },
        "8_organ_files": {
            "chapter": "L'Horreur",
            "text": "Liste de donneurs 'disparus'. Migrants, SDF. C'est une usine à organes.",
            "img_prompt": "List of names with 'DECEASED' stamps",
            "choices": [
                { "text": "Photographier les preuves.", "next": "8_caught" }
            ]
        },
        "8_caught": {
            "chapter": "Démasquée",
            "text": "Vidal entre avec deux gorilles. « Docteur Rossi. Vous êtes tenace. » Il vous emmène dans son bureau. Sur la table : une clé USB 'E.R. - Souvenirs originaux'.",
            "img_prompt": "Sinister doctor smiling, USB key on desk",
            "choices": [
                { "text": "Tenter de fuir par la fenêtre.", "next": "8_window_escape" },
                { "text": "Essayer de négocier.", "next": "8_negotiate_fail" }
            ]
        },
        "8_negotiate_fail": {
            "chapter": "Piégée",
            "text": "Il rit. On vous fait une piqûre. Vous vous réveillez sans souvenirs. GAME OVER.",
            "img_prompt": "Vision blurring to black",
            "choices": [
                { "text": "Recommencer l'infiltration", "next": "8_hospital_infiltration" }
            ]
        },
        "8_window_escape": {
            "chapter": "L'Acrobate",
            "text": "Vous attrapez la clé USB. Vous sautez par la fenêtre. Corniche. Escalier de secours. Vous courez. Vidal hurle.",
            "img_prompt": "Woman climbing out a window ledge, rainy Paris street below",
            "choices": [
                { "text": "Se cacher dans le métro.", "next": "9_safehouse_analysis" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 9 : LA CLÉ DE LA MÉMOIRE
        // ------------------------------------------------------------------
        "9_safehouse_analysis": {
            "chapter": "CHAPITRE 9 : La Lecture",
            "text": "Planque de Sarah. Vous regardez la clé. Vidéos de vos séances d'hypnose. Vous voyez Sarah vous droguer, vous implanter de faux souvenirs. Sarah est là, à côté de vous.",
            "img_prompt": "Video on screen showing Sarah hypnotizing Elena",
            "choices": [
                { "text": "La confronter calmement.", "next": "9_confront_sarah" },
                { "text": "L'attaquer.", "next": "9_attack_sarah" }
            ]
        },
        "9_confront_sarah": {
            "chapter": "Le Masque Tombe",
            "text": "« Depuis le début ? » Sarah sort une seringue. « Tu étais le cobaye parfait. Le Projet Mnémé. » Elle veut vous effacer pour de bon.",
            "img_prompt": "Sarah holding a syringe, cold expression",
            "choices": [
                { "text": "Se battre.", "next": "9_fight_sarah" }
            ]
        },
        "9_attack_sarah": {
            "chapter": "Surprise",
            "text": "Vous la poussez. La seringue tombe. Elle est plus faible que prévu.",
            "choices": [
                { "text": "La maîtriser.", "next": "9_fight_sarah" }
            ]
        },
        "9_fight_sarah": {
            "chapter": "Victoire",
            "text": "Vous la dominez. Vous la laissez là. Vous partez avec les preuves. Vous savez qui vous êtes. Vous n'êtes pas folle.",
            "img_prompt": "Elena walking away from a door, looking determined",
            "choices": [
                { "text": "Rejoindre Sophie et la journaliste.", "next": "10_counter_attack" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 10 : LA CONTRE-ATTAQUE
        // ------------------------------------------------------------------
        "10_counter_attack": {
            "chapter": "CHAPITRE 10 : L'Équipe",
            "text": "Chez Giulia. Sophie, Thomas (hacker), Marie Dubois (Journaliste). Vous avez les preuves. Il manque une chose : Antonio. Il est à Marseille.",
            "img_prompt": "Team gathered around a kitchen table planning",
            "choices": [
                { "text": "Aller chercher Antonio.", "next": "10_marseille" }
            ]
        },
        "10_marseille": {
            "chapter": "Marseille",
            "text": "Vieux-Port. Antonio est méfiant. « Ils vont nous tuer. » Vous le convainquez. « On ne fuit plus. On se bat. »",
            "img_prompt": "Man and woman talking intensely on a sunny harbor",
            "choices": [
                { "text": "Rentrer à Paris pour le piège.", "next": "10_the_trap" }
            ]
        },
        "10_the_trap": {
            "chapter": "Le Piège à Loups",
            "text": "Vous donnez rendez-vous à Sarah (qui s'est échappée ou a été libérée sous caution ? Non, elle est en liberté, vous l'aviez juste laissée). Entrepôt Aubervilliers. Vous prétendez vouloir négocier.",
            "img_prompt": "Dark warehouse interior",
            "choices": [
                { "text": "Lancer l'opération.", "next": "11_clinique_neuilly" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 11 : LA CLINIQUE RENAISSANCE
        // ------------------------------------------------------------------
        "11_clinique_neuilly": {
            "chapter": "CHAPITRE 11 : Le Cœur du Mal",
            "text": "<b>Clinique Renaissance, Neuilly.</b><br><br>C'est le QG. Vous vous infiltrez pour placer des micros. Vous découvrez le sous-sol. Des médecins 'reprogrammés' dans le coma.",
            "img_prompt": "High tech lab with patients in glass pods",
            "choices": [
                { "text": "Continuer l'exploration.", "next": "11_moreau_faceoff" }
            ]
        },
        "11_moreau_faceoff": {
            "chapter": "Moreau",
            "text": "Philippe Moreau (Vidal) vous attend. C'était un piège ! « Vous allez rejoindre mes patients. » On vous attache.",
            "img_prompt": "Elena strapped to a medical chair, machine descending",
            "choices": [
                { "text": "Résister mentalement.", "next": "11_mental_resistance" },
                { "text": "Utiliser le signal d'urgence.", "next": "11_signal" }
            ]
        },
        "11_mental_resistance": {
            "chapter": "Force",
            "text": "La drogue ne marche pas. Votre cerveau a développé une résistance. Vous gagnez du temps.",
            "choices": [
                { "text": "Utiliser le signal d'urgence.", "next": "11_signal" }
            ]
        },
        "11_signal": {
            "chapter": "L'Assaut",
            "text": "Antonio coupe le courant. Chaos. La police (prévenue par Marie) défonce les portes. C'est la fin pour eux.",
            "img_prompt": "SWAT team breaking glass walls",
            "choices": [
                { "text": "Assister aux arrestations.", "next": "12_trial_prep" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 12 : LE PROCÈS
        // ------------------------------------------------------------------
        "12_trial_prep": {
            "chapter": "CHAPITRE 12 : La Justice",
            "text": "4 mois plus tard. Le procès. Sarah et Moreau dans le box. Antonio témoigne. C'est votre tour.",
            "img_prompt": "Courtroom sketch of Elena testifying",
            "choices": [
                { "text": "Raconter toute la vérité.", "next": "12_testimony" }
            ]
        },
        "12_testimony": {
            "chapter": "Vérité",
            "text": "Vous racontez le vol de mémoire. L'expert Dr. Reiner confirme : vos vrais souvenirs sont revenus. Le jury est conquis.",
            "img_prompt": "Elena speaking with passion, jury listening intently",
            "choices": [
                { "text": "Écouter le verdict.", "next": "12_verdict" }
            ]
        },
        "12_verdict": {
            "chapter": "Coupables",
            "text": "25 ans pour Chen. 30 pour Moreau. Vous sortez sous les applaudissements. David est là.",
            "img_prompt": "Crowd cheering outside the courthouse",
            "choices": [
                { "text": "Parler à David.", "next": "13_family_reunion" }
            ]
        },
        "13_family_reunion": {
            "chapter": "Pardon",
            "text": "David s'excuse. Vous le pardonnez, mais vous divorcez. Vous restez une famille unie pour les enfants. Une nouvelle vie commence.",
            "img_prompt": "Family hugging, bittersweet smile",
            "choices": [
                { "text": "Avancer de 5 ans (Épilogue).", "next": "14_nobel_prize" }
            ]
        },
		        // ------------------------------------------------------------------
        // CHAPITRE 14 : LE PRIX NOBEL (5 ANS PLUS TARD)
        // ------------------------------------------------------------------
        "14_nobel_prize": {
            "chapter": "CHAPITRE 13 : La Reconnaissance",
            "text": "<b>Stockholm. 10 décembre.</b><br><br>Vous êtes Elena Rossi, 43 ans. Vous allez recevoir le Prix Nobel de la Paix pour votre combat contre la manipulation mentale.",
            "img_prompt": "Woman in blue evening gown holding a Nobel medal, looking serene",
            "choices": [
                { "text": "Prononcer le discours.", "next": "14_speech" }
            ]
        },
        "14_speech": {
            "chapter": "Le Message",
            "text": "« Notre mémoire est notre liberté. » Le monde vous écoute. Vous avez créé une Fondation. Vous avez changé les lois.",
            "img_prompt": "Audience giving a standing ovation",
            "choices": [
                { "text": "Célébrer avec la famille.", "next": "14_celebration" }
            ]
        },
        "14_celebration": {
            "chapter": "La Famille",
            "text": "James (votre nouveau mari), Emma, Lucas. Et Antonio. Ils sont tous là. Vous êtes heureuse. Mais le combat continue.",
            "img_prompt": "Toast at a gala dinner, smiling faces",
            "choices": [
                { "text": "Recevoir une alerte de l'OMS.", "next": "15_new_threat" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 15 : LA NOUVELLE MENACE (SINGAPOUR)
        // ------------------------------------------------------------------
        "15_new_threat": {
            "chapter": "CHAPITRE 14 : Singapour",
            "text": "Un nouveau réseau émerge. Dr. Yuki Tanaka. Elle utilise des implants pour contrôler des chefs d'état. C'est pire que Mnémé.",
            "img_prompt": "Futuristic skyline of Singapore at night, red warning lights",
            "choices": [
                { "text": "Repartir en mission.", "next": "15_mission_singapore" },
                { "text": "Rester en retrait (Trop dangereux).", "next": "15_stay_safe" }
            ]
        },
        "15_stay_safe": {
            "chapter": "Retraite",
            "text": "Vous envoyez une équipe. Ils échouent. Le monde sombre dans une crise manipulée. Vous regrettez votre inaction.",
            "choices": [
                { "text": "Recommencer le choix", "next": "15_new_threat" }
            ]
        },
        "15_mission_singapore": {
            "chapter": "L'Infiltration",
            "text": "Vous y allez avec Antonio. Infiltration de la Tour Raffles. Vous êtes repérés. Tanaka vous attend.",
            "img_prompt": "High tech laboratory confrontation",
            "choices": [
                { "text": "Utiliser la ruse psychologique.", "next": "15_psy_war" },
                { "text": "Utiliser la force.", "next": "15_force_fail" }
            ]
        },
        "15_force_fail": {
            "chapter": "Échec",
            "text": "Ses gardes sont trop nombreux. Vous êtes capturée. Cette fois, ils ne feront pas d'erreur.",
            "choices": [
                { "text": "Recommencer l'infiltration", "next": "15_mission_singapore" }
            ]
        },
        "15_psy_war": {
            "chapter": "Le Duel",
            "text": "Vous parlez aux victimes via le système audio. Vous réveillez leur humanité. Tanaka perd le contrôle. Son empire s'effondre.",
            "img_prompt": "Screens showing people waking up from trance",
            "choices": [
                { "text": "Rentrer à Paris.", "next": "16_legacy" }
            ]
        },

        // ------------------------------------------------------------------
        // CHAPITRE 16 : L'HÉRITAGE
        // ------------------------------------------------------------------
        "16_legacy": {
            "chapter": "ÉPILOGUE : L'Héritage",
            "text": "<b>Paris. 3 ans plus tard.</b><br><br>Vous êtes grand-mère. Emma a un fils. Vous écrivez vos mémoires. Sarah vous a écrit une lettre d'excuses.",
            "img_prompt": "Older woman writing in a notebook by a window overlooking Paris",
            "choices": [
                { "text": "Lui pardonner.", "next": "16_forgive" },
                { "text": "Ne pas répondre.", "next": "16_ignore" }
            ]
        },
        "16_ignore": {
            "chapter": "Silence",
            "text": "Le silence est votre réponse. Vous êtes en paix. La vie continue.",
            "choices": [
                { "text": "Fin de l'histoire.", "next": "17_end" }
            ]
        },
        "16_forgive": {
            "chapter": "Paix",
            "text": "« Je ne te hais plus. C'est ma liberté. » Vous fermez l'enveloppe. Vous regardez votre famille.",
            "img_prompt": "Family gathering in a sunny garden",
            "choices": [
                { "text": "Fin de l'histoire.", "next": "17_end" }
            ]
        },
        "17_end": {
            "chapter": "FIN",
            "text": "Merci d'avoir joué à 'Le Syndrome de l'Imposteur'.<br>Auteur : Franck Platon.<br>Adaptation Interactive.<br><br>Vous avez prouvé que la vérité est plus forte que tout.",
            "img_prompt": "Book cover 'The Impostor Syndrome' on a table",
            "choices": [
                { "text": "Recommencer l'aventure", "next": "start" }
            ]
        }
    }
};