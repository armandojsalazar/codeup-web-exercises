"use strict";

console.log("Hello from External JS!");


alert("Welcome to my web page!");


// var favColor = prompt("Whats your favorite color?");
// alert("Wow! " + favColor + " is my favorite color too!");
// console.log("Their favorite color is: " + favColor);
//
// var mermaid = prompt("How many days did you rent the Little Mermaid?");
// var bear = prompt("How many days did you rent the Brother Bear?");
// var hercules = prompt("How many days did you rent the Hercules");
// var rentalCost = confirm("Rentals are $3 a day.");
// var totalCost = 3 * (Number(mermaid) + Number(bear) + Number(hercules));
// alert("Your total cost is $" + totalCost)
//
// console.log(mermaid, bear, hercules, rentalCost, totalCost);

// var googleRate = 400;
// var amazonRate = 380;
// var facebookRate = 350;
// var googleHours = prompt("How many hours did you work for Google this week?")
// var amazonHours = prompt("How many hours did you work for Amazon this week?")
// var facebookHours = prompt("How many hours did you work for Facebook this week?")
// var weeksPay = ((Number(googleHours) * googleRate) + (Number(amazonHours) * amazonRate) + (Number(facebookHours) * facebookRate))
// console.log("You made $" + weeksPay + " this week!")

var classCapacity = 30;
var registeredStudents = 20;
var classConflicts = true;
var canEnroll = (classCapacity > registeredStudents) && !classConflicts;
alert("Student able to register for class: " + canEnroll);

var offerNotExpired = confirm("Press ok if offer not expired.");
var numberItems = prompt("how many items are you purchasing?");
var premiumMembership = confirm("Press ok if you're a Premium Member.");
var offerApplied = (numberItems > 2 || premiumMembership) && offerNotExpired;
confirm("Offer applied: " + offerApplied);
console.log("Offer applied: " + offerApplied);