"use strict"

//returnMultiplicationTable Function
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

//returnEvenOddMessage Function
var random = Math.floor((Math.random() * 100) + 1)

function returnEvenOddMessage(input) {
     for (var i = 1; i < 100; i++){
         if(i % 2 === 0){
             return input + ' is an Even number'
         }
         else {
             return input + " is an Odd number"
         }
     }
}
returnEvenOddMessage(random);


//utility
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) +min;
}

//returnTenEvenOddMessage Function
function returnTenEvenOddMessage(input) {
var output = ''
    for (var i = 1; i < 10; i++) {
          output += returnEvenOddMessage(getRandomInt(20, 200))
        if(i > 9) output += '\n'
    }
    return output
}
returnTenEvenOddMessage();


//returnNumberSails Function
function returnNumberSail() {
    let output = ''
    for(var i = 1; i <= 9; i++) {
        for(var j = 1; j < i; j++) {
            output += i
        }
        if (i < 9)
            output +='\n'
    }
    return output
}
returnNumberSail()

//returnCountDownFrom100InFives Function


function returnCountDownFrom100InFives(input) {
    let output = ''
    for(let i = 100; i > 0; i -= 5){
        output += i
            if (i > 5)
                output += '\n'
    }
    return output
}
returnCountDownFrom100InFives()