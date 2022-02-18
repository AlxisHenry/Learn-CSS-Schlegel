import { IMAGES_DATA } from "./data/data.js";
import {
  ALL_SPORTS_NAME,
  CREATE_USER_EVENT,
  DATE_FORMAT,
  DATE_OF_EVENT,
  CREATE_EVENT_NAME,
  SECTION_USER_EVENTS,
  DURATION_USER_EVENT,
  CONFIRMATION_ADDING_EVENT,
} from "./data/global.js";

export function CREATE_SELECT_OPTIONS() {
  for (var i = 0; i < ALL_SPORTS_NAME.length; i++) {
    const ALL_ADDING_OPTIONS = IMAGES_DATA.find(
      (x) => x._id === ALL_SPORTS_NAME[i]
    );
    const ADDING_OPTIONS = `<option value="${ALL_ADDING_OPTIONS._id}">${ALL_ADDING_OPTIONS.h1}</option>`;
    CREATE_USER_EVENT.insertAdjacentHTML("beforeend", ADDING_OPTIONS);
  }
}

export function UPDATE_DATE() {
  var GET_HOURS = new Date().toString().slice(16, 21);
  const RECTIFY_HOURS = parseFloat(GET_HOURS.slice(0, 2)) + 1;
  const RECTIFY_MINUTES = GET_HOURS.slice(3, 5);

  if (RECTIFY_HOURS < 10) {
    var GET_HOURS = `0${RECTIFY_HOURS}:${RECTIFY_MINUTES}`;
  } else {
    var GET_HOURS = `${RECTIFY_HOURS}:${RECTIFY_MINUTES}`;
  }

  DATE_OF_EVENT.value = `${DATE_FORMAT}T${GET_HOURS}`;
  DATE_OF_EVENT.min = `${DATE_FORMAT}T${GET_HOURS}`;
}

export function GET_ALL_VALUES() {
  const EVENT_NAME = CREATE_EVENT_NAME.value;
  var EVENT_SPORT = CREATE_USER_EVENT.value;
  const EVENT_DURRATION = DURATION_USER_EVENT.value;
  var EVENT_DATE = new Date(DATE_OF_EVENT.value).toString().slice(4, 21);

  //// if (!EVENT_SPORT || !EVENT_NAME || !EVENT_DURRATION || !EVENT_DATE ) {
  ////   return false;
  //// } else {
  //// }

  if (!EVENT_SPORT) {
  } else {
    const GET_EVENT_SIMILAR_ID = IMAGES_DATA.find((x) => x._id === EVENT_SPORT);
    var EVENT_CHECK_DATE = GET_EVENT_SIMILAR_ID.check_date;
  }

  const EVENT_OBJECT = {
    _id: EVENT_SPORT,
    date: EVENT_DATE,
    check_date: EVENT_CHECK_DATE,
    name: EVENT_NAME,
    duration: EVENT_DURRATION,
  };

  for (var i in EVENT_OBJECT) {
    if (EVENT_OBJECT[i] === "") {
      CONFIRMATION_ADDING_EVENT.innerHTML = "Répondez à tous les champs!";
      return false;
    } else {
      CONFIRMATION_ADDING_EVENT.innerHTML = "";
    }
  }

  if (!localStorage.getItem("name") && !localStorage.getItem("pass")) {
    CONFIRMATION_ADDING_EVENT.innerHTML = "Connectez-vous pour poursuivre !";
    return false;
  }

  if (localStorage.getItem(`Event: ${EVENT_SPORT}`)) {
    alert("Limite d'événements atteinte pour ce sport !");
  } else {
    localStorage.setItem(`Event: ${EVENT_SPORT}`, JSON.stringify(EVENT_OBJECT));
    EVENT_SUBMIT();
  }
}

