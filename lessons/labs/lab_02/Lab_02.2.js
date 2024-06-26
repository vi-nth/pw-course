//Lab_2.2
const readline = require('readline-sync');
let numberInput = readline.question('Number input: ');

/**
 *  Using 4/2
 */
let result = numberInput / 2
console.log(`Result: ${result}`);

if (Number.isInteger(result)) {
    console.log('Even number (so chan)');
} else {
    console.log('Odd number (so le)');
}

/**
 * Using 4%2
 */

result = numberInput % 2
console.log(`Result: ${result}`);

if (result === 0) {
    console.log('Even number (so chan)');
} else {
    console.log('Odd number (so le)');
}

if (result !== 0) {
    console.log('Odd number (so le)');
} else {
    console.log('Even number (so chan)');
}