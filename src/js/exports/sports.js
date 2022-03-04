import { IMAGES_DATA } from "./../../../assets/data/data.js";
import { GetUrlClassParam } from "./../dom/global.js";

export function URL_CONDITION() {
  if (GetUrlClassParam === "events") {
    URL_GET_EVENTS();
  } else if (GetUrlClassParam === "activity") {
    URL_GET_ACTIVITY();
  } else if(GetUrlClassParam === "populaires") {
    URL_GET_POPULAIRE();
  }
}

export function URL_GET_EVENTS() {
  document.querySelector('title').innerHTML = 'Les Évènements - Sport Addict'
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === GetUrlClassParam)) {
      if (IMAGES_DATA[getImg].class === "events") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> 
        <a href="./research.html?sport=${IMAGES_DATA[getImg]._id}">
        <img src=${IMAGES_DATA[getImg].link} style="width: 202px" class="show-this-img"></a>
        <h1>${IMAGES_DATA[getImg].h1}</h1><br>
        <h2>${IMAGES_DATA[getImg].comment}</h2></div>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
}

export function URL_GET_ACTIVITY() {
  document.querySelector('title').innerHTML = "Besoin d'idées ? - Sport Addict"
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === GetUrlClassParam)) {
      if (IMAGES_DATA[getImg].class === "activity") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> 
        <a href="./research.html?sport=${IMAGES_DATA[getImg]._id}">
        <img src=${IMAGES_DATA[getImg].link} style="width: 202px"></a>
        <h1>${IMAGES_DATA[getImg].h1}</h1><br>
        <h2>${IMAGES_DATA[getImg].comment}</h2></div>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
}

export function URL_GET_POPULAIRE() {
  document.querySelector('title').innerHTML = 'Populaires - Sport Addict'
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === GetUrlClassParam)) {
      if (IMAGES_DATA[getImg].class === "populaires") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> 
        <a href="./research.html?sport=${IMAGES_DATA[getImg]._id}">
        <img src=${IMAGES_DATA[getImg].link} style="width: 202px"></a>
        <h1>${IMAGES_DATA[getImg].h1}</h1><br>
        <h2>${IMAGES_DATA[getImg].comment}</h2>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
}
