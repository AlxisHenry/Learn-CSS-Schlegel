import { IMAGES_DATA } from "./data/data.js";
import { GET_URL_CLASS } from "./data/global.js";

export function URL_CONDITION() {
  if (GET_URL_CLASS === "events") {
    URL_GET_EVENTS();
  } else if (GET_URL_CLASS === "activity") {
    URL_GET_ACTIVITY();
  } else {
    URL_GET_POPULAIRE();
  }
}

export function URL_GET_EVENTS() {
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === GET_URL_CLASS)) {
      if (IMAGES_DATA[getImg].class === "events") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> <img src=${IMAGES_DATA[getImg].favlink} style="width: 202px" class="show-this-img"><p>${IMAGES_DATA[getImg].title}</p><span>${IMAGES_DATA[getImg].h1}</span><br><span>${IMAGES_DATA[getImg].comment}</span></div>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
}

export function URL_GET_ACTIVITY() {
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === GET_URL_CLASS)) {
      if (IMAGES_DATA[getImg].class === "activity") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> <img src=${IMAGES_DATA[getImg].favlink} style="width: 202px"><p>${IMAGES_DATA[getImg].title}</p><span>${IMAGES_DATA[getImg].h1}</span><br><span>${IMAGES_DATA[getImg].comment}</span></div>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
}

export function URL_GET_POPULAIRE() {
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === GET_URL_CLASS)) {
      if (IMAGES_DATA[getImg].class === "populaire") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> <img src=${IMAGES_DATA[getImg].favlink} style="width: 202px"><p>${IMAGES_DATA[getImg].title}</p><span>${IMAGES_DATA[getImg].h1}</span><br><span>${IMAGES_DATA[getImg].comment}</span></div>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
}
