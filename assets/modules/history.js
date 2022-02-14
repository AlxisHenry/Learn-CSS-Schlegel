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
  LOCAL_GET_HISTORY,
} from "./data/global.js";
import { IMAGES_DATA } from "./data/data.js";

export function Adding_to_Research_History() {
  if (Research_History.includes(LowerValue_ID(this_find_sport.value))) {
  } else if (this_find_sport.value === "") {
  } else {
    Research_History.unshift(LowerValue_ID(this_find_sport.value));
    LOCAL_STORAGE_RESEARCH_HISTORY();
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
  } else if (
    Span_History[1].innerHTML === Research_History[0] ||
    Span_History[2].innerHTML === Research_History[0]
  ) {
  } else {
    Span_History[0].innerHTML = `${Research_History[0]}`;
    Checking_History_Value(Span_History[0]);
  }
  if ((Span_History[1].innerHTML = `${Research_History[1]}` === "undefined")) {
    Span_History[1].innerHTML = "";
  } else if (
    Span_History[0].innerHTML === Research_History[1] ||
    Span_History[2].innerHTML === Research_History[1]
  ) {
  } else {
    Span_History[1].innerHTML = `${Research_History[1]}`;
    Checking_History_Value(Span_History[1]);
  }
  if ((Span_History[2].innerHTML = `${Research_History[2]}` === "undefined")) {
    Span_History[2].innerHTML = "";
  } else if (
    Span_History[0].innerHTML === Research_History[2] ||
    Span_History[1].innerHTML === Research_History[2]
  ) {
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
    localStorage.setItem("LastResearch", LowerValue_ID(this_find_sport.value));
  }
}

export function SET_LAST_RESEARCH() {
  if (!localStorage.getItem("LastResearch")) {
  } else {
    if (
      !IMAGES_DATA.find((x) => x._id === localStorage.getItem("LastResearch"))
    ) {
    } else {
      var THIS_IS_LAST_RESEARCH = IMAGES_DATA.find(
        (x) => x._id === localStorage.getItem("LastResearch")
      );

      INPUT_RESEARCH.value = localStorage.getItem("LastResearch");
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

export function LOCAL_STORAGE_RESEARCH_HISTORY() {
  localStorage.setItem("HistoryResearch", Research_History);
}

export function _SHOW_LOCAL_STORAGE_HISTORY() {
  if (!LOCAL_GET_HISTORY) {
    return false;
  }

  const ARR_SHOW_HISTORY_VALUES = LOCAL_GET_HISTORY.split(",");

  Span_History[0].innerHTML = ARR_SHOW_HISTORY_VALUES[0];
  Span_History[1].innerHTML = ARR_SHOW_HISTORY_VALUES[1];
  Span_History[2].innerHTML = ARR_SHOW_HISTORY_VALUES[2];

  for (let i = 0; i < Span_History.length; i++) {
    Checking_History_Value(Span_History[i]);
    if (Span_History[i].innerHTML === "undefined") {
      Span_History[i].innerHTML = "";
    }
  }
}
