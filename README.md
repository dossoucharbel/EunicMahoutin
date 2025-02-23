# Readme
Description

Une application mobile construite avec React Native pour démontrer la gestion de la navigation, l'authentification, l'intégration d'API, les notifications push, et la mise en cache des données. Cette application est conçue pour être fonctionnelle et robuste, respectant les bonnes pratiques de développement.
Fonctionnalités principales

    Navigation entre plusieurs écrans : Écran de connexion, écran d'accueil et écran principal avec la gestion d'une liste de données.
    Authentification : Formulaire de connexion avec validation d'utilisateur via une API.
    Requêtes API : Appels API pour récupérer des données.
    Push Notifications : Notifications push envoyées à l'utilisateur.
    Mise en cache des données et images : Les données et images sont mises en cache pour améliorer les performances de l'application.

Prérequis

Avant de pouvoir exécuter ce projet, assurez-vous que vous avez installé les outils suivants :

    Node.js (version >= 12)
    Yarn ou npm
    Expo CLI pour une configuration rapide ou React Native CLI si vous préférez.
    Android Studio pour l'émulateur Android (si vous testez sur Android).
    Xcode pour l'émulateur iOS (si vous testez sur iOS).

Installation

    Clonez le dépôt sur votre machine :

git clone https://github.com/votre-utilisateur/votre-projet.git

Accédez au répertoire du projet :

cd votre-projet

Installez les dépendances :

npm install
# ou
yarn install

Si vous utilisez Expo pour démarrer rapidement, exécutez :

expo start

Si vous utilisez React Native CLI, exécutez :

    npx react-native run-android    # Pour Android
    npx react-native run-ios        # Pour iOS

Flux de Navigation

L'application utilise React Navigation pour gérer la navigation entre les écrans :

    Ecran de bienvenue (Welcome):
        Ce premier écran affiche une animation ou un message de bienvenue et permet à l'utilisateur de se connecter ou de s'inscrire.
        Il redirige vers l'écran de connexion ou l'écran principal.

    Ecran de connexion (LoginPage):
        L'utilisateur entre ses informations d'identification (email, mot de passe).
        Un appel API est effectué pour vérifier les identifiants.
        Si la connexion est réussie, l'utilisateur est redirigé vers l'écran principal.

    Ecran principal (MainPage):
        Après une connexion réussie, l'utilisateur accède à l'écran principal.
        Affiche les données récupérées via une API.
        Les utilisateurs peuvent interagir avec ces données (par exemple, afficher, ajouter ou supprimer).

Description des fichiers :

    App.js : Point d'entrée de l'application, qui configure la navigation.
    LoginPage.js : Page de connexion avec un formulaire pour l'authentification.
    MainPage.js : Page principale qui affiche les données après la connexion.
    Welcome.js : Page d'accueil avec des liens vers la connexion et l'inscription.

Fonctionnalités supplémentaires
Authentification

    Connexion : L'utilisateur peut se connecter avec son email et son mot de passe.
    Stockage du Token : Le token JWT est stocké localement pour maintenir la session.

Requêtes API

Les données sont récupérées via des appels API. Les données sont stockées dans l'état local et sont affichées à l'utilisateur dans l'écran principal.
Notifications Push

Les notifications push sont envoyées via Firebase Cloud Messaging (FCM). Les utilisateurs peuvent recevoir des notifications même lorsque l'application est en arrière-plan.
Mise en cache des données et images

Les données et images sont mises en cache pour améliorer les performances de l'application. Les images sont récupérées via un cache spécifique, et les données sont stockées localement pendant un certain temps avant d'être rafraîchies.
Générer un APK signé
