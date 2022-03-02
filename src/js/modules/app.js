import { SUBMIT_THIS_EVENT } from "./../dom/global.js";
import { CREATE_SELECT_OPTIONS, GET_ALL_VALUES, UPDATE_DATE } from "./../events.js";

window.addEventListener('load', () => {
    CREATE_SELECT_OPTIONS();
    UPDATE_DATE();
})

SUBMIT_THIS_EVENT.addEventListener('click', () => {
    GET_ALL_VALUES();
}) 