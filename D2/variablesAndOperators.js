// **********************************
// Code Nation - wearecodenation.com
// Week 1 - Variables
// **********************************

// Example 1 - console.log recap with more methods!

console.log('All around the world');
console.log('All around the world'.charAt(7).toUpperCase());
console.log('All around the world'.toUpperCase().charAt(7));
console.log('All around the world'.toLowerCase());
console.log('All around the world'.length);

//Example operators

let i = 10;
i += 2;
console.log(i);

// Example 2 - Variable data access

let favouriteDrink = 'coffee';
let name = 'Tracy';
let age = 21;

console.log(
	'Hi my name is ' +
		name +
		'.I am ' +
		age +
		'and my favourite drink is ' +
		favouriteDrink +
		'.',
);

console.log(
	`Hi my name is ${name}. I am ${age} and my favourite drink is ${favouriteDrink}`,
);

favouriteDrink = 'tea';

console.log(
	`Hi my name is ${name}. I am ${age} and my favourite drink is now ${favouriteDrink}`,
);
