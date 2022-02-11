import { CANCEL_USER_CONNECTION, CRYPTED_PASS} from "./data.js";
import { LOGOUT_USER } from "./log.js";
import { LOCAL_GET_ID, LOCAL_GET_PW } from "./data.js";
import { TOGGLE_CRYPTED_PASS } from "./data.js";

// Change informations: 

// Affichage des informations du profiles
// Affichage du mots de passe avec possibilité de le cacher ou de l'afficher en clair

console.log(CRYPTED_PASS.innerHTML);

if (CRYPTED_PASS.innerHTML === "") {
    CRYPTED_PASS.innerHTML = 'No Password Set';
    TOGGLE_CRYPTED_PASS[0].style.display = "none";
    TOGGLE_CRYPTED_PASS[1].style.display = "none";
} else {
    for (var hide=0; hide < LOCAL_GET_PW.length; hide++) {
        CRYPTED_PASS.insertAdjacentHTML('beforeend', '*');
    }
    TOGGLE_CRYPTED_PASS[0].style.display = "none";
}

TOGGLE_CRYPTED_PASS[1].addEventListener('click', () => {
    TOGGLE_CRYPTED_PASS[0].style.display = "flex";
    TOGGLE_CRYPTED_PASS[1].style.display = "none";
    CRYPTED_PASS.innerHTML = LOCAL_GET_PW;
}) 
TOGGLE_CRYPTED_PASS[0].addEventListener('click', () => {
    TOGGLE_CRYPTED_PASS[1].style.display = "flex";
    TOGGLE_CRYPTED_PASS[0].style.display = "none";
    CRYPTED_PASS.innerHTML = "";
    for (var hide=0; hide < LOCAL_GET_PW.length; hide++) {
        CRYPTED_PASS.insertAdjacentHTML('beforeend', '*');
    }
}) 



// Logout
CANCEL_USER_CONNECTION.addEventListener('click', () => {
    LOGOUT_USER();
})