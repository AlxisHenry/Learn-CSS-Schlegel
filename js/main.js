import { Adding_to_Research_History as HISTORY_ADD } from "../assets/modules/history.js";
import { Resize_Research_History as HISTORY_RESIZE } from "../assets/modules/history.js";
import { Show_Research_History as HISTORY_SHOW } from "../assets/modules/history.js";
import { Verification_Research_Content as RESEARCH_CONTENT } from "../assets/modules/routes.js";
import { this_contain_href as SEARCH_ICON } from "../assets/modules/data/global.js";
import { SHOW_ID, VERIFY_CONNECT_FOR_AUTHORIZE } from "../assets/modules/log.js";
import { LOCAL_GET_ID, TOGGLE_FAV_IMG } from "../assets/modules/data/global.js";
import { TOGGLE_REGISTER } from "../assets/modules/log.js";
import {
  LOCAL_STORAGE_FAV,
  REMOVE_LOCAL_STORAGE_FAV,
  VERIFY_FAV_STATUS,
} from "../assets/modules/favoris.js";

import {
  SAVE_LAST_RESEARCH,
  SET_LAST_RESEARCH,
  _SHOW_LOCAL_STORAGE_HISTORY,
} from "../assets/modules/history.js";

SEARCH_ICON.addEventListener("click", () => {
  HISTORY_ADD();
  HISTORY_RESIZE();
  HISTORY_SHOW();
  RESEARCH_CONTENT();
  VERIFY_FAV_STATUS();
  SAVE_LAST_RESEARCH();
});

TOGGLE_FAV_IMG[0].addEventListener("click", () => {
  if (VERIFY_CONNECT_FOR_AUTHORIZE()) {
    LOCAL_STORAGE_FAV();
  } else {
    alert("Non connecté");
  }
});

TOGGLE_FAV_IMG[1].addEventListener("click", () => {
  if (VERIFY_CONNECT_FOR_AUTHORIZE()) {
    REMOVE_LOCAL_STORAGE_FAV();
  } else {
    alert("Non connecté");
  }
});

window.addEventListener("load", () => {
  SHOW_ID(LOCAL_GET_ID);
  TOGGLE_REGISTER();
  SET_LAST_RESEARCH();
  VERIFY_FAV_STATUS();
  _SHOW_LOCAL_STORAGE_HISTORY();  
});
