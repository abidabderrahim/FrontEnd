const rangeBtns = document.querySelectorAll(".rangeBtn");
const colorDisplay = document.querySelector(".colorDisplay");
const copyBtn = document.querySelector("#colorCode");
const copyCodeBtn = document.querySelector("#copyBtn");
const body = document.querySelector("body");
let colorCode;

rangeBtns.forEach((rangeBtn) => {
    rangeBtn.addEventListener("input", () => {
        updateColorDisplayed();
    });
});

copyCodeBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode + ';');
});

const updateColorDisplayed = () => {

    colorCode = "rgb(";
    colorCode += rangeBtns[0].value;
    colorCode += ", ";
    colorCode += rangeBtns[1].value;
    colorCode += ", ";
    colorCode += rangeBtns[2].value;
    colorCode += ")";

    copyBtn.textContent = colorCode;
    colorDisplay.style.backgroundColor = colorCode;
    body.style.backgroundColor = colorCode;
}

updateColorDisplayed();
