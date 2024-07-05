// Merge 2 SORTED integer array into one SORTED array

// Array 01: [1, 12, 16, 28, 34]
// Array 02: [1, 13, 16, 27, 99]

// Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]

let firstArray = [1, 12, 16, 28, 34];
let secondArray = [1, 13, 16, 27, 99];

let mergedArray = firstArray.concat(secondArray);
console.log(`Merged Array: ${mergedArray}`);

for (let index = 0; index < mergedArray.length; index++) {
    for (let i = 0; i < index; i++) {
        if (mergedArray[i + 1] < mergedArray[i]) {
            let currentValue = mergedArray[i];
            mergedArray[i] = mergedArray[i + 1];
            mergedArray[i + 1] = currentValue;
        }
    }
}

console.log(`New Array after sorting: ${mergedArray}`);
