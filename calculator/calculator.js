function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	//  return array.reduce(function(total, number) { return total + number},0);
	return array.reduce((total, number) => total + number, 0);
}
function multiply(array) {
	return array.length ?
		array.reduce((total, number) => total * number) : 0;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	if (a == 0) return 1;
	let total = 1;
	for (let i = 1; i <= a; i++) {
		total *= i;
	} return total;

}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}