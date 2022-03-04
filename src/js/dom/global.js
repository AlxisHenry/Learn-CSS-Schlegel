// Contain all query

export const HideLoadingSection = document.querySelector('.loading-section'); // <section class="section loading-section hidden">
export const InputOfSearchbar = document.querySelector('.input-search'); // <input class="input-search" type="search" name="searchbar" id="searchbar" placeholder="Search..."/>
export const SearchThisSport = document.querySelector('.search-this-sport'); //   <a class="search-this-sport" href="#"><i class="fas fa-search"></i></a>
export const ValidationMessage = document.querySelector('.contain-validation-message') //  <div class="contain-validation-message hidden">
export const ErrorMessage = document.querySelector('.contain-error-message'); //  <div class="contain-error-message hidden">
export const GetUrlClassParam  = new URLSearchParams(window.location.search).get("class");  // class = events, activities, popular, homepage
export const GetSportResearchInUrl  = new URLSearchParams(window.location.search).get("sport"); // GET sport: All sports for research page
export const GetUsernameInUrl  = new URLSearchParams(window.location.search).get("user");  // class = events, activities, popular, homepage
