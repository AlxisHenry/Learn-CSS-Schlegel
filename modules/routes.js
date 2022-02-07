import { this_find_sport } from "./data.js";
import { this_contain_value as GET_ID } from "./data.js";

export function Verification_Research_Content() {
  if (this_find_sport.value === "") {
    console.log("null");
    // Ajout d'une animation si la case est vide. {error anim}
  } else {
    Verification_Research_Validity();
  }
}

export function Verification_Research_Validity() {
  if (document.getElementById(`${GET_ID}`)) {
    this_find_sport.href = `#${GET_ID}`;

    // Ajout d'une animation d'envoi vers l'image.
    // Ajout d'une classe à celle-ci.
  } else {
    // Ajout d'une animation si le sport n'existe pas. {error anim}
  }
}
