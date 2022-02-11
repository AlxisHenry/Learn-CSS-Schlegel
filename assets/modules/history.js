import { this_find_sport, Research_History, Span_History, Adapt_Value } from "./global.js";
import { IMAGES_DATA } from "./data.js"

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
}

export function Show_Research_History() {  
  if ((Span_History[0].innerHTML = `${Research_History[0]}` === "undefined")) {
    Span_History[0].innerHTML = "";
  } else {
    Span_History[0].innerHTML = `${Research_History[0]}`;
    Checking_History_Value(Span_History[0])
  }
  if ((Span_History[1].innerHTML = `${Research_History[1]}` === "undefined")) {
    Span_History[1].innerHTML = "";
  } else {
    Span_History[1].innerHTML = `${Research_History[1]}`;
    Checking_History_Value(Span_History[1])
  }
  if ((Span_History[2].innerHTML = `${Research_History[2]}` === "undefined")) {
    Span_History[2].innerHTML = "";
  } else {
    Span_History[2].innerHTML = `${Research_History[2]}`;
    Checking_History_Value(Span_History[2]);
  }
}

export function Checking_History_Value(id) {
  if (IMAGES_DATA.find((x) => x._id === Adapt_Value(id))) {
    id.style.color = "green";
  } else {
    id.style.color = "red";
  }
}