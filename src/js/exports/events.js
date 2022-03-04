import { IMAGES_DATA } from "../../../assets/data/data.js";
import { EventsIcons } from "../dom/events.js";
import {
  ErrorMessage,
  GetEventInUrl,
  GetSportResearchInUrl,
  GetUsernameInUrl,
  ValidationMessage,
} from "../dom/global.js";

export function _InitEvent() {
  var GetAllAboutSport = IMAGES_DATA.find(
    (x) => x._id === GetSportResearchInUrl.replace('"', "").replace('"', "")
  );

  if (localStorage.getItem(`event [ ${GetAllAboutSport._id} ]`)) {
    EventsIcons[0].style.display = "none";
    EventsIcons[1].style.display = "block";
  } else {
    return false;
  }
}

export function _GoToEvent() {
  var GetAllAboutSport = IMAGES_DATA.find(
    (x) => x._id === GetSportResearchInUrl.replace('"', "").replace('"', "")
  );
  
  if (!localStorage.getItem('account')) {
    EventsIcons[0].parentNode.href = "#";
    ErrorMessage.classList.remove('hidden');
    setTimeout( () => { ErrorMessage.classList.add('hidden') }, 2025 );
    return false;
  } else {
    EventsIcons[0].parentNode.href = `./event.html?event=${GetAllAboutSport._id}`;
  }

  EventsIcons[1].parentNode.href = `./account.html?event=${GetAllAboutSport._id}`;
}

export function _InitCreateEventPage() {
  const AddTitle = document.querySelector(".event-form-title");

  AddTitle.innerHTML = `Vous souhaitez créer un évènement de <span class="name-of-sport">${GetEventInUrl}</span> ?`;
  UpdateDate();
}

var GetNameOfEvent = document.querySelector("#getname");
var GetDurationOfEvent = document.querySelector("#gettime");
var GetDateOfEvent = document.querySelector(".date");

export const AllFormsInputs = [GetNameOfEvent, GetDurationOfEvent, GetDateOfEvent];

export function _CreateEvent() {



  if (GetNameOfEvent.value.length === 0 || GetDurationOfEvent.value.length === 0) {

    if (GetNameOfEvent.value.length === 0 && GetDurationOfEvent.value.length === 0)  {
        ValidationMessage.style.display = "none";
        ErrorMessage.style.display = "flex";
        GetNameOfEvent.classList.add('error-animation-on-form');
        GetDurationOfEvent.classList.add('error-animation-on-form');
    } else if (GetNameOfEvent.value.length === 0) {
        ValidationMessage.style.display = "none";
        ErrorMessage.style.display = "flex";
        GetDurationOfEvent.classList.remove('error-animation-on-form');
        GetNameOfEvent.classList.add('error-animation-on-form');
    } else if (GetDurationOfEvent.value.length === 0) {
        ValidationMessage.style.display = "none";
        ErrorMessage.style.display = "flex";
        GetNameOfEvent.classList.remove('error-animation-on-form');
        GetDurationOfEvent.classList.add('error-animation-on-form');
    }
    return false;
  } else {

    ErrorMessage.style.display = "none";
    GetNameOfEvent.classList.remove('error-animation-on-form');
    GetDurationOfEvent.classList.remove('error-animation-on-form');

    const EventInformations = {
      sport: GetEventInUrl,
      name: GetNameOfEvent.value,
      duration: GetDurationOfEvent.value,
      date: GetDateOfEvent.value,
      owner: JSON.parse(localStorage.getItem("account")).name,
      contact: JSON.parse(localStorage.getItem("account")).email,
    };

    console.log(EventInformations)
    ValidationMessage.style.display = "flex";

    localStorage.setItem(`event [ ${GetEventInUrl} ]`, JSON.stringify(EventInformations));

    setTimeout(() => {
      history.back();
    }, 3000);

    return true;
  }
  

}

function UpdateDate() {
  const DATE_FORMAT = new Date(Date.now()).toISOString().split("T")[0];
  const DATE_OF_EVENT = document.querySelector(".date");

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

export function _RemoveEvent() {}
