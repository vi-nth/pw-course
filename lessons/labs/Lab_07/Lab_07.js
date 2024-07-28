/**
 *   Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
*/

let givenString = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah";
givenString = givenString.replaceAll(",", "");

const givenArray = Array.from(givenString.split(" "));
const arraySize = givenArray.length;

let countWords = countWordsInString(givenArray);
console.log("Result: " + Array.from(countWords.entries()));

function countWordsInString(givenArray) {
    const wordMap = new Map();
    for (index = 0; index < arraySize; index++) {
        let count = 1;
        let value = givenArray[index];

        if (wordMap.has(value)) {
            let numberOfTheSameWord = parseInt(wordMap.get(value)) + 1;
            wordMap.set(value, numberOfTheSameWord);
        } else {
            wordMap.set(value, count);
        }
        console.log("Map: " + Array.from(wordMap));
    }

    return wordMap;
}