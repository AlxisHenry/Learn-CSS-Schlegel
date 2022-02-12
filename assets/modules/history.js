import {
  this_find_sport,
  Research_History,
  Span_History,
  Adapt_Value,
  LowerValue_ID,
  THIS_CONTAIN_IMG,
  INPUT_RESEARCH,
  ADDITIONAL_DESCRIPTION,
  TITLE_IMAGE,
} from "./global.js";
import { IMAGES_DATA } from "./data.js";

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
    Checking_History_Value(Span_History[0]);
  }
  if ((Span_History[1].innerHTML = `${Research_History[1]}` === "undefined")) {
    Span_History[1].innerHTML = "";
  } else {
    Span_History[1].innerHTML = `${Research_History[1]}`;
    Checking_History_Value(Span_History[1]);
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

export function SAVE_LAST_RESEARCH() {
  if (IMAGES_DATA.find((x) => x._id === LowerValue_ID(this_find_sport.value))) {
    localStorage.setItem("last-research", LowerValue_ID(this_find_sport.value));
  }
}

export function SET_LAST_RESEARCH() {

  if(!localStorage.getItem('last-research')) {

  } else {

    if (!IMAGES_DATA.find((x) => x._id === localStorage.getItem('last-research'))) {

    } else {

      var THIS_IS_LAST_RESEARCH = IMAGES_DATA.find((x) => x._id === localStorage.getItem('last-research'));

      INPUT_RESEARCH.value = localStorage.getItem('last-research');
      TITLE_IMAGE.innerHTML = THIS_IS_LAST_RESEARCH.h1;
      ADDITIONAL_DESCRIPTION.innerHTML = THIS_IS_LAST_RESEARCH.comment;

      THIS_CONTAIN_IMG.setAttribute("src", THIS_IS_LAST_RESEARCH.link);
      THIS_CONTAIN_IMG.setAttribute("class", THIS_IS_LAST_RESEARCH.class);
      THIS_CONTAIN_IMG.setAttribute("alt", THIS_IS_LAST_RESEARCH.alt);
      THIS_CONTAIN_IMG.setAttribute("title", THIS_IS_LAST_RESEARCH.title);
      THIS_CONTAIN_IMG.setAttribute("id", THIS_IS_LAST_RESEARCH._id);

    }


  }

}
