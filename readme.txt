Ceci est le projet lié à la base de la programmation.

Il s'agit d'un site internet qui va parler de sport. Le but du site est de présenter les différents sports et de permettre aux personnes 
qui se connectent de proposer des événements sportifs.

Au début du projet, il n'existe qu'une page HTML qui regroupe tous les éléments qui devront se retrouver sur la page principale
- Titre 
- Textes
- Photo
const path_to_images = {
  activites: "./images/activites/",
  populaire: "./images/populaire/",
  evenement: "./images/evenement/",
};


const images = {
  activites: {
    basket: {
      alt: "Basketball",
      src: `${path_to_images.activites}basketball.jpg`,
      etat: 'int',
    },
    boxe: {
      alt: "Boxe",
      src: `${path_to_images.activites}boxe.jpg`,
      etat: 'int',
    },
    crossfit: {
      alt: "Crossfit",
      src: `${path_to_images.activites}crossfit.jpg`,
      etat: 'int',
    },
    fitness: {
      alt: "Fitness",
      src: `${path_to_images.activitess}fitness.jpg`,
      etat: 'int',
    },
    karate: {
      alt: "Karaté",
      src: `${path_to_images.activites}karaté.jpg`,
      etat: 'int',
    },
    musculation: {
      alt: "Musculation",
      src: `${path_to_images.activites}musculation.jpg`,
      etat: 'int',
    },
  },
  populaire: {
    running: {
      alt: "Running",
      src: `${path_to_images.populaire}running.jpg`,
      data: [2],
    },
    yoga: {
      alt: "Yoga",
      src: `${path_to_images.populaire}yoga.jpg`,
      data: [2],
    },
    natation: {
      alt: "Natation",
      src: `${path_to_images.populaire}natation.jpg`,
      data: [1],
    },
  },
  evenement: {
    canoe: {
      alt: "Canoe",
      src: `${path_to_images.evenement}canoe.jpg`,
      data: [2],
    },
    football: {
      alt: "Football",
      src: `${path_to_images.evenement}football.jpg`,
      data: [2],
    },
    motocross: {
      alt: "Mottocross",
      src: `${path_to_images.evenement}motocross.jpg`,
      data: [2],
    },
    plancheAvoile: {
      alt: "Planche",
      src: `${path_to_images.evenement}plancheAvoile.jpg`,
      data: [2],
    },
    plongee: {
      alt: "Plongée",
      src: `${path_to_images.evenement}plongée.jpg`,
      data: [2],
    },
    triathlon: {
      alt: "TriathlonNatation",
      src: `${path_to_images.evenement}triathlon.jpg`,
      data: [2],
    },
  },
};

Comme vous pouvez le constater, il n'y a aucun style, aucun formattage. Tous les éléments ont juste été mis les uns à la suite des autres à
l'aide de balise <BR>. Comme cela était attendu, le résultat n'est pas terrible.

Votre mission si vous l'acceptez est donc de donner envie aux utilisateurs d'utiliser ce site, le rendre agréable à l'utilisation. Pour cela, 
vous avez à votre disposition tous les outils que nous avons vu dans le cours :
- Restructurer le code HTML
- Utiliser toutes les balises standards
- Redimensionner les images
- Intégrer une feuille de style CSS 
- Utiliser tous les éléments de style que permet CSS
- Utiliser les flexbox pour rendre le site responsive
- Utiliser le CSS dynamique pour rendre le site vivant
- Utiliser fontawesome pour ajouter un aspect graphique.

Ce sujet vous laisse énormément de liberté. Le sujet à la base vous donne des éléments mais vous êtes libre d'extrapoler des éléments 
supplémentaires sur le site.

Veillez à ce que vos fichiers HTML et CSS passe le W3C validator : https://validator.w3.org/

Les critères d'évaluation sont nombreux puisque le sujet vous laisse énormément de liberté :
- Le projet devra utiliser une organisation adaptée (pas tous les fichiers dans le même répertoire)
- Utilisation correcte des notions vues en cours
- Aspect agréable à utiliser du site
- Aspect responsive cohérent
- Propositions d'évolution du site
....

Au jour où vous aller débuter sur le sujet, tous les cours n'auront pas été donnés. Nous allons encore aborder les cours suivants :
- Initiation au SEO et à l'accessibilité
- Programmation javascript pour le web

Ces sujets pourront aussi être intégrés au projet à partir du moment où nous les aurons abordés et donnerons lieu à des contraintes 
supplémentaires.

Je vous propose de rendre le projet le 22 mars 2022, soit 1 mois après le dernier cours sur les bases de la programmation. Vous pourrez 
intégrer ce projet à votre répertoire GIT personnel.

Bonne chance,

Philippe Schlegel