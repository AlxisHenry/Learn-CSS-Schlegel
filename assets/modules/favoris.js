// Ajout d'une image aux favoris

import { THIS_CONTAIN_IMG, TOGGLE_FAV_IMG } from "./global.js";
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
  console.log('ok');    
}

export function LOCAL_STORAGE_FAV() {
  var DATA_CONTAIN = IMAGES_DATA.find((x) => x._id === THIS_CONTAIN_IMG.id);
  var FAV_STORAGE;

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
