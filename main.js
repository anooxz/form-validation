var inputName = document.getElementById("name")
var inputEmail = document.getElementById("email")
var inputPassword = document.getElementById("password")
var submitBtn = document.getElementById("SubmitBtn")

var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var passError = document.getElementById("passwordError")

function validateForm() {
    let isValid = true

    // Name Validation
    if (inputName.value.trim() === "") {
    inputName.style.border = "2px solid red";
    nameError.textContent = "Enter your Name";
    isValid = false;
} else {
    inputName.style.border = "";
    nameError.textContent = "";
}

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(inputEmail.value)) {
        inputEmail.style.border = "2px solid red";
        emailError.textContent = "Enter a valid Email"
        isValid = false
    } else {
        inputEmail.style.border = "";
        emailError.textContent = ""
    }

    // Password Validation
    if (inputPassword.value.length < 6 ) {
        inputPassword.style.border = "2px solid red";
        passError.textContent = "Password must be at least 6 characters"
        isValid = false
    } else {
        inputPassword.style.border = "";
        passError.textContent = ""
    }

    

    submitBtn.disabled = !isValid
}


inputName.addEventListener("input", validateForm)
inputEmail.addEventListener("input", validateForm)
inputPassword.addEventListener("input", validateForm)


submitBtn.addEventListener("click", function () {
    alert("Registration Successful!")
})

