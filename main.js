import { Adding_to_Research_History } from "./modules/history.js";
import { Resize_Research_History } from "./modules/history.js";
import { Show_Research_History } from "./modules/history.js";
import { Verification_Research_Validity } from "./modules/routes.js";
import { this_contain_href} from "./modules/data.js";

this_contain_href.addEventListener("click", () => {
  Adding_to_Research_History();
  Resize_Research_History();
  Show_Research_History();
  Verification_Research_Validity();
});
