import { IMAGES_DATA } from "../../../assets/data/data.js";
import { GetSportResearchInUrl } from "../dom/global.js";

export function SetResearchImage() {

    const GetAllAboutSport = IMAGES_DATA.find((x) => x._id === GetSportResearchInUrl.replace('"', '').replace('"',''));

    document.querySelector('.show-img-title').innerHTML = GetAllAboutSport.title;
    document.querySelector('.show-img-comment').innerHTML = GetAllAboutSport.comment;
    
    const ReplaceImage = document.querySelector('.show-img-link');

    ReplaceImage.src = GetAllAboutSport.link;
    ReplaceImage.alt = GetAllAboutSport.alt;
    ReplaceImage.title = GetAllAboutSport.title;

    document.querySelector('title').innerHTML = `${GetAllAboutSport.title} - Sport Addict`;

}