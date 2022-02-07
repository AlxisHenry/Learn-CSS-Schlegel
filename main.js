import { Adding_to_Research_History as HISTORY_ADD } from "./modules/history.js";
import { Resize_Research_History as HISTORY_RESIZE } from "./modules/history.js";
import { Show_Research_History as HISTORY_SHOW } from "./modules/history.js";
import { Verification_Research_Content as RESEARCH_CONTENT } from "./modules/routes.js";
import { this_contain_href as SEARCH_ICON } from "./modules/data.js";

SEARCH_ICON.addEventListener("click", () => {
  HISTORY_ADD();
  HISTORY_RESIZE();
  HISTORY_SHOW();
  RESEARCH_CONTENT();
});
