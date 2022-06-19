function validate() {
    let emailInput = document.getElementById('email');
    let regex = new RegExp('^[a-z]+@[a-z]+\.[a-z]+');

    emailInput.addEventListener('change', () => {
        if(regex.test(emailInput.value)){
            emailInput.classList.remove('error')
        } else {
            emailInput.classList.add('error')
        }
    })
}
