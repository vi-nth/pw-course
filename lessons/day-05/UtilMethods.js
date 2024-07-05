// Declaration: function expression
const getWeight = function (currentBMI, standardBMI, height) {
    const weight = (currentBMI - standardBMI) * (height * height);
    return Math.abs(weight);
}

const getHeight = function(){
    console.log("Hello!")
}

// Import
module.exports = { getWeight, getHeight};