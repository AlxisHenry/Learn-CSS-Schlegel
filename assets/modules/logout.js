import { CANCEL_USER_CONNECTION } from "./data.js";
import { LOGOUT_USER } from "./log.js";

CANCEL_USER_CONNECTION.addEventListener('click', () => {
    LOGOUT_USER();
})