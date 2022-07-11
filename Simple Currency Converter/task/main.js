const input = require('sync-input');

//Array to hold the name and value of each country
let countries = [
    {name: "USD", value: 1.0},
    {name: "JPY", value: 113.5},
    {name: "EUR", value: .89},
    {name: "RUB", value: 74.36},
    {name: "GBP", value: .75}
];

console.log("Welcome to Currency Converter!");

countries.forEach(function (countries) {
    console.log(`1 USD equals  ${countries.value} ${countries.name}`);
});

console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP");
console.log("Type the currency you wish to convert: USD");
//There are two ways to call the input function:
let userInput = input("To: ").toUpperCase();

//update userInput to hold values of the name and currency of the country
userInput = checkIfInArray(userInput, countries);

if (userInput == false) {

} else {
    let inputAmount = Number(input("Amount: "));
    if (inputAmount < 1) {
        console.log("The amount can not be less than 1");
    } else if (isNaN(inputAmount)) {
        console.log("The amount has to be a number")
    } else {
        doConversion(inputAmount, userInput);
    }
}

function checkIfInArray(userInput, countries) {
    for (let i = 0; i < countries.length; i++) {
        if (userInput === countries[i].name) {
            userInput = countries[i];
            break;
            //Tester
            //console.log(userInput.name + " " + userInput.value);
        } else if (i === 4 && userInput !== countries[4].name) {
            console.log("Unknown currency");
            return false;

        }
    }
    return userInput;
}

function doConversion(inputAmount, userInput) {
    let result = (inputAmount * userInput.value).toFixed(4);
    console.log(`Result: ${inputAmount} USD equals ${result + " " + userInput.name}`);

}

