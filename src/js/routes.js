import {
  this_find_sport,
  INPUT_RESEARCH,
  THIS_CONTAIN_IMG,
  LowerValue_ID,
  TITLE_IMAGE,
  ADDITIONAL_DESCRIPTION,
} from "./dom/global.js";

import { IMAGES_DATA } from "./../../assets/data/data.js";

export function Verification_Research_Content() {
  if (this_find_sport.value === "") {
    console.log("null");
    INPUT_RESEARCH.classList.add("border-error-animation");
    // Ajout d'une animation si la case est vide. {error anim}
  } else {
    INPUT_RESEARCH.classList.remove("border-error-animation");
    Verification_Research_Validity();
  }
}

export function Verification_Research_Validity() {
  var DATA_CONTAIN = IMAGES_DATA.find(
    (x) => x._id === LowerValue_ID(this_find_sport.value)
  );
  if (DATA_CONTAIN) {
    INPUT_RESEARCH.classList.remove("border-error-animation");
    TITLE_IMAGE.innerHTML = DATA_CONTAIN.h1;
    ADDITIONAL_DESCRIPTION.innerHTML = DATA_CONTAIN.comment;
    THIS_CONTAIN_IMG.setAttribute("src", DATA_CONTAIN.link);
    THIS_CONTAIN_IMG.setAttribute("class", DATA_CONTAIN.class);
    THIS_CONTAIN_IMG.setAttribute("alt", DATA_CONTAIN.alt);
    THIS_CONTAIN_IMG.setAttribute("title", DATA_CONTAIN.title);
    THIS_CONTAIN_IMG.setAttribute("id", DATA_CONTAIN._id);
  } else {
    INPUT_RESEARCH.classList.add("border-error-animation");
    alert("Nous n'avons pas ce sport, désolé !");
  }
}
