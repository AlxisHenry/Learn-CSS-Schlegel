import { IMAGES_DATA } from "./../../../assets/data/data.js";

export function _InitUserInformations() {
    
    const AccountInputs = document.querySelectorAll('.account-input');
    const GetUserInformations = JSON.parse(localStorage.getItem('account'));

    AccountInputs[0].value = GetUserInformations.name
    AccountInputs[1].value = "*".repeat(GetUserInformations.password.length);
    AccountInputs[2].value = GetUserInformations.email

      
}

export function ToggleHiddenPassword() {
    
}

export function ChangeID() {

}

export function AccountCards() {

    const countCard = {
        favorites: GetFavorites(),
        events: GetEvents(),
        history: undefined,
    }

    function GetFavorites() {
        var GetLocalStorage = { ...localStorage };
        for (let deleteThis in GetLocalStorage) {
            if (GetLocalStorage[deleteThis].includes('"date"')) {
              delete GetLocalStorage[deleteThis];
            }
          }
        return Object.keys(GetLocalStorage).length;
    }

    function GetEvents() {
        var GetLocalStorage = { ...localStorage };

        for (let deleteThis in GetLocalStorage) {
            if (!GetLocalStorage[deleteThis].includes('"date"')) {
              delete GetLocalStorage[deleteThis];
            } else if (GetLocalStorage[deleteThis].includes('email')) {
              delete GetLocalStorage[deleteThis];
            }
          }
        
        return Object.keys(GetLocalStorage).length;
    }

    function GetHistory() {}

}