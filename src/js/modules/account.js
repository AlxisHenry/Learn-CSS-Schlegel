// 

import { EditUserID } from "../dom/events.js";
import { AccountCards, _InitUserInformations } from "../exports/account.js";
import { UserAlreadyRegister } from "../exports/login.js"

window.addEventListener('load', () => {
    UserAlreadyRegister();
    _InitUserInformations();
    AccountCards();
})

EditUserID.addEventListener('click', () => {

})

