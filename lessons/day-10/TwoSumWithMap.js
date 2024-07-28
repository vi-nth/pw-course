/**
 * Two sum
 * [3,7,22,1] target number: 8 ->[index1, index2]-> [1, 3]
 * Assumptions: Only once indice existing
 */


//On^2
const array = [3, 7, 22, 11, 1];
const arrayLength = array.length;
const targetNumber = 8;

let indice = getTwoSum(array, arrayLength);
let indiceByMap = getTwoSumByMap(array, arrayLength);

console.log(indiceByMap);

function getTwoSum(array, arrayLength) {
    for (let i = 0; i < arrayLength; i++) {
        let firstNum = array[i];
        for (let j = 1; j < array.length; j++) {
            if (firstNum + array[j] == 8) {
                return [i, j];
            }
        }
    }
    return [];
}

//Using map ->On
// const map = [3, 7, 22, 11, 1];

function getTwoSumByMap(array, arrayLength) {
    let numMap = new Map();
    for (let i = 0; i < arrayLength; i++) {
        const firstNum = array[i];
        const lookingNum = targetNumber - firstNum;
        if (numMap.has(lookingNum)) {
            return [numMap.get(lookingNum), i];
        }
        numMap.set(firstNum, i)

    }
    return [];
}






