const readline = require('readline-sync');

// let myName = readline.question('Your name: ');
// let myAge = readline.question('Your age: ');
// console.log(`${myName}, ${myAge}`);

// let nextYearAge = Number(myAge) + 1;
// console.log(nextYearAge);

let arrivalTime = readline.question('arrivalTime: ');
let isHeOnTime = (arrivalTime == 7);

//Comparision operator: >, <, >=, <=, ==, ===, !=, !==
if (isHeOnTime) {
    console.log('Let\'s talk!');
} else {
    console.log('Write a letter');
}

// !true > false
if (!isHeOnTime) {
    console.log('Write a letter');
    if(somethingElse){
        //....
    }else{
        if(anotherThing){
            //...
        }
    }
} else {
    console.log('Let\'s talk!');
}

//Ternary operator --> No use nested operator
let message = '';
message = isHeOnTime ? 'Let\'s talk!' : 'Write a letter';
console.log(`Message: ${message}`)