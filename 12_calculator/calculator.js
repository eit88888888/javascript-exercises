const add = function(first, second) {
	return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arr) {
    return arr.reduce((accum, innit) => accum + innit, 0);
};

const multiply = function(arr) {
  return arr.reduce((accum, innit) => accum * innit);
};

const power = function(base, exponent) {
  let result = 1;
	for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(number) {
  let result = 1;
  if (number === 0) {
    return 1;
  }
	for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
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
