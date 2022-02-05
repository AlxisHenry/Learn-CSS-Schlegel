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
