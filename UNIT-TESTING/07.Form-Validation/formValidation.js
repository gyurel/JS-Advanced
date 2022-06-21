function validate() {
    let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    let emailRegex = /^[^@.]+@[^@]*\.[^@]+$/;
    let passwordRegex = /^[\w]{5,15}$/;
    let companyNumberRegex = /^[0-9]{4}$/;

    document.getElementById('company').addEventListener('change', () => {
        if (document.getElementById('company').checked == true){
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';
        }
    })

    document.getElementById('submit').addEventListener('click', clickSubmit);

    function clickSubmit (e){
        e.preventDefault();

        let isValid = true;
        let userNameField = document.getElementById('username');
        let emailField = document.getElementById('email');
        let passwordField = document.getElementById('password');
        let confirmPasswordField = document.getElementById('confirm-password');
        let companyNumberField = document.getElementById('companyNumber');
        let checkBox = document.getElementById('company');

        if (!usernameRegex.test(userNameField.value)){
            userNameField.style.borderColor = 'red';
            isValid = false;
        }

        if (!emailRegex.test(emailField.value)){
            emailField.style.borderColor = 'red';
            isValid = false;
        }

        if (!passwordRegex.test(passwordField.value)){
            passwordField.style.borderColor = 'red';
            isValid = false;
        }

        if (!passwordRegex.test(confirmPasswordField.value) || passwordField.value != confirmPasswordField.value){
            confirmPasswordField.style.borderColor = 'red';
            isValid = false;
        }

        if (document.getElementById('companyInfo').style.display == 'block'){
            if (!companyNumberRegex.text(companyNumberField.value)){
                companyNumberField.style.borderColor = 'red';
                isValid = false;
            }
        }

        if (isValid == true){
            document.getElementById('valid').style.display = 'block';
        } else {
            document.getElementById('valid').style.display = 'none';
        }
    }
}
