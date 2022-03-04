// Cette function modifie l'interface si l'utilisateur est connecté.

export function UserAlreadyRegister(on_this_page) {
    if (localStorage.getItem('account')) {
        
            const AccountInformations = JSON.parse(localStorage.getItem('account'));
            const ShowAccountName = document.querySelector('.user-id');
            
            ShowAccountName.parentNode.removeAttribute('href');
            ShowAccountName.parentNode.style.cursor = "default";
            ShowAccountName.style.textDecoration = "none";
            ShowAccountName.innerHTML = AccountInformations.name
        
            const GoToAccountPage = document.querySelector('.fa-user');

            if (on_this_page === 'index') {
                on_this_page = "./src/html/account.html";
            } else {
                on_this_page = "./account.html";
            }

            GoToAccountPage.parentElement.setAttribute('href', on_this_page);

    } else {
        return false;
    }
}