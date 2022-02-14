// LOCAL CONNECTION
import { VERIFIY_REGISTER_VALUES, ADD_TO_LOCALSTORAGE } from "../assets/modules/log.js";
import { GET_SUBMIT } from "../assets/modules/data/global.js";

GET_SUBMIT.addEventListener("click", () => {
  VERIFIY_REGISTER_VALUES();
  ADD_TO_LOCALSTORAGE();
});