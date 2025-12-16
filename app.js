const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const passwordField = document.getElementById("password");
const message = document.getElementById("message");

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {
    const length = parseInt(lengthSlider.value);
    const hasUpper = document.getElementById("uppercase").checked;
    const hasLower = document.getElementById("lowercase").checked;
    const hasNumber = document.getElementById("numbers").checked;
    const hasSymbol = document.getElementById("symbols").checked;

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]|<>?";

    let characters = "";

    if (hasUpper) characters += upper;
    if (hasLower) characters += lower;
    if (hasNumber) characters += numbers;
    if (hasSymbol) characters += symbols;

    if (characters === "") {
    passwordField.value = "";
    message.textContent = "Select at least one option.";
    message.style.color = "red";
    return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
    }

    passwordField.value = password;
    message.textContent = "Password generated!";
    message.style.color = "green";
}

function copyPassword() {
    if (passwordField.value) {
    navigator.clipboard.writeText(passwordField.value).then(() => {
        message.textContent = "Copied to clipboard!";
        message.style.color = "green";
    });
    }
}