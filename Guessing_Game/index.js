#! /usr/bin/env node
import inquirer from "inquirer";
(async()=>{
let number = Math.floor(Math.random() * 10) + 1;
while (true) {
    const guessedNumber = await inquirer.prompt([{
            message: "Enter the number you've guessed",
            type: "number",
            name: "Guess"
        }]);
    if (isNaN(guessedNumber.Guess)) {
        console.log("Please enter a number, not an alphabet or special character");
    }
    else if (number === guessedNumber.Guess) {
        console.log("Congratulations, your guess is correct!");
        break;
    }
    else if (guessedNumber.Guess < number) {
        console.log("TOO LOW!!!");
    }
    else {
        console.log("TOO HIGH!!!");
    }
}
})();