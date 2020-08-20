"use strict";

var daysOfTheWeek =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// var indexForToday = 4;
// var today = daysOfTheWeek[indexForToday];
// var today = daysOfTheWeek[4];
// console.log(today);
//
var students = [
    'Armando Salazar',
    'Audie Brattin',
    'Blossom Perez',
    'Caleb Wheeler',
    'Chris Parker',
    'Cory Holley',
    'Cruzanio Villarreal',
    'Damien Salazar',
    'Donelle Harris',
    'Eric Rencehausen',
    'Li Wang',
    'Michael Satterfield',
    'Michael Troia',
    'Patrick Larkin',
    'Roberto Cuyar',
    'Rocco Paccione',
    'Ryan Kendall',
    'Sahara Tijol',
    'Sedgwick House'
];

// for(var i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }
//same as above 'for'
// for(var i = 0; i < students.length; i++) {
//     console.log((i+1) + ': ' + students[i]) ;
// }

// students.forEach(function (student, index, students){
//     console.log((index + 1) + ': ' + student);
// })
//
// for (var i = 0; i < daysOfTheWeek.length; i++){
//     console.log(daysOfTheWeek[i]);
// }

// var callback = function (item, index, array){
//     console.log((index + 1) + ': ' + item);
// }
//
// students.forEach(callback)
// daysOfTheWeek.forEach(callback)

var story = "The night was cold and dark. Everyone was inside but a lonely dog."

var words = story.split(" ")

console.log(story);
console.log(words)