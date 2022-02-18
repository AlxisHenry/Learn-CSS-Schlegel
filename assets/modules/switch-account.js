import { CHANGE_SECTION, ONGLET_SWIPE } from "./data/global.js";

let index = 0;

export function ONGLETS_ANIMATIONS(e) {
  const el = e.target;

  console.log(el);
  console.log(ONGLET_SWIPE.indexOf(el));

  localStorage.setItem("last_account_activity", el.id);

  for (
    let removeActiveClass = 0;
    removeActiveClass < ONGLET_SWIPE.length;
    removeActiveClass++
  ) {
    ONGLET_SWIPE[removeActiveClass].classList.remove("active");
    CHANGE_SECTION[removeActiveClass].classList.remove("active-contenu");
  }

  index = ONGLET_SWIPE.indexOf(el);

  ONGLET_SWIPE[index].classList.add("active");
  CHANGE_SECTION[index].classList.add("active-contenu");
}

export function CHANGE_ON_LOAD() {
  const LAST_ACTIVITY = localStorage.getItem("last_account_activity");

  if (!LAST_ACTIVITY) {
    ONGLET_SWIPE[0].className += " active"
    return false;
  }

  for (let i = 0; i < CHANGE_SECTION.length; i++) {
    ONGLET_SWIPE[i].classList.remove("active");
    CHANGE_SECTION[i].classList.remove("active-contenu");
    if (
      ONGLET_SWIPE[i].id === LAST_ACTIVITY &&
      CHANGE_SECTION[i].classList.contains(LAST_ACTIVITY)
    ) {
      ONGLET_SWIPE[i].classList.add("active");
      CHANGE_SECTION[i].classList.add("active-contenu");
    }
  }
}
