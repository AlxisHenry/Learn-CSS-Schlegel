import { SubmitRegister } from "../dom/events.js";
import { ErrorMessage, ValidationMessage } from "../dom/global.js";

const NameOfUser = SubmitRegister.parentNode.children[1].children[0];
const EmailOfUser = SubmitRegister.parentNode.children[1].children[1];
const PasswordOfUser = SubmitRegister.parentNode.children[1].children[2];

export const AllFormsInputs = [NameOfUser, EmailOfUser, PasswordOfUser];

export function CheckAllUsersValues() {
    
    if (NameOfUser.value.length === 0 || !EmailOfUser.value.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i) || PasswordOfUser.value.length === 0 ) {

        ValidationMessage.style.display = "none";
        ErrorMessage.style.display = "flex";
        [ NameOfUser, EmailOfUser, PasswordOfUser ].forEach(removeClass => {
            removeClass.classList.remove('error-animation-on-form');
            if (removeClass.value.length === 0) {
                removeClass.classList.add('error-animation-on-form');
            }
            if (!EmailOfUser.value.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)){
                EmailOfUser.classList.add('error-animation-on-form');
            }
        })
        return false;
    } else {

    [ NameOfUser, EmailOfUser, PasswordOfUser ].forEach(removeClass => {
        removeClass.classList.remove('error-animation-on-form');
    })

    ErrorMessage.style.display = "none";
    ValidationMessage.style.display = "flex";
    return true;
}
}


export function RedirectUserOnHomepage() {

    if (!CheckAllUsersValues()) {
        return false;
    } else {
        setTimeout(() => { window.location.href = `./../../index.html?user=${NameOfUser.value}` }, 3250);
    }

}

export function SaveUsersInformations() {
    if(!CheckAllUsersValues()) {
        return false;
    } else {

        const UsersInformations = {
            name: NameOfUser.value, 
            email: EmailOfUser.value, 
            password: PasswordOfUser.value,
            date: new Date(Date.now()),
        }
        
        localStorage.setItem('account', JSON.stringify(UsersInformations));
    }
}

export function AlreadyRegister() {
    if(localStorage.getItem('account')) {
        window.location.href = `./../../index.html`;
    }
}

export function ChangeColorOfInput() {
    if (NameOfUser.value.length > 0 && EmailOfUser.value.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i) && PasswordOfUser.value.length > 0 ) {
        SubmitRegister.classList.add('form-completed');
    } else {
        SubmitRegister.classList.remove('form-completed');
    }
}