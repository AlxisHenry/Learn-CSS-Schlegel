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

    const AccountInformations = JSON.parse(localStorage.getItem('account'));

    if(GetUsernameInUrl) {
        // todo: Ajout d'une animation 
        document.querySelector('.contain-welcome-message').style.display = "flex";
        document.querySelector('.message-welcome').innerHTML = `Bienvenue ${AccountInformations.name}`;
    }

    // setTimeout(() => { DisplayNoneWelcomeToUser();}, 3000);

}

function DisplayNoneWelcomeToUser() {
    // todo: Faire disparaître le message de bienvenu avec une animation
    document.querySelector('.contain-welcome-message').style.display = "none";
    // location.replace("./index.html");
}
