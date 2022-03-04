import { IMAGES_DATA } from "../../../assets/data/data.js";
import { EventsIcons } from "../dom/events.js";
import { GetSportResearchInUrl } from "../dom/global.js";

var GetAllAboutSport = IMAGES_DATA.find((x) => x._id === GetSportResearchInUrl.replace('"', '').replace('"',''));

export function _InitEvent() {
    if (localStorage.getItem(`event [ ${GetAllAboutSport._id} ]`)) {
        EventsIcons[0].style.display = "none";
        EventsIcons[1].style.display = "block";
      } else {
          return false;
      }
}

export function _GoToEvent() {
    EventsIcons[0].parentNode.href = `./event.html?event=${GetAllAboutSport._id}`
    EventsIcons[1].parentNode.href = `./account.html?event=${GetAllAboutSport._id}`
}

export function _CreateEvent() {

}


export function _RemoveEvent() {}