import { Adding_to_Research_History as HISTORY_ADD } from "./assets/modules/history.js";
import { Resize_Research_History as HISTORY_RESIZE } from "./assets/modules/history.js";
import { Show_Research_History as HISTORY_SHOW } from "./assets/modules/history.js";
import { Verification_Research_Content as RESEARCH_CONTENT } from "./assets/modules/routes.js";
import { this_contain_href as SEARCH_ICON } from "./assets/modules/data.js";
import { SHOW_ID } from "./assets/modules/login.js";
import { LOCAL_GET_ID } from "./assets/modules/data.js";
import { TOGGLE_REGISTER } from "./assets/modules/login.js";

SEARCH_ICON.addEventListener("click", () => {
  HISTORY_ADD();
  HISTORY_RESIZE();
  HISTORY_SHOW();
  RESEARCH_CONTENT();
});

window.addEventListener("load", () => {
  SHOW_ID(LOCAL_GET_ID);
  TOGGLE_REGISTER();
});

