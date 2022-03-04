import { _CreateEvent } from "../exports/events.js";
import { UserAlreadyRegister } from "../exports/login.js"

window.addEventListener('load', () => {
    UserAlreadyRegister();
    _CreateEvent();
})