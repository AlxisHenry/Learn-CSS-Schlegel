// Contain research, favoris, events

import { SetResearchImage } from "./../exports/research.js";
import { UserAlreadyRegister } from "./../exports/login.js";

window.addEventListener('load', () => {
    SetResearchImage();
    UserAlreadyRegister();
});
