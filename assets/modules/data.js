export const this_find_sport = document.querySelector(".this_find-sport");
export const this_contain_href = document.querySelector(".this_contain-href-to-sport");
export const Span_History = document.querySelectorAll(".show-research-history");
export let Research_History = [];
export function Adapt_Value(value) {
    return value.innerHTML.toLowerCase().replace(new RegExp("[^(a-zA-Z)]", "g"), "");
}
export const INPUT_RESEARCH = document.querySelector('.research-sport');
export const SHOW_USER_NAME = document.querySelector('.user-id');
export const GET_SUBMIT = document.querySelector('#submit');
export const GET_NAME = document.querySelector('#getname');
export const GET_PSWD = document.querySelector('#getpswd');
export const LOCAL_GET_ID = localStorage.getItem('name');
export const LOCAL_GET_PW = localStorage.getItem('pass');
export const ACCOUNT_REGISTER = document.querySelector('.toggle-account-register');
export const CANCEL_RETURN_INDEX = document.querySelector('.href-return-index')
export const CANCEL_USER_CONNECTION = document.querySelector('.cancel-user-connection');
