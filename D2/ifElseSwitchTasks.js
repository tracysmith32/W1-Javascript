//Activity One

let age = 18;
let country = 'UK';

if (age > 17 && country == 'UK') {
	console.log('Yes we can serve you');
} else {
	console.log("Sorry we can't serve you");
}

//Activity Two
let pizzaTopping = 'Chicken';
switch (pizzaTopping) {
	case 'cheese':
	case 'Pepperoni':
	case 'Ham':
		console.log('These are important ingredients for my Pizza');
		break;
	case 'Chicken':
		console.log(`I don't mind having ${pizzaTopping} on my pizza`);
		break;
	case 'Pineapple':
		console.log(`${pizzaTopping} should not be on a pizza`);
		break;
	default:
		console.log("I don't have an opinion");
}

//Activity Three
let password = 'codenation2022';

if (password.length < 8) {
	console.log("Sorry that password isn't long enough");
} else {
	console.log(password);
}

//Activity Four
let num = 23;
if (num % 3 == 0 && num % 5 == 0) {
	console.log('This number is divisible by 3 or 5');
} else {
	console.log('This number is not divisible by 3 or 5');
}

//Activity Five
let num = 15;
if (num % 3 == 0 && num % 5 == 0) {
	console.log('fizz buzz');
} else if (num % 3 == 0) {
	console.log('fizz');
} else if (num % 5 == 0) {
	console.log('buzz');
} else {
	console.log(num);
}
//Activity Six
let palindrome = 1001;
let palindromeReversed = palindrome.toString().split('').reverse().join('');

if (palindrome.toString() === palindromeReversed) {
	console.log('This is a palindrome!');
} else {
	console.log('Not a Palindrome!');
}
//Activity seven
let time = 9;
let placeOfWork = 'Fire Station';
let townOfHome = 'Ponty pandy';

if (time == 7) {
	console.log(`I am at ${townOfHome}`);
} else if (time == 8) {
	console.log(`I am commuting to the ${placeOfWork}`);
} else if (time == 9) {
	console.log(`I am at the ${placeOfWork}`);
}

//Activity eight
let string =
	'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let searchTerm = 'h';

console.log(string.lastIndexOf(searchTerm));

//Activity nine
let string = 'madame';
if (string.charAt(0) == string.charAt(string.length - 1)) {
	console.log(true);
} else {
	console.log(false);
}

//Activity Ten
let num1 = 4;
let num2 = 5;
let sum = num1 + num2;
if (sum % 2 == 0) {
	console.log('Numbers are Even');
} else {
	console.log(num1 * num2);
}
