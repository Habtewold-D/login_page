let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let repasError = document.getElementById("repas-error");
let errorDisplay = document.getElementById("error-display");

function validateName(){
    let name = document.getElementById('form-name').value;
    if (name.length == 0){
        nameError.style.visibility = "visible";
        nameError.innerHTML = "* name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.style.visibility = "visible";
        nameError.innerHTML = " * Write full name";
        return false;
    }
    nameError.style.visibility = "hidden";
    return true;
}
function validatePhone(){
    let phone = document.getElementById("form-phone").value;
    if (phone.length == 0){
        phoneError.style.visibility = "visible";
        phoneError.innerHTML = "* phone number is required";
        return false;
    }
    if (phone.length !== 10){
        phoneError.style.visibility = "visible";
        phoneError.innerHTML = "* phone number should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.style.visibility = "visible";
        phoneError.innerHTML = "* phone number is invalid";
        return false;
    }
    phoneError.style.visibility = "hidden";
    return true;
}
function validateEmail(){
    let email = document.getElementById("form-email").value;
    if(email.length == 0){
        emailError.style.visibility = "visible";
        emailError.innerHTML = "* email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
)){
        emailError.style.visibility = "visible";
        emailError.innerHTML = "* your email is invalid";
        return false;
    }
    emailError.style.visibility = "hidden";
    return true;
}
function validatePassword(){
    let password = document.getElementById("form-password").value;
    if(password.length == 0){
        passwordError.style.visibility = "visible";
        passwordError.innerHTML = "* password is required";
        return false;
    }
    if (password.length < 6){
        passwordError.style.visibility = "visible";
        passwordError.innerHTML = "* min length of password is 6";
        return false;
    }
    passwordError.style.visibility = "hidden";
    return true;
}

function validateRepas(){
    let repas = document.getElementById("form-repas").value;
    if(repas.length == 0){
        repasError.style.visibility = "visible";
        repasError.innerHTML = "* password is required";
        return false;
    }
    
    let password = document.getElementById("form-password").value; // Correctly get the original password value
    if (repas !== password) {
        repasError.style.visibility = "visible";
        repasError.innerHTML = "* passwords do not match";
        return false;
    }

    repasError.style.visibility = "hidden";
    return true;
   
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validatePassword() || !validateRepas()) {
        errorDisplay.style.visibility = "visible";
        errorDisplay.innerHTML = "* Please fix errors to submit";
        setTimeout(function() {
            errorDisplay.style.visibility = "hidden";
        }, 3000);
        return false; 
    }
    openPopup();
    return true;
}


let loginPage = document.getElementById("login-page");
let registrationPage = document.getElementById("registration-page");

function showRegistrationPage(event) {
    event.preventDefault(); 
    registrationPage.style.display = "block";
    loginPage.style.display = "none";
}

function showLoginPage(event) {
    event.preventDefault();
    registrationPage.style.display = "none";
    loginPage.style.display = "block";
 }

 let Popup = document.getElementById("popup");

  function openPopup(){
    Popup.classList.add("open-popup");
    registrationPage.style.display = "none";
    loginPage.style.display = "none";
  }
  function closePopup(){
    Popup.classList.remove("open-popup")
  }