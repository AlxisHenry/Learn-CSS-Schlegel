// LOCAL CONNECTION
import { VERIFIY_REGISTER_VALUES, ADD_TO_LOCALSTORAGE} from "./login.js";
import { GET_SUBMIT } from "./data.js";


GET_SUBMIT.addEventListener('click', (e) => {

    VERIFIY_REGISTER_VALUES();
    ADD_TO_LOCALSTORAGE();

});

// Disconnect btn :
// localStorage.clear();

