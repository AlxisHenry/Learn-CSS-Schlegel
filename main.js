export const GET_URL_CLASS  = new URLSearchParams(window.location.search).get("class"); // GET class: 'event','activity','populaire' 
const GET_CONST = document.querySelectorAll('.menu-get-const');
const INDEX_PAGE = document.querySelector('title').innerHTML === "Sport Addict - New Template";

for (let i = 0; i < GET_CONST.length; i++) {
    
   if (!GET_URL_CLASS & !(INDEX_PAGE) ) {
       location.replace('../index.html');
       break;
   }
   
   if (!GET_URL_CLASS & INDEX_PAGE) {
       break;
   }

   if ( GET_CONST[i].children[0].classList.contains(GET_URL_CLASS)) {
       GET_CONST[i].classList.add('active-on-page');
       GET_CONST[i].children[0].classList.add('active-on-page')
   } else {
       GET_CONST[i].classList.remove('active-on-page');
       GET_CONST[i].children[0].classList.remove('active-on-page')
   }
}

const MenuBurger = document.querySelector('.menu-burger-show');
const MenuBurgerContent = document.querySelector('.menu-burger-content');

MenuBurger.addEventListener('click', () => {
    MenuBurger.classList.toggle('transform-to-open-menu');
    MenuBurgerContent.classList.toggle('menu-burger-content-responsive');
    MenuBurgerContent.classList.toggle('transition-to-hidden-menu-burger');
})