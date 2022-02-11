import {
  LOGOUT_USER,
  TOGGLE_VIEW_PW,
  TOGGLE_VIEW_ID,
  TOGGLE_PW_HIDDEN,
  TOGGLE_PW_VISIBLE,
} from "./log.js";
import { CANCEL_USER_CONNECTION } from "./data.js";
import { TOGGLE_CRYPTED_PASS } from "./data.js";

// Affichage des informations du profiles
// Affichage du mots de passe avec possibilité de le cacher ou de l'afficher en clair

window.addEventListener("load", () => {
  TOGGLE_VIEW_PW();
  TOGGLE_VIEW_ID();
});

// Hide-Show password

TOGGLE_CRYPTED_PASS[1].addEventListener("click", () => {
  // Password visible
  TOGGLE_PW_VISIBLE();  
});

TOGGLE_CRYPTED_PASS[0].addEventListener("click", () => {
  // Password hidden
  TOGGLE_PW_HIDDEN();
});

// Logout
CANCEL_USER_CONNECTION.addEventListener("click", () => {
  LOGOUT_USER();
});
