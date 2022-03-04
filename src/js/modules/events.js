import { _InitCreateEventPage, _CreateEvent, AllFormsInputs} from "../exports/events.js";
import { UserAlreadyRegister } from "../exports/login.js"
import { SubmitEvent } from "../dom/events.js";

window.addEventListener('load', () => {
    UserAlreadyRegister();
    _InitCreateEventPage();
})

SubmitEvent.addEventListener('click', () => {
    _CreateEvent();
})

AllFormsInputs.forEach(keyEnter => {
    keyEnter.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        SubmitEvent.click();
      }
    })
  })
  

