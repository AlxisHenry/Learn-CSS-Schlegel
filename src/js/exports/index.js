import { ErrorMessage, GetUrlClassParam, HideLoadingSection, InputOfSearchbar, SearchThisSport, ValidationMessage} from "./../dom/global.js";
import { IMAGES_DATA } from "./../../../assets/data/data.js";

export function NewUser() {
    if (GetUrlClassParam) {
        HideLoadingSection.style.display = "none";
    }
}

export function GetValueOfInput() {

// TODO: Vérification de la valeur, l'adapter à l'ID, rajouter une recherche sur des mots clés.

    if(!InputOfSearchbar.classList.contains('transition-search')) {
        return false;
    }

    const ValueOfUserResearch = InputOfSearchbar.value;

    const ResearchInformationsExist = IMAGES_DATA.find((x) => x._id === ValueOfUserResearch);

    if (!ResearchInformationsExist) {
        SearchThisSport.href = "#";
        ValidationMessage.classList.add('hidden');
        ErrorMessage.classList.remove('hidden');
        return false;
    } 

    ErrorMessage.classList.add('hidden');
    ValidationMessage.classList.remove('hidden');

    setTimeout(() => {
        window.location.href = `./src/html/research.html?sport=${ValueOfUserResearch}`;
    }, 2000);

}
