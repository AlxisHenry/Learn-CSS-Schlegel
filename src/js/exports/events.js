import { IMAGES_DATA } from "../../../assets/data/data.js";
import { EventsIcons } from "../dom/events.js";
import { GetEventInUrl, GetSportResearchInUrl } from "../dom/global.js";


export function _InitEvent() {
    var GetAllAboutSport = IMAGES_DATA.find((x) => x._id === GetSportResearchInUrl.replace('"', '').replace('"',''));

    if (localStorage.getItem(`event [ ${GetAllAboutSport._id} ]`)) {
        EventsIcons[0].style.display = "none";
        EventsIcons[1].style.display = "block";
      } else {
          return false;
      }
}

export function _GoToEvent() {
    var GetAllAboutSport = IMAGES_DATA.find((x) => x._id === GetSportResearchInUrl.replace('"', '').replace('"',''));
    EventsIcons[0].parentNode.href = `./event.html?event=${GetAllAboutSport._id}`
    EventsIcons[1].parentNode.href = `./account.html?event=${GetAllAboutSport._id}`
}

export function _CreateEvent() {
    const AddTitle = document.querySelector('.event-form-title');

    AddTitle.innerHTML = `Vous souhaitez créer un évènement de <span class="name-of-sport">${GetEventInUrl}</span> ?`;
    UPDATE_DATE();

}

export function UPDATE_DATE() {

    const DATE_FORMAT = new Date(Date.now()).toISOString().split("T")[0];
    const DATE_OF_EVENT = document.querySelector('.date');
    
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