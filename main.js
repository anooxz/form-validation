var inputName = document.getElementById("name")
var inputEmail = document.getElementById("email")
var inputPassword = document.getElementById("password")
var phoneNumber = document.getElementById("pnumber")
var cpassword = document.getElementById("cpassword")
var submitBtn = document.getElementById("SubmitBtn")

var nameError = document.getElementById("nameError")
var emailError = document.getElementById("emailError")
var passError = document.getElementById("passwordError")
var phError = document.getElementById("phError")
var cpassError = document.getElementById("cpasswordError")

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

    if(cpassword.value !== inputPassword.value){
        cpassword.style.border = "2px solid red";
        cpassError.textContent = "Passwords do not match"
        isValid = false
    } 
    else {
        cpassword.style.border = "";
        cpassError.textContent = ""
    }
    

    if(phoneNumber.value.length !==10){
        phoneNumber.style.border = "2px solid red";
        phError.textContent="Enter 10 Numbers"
        isValid=false
    }
     else {
        phoneNumber.style.border = "";
        phError.textContent = ""
    }
    

    submitBtn.disabled = !isValid
}


inputName.addEventListener("input", validateForm)
inputEmail.addEventListener("input", validateForm)
inputPassword.addEventListener("input", validateForm)
phoneNumber.addEventListener("input", validateForm)
cpassword.addEventListener("input",validateForm)

submitBtn.addEventListener("click", function () {
    alert("Registration Successful!")
})

