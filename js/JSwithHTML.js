"use strict";

var hello = "Hi!";
var myName = "Armando Salazar";
var trapped = "You\'re trapped in a console!";
var sentence = hello + " " + myName + ". " + trapped;
console.log(sentence);

// var surprise = "Hello!!!";
// alert(surprise);

var welcome = "Welcome to the Web Page!!! Enjoy your stay!!";
alert(welcome);

var question = "Do you want to continue?";
var answer = confirm(question);
console.log("answer= " + answer);

var question2 = "Please don't answer";
var answer2 = prompt(question2);
console.log(answer2);
console.log(typeof answer2);

var question3 = "What is your favorite number?";
var answer3 = prompt(question3);
console.log(answer3);
console.log(typeof answer3);

var question4 = "If you had to choose your favorite dog, which breed would it be?";
var answer4 = prompt(question4);
console.log(answer4);
