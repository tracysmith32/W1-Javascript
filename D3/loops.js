// **********************************
// Code Nation - wearecodenation.com
// Week 1 - Loops
// **********************************

//
// Example 1 - from an array to a loop
//

// The array way
let favouriteDrinks = ['Coke', 'Fanta', 'Tonic'];

console.log(favouriteDrinks[0]);
console.log(favouriteDrinks[1]);
console.log(favouriteDrinks[2]);

// Loop-de-doop

let favDrinks = ['Coke', 'Fanta', 'Tonic', 'Red Bull'];

for (let i = 0; i < favDrinks.length; i++) {
	console.log(favDrinks[i]);
}

//
// Example 2 - Loops with if statements
//

let multiplesTwo = [];

for (let i = 0; i < 20; i++) {
	if (i % 2 == 0) {
		multiplesTwo.push(i);
	}
}

console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

//
// Example 3 - Loops with function
//

const sumOfNums = (min, max) => {
	let sums = 0;
	for (let i = min; i < max + 1; i++) {
		sums += i;
	}
	return sums;
};

console.log(`Sum of all numbers from 1 to 10 is ${sumOfNums(1, 10)}.`);

//
// Example 4 - While loop
//

let age = 15;

while (age < 18) {
	console.log("You're a child!");
	age++;
}

console.log("You're an adult!");

//
// Example 5 - While loop with random increments
//

let randomNumber = 0;

while (randomNumber < 10) {
	console.log('Random no. ' + randomNumber + '\n Keep looping');
	randomNumber = Math.round(Math.random() * 20);
}

console.log('No more looping, with random no. ' + randomNumber);

//
// Example 6
//

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];
let currentCard = 'Club';

while (currentCard != 'Spade') {
	console.log(currentCard);
	currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log(currentCard);
