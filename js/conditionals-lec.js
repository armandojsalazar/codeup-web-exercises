"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
/*TODO Together: Show a specific navbar if user is admin
var isAdmin = false;
if(birthday) {
    send coupon
}


TODO Together: Send a 20% off coupon if its users birthday
var birthday = true;

TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRainy = true;

TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var itemCost = 300;
var currentBalance = 200;



TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives = 10;
if(numberOfLives === 0) {
    alert('Sorry, Game Over!);
}

TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
// var weather = "snowing"
// if(weather === "snowing") {
//     alert("It's Snowing!");
}
TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var numberInput = 5;
if(numberInput > 10) {
    alert(true);
}

var currentWeather = "raining"

function checkedWeather(weather) {
    console.log(weather);
    if(weather === "snowing");
    alert("It's Snowing!");
}
TODO: EXTRA BONUS - Refactor each of the previous statements as functions.*/





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
// var isAdmin = false;
// if(isAdmin) {
//     alert("Showing Admin navbar")
// } else{
//     alert("Showing non-Admin navbar")
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
// var isRainy = true;
// if(isRainy) {
//     alert("It's Raining!");
// } else {
//     alert("Have a nice day!");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
// var numberOfLives = 5;
// if(numberOfLives === 0) {
//     alert("Sorry, Game Over");
// }
// else {
//     alert("Congrats! You get to move on to the next level!");
// }


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var weather = "snowing";
// if (weather === "snowing") {
//     alert("It's Snowing!");
// }
// else {
//     alert("Check back later for more detail.");
// }


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 1;
// if (numberInput > 10) {
//     alert(true);
// }
// else {
//     alert("the number is less than 10")
// }
//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// function checkIfGameIsOver(lives) {
//     if (lives <= 0) {
//         alert("Game Over Noob!");
//     }else {
//         alert("Next Level Unlocked Champ!");
//     }
// }
//
// checkIfGameIsOver(-1)

//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// function areYouOldEnough() {
//     var age = confirm("Are you at least 13 years old?");
//     if (age) {
//         alert("You may proceed");
//     } else {
//         alert("SORRY YOU ARE NOT ABLE TO PROCEED")
//     }
// }
// areYouOldEnough();



// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
/*var weather = "snowing";



//TODO Together: refactor the above statement as a function
var checkWeather = function(weather) {
    console.log(weather)
    if (weather === "snowing"){
        alert("It's Snowing!")
}
else{
}
}*/


//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.


// function trafficLightColor(color) {
//     if(color === "green") {
//         alert("The light is Green, keep going");
//     }
//     else if (color === "yellow") {
//         alert("Be Cautions! The light is Yellow! Prepare to slow down to a stop.");
//     }
//    else if (color === "red"){
//        alert("Stop! Light is Red!");
//     }
//    else{
//        alert("You're at a Stop Sign! Stop then go!");
//     }
//
// }
// trafficLightColor("orange");



// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
// var age = 15;
// var hasPermit = true;
// if(age < 15) {
//     alert("You are not eligible for a learner's permit.");
// }
// else {
//     if(age === 15) {
//         alert("You are eligible for a learner's permit.");
//     }
//     else if(age >= 16 && hasPermit) {
//         alert("You are eligible for a license.");
//     }
//     else if(age >= 16 && !hasPermit) {
//         alert("You are not eligible for a license.");
//     }
// }




// ================ TERNARY STATEMENT ================
//TODO Together: Regular way - rewrite as ternary

// var message;
// var success = true;

// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);

//WRITE YOUR TERNARY STATEMENT HERE!
// (success) ? message = "Operation was successful." : message = "Oops, something went wrong.";
// console.log(message);
//  var message = (success) ? "Operation was successful" : "Oops, something went wrong";
//
// console.log(message);

//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;
//
// // if(weather === "rainy"){
// //    weatherMessage = "It's raining!";
// // } else {
// //     weatherMessage = "Have a nice day!";
// // }
// // console.log(weatherMessage);
//
// weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day!";
// console.log(weatherMeassage);

//WRITE YOUR TERNARY STATEMENT HERE!

// var lives = 6;
// var checkIfGameIsOver;
//
// checkIfGameIsOver = (lives) ? "Next Level Unlocked" : "Sorry game over";
// console.log(checkIfGameIsOver);

// =============== SWITCH STATEMENT ================
//TODO Together:

// switch(value) {
//     case 0:
//         // code here for case 0
//         break;
//     case 1:
//         // code here for 1
//     default:
//         // default case is similar to an else
//
// }

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);

// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else if (pizzaPreference === "ham") {
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

// switch(pizzaPreference) {
//     case "pinapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("just plain cheese? okay...");
//         break;
//     case "ham":
//         alert("Ham is easy to spell and awesome!");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }



//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
var weather = prompt("What's the weather like today? i.e. sunny, raining, snowing, foggy, cloudy")
console.log(weather);

switch(weather) {
    case "raining":
        alert("Don't forget an umbrella! Stay Dry!");
        break;
    case "sunny":
        alert("Bring your sun glasses and sunblock. Stay hydrated!");
        break;
    case "snowing":
        alert("Bring your jacket and watch for ice! Stay Warm!");
        break;
    case "foggy":
        alert("Put your headlights and fog lights on. Be safe and aware!");
        break;
    case "cloudy":
        alert("Hope you're not living off solar panels. No energy for you today!");
        break;
    default:
            alert(weather + " weather is my favorite type of weather!");
}
//TODO: Rewrite the intersection function from earlier as a switch statement.

function traffic2(color) {
    var color = prompt("What color is the light?")
    switch (color) {
        case "green":
            alert("You may go");
            break;
        case "yellow":
            alert("Slow down to a stop");
            break;
        case "red":
            alert("Stop, do not proceed!");
            break;
        default:
            alert("Light is not working, come to a complete stop and proceed with caution!");
            break;
    }
}
traffic2();

// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

