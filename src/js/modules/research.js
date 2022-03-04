// Contain research, favoris, events

import { SetResearchImage } from "./../exports/research.js";
import { UserAlreadyRegister } from "./../exports/login.js";
import { _InitIconsDisplay, _AddFavoritesToLocalstorage, _InitFavorites, _RemoveFavoritesToLocalstorage} from "../exports/favorites.js";
import { _InitEvent, _CreateEvent, _GoToEvent } from '../exports/events.js';
import { EventsIcons, FavoritesIcons } from "./../dom/events.js";

window.addEventListener('load', () => {
    _InitIconsDisplay();
    _InitEvent();
    _InitFavorites();
    SetResearchImage();
    UserAlreadyRegister();
});

FavoritesIcons[0].addEventListener('click', () => {
    _AddFavoritesToLocalstorage();
})

FavoritesIcons[1].addEventListener('click', () => {
    _RemoveFavoritesToLocalstorage();
})


EventsIcons.forEach(GoToThisEvent => {
    GoToThisEvent.addEventListener('click', (e) => {
        _GoToEvent();
    })
});