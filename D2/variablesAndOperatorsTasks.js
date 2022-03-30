// Activity 1
let myName = 'Tracy';
let myAge = 21;
let favouriteColour = ' pink ';
console.log(
	`My name is ${myName},  I am ${myAge} years old and my favourite colour is ${favouriteColour}`,
);

//Activity 2
let breakfast = 'Weetabix';
let lunch = 'Beans on Toast';
let dinner = 'Chilli Con Carni';

console.log(
	`Today for breakfast I am going to eat ${breakfast} then for lunch I will have ${lunch} then for dinner I will eat ${dinner}.  Yummy!`,
);

//Activity 3

// To set two dates to two variables
let todaysDate = new Date('02/08/2022');
let birthday = new Date('05/23/2022');

// To calculate the time difference of two dates
let time = birthday.getTime() - todaysDate.getTime();

// To calculate the no. of days between two dates
let days = time / (1000 * 3600 * 24);

//To display the final no. of days (result)
console.log(`There are ${days} till my birthday`);

//Activity 4

let space1 = '   x       ';
let space2 = '   o       ';
let space3 = '   x       ';
let space4 = '   x       ';
let space5 = '   o       ';
let space6 = '   x       ';
let space7 = '   x       ';
let space8 = '   o       ';
let space9 = '   x       ';

console.log(`           |           |         `);
console.log(`${space1}|${space2}|${space3}`);
console.log(`           |           |         `);
console.log('----------------------------------');
console.log(`           |           |         `);
console.log(`${space4}|${space5}|${space6}`);
console.log(`           |           |          `);
console.log('----------------------------------');
console.log(`           |           |          `);
console.log(`${space7}|${space8}|${space9}`);
console.log(`           |           |         `);
