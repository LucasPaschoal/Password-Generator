import generatePassword from "./generators";

const generatedPassword = document.querySelector('.password');
const amountCharacters = document.querySelector('.amount-characters');
const checkUpper = document.querySelector('.check-upper');
const checkLower = document.querySelector('.check-lower');
const checkNumbers = document.querySelector('.check-numbers');
const checkSymbols = document.querySelector('.check-symbols');

const btnGenerate = document.querySelector('.btn-generate');

export default () => {
    btnGenerate.addEventListener('click', () => {
        console.log(checkUpper);
        generatedPassword.innerHTML = generate();       
    });
}

function generate() {
    const password = generatePassword(
        amountCharacters.value,
        checkUpper.checked,
        checkLower.checked,
        checkNumbers.checked,
        checkSymbols.checked
    );

    return password || 'Nothing was selected';
}