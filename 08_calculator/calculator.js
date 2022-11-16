const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(inputArray) {
  let sumTotal = 0;
  inputArray.forEach(element => {
    sumTotal += element;
  });
  return sumTotal;
};

const multiply = function(inputArray) {
  let multipliedTotal = 1;
  inputArray.forEach(element => {
    multipliedTotal *= element;
  });
  return multipliedTotal;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  if(number === 0) {return 1};
  let factorialNumber = number;
  for(let i = number - 1; i >= 1; i--) {
    factorialNumber *= i ;
  }
	return factorialNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
