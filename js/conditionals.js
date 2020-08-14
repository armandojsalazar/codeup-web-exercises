"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColors(color) {
    if(color === "blue") {
        return "Blue Blue Blue";
    }
    else if(color === "red") {
        return "Red is Red"
    }
else {
        return "That's not a color!"
    }
}

console.log(analyzeColors("red"))


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
/*function analyzeColor(randomColor) {
    if(randomColor === "red") {
        return "Red is the color of strawberries.";
    }
    else if(randomColor ==="orange") {
        return "Nothing rhymes with Orange.";
    }
    else if(randomColor ==="yellow") {
        return "Yellow is so mellow";
    }
    else if (randomColor ==="green") {
        return "The Hulk is the greenest Avenger!";
    }
    else if(randomColor ==="blue") {
        return "The blue Power Ranger was my favorite!";
    }
    else if(randomColor ==="indigo") {
        return "What color is Indigo???";
    }
    else if(randomColor ==="violet") {
        return "You say Violet, I say Purple!";
    }
    else {
        return colors + " is a terrible color!";
    }
}*/
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var analyzeColorSwitch = function (color) {
//     switch (randomColor) {
//         case "blue":
//             alert("This is Blue");
//             break;
//         case "red":
//             alert("Its Chose Red");
//             break;
//         case "orange":
//             alert("Its chose orange");
//             break;
//         case "yellow":
//             alert("IT CHOSE YELLOW");
//             break;
//         case "indigo":
//             alert("Indigo? Really?");
//             break;
//         case "violet":
//             alert("It chose Purple.... wait I mean Violet");
//             break;
//         case "green":
//             alert("'Green Green Machine!!!' yelled Hulk!");
//             break;
//         default:
//             alert("you have no more colors");
//     }
// }
// analyzeColorSwitch("yellow")
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/*var color = prompt("What's your favorite color?")
alert(analyzeColor(color));*/
// function analyzeColor(color) {
//     if(color === "red") {
//         alert("Red is the color of strawberries.");
//     }
//     else if(color ==="orange") {
//         alert("Nothing rhymes with Orange.");
//     }
//     else if(color ==="yellow") {
//         alert("Yellow is so mellow");
//     }
//     else if (color ==="green") {
//         alert("The Hulk is the greenest Avenger!");
//     }
//     else if(color ==="blue") {
//         alert("The blue Power Ranger was my favorite!");
//     }
//     else if(color ==="indigo") {
//         alert("What color is Indigo???");
//     }
//     else if(color ==="violet") {
//         alert("You say Violet, I say Purple!");
//     }
//     else {
//         alert(color + " is a terrible color!");
//     }
// }
// console.log(analyzeColor(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber, totalAmount) {
//     if (luckyNumber === 1){
//         return "Congratulations! You receive a 10% Discount! Your total price is: $" + (totalAmount - (totalAmount * .1));
//     }
//     else if (luckyNumber === 2) {
//         return "Congratulations! You receive a 25% Discount! Your total price is: $" + (totalAmount -(totalAmount * .25));
//     }
//     else if(luckyNumber === 3){
//         return "Congratulations! You receive a 35% Discount! Your total price is: $" + (totalAmount - (totalAmount * .35));
//     }
//     else if(luckyNumber === 4){
//         return "Congratulations! You receive a 50% Discount! Your total price is: $" + (totalAmount * .50);
//     }
//     else if(luckyNumber === 5) {
//         return "Congratulations! You receive a 100% Discount! Your don't have to pay for anything";
//     }
//     else{
//        return "Sorry, but you didn't receive a discount. Your total price is: $" + totalAmount;
//     }
// }

// console.log(calculateTotal(3,100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalAmount = prompt("What's your total price?")

function calculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 1){
        alert("Your Lucky Number is: " + luckyNumber + ". Your price before discount is: " + totalAmount + ". Congratulations! You receive a 10% Discount! Your new price is: $" + (totalAmount(totalAmount * .1)));
    }
    else if (luckyNumber === 2) {
         alert("Your Lucky Number is: " + luckyNumber + ". Your price before discount is: " + totalAmount + ". Congratulations! You receive a 25% Discount! Your new price is: $" + (totalAmount(totalAmount * .25)));
    }
    else if(luckyNumber === 3){
         alert("Your Lucky Number is: " + luckyNumber + ". Your price before discount is: " + totalAmount + ". Congratulations! You receive a 35% Discount! Your new price is: $" + (totalAmount - (totalAmount * .35)));
    }
    else if(luckyNumber === 4){
         alert("Your Lucky Number is: " + luckyNumber +". Your price before discount is: " + totalAmount + ". Congratulations! You receive a 50% Discount! Your new price is: $" + (totalAmount * .50));
    }
    else if(luckyNumber === 5) {
         alert("Your Lucky Number is: " + luckyNumber +". Your price before discount is: " + totalAmount + ". Congratulations! You receive a 100% Discount! Your don't have to pay for anything");
    }
    else{
         alert("Your Lucky Number is: " + luckyNumber + ". Sorry, but you didn't receive a discount. Your total price is: $" + totalAmount);
    }
}
calculateTotal(luckyNumber, totalAmount);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function playAGame(){
    var playGame = confirm("Would you like to play a game?");
    if (playGame) {
        var userNumber = prompt("Please enter a whole number without decimals:")
        if(isNaN(userNumber)){
            alert("That was not a number. Refresh Screen and try again.")
        } else {
            var evenOdd = (userNumber % 2 === 0) ? "Your number is even." : "Your number is odd."
            var positiveNegative = (userNumber > 0) ? "Your number is positive" : "Your number is negative"
            alert(evenOdd)
            alert(positiveNegative)
            alert("Your number plus 100 is " + (parseInt(userNumber) + 100))
        }
    } else alert("Party pooper!")
}
playAGame();