import {
  SHOW_USER_NAME,
  ACCOUNT_REGISTER,
  GET_NAME,
  GET_PSWD,
  LOCAL_GET_ID,
  LOCAL_GET_PW,
  CANCEL_RETURN_INDEX,
  TOGGLE_CRYPTED_PASS,
  CRYPTED_PASS,
  SHOW_USER_ID,
} from "./global.js";

export function SHOW_ID(param) {
  SHOW_USER_NAME.innerHTML = param;
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
  // window.location.reload();
  CRYPTED_PASS.innerHTML = "Vous avez été déconnecté !";
  SHOW_USER_ID.innerHTML = "";
  TOGGLE_CRYPTED_PASS[0].style.visibility = "hidden";
  TOGGLE_CRYPTED_PASS[1].style.visibility = "hidden";
}

export function TOGGLE_VIEW_PW() {
  CRYPTED_PASS.innerHTML = "No Password Set";
  TOGGLE_CRYPTED_PASS[0].style.display = "none";
  TOGGLE_CRYPTED_PASS[1].style.display = "none";

  if (!LOCAL_GET_PW) {
    CRYPTED_PASS.innerHTML = "No Password Set<br>";
    TOGGLE_CRYPTED_PASS[0].style.display = "none";
    TOGGLE_CRYPTED_PASS[1].style.display = "none";
  } else {
    CRYPTED_PASS.innerHTML = "";
    for (var hide = 0; hide < LOCAL_GET_PW.length; hide++) {
      CRYPTED_PASS.insertAdjacentHTML("beforeend", "*");
    }
    TOGGLE_CRYPTED_PASS[0].style.display = "none";
    TOGGLE_CRYPTED_PASS[1].style.display = "flex";
  }
}

export function TOGGLE_VIEW_ID() {
  if (!LOCAL_GET_ID) {
    SHOW_USER_ID.innerHTML = "Une erreur est survenue";
  } else {
    SHOW_USER_ID.innerHTML = LOCAL_GET_ID;
  }
}

export function TOGGLE_PW_VISIBLE() {
  TOGGLE_CRYPTED_PASS[0].style.display = "flex";
  TOGGLE_CRYPTED_PASS[1].style.display = "none";
  CRYPTED_PASS.innerHTML = LOCAL_GET_PW;
}

export function TOGGLE_PW_HIDDEN() {
  TOGGLE_CRYPTED_PASS[1].style.display = "flex";
  TOGGLE_CRYPTED_PASS[0].style.display = "none";
  CRYPTED_PASS.innerHTML = "";
  for (var hide = 0; hide < LOCAL_GET_PW.length; hide++) {
    CRYPTED_PASS.insertAdjacentHTML("beforeend", "*");
  }
}

export function VERIFY_CONNECT_FOR_AUTHORIZE() {
  if (!LOCAL_GET_ID) {
      return false;
  } else {  
      return true;
  }
}

export function EDIT_ACCOUNT_ID() {
  var NEW_ID_VALUE = prompt('New ID?');
  if (!NEW_ID_VALUE) {
    NEW_ID_VALUE = localStorage.getItem('name');
  }
  localStorage.setItem("name", NEW_ID_VALUE);
  window.location.reload(); 
}