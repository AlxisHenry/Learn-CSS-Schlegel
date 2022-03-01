const show_more_btn = document.querySelector('.show-more-btn');
const sectionToHide = document.querySelector('.loading-section');
const headerToggle = document.querySelector('.header');
const showInput = document.querySelector('.input-search');
const searchInput = document.querySelector('.fa-search');


show_more_btn.addEventListener('click' , () => {
    sectionToHide.classList.add('reverse-display-transition');
})

searchInput.addEventListener('click', () => {
    showInput.classList.add('transition-search');
})
 
   
export const GET_URL_CLASS  = new URLSearchParams(window.location.search).get("class"); // GET class: 'event','activity','populaire' 

if (GET_URL_CLASS) {
    sectionToHide.style.display = "none";
}
//* Permet de savoir si l'utilisateur vient d'arriver sur le site ou non