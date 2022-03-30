// **********************************
// Code Nation - wearecodenation.com
// Week 1 - Functions
// **********************************

//
// Example 1 - simple function
//

const pressGrindBeans = () => {
	console.log('Grinding for 20 seconds');
};

pressGrindBeans();

//
// Example 2 - on/off function using boolean
//

let coffeeIsGrinding = false;

const pressGrindBeans2 = () => {
	if (coffeeIsGrinding) {
		console.log('Stopping the grind');
		coffeeIsGrinding = false;
	} else {
		console.log('Grinding is about to begin');
		coffeeIsGrinding = true;
	}
};

pressGrindBeans2();

//
// Example 3 - using parameters + template literals
//

const cashWithdrawal = (amount, accnum) => {
	console.log(`Withdrawing ${amount} from account ${accnum}`);
};

cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);

//
// Example 4 - using parameters + passing variable data
//

let accnumber = 50449921;

const cashWithdrawal2 = (amount, accnum) => {
	console.log(`Withdrawing ${amount} from account ${accnum}`);
};

cashWithdrawal2(300, accnumber);
cashWithdrawal2(30, 50449921);
cashWithdrawal2(200, 50447921);

//
// Example 5 - returning
//

const addUp = (num1, num2) => {
	return num1 + num2;
};

addUp(7, 3);
console.log(addUp(2, 5));

//
// Example 6 - Arrow function syntax
//

const multiplyByNineFifths = (celsius) => {
	return celsius * (9 / 5);
};

const getFahrenheit = (celsius) => {
	return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');

//
// Example 7 - Function declaration
//

function square(number) {
	return number * number;
}

square(5);

//
// Example 8
//

function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}
console.log(factorial(33));
