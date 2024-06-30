const readline = require('readline-sync');

//Lab_2.1
let height = readline.question('Your height: ');
let weight = readline.question('Your weight: ');

let BMI = weight / (height * 2);
console.log(`BMI: ${BMI}`);

/**
 * First approach
 */
if (BMI < 18.5) {
    console.log('Status: Underweight');
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log('Status: Normalweight');
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log('Status: Overweight');
} else {
    console.log('Status: Obesity');
}

/**
 * Second approach
 */
if (BMI <= 24.9) {
    let status = BMI < 18.5 ? "Underweight" : "Normalweight";
    console.log("Status: " + status);
} else if (BMI <= 29.9) {
    console.log('Status: Overweight');
} else {
    console.log('Status: Obesity');
}

