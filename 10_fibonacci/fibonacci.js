const fibonacci = function(input) {
numberSelection = parseInt(input);
if(numberSelection < 0) { return "OOPS"}
const sequenceLength = 30;
let fibonacciSequence = [];
for(let i = 0; i <= sequenceLength; i++) {
    if(i === 0) {
        fibonacciSequence[i] = 0;
        console.log(fibonacciSequence[i]);
    } else if(i === 1) {
        fibonacciSequence[i] = 1;
        console.log(fibonacciSequence[i]);

    } else {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        console.log(fibonacciSequence[i]);

    }
}
return fibonacciSequence[numberSelection];
};

// Do not edit below this line
module.exports = fibonacci;
