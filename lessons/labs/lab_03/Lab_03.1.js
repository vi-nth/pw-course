// Even numders: 2
// Odd numbers: 3

let intArr = [1, 2, 3, 4, 5];

let evenArrayNumbers = new Array();
let oddArrayNumbers = new Array();

for (let indexNumber = 0; indexNumber < intArr.length; indexNumber++) {
    let typeNumber = intArr[indexNumber];
    typeNumber % 2 === 0 ? evenArrayNumbers.push(typeNumber) : oddArrayNumbers.push(typeNumber);
}

let countEvenNumbers = evenArrayNumbers.length;
let countOddNumbers = oddArrayNumbers.length;

console.log(`Event Numbers: ${countEvenNumbers}, Odd Numbers: ${countOddNumbers}`)
