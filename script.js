let form = document.getElementById("form");
let errorBox = document.getElementById("errorBox");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("password2").value;

    //check username empty
    if (username === "") {
        showError("Username cannot be empty");
        return;
    }
    //check email format
    if(email === ""){
        showError("Email cannot be empty");
        return;
    }
    //email validity
    if (!email.includes("@")) {
        showError("Please enter a valid email address");
        return;
    }
    // check password empty
    if (password === "") {
        showError("Password cannot be empty");
        return;
    }
    //check password length
    if (password.length < 6) {
        showError("Password must be at least 6 characters long");
        return;
    }
    //check confirm password match
    if (password !== confirmPassword) {
        showError("Passwords do not match");
        return;
    }
    //if all validations pass
    showError("");
    alert("Form submitted successfully!");
});

function showError(message) {
    errorBox.innerText = message;
}