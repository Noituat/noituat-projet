# NoituatProjet

Projet de plateforme de travail du domaine : https://noituat.fr

Cette plateforme est initialement protegée par une page web classique proposant à l'utilisateur de se connecter.
Cette page n'est pas présente encore présente dans ce GitHub car le site n'est pas encore opérationnel.

Le but de cette plateforme est de permettre à l'utilisateur authentifié d'avoir accès aux ressources présentes sur le serveur à l'adresse ci-dessus de manière sécurisée depuis une page web.

Une fois authentifié, l'utilisateur est redirigé vers le site web développé sous Angular 7 permettant l'accès aux ressources ainsi qu'a quelques fonctionnalités.

A noter que cette plateforme est un test afin de savoir ce qu'il est possible de réaliser ou non avec Angular. Etant étudiant, je me suis interessé aux FrameWorks et j'ai commencé par découvrir leurs principes avec Angular.

#---------------------------------------------------------------------------------------------------------------------------------

Sur cette plateforme, on pourra retrouver les fonctionnalités suivantes : 
---> Présence d'un Dashboard affichant certaines fonctionnalités essentielles à l'utilisateur (Emploi du temps, liste des projets en cours, avancée sur les projets, travail à faire, pour ne citer qu'eux...). Ce Dashboard permettra également de se déplacer entre les différentes vues (Agenda, Projets en cours, Fichiers, Connexion...) afin d'accéder à leurs fonctionnalités avancées.

---> Agenda : Cette page va permettre la mise à jour de l'agenda par l'utilisateur authentifié en affichant une grille de taille 5x10. Il pourra séléctionner les différentes activités liées à sa fonction actuelle et renseigner au besoin de nouvelles activités (e.g : Actuellement, l'utilisateur est noituat et sa fonction est service civique. Dans la base de données, ses 2 activités principales sont "Devoirs faits" et "Salle Informatique". L'utilisateur pourra alors indiquer la classe qu'il gère en "Devoirs Faits" -> "Devoirs Faits (6A)" ou même ajouter un champs qu'il devra saisir manuellement. Ce champs sera alors stocké dans la base de données.
A noter que le Dashboard permet un affichage rapide de l'agenda afin de faciliter l'organisation de la journée de l'utilisateur. Cette fonctionalité ne permettra pas de modifier l'agenda, ce sera un autre composant Angular qui permettra de juste afficher le contenu de la base de données.
Se basant principalement sur Angular et HTML5, la plateforme ne se connectera probablement pas en PHP (je n'ai pas assez d'info sur le sujet mais ne pense pas qu'il soit possible d'insérer du code PHP dans Angular et il sera inutile dans les pages PHP). Il faudra donc trouver une solution pour arriver à lier le site Angular à la base de données MySQL présente sur le serveur pour stocker, mettre à jour ou réccupérer des informations depuis le site web. (EXPRESS.js ???).

---> Projets en cours : Cette section, un peu sur la base de GitHub, permettra à l'utilisateur de tenir un journal de bord numérique de l'état de ses projets, que ce soit numérique ou dans la vie de tous les jours. L'utilisateur pourra noter dans différentes catégories qui devront apparaitre tel un tableau blanc de "dépot de pensées".
Sur la page apparaitra les différents cadres déja placés par l'utilisateur, ces cadres seront nommés en fonction du thème, du projet ou de la refléxion en cours. Chaque "post-it" sera enregistré dans la base de données en texte brut dans 2 champs qui seront propres à l'utilisateur (en prévision de plusieurs utilisateurs de la plateforme. Les données seront alors propres à l'utilisateur qui pourra visualiser, modifier ou supprimer chaque post-it individuellement.

---> Fichiers : Cette fonctionnalité permettra à l'utilisateur authentifié de visualiser (ET SEULEMENT VISUALISER!) les fichiers présents dans un dossier partagé sur le serveur à l'adresse ci-dessus. Ce dossier est dors-et-dejà accessible sur le serveur mais y avoir accès requiert une authentification systématique sur un ordinateur. Le but de ce site est principalement la portabilité et l'accès à distance sur tout périphérique, complètement à l'opposé du cas cité juste avant. (Encore une fois, il s'agit ici d'une tentative pour voir ce qu'il est possible de réaliser sous Angular, je n'ai aucune idée de si c'est réalisable mais j'ai du temps à perdre donc autant essayer et que çà me serve d'entrainement pour ma future carrière professionnelle). La plateforme de traitement de fichiers sera particulièrement compliquée à mettre en place, notamment par mon manque de connaissance en JavaScript/TypeScript/Angular. Après quelques recherches, l'utilisation de NodeJS sera probablement à prévoir pour réccupérer les liens de chacuns des fichiers présents dans le dossier partagé sur le serveur. Ces liens seront stockés momentanément afin de permettre leur téléchargement depuis la page web via un bouton de téléchargement présent près du fichier. 
Le but principal est que la plateforme ait un minimum de "gueule" et soit plaisante à l'utilisation c'est pourquoi je devrais également m'assurer d'un affichage propre et épuré des différents sous dossiers et fichiers présents sur la page web.
