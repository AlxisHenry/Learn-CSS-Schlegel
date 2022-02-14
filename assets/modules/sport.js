import { IMAGES_DATA } from "./data.js";
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("class");

if (!(myParam === "events")) {
  //// console.log("activity");
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === myParam)) {
      if (IMAGES_DATA[getImg].class === "activity") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> <img src=${IMAGES_DATA[getImg].favlink} style="width: 202px"><p>${IMAGES_DATA[getImg].title}</p><span>${IMAGES_DATA[getImg].h1}</span><br><span>${IMAGES_DATA[getImg].comment}</span></div>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
} else {
  //// console.log("events");
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === myParam)) {
      if (IMAGES_DATA[getImg].class === "events") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> <img src=${IMAGES_DATA[getImg].favlink} style="width: 202px"><p>${IMAGES_DATA[getImg].title}</p><span>${IMAGES_DATA[getImg].h1}</span><br><span>${IMAGES_DATA[getImg].comment}</span></div>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
}
