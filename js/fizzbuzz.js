/*function fizzbuzz(num) {
    // var fizzbuzz = function (num){
    for(let i = 1;
        i <= num;
        i++){
        if(i % 15 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i);
        }
    }
}*/


/*var i = 1;
while (i <= num) {
    if (i % 15 === 0) {
    console.log("fizzbuzz");
    }
    else if (i % 3 === 0) {
    console.log("fizz");
    }
    else if (i % 5 === 0){
    console.log("buzz");
    } else {
    console.log(i);
    }i++;
}*/

// fizzbuzz(30)


// used the gs6 to refactor the fizz buzz
const fizzBuzz = (num = 30) => {
    for(let i = 1; i <=num; i++) {
        if (i % 15 === 0)
            console.log(`fizzbuzz`);
        else if (i % 3 === 0)
            console.log(`fiz`);
        else if (i % 5 === 0)
            console.log(`buzz`);
        console.log(`${i}`)
    }
};
fizzBuzz(50);
fizzBuzz();


/*
$().ready(function(){
    $('#button').click(function (){
        var num = $('#input').val();
        for(let i = 1;
            i <= num;
            i++){
            if(i % 15 === 0){
                $('#output').append('FizzBuzz<br>');
            }else if(i % 3 === 0) {
                $('#output').append('Fizz<br>');
            } else if (i % 5 === 0){
                $('#output').append('Buzz<br>');
            }else{
                $('#output').append(i + '<br>');
            }
        }
        // $('#output').append('')
    });
});*/
