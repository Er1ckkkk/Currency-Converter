const input = require('sync-input');

//Array to hold the name and value of each country
let countries = [{name: "USD", value: 1.0}, {name: "JPY", value: 113.5}, {name: "EUR", value: .89}, {
    name: "RUB",
    value: 74.36
}, {name: "GBP", value: .75}];

console.log("Welcome to Currency Converter!");

countries.forEach(function (countries) {
    console.log(`1 USD equals  ${countries.value} ${countries.name}`);
});

loop(); //This does all the work!

//Functions
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

function askWhatToConvert() {
    console.log("What do you want to convert?")
    let fromInput = input("From: ").toUpperCase();
    fromInput = checkIfInArray(fromInput, countries);

    if (fromInput == false) return false;

    let toInput = input("To: ").toUpperCase();
    toInput = checkIfInArray(toInput, countries);

    if (toInput == false) {
        return false;
    } else {
        let amountInput = Number(input("Amount: "));
        if (amountInput < 1) {
            console.log("The amount can not be less than 1");
        } else if (isNaN(amountInput)) {
            console.log("The amount has to be a number");
        } else {
            doConversion(amountInput, fromInput, toInput);
        }
    }
}

function doConversion(inputAmount, fromAmount, toAmount) {
    let result = ((toAmount.value / fromAmount.value) * inputAmount).toFixed(4);
    console.log(`Result: ${inputAmount} ${fromAmount.name} equals ${result} ${toAmount.name}`);
}

function promptForAction() {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    return input();
}

function loop() {
    let test = promptForAction()
    if (test == 1) {
        askWhatToConvert();
        loop();
    } else if (test == 2) {
        process.exit();
    } else {
        console.log("Unknown input");
        loop();
    }
}
