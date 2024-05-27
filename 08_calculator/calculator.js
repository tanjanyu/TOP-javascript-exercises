const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, number) => (total += number), 0);
};

const multiply = function(array) {
  return array.reduce((total, number) => (total *= number), 1);
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
	let total = 1;
  for (let i = 0; i < a; i++) {
    total *= i + 1;
  }
  return total;
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
