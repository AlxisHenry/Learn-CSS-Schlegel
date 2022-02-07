import { this_find_sport, Research_History, Span_History } from "./data.js";
import { this_contain_value as GET_ID } from "./data.js";

export function Adding_to_Research_History() {
  if (Research_History.includes(this_find_sport.value)) {
  } else if (this_find_sport.value === "") {
  } else {
    Research_History.unshift(this_find_sport.value);
  }
}

export function Resize_Research_History() {
  if (Research_History.length > 3) {
    Research_History.pop();
  }
  console.log(Research_History)
}

export function Show_Research_History() {  
  if ((Span_History[0].innerHTML = `${Research_History[0]}` === "undefined")) {
    Span_History[0].innerHTML = "";
  } else {
    Span_History[0].innerHTML = `${Research_History[0]}`;
  }
  if ((Span_History[1].innerHTML = `${Research_History[1]}` === "undefined")) {
    Span_History[1].innerHTML = "";
  } else {
    Span_History[1].innerHTML = `${Research_History[1]}`;
  }
  if ((Span_History[2].innerHTML = `${Research_History[2]}` === "undefined")) {
    Span_History[2].innerHTML = "";
  } else {
    Span_History[2].innerHTML = `${Research_History[2]}`;
  }
}

export function Checking_History_Value(id) {
  if (document.querySelector(`#${id}`)) {
    id.classList.add('valid');
  } else {
    id.classList.add('not-valid');
  }
}