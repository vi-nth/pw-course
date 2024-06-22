let a = 1;
let b = 2;

let c = ++a + b++;

/**
 * prefix > right operand > assignment > postfix
 * a = 2;
 * c = 4;
 * b = 3;
 * 2, 3, 4
 */

console.log(`a = ${a}, b = ${b}, c = ${c}`);