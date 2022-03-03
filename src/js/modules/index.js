// Contain searchbar & Username

import { ShowMoreAtLoading, Searchbar } from "../dom/events.js";
import { InputOfSearchbar, HideLoadingSection } from "../dom/global.js";
import { NewUser, GetValueOfInput } from "../exports/index.js";

ShowMoreAtLoading.addEventListener("click", () => {
  // Fait disparaître la loading section
  HideLoadingSection.classList.add("reverse-display-transition");
});

Searchbar.addEventListener("click", () => {
  GetValueOfInput(); // Placer la fonction avant l'ajout de la classe
  // Ajout d'une animation pour l'apparition de la searchbar
  InputOfSearchbar.classList.add("transition-search");
});

window.addEventListener("load", () => {
  // Permet de détecter si l'utilisateur a déjà visité cette page
  NewUser();
  //  Affichage de l'username || Affichage de register
});

InputOfSearchbar.addEventListener("keyup", (e) => {
  // Détecte une action sur la touche Enter à l'intérieur de la barre de recherche
  if (e.keyCode === 13) {
    e.preventDefault();
    Searchbar.click();
  }
});

