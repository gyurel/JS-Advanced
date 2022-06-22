function validate() {

    document.getElementById('submit').addEventListener('click', clickSubmit);

    let checkBox = document.getElementById('company');
    checkBox.addEventListener('change', () => {
        if (checkBox.checked == true){
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';
        }
    })

    function clickSubmit (e){
        e.preventDefault();

        let isValid = true;
        let userNameField = document.getElementById('username');
        let emailField = document.getElementById('email');
        let passwordField = document.getElementById('password');
        let confirmPasswordField = document.getElementById('confirm-password');
        let companyNumberField = document.getElementById('companyNumber');

        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        if (!usernameRegex.test(userNameField.value)){
            userNameField.style.borderColor = 'red';
            isValid = false;
        }

        let emailRegex = /^[^@.]+@[^@]*\.[^@]+$/;
        if (!emailRegex.test(emailField.value)){
            emailField.style.borderColor = 'red';
            isValid = false;
        }

        let passwordRegex = /^[\w]{5,15}$/;
        if (!passwordRegex.test(passwordField.value)){
            passwordField.style.borderColor = 'red';
            isValid = false;
        }

        if (!passwordRegex.test(confirmPasswordField.value) || passwordField.value != confirmPasswordField.value){
            passwordField.style.borderColor = 'red';
            confirmPasswordField.style.borderColor = 'red';
            isValid = false;
        }

        let companyNumberRegex = /^[0-9]{4}$/;
        if (checkBox.checked && !companyNumberRegex.test(companyNumberField.value)){
            companyNumberField.style.borderColor = 'red';
            isValid = false;
        }

        if (isValid == true){
            document.getElementById('valid').style.display = 'block';
        } else {
            document.getElementById('valid').style.display = 'none';
        }
    }
}
