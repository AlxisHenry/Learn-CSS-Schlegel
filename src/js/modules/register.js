// Contain Register & Animation Done or Failed

import { SubmitRegister } from "../dom/events.js";
import { CheckAllUsersValues, RedirectUserOnHomepage, AllFormsInputs, SaveUsersInformations, AlreadyRegister, ChangeColorOfInput} from "../exports/register.js";

window.addEventListener('load', () => {
  AlreadyRegister();
})

SubmitRegister.addEventListener("click", () => {
  CheckAllUsersValues();
  RedirectUserOnHomepage();
  SaveUsersInformations();
});

AllFormsInputs.forEach(keyEnter => {
  keyEnter.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      SubmitRegister.click();
    }
  })
})

AllFormsInputs.forEach(InputColor => {
  InputColor.addEventListener('change', (e) => {
    ChangeColorOfInput();
    // console.log(e.target.value);
  })
})

