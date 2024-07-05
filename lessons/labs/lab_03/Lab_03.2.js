// Minimum: 1
// Maximum: 5

let intArr = [1, 2, 3, 4, 5];
let minNumber = intArr[0];
let maxNumber = intArr[0];

for (let index = 0; index < intArr.length; index++) {
    let indexNumber = intArr[index];
    minNumber = minNumber < indexNumber ? minNumber: indexNumber
    maxNumber = maxNumber > indexNumber ? maxNumber : indexNumber;
}
console.log(`Minimum: ${minNumber}, Maximum: ${maxNumber}`);

