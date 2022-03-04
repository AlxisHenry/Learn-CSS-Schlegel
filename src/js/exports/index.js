import { ErrorMessage, GetUrlClassParam, GetUsernameInUrl, HideLoadingSection, InputOfSearchbar, SearchThisSport, ValidationMessage} from "./../dom/global.js";
import { IMAGES_DATA } from "./../../../assets/data/data.js";

export function AlreadyVisitedHomepage() {
    if (GetUrlClassParam) {
        HideLoadingSection.style.display = "none";
    }
}

export function GetValueOfInput() {

    if(!InputOfSearchbar.classList.contains('transition-search')) {
        return false;
    }

    document.querySelector('.contain-welcome-message').classList.add('hidden');

    if(InputOfSearchbar.value.length < 3) {
        SearchThisSport.href = "#";
        ValidationMessage.classList.add('hidden');
        ErrorMessage.classList.remove('hidden');
        return false;
    }

    // Initialisation des messages
    ValidationMessage.classList.add('hidden')
    ErrorMessage.classList.add('hidden')

    let FormatResearchValue = InputOfSearchbar.value.toLowerCase();

    const ValueOfUserResearch = FormatResearchValue;

    const ResearchInformationsExistByID = IMAGES_DATA.find((x) => x._id.includes(ValueOfUserResearch));
    const ResearchInformationsExistByKeyword = IMAGES_DATA.find((x) => x.comment.toLowerCase().includes(ValueOfUserResearch));

    var KeywordForUrlParam = InputOfSearchbar.value;
        // todo: Ajout d'un effet de surbrillance sur les caractères qui ont mené à la recherche
    if (ResearchInformationsExistByID) {
        var FormatValueForUrlParam = ResearchInformationsExistByID._id;
        SearchThisSport.href = "#";
        ValidationMessage.classList.remove('hidden');
        ErrorMessage.classList.add('hidden');
        setTimeout(() => {
            window.location.href = `./src/html/research.html?sport="${FormatValueForUrlParam}"&keyword="${KeywordForUrlParam}"`;
        }, 2250);
    } else if (ValueOfUserResearch.length >= 4) { 
        if (ResearchInformationsExistByKeyword) {
            var FormatValueForUrlParam = ResearchInformationsExistByKeyword._id;
            var KeywordForUrlParam = InputOfSearchbar.value;
            SearchThisSport.href = "#";
            ValidationMessage.classList.remove('hidden');
            ErrorMessage.classList.add('hidden');
            setTimeout(() => {
                window.location.href = `./src/html/research.html?sport="${FormatValueForUrlParam}"&keyword="${KeywordForUrlParam}"`;
            }, 2250);
        } else {
            SearchThisSport.href = "#";
            ValidationMessage.classList.add('hidden');
            ErrorMessage.classList.remove('hidden');
        }
    } else {
        SearchThisSport.href = "#";
        ValidationMessage.classList.add('hidden');
        ErrorMessage.classList.remove('hidden');
    }
}

export function WelcomeToUser() {
    if(GetUsernameInUrl) {
        const AccountInformations = JSON.parse(localStorage.getItem('account'));
        // todo: Ajout d'une animation 
        if (GetUsernameInUrl === AccountInformations.name) {
            document.querySelector('.contain-welcome-message').classList.remove('hidden')
            document.querySelector('.message-welcome').innerHTML = `Bienvenue ${AccountInformations.name}`;
        }

    } else {
        return false;
    }
}