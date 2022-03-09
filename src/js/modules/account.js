// 

import { AccountCards, FavoritesAndEvents, _InitUserInformations } from "../exports/account.js";
import { UserAlreadyRegister } from "../exports/login.js";

window.addEventListener('load', () => {
    UserAlreadyRegister();
    _InitUserInformations();
    AccountCards();
    FavoritesAndEvents();
})

const onglets = Array.from(document.querySelectorAll(".onglets"));

let index = 0;

onglets.forEach(onglet => {
    onglet.addEventListener("click", (e) => {
        const el = e.target;
    
        onglets[index].classList.remove("active-onglet");
        
        index = onglets.indexOf(el);
        
        onglets[index].classList.add("active-onglet")
        
    })
})

onglets[0].addEventListener('click', () => {
    document.querySelector('.onglet-favorites').classList.add('hidden');
    document.querySelector('.onglet-events').classList.add('hidden');
    document.querySelector('.form-account').style.display = "flex"
})

onglets[1].addEventListener('click', () => {
    document.querySelector('.form-account').style.display = "none"
    document.querySelector('.onglet-events').classList.add('hidden');
    document.querySelector('.onglet-favorites').classList.remove('hidden');

})

onglets[2].addEventListener('click', () => {
    document.querySelector('.form-account').style.display = "none"
    document.querySelector('.onglet-favorites').classList.add('hidden');
    document.querySelector('.onglet-events').classList.remove('hidden');
})