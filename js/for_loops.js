"use strict"


function returnMultiplicationTable(input) {
var total = '';
    for (var i = 1 ; i <= 10; i++) {
        total += (input + " x " + i + " = " + (input * i));
    if(i !== 10) {
        total += '\n';
    }
    }
    return total;
}

returnMultiplicationTable();

// var random = Math.floor((Math.random() * 100) + 1)
//
// function returnEvenOddMessage(input) {
//      for (var i = 1; i < 100; i++){
//          if(i % 2 === 0){
//              return input + ' is an Even number'
//          }
//          else {
//              return input + " is an Odd number"
//          }
//      }
// }
// returnEvenOddMessage(random);


var random2 = Math.floor((Math.random() * 200) + 1)

function returnTenEvenOddMessage(input) {

    for (var i = 1; i > 20 , i <= 200; i++){
        if(i % 2 === 0){
            return (input + ' is even');
        }
        else {
            return (input + " is odd")
        }

    }
}
console.log(returnTenEvenOddMessage(random2));

