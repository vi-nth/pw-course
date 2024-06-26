const readline = require('readline-sync');

//Lab_2.3
let height = readline.question('Your height: ');
let weight = readline.question('Your weight: ');

let BMI = weight / (height * 2);
console.log(`BMI: ${BMI}`);

if (BMI < 18.5) {
    console.log("Status: Underweight");
    console.log("You should crease weight at least: " + (18.5 - BMI));
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Status: Normalweight");
    console.log("Your weight is in the good range");
} else {
    let status = BMI >= 30 ? "Obesity" : "Overweight";
    console.log("Status: " + status)
    console.log("You should decrease weight by about: " + (BMI - 25));
}