1. Introduction
Ami gastronome du jour, bonjour ! Grâce à tes super talents de jardinier binaire, une entreprise à la mode te contacte pour refaire leur site internet. Tu vois les specs, et tu sens que c'est parfaitement à ta hauteur. Tu signes donc. Excellente idée !

Dans ce projet, tu vas faire une page qui va te faire jouer avec les éléments, histoire de donner un coup de boost à ton JS de front. Voici les différentes tâches que tu vas faire :

Un bouton qui génère un menu via une IA hyper stylée
Des tabs, afin de rendre ta page dynamique
Une "exit-popup"
Une belle galerie de photos du restaurant
Un drag and drop
2. Le projet
2.1. La foodtech
De nos jours, n'importe quelle entreprise qui a un site internet se finissant en .io s'autoproclame startup. Une police un peu stylée façon Monserrat, un logo en forme de rond, des couleurs pastels, et hop, même le kebab du coin est désormais une startup de haute technologie.

Un bistrot installé dans un quartier branchouille l'a bien compris et voudrait faire appel à toi pour refaire son site.

Le site sera simple :

Il y aura une page qui va afficher une photo ainsi que le concept du restaurant
Nous aurons un système de tabulation où l'utilisateur pourra afficher le menu
2.2. Tabulation
Commence par faire la page qui affiche une photo ainsi que le concept du restaurant. Un phrase du genre "produits frais et bio" fera amplement l'affaire.

Ensuite, tu vas devoir ajouter une tabulation pour avoir un deuxième onglet qui affiche le menu.

Bien entendu, si tu peux utiliser Bootstrap pour ton site, il te sera interdit d'utiliser le nav-tabs de Bootstrap. L'objectif est quand même que tu apprennes à manipuler le DOM avec JavaScript 😁

2.3. Menu généré
Grâce à ton site, tous les bio-bobo du quartier affluent en masse au restaurant. Il faut dire que ce concept de produits frais et bio était ravageur. Le hic est qu'ils trouvent que le menu n'est pas très original et qu'ils voudraient du changement. Les fondateurs du restaurant te recontactent avec l'idée du siècle : une intelligence artificielle qui génère le menu. Ni une ni deux, tu te dis que c'est le 🔥🔥🔥 et tu planches dessus.

Ton objectif sera d'ajouter un bouton Marre de ce menu ? Changez-le ! qui va remplacer ton menu choisi par un menu généré de manière "quantic deep-learning".

Ne t'en fais pas, cette fois-ci pas de trucs qui font mal à la tête, nous allons générer le menu avec un bon vieux mélange d'arrays. J'ai codé pour la structure du générateur de menu que tu pourras trouver ci-bas :

var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]

var random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
var random_technique = techniques[Math.floor(Math.random()*techniques.length)]
var random_side = sides[Math.floor(Math.random()*sides.length)]
var random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]

var menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`


Bon j'avoue que je me suis un peu éclaté à écrire ces menus, mais tu peux complètement faire ton propre générateur ou ajouter/changer des éléments ! L'objectif est que le client (la startup) soit content et que les clients (qui mangent) affluent en masse vers le restaurant.

2.4. Popup
Bien joué ! Ton IA est un succès et l'entreprise vient de lever des milliards avec ce concept à faire pâlir d'envie tous les grands de la Foodtech. Le client te contacte une nouvelle fois pour te demander une nouvelle fonctionnalité : une Exit Popup. Tu as dû déjà en voir : c'est une sorte de popup qui s'affiche quand tu quittes le site sans s'être engagé sur le site. Tu pourras trouver plus d'info à ce sujet ici ou là.

Nous allons te demander de créer une Exit Popup. Voici les spécificités :

Elle doit apparaitre quand la souris de l'utilisateur quitte l'écran
Elle doit s'afficher au milieu de l'écran
Le reste du site doit être un peu plus foncé afin de concentrer l'attention sur la popup
En cliquant sur la croix de la popup ou sur le reste du site, la popup doit disparaitre et le site redevenir normal
Le message de la popup doit engager l'utilisateur. À toi de trouver le meilleur message. Tu peux par exemple leur demander de s'inscrire à la newsletter du restaurant pour obtenir les menus meilleurs menus. Cela permettra de t'apprendre l'implémentation de MailChimp, un puissant outil de gestion de newsletter
2.5. Galerie de photos
Les clients demandent désormais plein de photos du restaurant. Ajoute un troisième onglet "photos" dans laquelle tu mettras quelques photos en grille.

2.6. Drag and Drop
Nous allons pouvoir jouer avec les photos : créé un drag and drop dans lequel tu pourras changer l'ordre des photos.