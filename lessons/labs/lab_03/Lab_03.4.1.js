// Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]

const foo = [1, 12, 16, 28, 34];
const bar = [1, 13, 16, 27, 99];

fooLength = foo.length;
barLength = bar.length;

const mergedArray = [];
let fooPosition = 0;
let barPosition = 0;
let mergedPosition = 0;

for (; fooPosition < fooLength && barPosition < barLength; mergedPosition++) {
    const fooValue = foo[fooPosition];
    const barValue = bar[barPosition];
    if (fooValue <= barValue) {
        mergedArray[mergedPosition] = fooValue;
        fooPosition++;
    } else {
        mergedArray[mergedPosition] = barValue;
        barPosition++;
    }

}

for (; fooPosition < fooLength; fooPosition++, mergedPosition++) {
    mergedArray[mergedPosition] = foo[fooPosition];

}

for (; barPosition < barLength; barPosition++, mergedPosition++) {
    mergedArray[mergedPosition] = bar[barPosition];
}

console.log(`Merged: ${mergedArray}`)



