import { IMAGES_DATA } from "./data/data.js";
import {
  ALL_SPORTS_NAME,
  CREATE_USER_EVENT,
  DATE_FORMAT,
  DATE_OF_EVENT,
  CREATE_EVENT_NAME,
  SECTION_USER_EVENTS,
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
  const GET_HOURS = new Date().toString().slice(16, 21);
  DATE_OF_EVENT.value = `${DATE_FORMAT}T${GET_HOURS}`;
  DATE_OF_EVENT.min = `${DATE_FORMAT}T${GET_HOURS}`;
}

export function GET_ALL_VALUES() {
  const EVENT_NAME = CREATE_EVENT_NAME.value;
  const EVENT_SPORT = CREATE_USER_EVENT.value;
  var EVENT_DATE = new Date(DATE_OF_EVENT.value).toString().slice(4, 21);

  const EVENT_OBJECT = {
    _id: EVENT_SPORT,
    date: EVENT_DATE,
    name: EVENT_NAME,
  };

  if (localStorage.getItem(`Event: ${EVENT_SPORT}`)) {
    alert("Limite d'événements atteinte pour ce sport !");
  } else {
    localStorage.setItem(`Event: ${EVENT_SPORT}`, JSON.stringify(EVENT_OBJECT));
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
  for (var i = 0; i < EVENTS_EXISTS.length; i++) {
    const GET_EVENT_ID = EVENTS_EXISTS[i]._id;
    var GET_EVENT_SIMILAR_ID = IMAGES_DATA.find((x) => x._id === GET_EVENT_ID);

    const EVENT_INPROGRESS = `<div class="contain-event ${EVENTS_EXISTS[i]._id}"> 
            <p class="title">${GET_EVENT_SIMILAR_ID.h1}</p>
            <img style="width: 120px;" alt="${GET_EVENT_SIMILAR_ID.alt}" src="${GET_EVENT_SIMILAR_ID.favlink}"><br>
            <span class="this-contain-date ${EVENTS_EXISTS[i]._id}">${EVENTS_EXISTS[i].date}</span><br>
            <span class="this-contain-name ${EVENTS_EXISTS[i]._id}">${EVENTS_EXISTS[i].name}</span>`;

    SECTION_USER_EVENTS.insertAdjacentHTML("afterbegin", EVENT_INPROGRESS);
  }

  // console.log(EVENTS_EXISTS[0]);
  // SHOW_USER_EVENTS.insertAdjacentHTML('beforeend', this_event)
}
