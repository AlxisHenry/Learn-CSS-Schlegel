import { IMAGES_DATA } from "./../../../assets/data/data.js";

export function _InitUserInformations() {
    
    const AccountInputs = document.querySelectorAll('.account-input');

    const UsersInformations = {
          name: JSON.parse(localStorage.getItem('account')).name,
          password: JSON.parse(localStorage.getItem('account')).password,
          email: JSON.parse(localStorage.getItem('account')).email,
    }

    AccountInputs[0].value = UsersInformations.name
    AccountInputs[1].value = "*".repeat(UsersInformations.password.length);
    AccountInputs[2].value = UsersInformations.email
     
}

export function ToggleHiddenPassword() {
    
}

export function ChangeID() {

}

export function AccountCards() {

    const countCard = {
        favorites: GetFavorites(),
        events: GetEvents(),
        history: undefined,
    }

    document.querySelector('.favorites-count').innerHTML = `Vous avez ${countCard.favorites} favoris !`
    document.querySelector('.events-count').innerHTML = `Vous avez planifié ${countCard.events} événements !`

    function GetFavorites() {
        var GetLocalStorage = { ...localStorage };
        for (let deleteThis in GetLocalStorage) {
            if (GetLocalStorage[deleteThis].includes('"date"')) {
              delete GetLocalStorage[deleteThis];
            }
          }
        return Object.keys(GetLocalStorage).length;
    }

    function GetEvents() {
        var GetLocalStorage = { ...localStorage };

        for (let deleteThis in GetLocalStorage) {
            if (!GetLocalStorage[deleteThis].includes('"date"')) {
              delete GetLocalStorage[deleteThis];
            } else if (GetLocalStorage[deleteThis].includes('email')) {
              delete GetLocalStorage[deleteThis];
            }
          }
        
        return Object.keys(GetLocalStorage).length;
    }

    function GetHistory() {}

}


export function FavoritesAndEvents() {

  const ShowFavoritesAndEvents = {
      favorites:GetFavorites(),
      events: GetEvents(),
  }

  var AllSportsFind = [];

  for (let Sport in IMAGES_DATA) {
      if (IMAGES_DATA.find((x) => x._id === ShowFavoritesAndEvents.favorites[Sport])) {
          AllSportsFind.push(IMAGES_DATA.find((x) => x._id === ShowFavoritesAndEvents.favorites[Sport]))
    }
  }

  for (let ShowSport in AllSportsFind) {

    const Favorites = `<div class="favorites-l"><img class="fav-img" src="${AllSportsFind[ShowSport].link}"><h2 class="fav-title">${AllSportsFind[ShowSport].h1}</h2><span class="fav-comment">${AllSportsFind[ShowSport].comment}</span></div>`;

    document.querySelector('.onglet-favorites').insertAdjacentHTML('beforeend', Favorites);
  }


  for (let GetEvents in ShowFavoritesAndEvents.events) {

      const Event = JSON.parse(localStorage.getItem(ShowFavoritesAndEvents.events[GetEvents]));
      const Sport = IMAGES_DATA.find((x) => x._id === Event.sport);

      const Events = `<div class="favorites-l"><img class="fav-img" src="${Sport.link}"><h2 class="fav-title">${Sport.title}</h2><span class="fav-comment">${Event.date}</span></div>`;

    document.querySelector('.onglet-events').insertAdjacentHTML('beforeend', Events);
  }
  

  function GetFavorites() {
    var GetLocalStorage = { ...localStorage };
    for (let deleteThis in GetLocalStorage) {
        if (GetLocalStorage[deleteThis].includes('"date"')) {
          delete GetLocalStorage[deleteThis];
        }
      }
    return Object.keys(GetLocalStorage);
}

function GetEvents() {
    var GetLocalStorage = { ...localStorage };
    // console.log(GetLocalStorage)

    for (let deleteThis in GetLocalStorage) {
        if (!GetLocalStorage[deleteThis].includes('"date"')) {
          delete GetLocalStorage[deleteThis];
        } else if (GetLocalStorage[deleteThis].includes('email')) {
          delete GetLocalStorage[deleteThis];
        }
      }
    
    return Object.keys(GetLocalStorage);
}
}
