import { Adding_to_Research_History as HISTORY_ADD } from "./assets/modules/history.js";
import { Resize_Research_History as HISTORY_RESIZE } from "./assets/modules/history.js";
import { Show_Research_History as HISTORY_SHOW } from "./assets/modules/history.js";
import { Verification_Research_Content as RESEARCH_CONTENT } from "./assets/modules/routes.js";
import { this_contain_href as SEARCH_ICON } from "./assets/modules/global.js";
import { SHOW_ID, VERIFY_CONNECT_FOR_AUTHORIZE } from "./assets/modules/log.js";
import { LOCAL_GET_ID, TOGGLE_FAV_IMG } from "./assets/modules/global.js";
import { TOGGLE_REGISTER } from "./assets/modules/log.js";
import {
  LOCAL_STORAGE_FAV,
  REMOVE_LOCAL_STORAGE_FAV,
  VERIFY_FAV_STATUS,
} from "./assets/modules/favoris.js";

SEARCH_ICON.addEventListener("click", () => {
  HISTORY_ADD();
  HISTORY_RESIZE();
  HISTORY_SHOW();
  RESEARCH_CONTENT();
  VERIFY_FAV_STATUS();
});

TOGGLE_FAV_IMG[0].addEventListener("click", () => {
  if (VERIFY_CONNECT_FOR_AUTHORIZE()) {
    LOCAL_STORAGE_FAV();
  } else {
    alert('Non connecté');
  }
});

TOGGLE_FAV_IMG[1].addEventListener("click", () => {
  if (VERIFY_CONNECT_FOR_AUTHORIZE()) {
    REMOVE_LOCAL_STORAGE_FAV();
  } else {
    alert('Non connecté');
  }
});

window.addEventListener("load", () => {
  SHOW_ID(LOCAL_GET_ID);
  TOGGLE_REGISTER();
  VERIFY_FAV_STATUS();
});
