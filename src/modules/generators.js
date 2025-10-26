const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const symbols = ',.;~^[]{}!@#$%*()_+=-';

const generateUpper = () => String.fromCharCode(rand(65, 91));
const generateLower = () => String.fromCharCode(rand(97, 122));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const generateSymbols = () => symbols[rand(0, symbols.length)];

export default function generatePassword(amount, upper, lower, numbers, symbols){
    const passwordArray = [];
    amount = Number(amount);

    for(let i=0; i < amount; i++) {
        upper && passwordArray.push(generateUpper());
        lower && passwordArray.push(generateLower());
        numbers && passwordArray.push(generateNumber());
        symbols && passwordArray.push(generateSymbols());
    }
    return passwordArray.join('').slice(0, amount);
}

 