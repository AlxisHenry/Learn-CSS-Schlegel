import { SUBMIT_THIS_EVENT } from "../assets/modules/data/global.js";
import { CANCEL_EXPIRED_EVENTS, CREATE_SELECT_OPTIONS, GET_ALL_VALUES, SHOW_USER_EVENTS, UPDATE_DATE } from "../assets/modules/events.js";

window.addEventListener('load', () => {
    CREATE_SELECT_OPTIONS();
    UPDATE_DATE();
})

SUBMIT_THIS_EVENT.addEventListener('click', () => {
    GET_ALL_VALUES();
    // SHOW_USER_EVENTS();
})