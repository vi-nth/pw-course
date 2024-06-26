const readline = require('readline-sync');

//Lab_2.3
let height = readline.question('Your height: ');
let weight = readline.question('Your weight: ');

let BMI = weight / (height * 2);
console.log(`BMI: ${BMI}`);


if (BMI < 24.9) {
    let status = BMI < 18.5 ? "Underweight" : "Normalweight";
    let message = BMI < 18.5 ? "You should crease weight at least: " + (18.5 - BMI) : "Your weight is in the good range";
    console.log("Status: " + status + "\n" +"Message: "+ message )
} else  {
    let status = BMI >= 30 ? "Obesity" : "Overweight";
    console.log("Status: " + status);
    console.log("You should decrease weight by about: " + (BMI - 24.9));
}