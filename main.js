import { Adding_to_Research_History as HISTORY_ADD} from "./modules/history.js";
import { Resize_Research_History as HISTORY_RESIZE} from "./modules/history.js";
import { Show_Research_History as HISTORY_SHOW} from "./modules/history.js";
import { Verification_Research_Validity as RESEARCH_VALIDITY } from "./modules/routes.js";
import { this_contain_href as searchIcon} from "./modules/data.js";

searchIcon.addEventListener("click", () => {
  HISTORY_ADD();
  HISTORY_RESIZE();
  HISTORY_SHOW();
  RESEARCH_VALIDITY();
});
