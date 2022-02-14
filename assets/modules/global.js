export const this_find_sport = document.querySelector(".this_find-sport");
export const this_contain_href = document.querySelector(".this_contain-href-to-sport");
export const Span_History = document.querySelectorAll(".show-research-history");
export let Research_History = [];
export function Adapt_Value(value) {
    return value.innerHTML.toLowerCase();
}
export function LowerValue_ID(value) {
    return value.toLowerCase();
}
export const INPUT_RESEARCH = document.querySelector('.research-sport');
export const SHOW_USER_NAME = document.querySelector('.user-id');
export const GET_SUBMIT = document.querySelector('#submit');
export const GET_NAME = document.querySelector('#getname');
export const GET_PSWD = document.querySelector('#getpswd');
export const LOCAL_GET_ID = localStorage.getItem('name'); // GET USER NAME
export const LOCAL_GET_PW = localStorage.getItem('pass'); // GET USER PASS
export const LOCAL_GET_HISTORY = localStorage.getItem('HistoryResearch'); // GET RESEARCH HISTORY
export const ACCOUNT_REGISTER = document.querySelector('.toggle-account-register');
export const CANCEL_RETURN_INDEX = document.querySelector('.href-return-index')
export const CANCEL_USER_CONNECTION = document.querySelector('.cancel-user-connection');
export const CRYPTED_PASS = document.querySelector('.show-crypt-pass');
export const TOGGLE_CRYPTED_PASS = document.querySelectorAll('.toggle-uncrypt-pass');
export const SHOW_USER_ID = document.querySelector('.show-account-user-id');
export const THIS_CONTAIN_IMG = document.querySelector('.show-search-img');
export const TOGGLE_FAV_IMG = document.querySelectorAll('.toggle-fav-img');
export const SHOW_USERS_FAVS = document.querySelector('.show-users-fav');
export const EDIT_USER_ID = document.querySelector('.edit-account-user-id');
export const ADDITIONAL_DESCRIPTION = document.querySelector('.additional-description-of-img');
export const TITLE_IMAGE = document.querySelector('.title-image');
export const ADDING_SPORT_NAME = document.querySelector('.adding-sport-name');
export const ADDING_SPORT_LINK = document.querySelector('.adding-sport-img-link');
export const ADDING_SPORT_COMMENTARY = document.querySelector('.adding-sport-commentary');
export const ADDING_SPORT_TITLE = document.querySelector('.adding-sport-title');
export const ADDING_SPORT_CLASS = document.querySelector('.adding-sport-class');