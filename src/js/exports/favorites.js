// Initialisation des icons

import { IMAGES_DATA } from "../../../assets/data/data.js";
import { GetSportResearchInUrl } from "../dom/global.js";
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
    var FAV_STORAGE = new Array();

    if (!localStorage.getItem(`${GetAllAboutSport._id}`)) {
      FavoritesIcons[0].style.display = "none";
      FavoritesIcons[1].style.display = "block";
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
      } else {
          return false;
      }
}