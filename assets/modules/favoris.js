// Ajout d'une image aux favoris

import { THIS_CONTAIN_IMG, TOGGLE_FAV_IMG, SHOW_USERS_FAVS } from "./global.js";
import { IMAGES_DATA } from "./data.js";

export function VERIFY_FAV_STATUS() {
  var DATA_CONTAIN = IMAGES_DATA.find((x) => x._id === THIS_CONTAIN_IMG.id);

  if (localStorage.getItem(`${DATA_CONTAIN._id}`)) {
    TOGGLE_FAV_IMG[0].style.display = "none";
    TOGGLE_FAV_IMG[1].style.display = "block";
  } else {
    TOGGLE_FAV_IMG[1].style.display = "none";
    TOGGLE_FAV_IMG[0].style.display = "block";
  }
}

export function LOCAL_STORAGE_FAV() {
  var FAV_STORAGE;
  var DATA_CONTAIN = IMAGES_DATA.find((x) => x._id === THIS_CONTAIN_IMG.id);

  if (!localStorage.getItem(`${DATA_CONTAIN._id}`)) {
    FAV_STORAGE = new Array();
    TOGGLE_FAV_IMG[0].style.display = "none";
    TOGGLE_FAV_IMG[1].style.display = "block";
  } else {
    FAV_STORAGE = JSON.parse(localStorage.getItem(`${DATA_CONTAIN._id}`));

    TOGGLE_FAV_IMG[1].style.display = "none";
    TOGGLE_FAV_IMG[0].style.display = "block";
  }

  if (FAV_STORAGE.find((x) => x._id === DATA_CONTAIN._id)) {
  } else {
    FAV_STORAGE.push(DATA_CONTAIN);
  }

  localStorage.setItem(`${DATA_CONTAIN._id}`, JSON.stringify(FAV_STORAGE));
}

export function REMOVE_LOCAL_STORAGE_FAV() {
  var DATA_CONTAIN = IMAGES_DATA.find((x) => x._id === THIS_CONTAIN_IMG.id);

  if (localStorage.getItem(`${DATA_CONTAIN._id}`)) {
    localStorage.removeItem(`${DATA_CONTAIN._id}`);
    TOGGLE_FAV_IMG[1].style.display = "none";
    TOGGLE_FAV_IMG[0].style.display = "block";
  }
}

export function GET_ALL_FAV() {
  // var GET = localStorage.getItem(`${DATA_CONTAIN._id}`);
  var items = { ...localStorage };

  delete items.name;
  delete items.pass;

  if (Object.keys(items).length === 0 && items.constructor === Object) {
    SHOW_USERS_FAVS.innerHTML = "No Favoris Found";
  }

  for (let dif in items) {
    if (IMAGES_DATA.find((x) => x._id === dif)) {
      var DATA = IMAGES_DATA.find((x) => x._id === dif);
      var FAV = `<div class="this-items ${DATA._id}"> <img src=${DATA.favlink} style="width: 202px"><p>${DATA.title}</p><span>${DATA.h1}</span><br><span>${DATA.comment}</span>
      <button style="width:10%;" removethis="${DATA._id}" class="remove-item-from-fav">Remove</button></div>`;
      SHOW_USERS_FAVS.insertAdjacentHTML("afterbegin", FAV);
      const RemoveButton = document.querySelectorAll(`.${DATA._id}`);
      console.log(RemoveButton[0].lastElementChild.getAttribute("removethis"));
      RemoveButton[0].lastElementChild.addEventListener("click", () => {
        // console.log(RemoveButton[0].lastElementChild.getAttribute('removethis'))
        localStorage.removeItem(
          RemoveButton[0].lastElementChild.getAttribute("removethis")
        );
        window.location.reload();
      });
    }
  }
}
