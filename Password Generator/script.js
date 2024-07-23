const genBtn = document.querySelector("#genBtn");
const inputField = document.querySelector("#passwordInput");
const copyClipboard = document.querySelector("#svgClipboard");
const passwordLengthText = document.querySelector("#passLengthText");
const passwordLengthInput = document.querySelector("#passLengthInput");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

const generatePassword = () => {
    let genPassword = '';
    const length = passwordLengthInput.value;
    const allowedFunctions = checkBoxes();
    if (allowedFunctions.length === 0) {
        alert("Please select at least one option.");
        return;
    }
    for (let i = 0; i < length; i++) {
        const randomFunctionIndex = Math.floor(Math.random() * allowedFunctions.length);
        const randomFunction = allowedFunctions[randomFunctionIndex];
        genPassword += randomFunction();
    }
    inputField.value = genPassword;
}

generatePassword();

passwordLengthInput.addEventListener("input", () => {
    passwordLengthText.textContent = passwordLengthInput.value;
});

genBtn.addEventListener("click",generatePassword);

copyClipboard.addEventListener("click", () => {
    navigator.clipboard.writeText(inputField.value);
    alert("Password copied to clipboard.");
});

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbolLetter = '~`!#$%^&*()-_+|?.,< >"{}=/';
	return symbolLetter[Math.floor(Math.random() * symbolLetter.length)];
}

function checkBoxes() {

    const allowedFunctions = [];

    if(uppercase.checked) {
        allowedFunctions.push(getRandomUpper);
    }

    if(lowercase.checked) {
        allowedFunctions.push(getRandomLower);
    }

    if(numbers.checked) {
        allowedFunctions.push(getRandomNumber);
    }

    if(symbols.checked) {
        allowedFunctions.push(getRandomSymbol);
    }

    return allowedFunctions;
}