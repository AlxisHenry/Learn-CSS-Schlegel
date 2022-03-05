// Contain searchbar & Username

import { ShowMoreAtLoading, Searchbar } from "../dom/events.js";
import { InputOfSearchbar, HideLoadingSection } from "../dom/global.js";
import { AlreadyVisitedHomepage, GetValueOfInput, WelcomeToUser } from "../exports/index.js";
import { UserAlreadyRegister } from "../exports/login.js";

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
  // Affiche un message de bienvenue
  WelcomeToUser();
  // Permet de détecter si l'utilisateur a déjà visité cette page
  AlreadyVisitedHomepage();
  //  Affichage de l'username || Affichage de register
  UserAlreadyRegister('index');
});

InputOfSearchbar.addEventListener("keyup", (e) => {
  // Détecte une action sur la touche Enter à l'intérieur de la barre de recherche
  if (e.keyCode === 13) {
    e.preventDefault();
    Searchbar.click();
  }
});

let isCacheSupported = 'caches' in window;

console.log(isCacheSupported)

var url = ['/assets/img/activities/musculation.jpg', '/assets/img/activities/karat%C3%A9.jpg', '/assets/img/activities/fitness.jpg', '/assets/img/activities/basketball.jpg']

caches.open('cacheName').then( cache => {
  cache.addAll(url).then( () => {
    console.log("Data cached ")
    console.log(url)
 });
});
