// Initialisation des icons

import { IMAGES_DATA } from "../../../assets/data/data.js";
import { ErrorMessage, GetSportResearchInUrl, ValidationMessage } from "../dom/global.js";
import { FavoritesIcons, EventsIcons } from "./../dom/events.js"

var GetAllAboutSport = IMAGES_DATA.find((x) => x._id === GetSportResearchInUrl.replace('"', '').replace('"',''));

export async function _InitIconsDisplay() {
    FavoritesIcons[1].style.display = "none";
    EventsIcons[1].style.display = "none";
}

export function _InitFavorites() {
    if (localStorage.getItem(`${GetAllAboutSport._id}`)) {
        FavoritesIcons[0].style.display = "none";
        FavoritesIcons[1].style.display = "block";
      } else {
          return false;
      }

}

export function _AddFavoritesToLocalstorage() {

    if (!localStorage.getItem('account')) {
        ErrorMessage.classList.remove('hidden');
        setTimeout( () => { ErrorMessage.classList.add('hidden') }, 2025)
        return false;
    }

    ErrorMessage.classList.add('hidden');
    ValidationMessage.classList.add('hidden');

    var FAV_STORAGE = new Array();

    if (!localStorage.getItem(`${GetAllAboutSport._id}`)) {
      FavoritesIcons[0].style.display = "none";
      FavoritesIcons[1].style.display = "block";
      if (!(document.querySelector('.delete-message').classList.contains('hidden'))) {
        document.querySelector('.delete-message').classList.add('hidden');
    }
      document.querySelector('.add-message').classList.remove('hidden');
      setTimeout( () => { document.querySelector('.add-message').classList.add('hidden'); }, 1725);
    } else {
        return false;
    }
    
    if (FAV_STORAGE.find((x) => x._id === GetAllAboutSport._id)) {
    } else {
      FAV_STORAGE.push(GetAllAboutSport);
    }   
  
    localStorage.setItem(`${GetAllAboutSport._id}`, JSON.stringify(FAV_STORAGE));
}

export function _RemoveFavoritesToLocalstorage() {
    if (localStorage.getItem(`${GetAllAboutSport._id}`)) {
        FavoritesIcons[1].style.display = "none";
        FavoritesIcons[0].style.display = "block";
        localStorage.removeItem(`${GetAllAboutSport._id}`);
        if (!(ValidationMessage.classList.contains('hidden'))) {
            ValidationMessage.classList.add('hidden');
        }
        document.querySelector('.delete-message').classList.remove('hidden');
        setTimeout( () => { document.querySelector('.delete-message').classList.add('hidden'); }, 1725);
      } else {
          return false;
      }
}