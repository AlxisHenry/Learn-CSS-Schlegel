export const this_find_sport = find('this_find-sport', 'class');
export const this_contain_href = find('this_contain-href-to-sport', 'class');
export const Span_History = document.querySelectorAll(".show-research-history");
export const this_contain_value = this_find_sport.value.toLowerCase().replace(new RegExp("[^(a-zA-Z)]", "g"), "");
export let Research_History = [];
export function Adapt_Value(value) {
    return value.innerHTML.toLowerCase().replace(new RegExp("[^(a-zA-Z)]", "g"), "");
}
export const INPUT_RESEARCH = find('research-sport', 'class');

export function find(element, selectors) {
    switch (selectors) {
        case 'id' :
            return document.querySelector(`#${element}`);
        case 'class':
            return document.querySelector(`.${element}`);
        default:
            return console.log('Want Selector');
    }
}