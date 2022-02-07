export const this_find_sport = document.querySelector(".this_find-sport");
export const this_contain_href = document.querySelector(".this_contain-href-to-sport");
export const Span_History = document.querySelectorAll(".show-research-history");
export const this_contain_value = this_find_sport.value.toLowerCase().replace(new RegExp("[^(a-zA-Z)]", "g"), "");

export let Research_History = [];