import {
  LOGOUT_USER,
  TOGGLE_VIEW_PW,
  TOGGLE_VIEW_ID,
  TOGGLE_PW_HIDDEN,
  TOGGLE_PW_VISIBLE,
  EDIT_ACCOUNT_ID,
} from "../assets/modules/log.js";

import { GET_ALL_FAV } from "../assets/modules/favoris.js";

import {
  CANCEL_USER_CONNECTION,
  TOGGLE_CRYPTED_PASS,
  EDIT_USER_ID,
  ONGLET_SWIPE,
} from "../assets/modules/data/global.js";

import {
  CANCEL_EXPIRED_EVENTS,
  SHOW_USER_EVENTS,
} from "../assets/modules/events.js";

import { CHANGE_ON_LOAD, ONGLETS_ANIMATIONS } from "../assets/modules/switch-account.js";

window.addEventListener("load", () => {
  TOGGLE_VIEW_PW();
  TOGGLE_VIEW_ID();
  GET_ALL_FAV();
  SHOW_USER_EVENTS();
  CANCEL_EXPIRED_EVENTS();
  CHANGE_ON_LOAD();
});

// Hide-Show password

TOGGLE_CRYPTED_PASS[1].addEventListener("click", () => {
  // Password visible
  TOGGLE_PW_VISIBLE();
});
!TOGGLE_CRYPTED_PASS[0].addEventListener("click", () => {
  // Password hidden
  TOGGLE_PW_HIDDEN();
});

// Logout

CANCEL_USER_CONNECTION.addEventListener("click", () => {
  console.log("erreur");
  LOGOUT_USER();
});

// Edit ID

EDIT_USER_ID.addEventListener("click", () => {
  EDIT_ACCOUNT_ID();
});

ONGLET_SWIPE.forEach((SWIPE_THIS) => {
  SWIPE_THIS.addEventListener("click", (e) => {
    ONGLETS_ANIMATIONS(e); 
  });
});
