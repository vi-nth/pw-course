let myNum1 = 1;
let myNum2 = 2;

// 1. Right operand and left Operand
let result = myNum1 + myNum2;
console.log('Result: ' + result);
console.log('Result: ', result);

// String literal, backstick
console.log(`Result: ${result}`);
result = 5/2;
console.log(`5/2 = ${result}`);
console.log(`10/3 = ${10/3}`);

// Rounding
let roundingNearest = Math.round(9/2);
console.log(`roundingNearest: ${roundingNearest}`);

let roundingFloor = Math.floor(9/2);
console.log(`roundingFloor: ${roundingFloor}`);

let roundingCeil = Math.ceil(9/2);
console.log(`roundingCeil: ${roundingCeil}`);

result = 10/3;
let toFixedNumber = result.toFixed(3);
console.log(`roundingCeil: ${toFixedNumber}`);


