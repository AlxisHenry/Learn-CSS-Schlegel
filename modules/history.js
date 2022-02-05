import { this_find_sport, Research_History } from "./data.js";

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
  const Span_History = document.querySelectorAll(".show-research-history");

  if ((Span_History[0].innerHTML = `${Research_History[0]}` === "undefined")) {
    Span_History[0].innerHTML = "Last Research";
  } else {
    Span_History[0].innerHTML = `${Research_History[0]}`;
  }
  if ((Span_History[1].innerHTML = `${Research_History[1]}` === "undefined")) {
    Span_History[1].innerHTML = "Last Research";
  } else {
    Span_History[1].innerHTML = `${Research_History[1]}`;
  }
  if ((Span_History[2].innerHTML = `${Research_History[2]}` === "undefined")) {
    Span_History[2].innerHTML = "Last Research";
  } else {
    Span_History[2].innerHTML = `${Research_History[2]}`;
  }
}
