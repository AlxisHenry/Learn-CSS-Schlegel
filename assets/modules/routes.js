import { this_find_sport } from "./data.js";
import { INPUT_RESEARCH } from "./data.js";

export function Verification_Research_Content() {
  if (this_find_sport.value === "") {
    console.log("null");
    INPUT_RESEARCH.classList.add('border-error-animation')
    // Ajout d'une animation si la case est vide. {error anim}
  } else {
    INPUT_RESEARCH.classList.remove('border-error-animation');
    Verification_Research_Validity();
  }
}

export function Verification_Research_Validity() {
  if (document.getElementById(`${this_find_sport.value}`)) {
    INPUT_RESEARCH.classList.remove('border-error-animation');
    // Ajout d'une animation d'envoi vers l'image.
    // Ajout d'une classe à celle-ci.
  } else {
    INPUT_RESEARCH.classList.add('border-error-animation')
    alert("Nous n'avons pas ce sport, désolé !");
    // Ajout d'une animation si le sport n'existe pas. {error anim}
  }
}
