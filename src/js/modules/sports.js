// Contain all images in data file
import { IMAGES_DATA } from "../../../assets/data/data.js";
import { UserAlreadyRegister } from "../exports/login.js";
import { URL_CONDITION, _ConfirmUserConnection, _InitEventsSportPage, _InitFavoritesSportPage } from "../exports/sports.js";

URL_CONDITION();

window.addEventListener("load", () => {
    UserAlreadyRegister();
    _InitFavoritesSportPage();
    _InitEventsSportPage();
});

const AddFav = document.querySelectorAll('.add-fav');
const RemoveFav = document.querySelectorAll('.delete-fav');
const AddEvents = document.querySelectorAll('.add-event');
const RemoveEvent = document.querySelectorAll('.delete-event');

RemoveFav.forEach(element => {
    element.style.display = "none";
});

RemoveEvent.forEach(element => {
    element.style.display = "none";
})

AddFav.forEach(AddToFavorites => {
    AddToFavorites.addEventListener('click', (e) => {
       if(_ConfirmUserConnection()) {
           return false;
       }
    
       const GetClassOfObject = e.target.parentNode.classList[1];

       console.log(GetClassOfObject)


    //    e.target.style.color = "red";

    })
});

RemoveFav.forEach(RemoveToFavorites => {
    RemoveToFavorites.addEventListener('click', (e) => {
        if(_ConfirmUserConnection()) {
            return false;
        }
    })
})