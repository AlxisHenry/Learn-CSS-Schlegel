import {
  SHOW_USER_NAME,
  ACCOUNT_REGISTER,
  GET_NAME,
  GET_PSWD,
  LOCAL_GET_ID,
  LOCAL_GET_PW,
  CANCEL_RETURN_INDEX,
} from "./data.js";
// import { SHOW_USER_PASS } from "./data.js";

export function SHOW_ID(param) {
  SHOW_USER_NAME.innerHTML = param;
}

export function SHOW_PW(param) {
  // Permet de voir son mot de passe dans l'onglet 'Mon compte'.
}

export function TOGGLE_REGISTER() {
  if (LOCAL_GET_ID) {
    ACCOUNT_REGISTER.innerHTML = "Mon compte";
    ACCOUNT_REGISTER.setAttribute("href", "./html/account.html");
  } else {
    ACCOUNT_REGISTER.innerHTML = "S'inscrire";
    ACCOUNT_REGISTER.setAttribute("href", "./html/register.html");
  }
}

export function VERIFIY_REGISTER_VALUES() {
  if (GET_NAME.value.length < 5) {
    alert("wrong name");
    CANCEL_RETURN_INDEX.setAttribute("href", "#");
    return false;
  } else if (GET_PSWD.value.length < 5) {
    alert("wrong password");
    CANCEL_RETURN_INDEX.setAttribute("href", "#");
    return false;
  } else {
    CANCEL_RETURN_INDEX.setAttribute("href", "../index.html");
    return true;
  }

}

export function ADD_TO_LOCALSTORAGE() {
  if (VERIFIY_REGISTER_VALUES) {
    localStorage.setItem("name", GET_NAME.value);
    localStorage.setItem("pass", GET_PSWD.value);
    // Login
    // Animation login réussi > redirection vers index
  } else {
    // Animation login failed
  }
}

export function LOGOUT_USER() {
  localStorage.clear();
}