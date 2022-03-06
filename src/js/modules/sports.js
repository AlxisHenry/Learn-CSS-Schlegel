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
const ShowEvents = document.querySelectorAll('.delete-event');

RemoveFav.forEach(element => {
    element.style.display = "none";
});

ShowEvents.forEach(element => {
    element.style.display = "none";
})

AddFav.forEach(AddToFavorites => {
    AddToFavorites.addEventListener('click', (e) => {
       if(_ConfirmUserConnection()) {
           return false;
       }
    
       const GetClassOfObject = e.target.parentNode.classList[1];
       const GetObjectOfSport = IMAGES_DATA.find((x) => x._id === ChangeUrlParam());
       var SportToLocalStorage = new Array();
       
       if (localStorage.getItem(ChangeUrlParam())){
           return false;
       }

       SportToLocalStorage.push(GetObjectOfSport)

       localStorage.setItem(ChangeUrlParam(), JSON.stringify(SportToLocalStorage));

       e.target.parentNode.children[1].style.display = "none";
       e.target.parentNode.children[2].style.display = "block";

       function ChangeUrlParam() {
        if (GetClassOfObject === 'planche-à-voile') {
            return 'planche à voile';
        } else {
            return GetClassOfObject;
        }
       }

    })
});

RemoveFav.forEach(RemoveToFavorites => {
    RemoveToFavorites.addEventListener('click', (e) => {
        if(_ConfirmUserConnection()) {
            return false;
        }
            const GetClassOfObject = e.target.parentNode.classList[1];
        
        if (!(localStorage.getItem(ChangeUrlParam()))){
            return false;
        }

        localStorage.removeItem(ChangeUrlParam());
        e.target.parentNode.children[1].style.display = "block";
        e.target.parentNode.children[2].style.display = "none";

        function ChangeUrlParam() {
            if (GetClassOfObject === 'planche-à-voile') {
                return 'planche à voile';
            } else {
                return GetClassOfObject;
            }
           }
    })
})

AddEvents.forEach(CreateNewEvent => {
    CreateNewEvent.addEventListener('click', (e) => {
        const GetClassOfObject = e.target.parentNode.classList[1];
        document.location.href= `./event.html?event=${ChangeUrlParam()}`;
        function ChangeUrlParam() {
            if (GetClassOfObject === 'planche-à-voile') {
                return 'planche à voile';
            } else {
                return GetClassOfObject;
            }
           }
    })
})

ShowEvents.forEach(ShowEvents => {
    ShowEvents.addEventListener('click', (e) => {
        const GetClassOfObject = e.target.parentNode.classList[1];
        document.location.href= `./account.html?event=${ChangeUrlParam()}`;
        function ChangeUrlParam() {
            if (GetClassOfObject === 'planche-à-voile') {
                return 'planche à voile';
            } else {
                return GetClassOfObject;
            }
           }
    })
})