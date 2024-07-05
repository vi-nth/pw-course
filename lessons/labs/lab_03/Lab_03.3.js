// Input: [12, 34, 1, 16, 28]
// Expected output: [1, 12, 16, 28, 34]

let intArray = [12, 34, 1, 16, 28];
let total = intArray.length;


for (let index = 0; index < total; index++) {
    for (let i = 0; i < index; i++) {
        if (intArray[i+1] < intArray[i]) {
            let currentValue = intArray[i];
            intArray[i] = intArray[i + 1];
            intArray[i + 1] = currentValue;
        }
    }
}

console.log(`Sort min to max: ${intArray}`);





