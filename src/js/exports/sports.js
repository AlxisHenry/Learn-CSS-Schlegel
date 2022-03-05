import { IMAGES_DATA } from "./../../../assets/data/data.js";
import { GetUrlClassParam } from "./../dom/global.js";
import { EventsIcons, FavoritesIcons } from "./../dom/events.js";

export function URL_CONDITION() {
  if (GetUrlClassParam === "events") {
    URL_GET_EVENTS();
  } else if (GetUrlClassParam === "activity") {
    URL_GET_ACTIVITY();
  } else if (GetUrlClassParam === "populaires") {
    URL_GET_POPULAIRE();
  }
}

export function URL_GET_EVENTS() {
  document.querySelector("title").innerHTML = "Les Évènements - Sport Addict";
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === GetUrlClassParam)) {
      if (IMAGES_DATA[getImg].class === "events") {
        const VAR = `<div class="this-items ${addClass()}"> 
        <a href="./research.html?sport=${IMAGES_DATA[getImg]._id}">
        <img src=${
          IMAGES_DATA[getImg].link
        } style="width: 225px" class="show-this-img"></a>
        <i class="fa-solid sports-page add-fav fa-heart" title="Ajouter à mes favoris"></i>
        <i class="fa-solid sports-page delete-fav fa-heart" title="Retirer de mes favoris"></i>
        <i class="fa-solid sports-page add-event fa-calendar-day" title="Créer un évènement"></i>
        <i class="fa-solid sports-page delete-event fa-calendar-check" title="Jeter un coup d'oeil à l'évènement"></i>
        <h1>${IMAGES_DATA[getImg].h1}</h1><br>
        <h2>${IMAGES_DATA[getImg].comment}</h2></div>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
        function addClass() {
          if (IMAGES_DATA[getImg]._id === "planche à voile") {
            return "planche-à-voile";
          } else {
            return IMAGES_DATA[getImg]._id;
          }
        }
      }
    }
  }
}

export function URL_GET_ACTIVITY() {
  document.querySelector("title").innerHTML = "Besoin d'idées ? - Sport Addict";
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === GetUrlClassParam)) {
      if (IMAGES_DATA[getImg].class === "activity") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> 
        <a href="./research.html?sport=${IMAGES_DATA[getImg]._id}">
        <img src=${IMAGES_DATA[getImg].link} style="width: 225px"></a>
        <i class="fa-solid sports-page add-fav fa-heart" title="Ajouter à mes favoris"></i>
        <i class="fa-solid sports-page delete-fav fa-heart" title="Retirer de mes favoris"></i>
        <i class="fa-solid sports-page add-event fa-calendar-day" title="Créer un évènement"></i>
        <i class="fa-solid sports-page delete-event fa-calendar-check" title="Jeter un coup d'oeil à l'évènement"></i>
        <h1>${IMAGES_DATA[getImg].h1}</h1><br>
        <h2>${IMAGES_DATA[getImg].comment}</h2></div>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
}

export function URL_GET_POPULAIRE() {
  document.querySelector("title").innerHTML = "Populaires - Sport Addict";
  for (let getImg in IMAGES_DATA) {
    if (IMAGES_DATA.find((x) => x.class === GetUrlClassParam)) {
      if (IMAGES_DATA[getImg].class === "populaires") {
        const VAR = `<div class="this-items ${IMAGES_DATA[getImg]._id}"> 
        <a href="./research.html?sport=${IMAGES_DATA[getImg]._id}">
        <img src=${IMAGES_DATA[getImg].link} style="width: 225px"></a>
        <i class="fa-solid sports-page add-fav fa-heart" title="Ajouter à mes favoris"></i>
        <i class="fa-solid sports-page delete-fav fa-heart" title="Retirer de mes favoris"></i>
        <i class="fa-solid sports-page add-event fa-calendar-day" title="Créer un évènement"></i>
        <i class="fa-solid sports-page delete-event fa-calendar-check" title="Jeter un coup d'oeil à l'évènement"></i>
        <h1>${IMAGES_DATA[getImg].h1}</h1><br>
        <h2>${IMAGES_DATA[getImg].comment}</h2>`;
        document.querySelector(".section").insertAdjacentHTML("beforeend", VAR);
      }
    }
  }
}

export function _InitFavoritesSportPage() {
  var items = { ...localStorage };
  var alreadyFav = [];
  var FavID = [];

  for (let deleteThis in items) {
    if (!IMAGES_DATA.find((x) => x._id === deleteThis)) {
      delete items[deleteThis];
    } else {
      alreadyFav.push(JSON.parse(items[deleteThis]));
    }
  }

  if (Object.keys(items).length === 0 && items.constructor === Object) {
    return false;
  }

  for (let i = 0; i < alreadyFav.length; i++) {
    FavID.push(alreadyFav[i][0]._id);
  }

  for (let i = 0; i < FavID.length; i++) {
    function ModifyID() {
      if (FavID[i] === "planche à voile") {
        return "planche-à-voile";
      } else {
        return FavID[i];
      }
    }
    if (document.querySelector(`.${ModifyID()}`)) {
      document.querySelector(`.${ModifyID()}`).children[1].style.display =
        "none";
      document.querySelector(`.${ModifyID()}`).children[2].style.display =
        "block";
    } else {
    }
  }
}

export function _InitEventsSportPage() {
  var items = { ...localStorage };
  var Events = new Array();

  for (let deleteThis in items) {
    if (IMAGES_DATA.find((x) => x._id === deleteThis)) {
      delete items[deleteThis];
    } else if (deleteThis === "account") {
      delete items[deleteThis];
    }
  }

  if (Object.keys(items).length === 0 && items.constructor === Object) {
    return false;
  }

  for (let thisEvent in items) {
    Events.push(JSON.parse(items[thisEvent]).sport);
  }

  for (let i = 0; i < Events.length; i++) {
    function ModifyClass() {
      if (Events[i] === "planche à voile") {
        return "planche-à-voile";
      } else {
        return Events[i];
      }
    }
    if (document.querySelector(`.${ModifyClass()}`)) {
      document.querySelector(`.${ModifyClass()}`).children[3].style.display =
        "none";
      document.querySelector(`.${ModifyClass()}`).children[4].style.display =
        "block";
    } else {
    }
  }
}

export function _ConfirmUserConnection() {
  if (!localStorage.getItem("account")) {
    alert(" Vous n'êtes pas connecté !");
    return false;
  }
}

export function _RemoveFavoritesToLocalstorageWithoutAnimation() {}
