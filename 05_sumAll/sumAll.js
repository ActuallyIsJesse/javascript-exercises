const sumAll = function (num1, num2) {
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) || num1 === NaN || num2 === NaN) {
        return "ERROR"
    }
    const rangeLow = num1 <= num2 ? num1 : num2;
    const rangeHigh = num1 >= num2 ? num1 : num2;
    let finalSum = rangeLow - 1;
    for (let i = rangeLow; i <= rangeHigh; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
