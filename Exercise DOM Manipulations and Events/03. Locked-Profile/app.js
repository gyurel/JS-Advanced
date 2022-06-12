function lockedProfile() {
    
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', lockUnlockFunk));

    function lockUnlockFunk(e){
        let currentRadioBtnStatus = e.target.parentElement.querySelectorAll('.profile input[value="lock"]')[0];
        let currentUserFields = e.target.parentElement.getElementsByTagName('div')[0];
        let button = e.target

        if (!currentRadioBtnStatus.checked){
            if ( button.textContent === 'Show more'){
                button.textContent = 'Hide it';
                currentUserFields.style.display = 'block';
            } else {
                button.textContent = 'Show more';
                currentUserFields.style.display = '';
            }   
        }
    }
}
