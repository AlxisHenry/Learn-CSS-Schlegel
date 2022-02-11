// LOCAL CONNECTION
import { VERIFIY_REGISTER_VALUES, ADD_TO_LOCALSTORAGE} from "./log.js";
import { GET_SUBMIT } from "./data.js";


GET_SUBMIT.addEventListener('click', () => {

    VERIFIY_REGISTER_VALUES();
    ADD_TO_LOCALSTORAGE();

});

// Disconnect btn :
// localStorage.clear();

