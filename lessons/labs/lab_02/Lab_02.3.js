const readline = require('readline-sync');
// const UtilMethods = require('../../day-05/UtilMethods');
const {getWeight, getHeight} = require('../../day-05/UtilMethods')

//Lab_2.3
let height = readline.question('Your height: ');
let weight = readline.question('Your weight: ');

const currentBMI = weight / (height ** height);
console.log(`BMI: ${currentBMI}`);

const minBMI = 18.5;
const maxBMI = 24.9;
const overweightBMI = 29.9;


/**
 *  weight = BMI * (height**height)
 */

if (currentBMI < minBMI) {
    const gainingWeight = getWeight(currentBMI, minBMI, height);
    console.log(`You are underweight!. You must increase at least ${gainingWeight} (kg)`);
} else if (currentBMI <= 24.9) {
    console.log(`You are in the good health, keep it up!`);
} else if (currentBMI >= 29.9) {
    const losingWeight = getWeight(currentBMI, maxBMI, height);
    console.log(`You are overweight. You must decrease about ${losingWeight} (kg)`);
} else {
    const lossingWeight = getWeight(currentBMI, overweightBMI, height);
    console.log(`Your are obesity. You must decrease at least ${lossingWeight} (kg)`);
}

// function getWeight(currentBMI, standardBMI, height) {
//     const weight = (currentBMI - standardBMI) * (height * height);
//     return Math.abs(weight);
// }