export async function SHOW_USER_EVENTS() {
  const EVENTS_EXISTS = new Array();

  for (var sport in ALL_SPORTS_NAME) {
    if (!localStorage.getItem(`Event: ${ALL_SPORTS_NAME[sport]}`)) {
    } else {
      EVENTS_EXISTS.push(
        JSON.parse(localStorage.getItem(`Event: ${ALL_SPORTS_NAME[sport]}`))
      );
    }
  }

  const CHECK_EVENTS = { ...localStorage };

  //// delete CHECK_EVENTS.name
  //// delete CHECK_EVENTS.pass
  //// delete CHECK_EVENTS.LastResearch
  //// delete CHECK_EVENTS.HistoryResearch

  for (let deleteThis in CHECK_EVENTS) {
    if (!CHECK_EVENTS[deleteThis].includes('"date"')) {
      delete CHECK_EVENTS[deleteThis];
    } else {
    }
  }

  if (
    Object.keys(CHECK_EVENTS).length === 0 &&
    CHECK_EVENTS.constructor === Object
  ) {
    SECTION_USER_EVENTS.innerHTML = "No Event Create";
    return false;
  }

  for (var i = 0; i < EVENTS_EXISTS.length; i++) {
    const GET_EVENT_ID = EVENTS_EXISTS[i]._id;
    var GET_EVENT_SIMILAR_ID = IMAGES_DATA.find((x) => x._id === GET_EVENT_ID);

    if (GET_EVENT_SIMILAR_ID.this_element) {
      const EVENT_INPROGRESS = `<tr>
    <td> <p class="title">${GET_EVENT_SIMILAR_ID.h1}</p> </td>
    <td> <img style="width: 50px;" title="${GET_EVENT_SIMILAR_ID.title}" about="${GET_EVENT_SIMILAR_ID.this_element}" class="img${GET_EVENT_SIMILAR_ID.this_element}" alt="${GET_EVENT_SIMILAR_ID.alt}" src="${GET_EVENT_SIMILAR_ID.favlink}"></td>
    <td> <span class="this-contain-date">${EVENTS_EXISTS[i].date}</span></td>
    <td> <span class="this-contain-name">${EVENTS_EXISTS[i].name}</span></td>
    <td> <span class="this-contain-duration">${EVENTS_EXISTS[i].duration}</span></td>
    <td class="delete-this-event">  <input removethis="${EVENTS_EXISTS[i]._id}" class="cancel-this-event ${GET_EVENT_SIMILAR_ID.this_element}" type="submit" value="X"></input></td>
    </tr>`;

      SECTION_USER_EVENTS.insertAdjacentHTML("beforeend", EVENT_INPROGRESS);
    } else {
      const EVENT_INPROGRESS = `<tr>
    <td> <p class="title">${GET_EVENT_SIMILAR_ID.h1}</p></td>
    <td> <img style="width: 50px;" title="${GET_EVENT_SIMILAR_ID.title}" about="${EVENTS_EXISTS[i]._id}" class="img${EVENTS_EXISTS[i]._id}" alt="${GET_EVENT_SIMILAR_ID.alt}" src="${GET_EVENT_SIMILAR_ID.favlink}"><br></td>
    <td> <span class="this-contain-date">${EVENTS_EXISTS[i].date}</span></td>
    <td> <span class="this-contain-name">${EVENTS_EXISTS[i].name}</span></td>
    <td> <span class="this-contain-duration">${EVENTS_EXISTS[i].duration}</span></td>
    <td class="delete-this-event"> <input removethis="${EVENTS_EXISTS[i]._id}" class="cancel-this-event ${EVENTS_EXISTS[i]._id}" type="submit" value="X"></input></td>
    </tr>`;

      SECTION_USER_EVENTS.insertAdjacentHTML("beforeend", EVENT_INPROGRESS);
    }

    var CANCEL_EVENT_BUTTON = document.querySelectorAll(".cancel-this-event");

    CANCEL_EVENT_BUTTON.forEach((buttonEvent) => {
      buttonEvent.addEventListener("click", (e) => {
        console.log("event");
        localStorage.removeItem(
          `Event: ${e.target.getAttribute("removethis")}`
        );
        window.location.reload();
      });
    });
  }
}

export function CANCEL_EXPIRED_EVENTS() {
  const EVENTS_EXISTS = new Array();

  for (var sport in ALL_SPORTS_NAME) {
    if (!localStorage.getItem(`Event: ${ALL_SPORTS_NAME[sport]}`)) {
    } else {
      EVENTS_EXISTS.push(
        JSON.parse(localStorage.getItem(`Event: ${ALL_SPORTS_NAME[sport]}`))
      );
    }
  }

  const CHECK_EVENTS = { ...localStorage };

  for (let deleteThis in CHECK_EVENTS) {
    if (!CHECK_EVENTS[deleteThis].includes('"date"')) {
      delete CHECK_EVENTS[deleteThis];
    } else {
    }
  }

  if (
    Object.keys(CHECK_EVENTS).length === 0 &&
    CHECK_EVENTS.constructor === Object
  ) {
    SECTION_USER_EVENTS.innerHTML = "No Event Create";
    return false;
  }

  for (var i = 0; i < EVENTS_EXISTS.length; i++) {
    const VERIFY_DATE_OF_EVENT = new Date(EVENTS_EXISTS[i].date);
    if (VERIFY_DATE_OF_EVENT > new Date()) {
    } else {
      document.querySelector(
        `.${EVENTS_EXISTS[i].check_date}`
      ).innerHTML = `Evénement de : ${EVENTS_EXISTS[i]._id} terminé le ${EVENTS_EXISTS[i].date}`;
      localStorage.removeItem(`Event: ${EVENTS_EXISTS[i]._id}`);
    }
  }
}

function EVENT_SUBMIT() {
  const EVENT_CONFIRMATION = `<span> L'évènement à été créé avec succès. Veuillez le retrouver dans votre <a href="./account.html">profil</a> !
                          Attention l'évènement expire automatiquement une fois la date dépassée ! </span> <br> <span> Retour à l' <a href="../index.html"> accueil ! </a> </span>`;

  CONFIRMATION_ADDING_EVENT.innerHTML = EVENT_CONFIRMATION;
}
