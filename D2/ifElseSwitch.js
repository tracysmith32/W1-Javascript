// **********************************
// Code Nation - wearecodenation.com
// Week 1 - If else & Switch
// **********************************

//
// Example 1 - If else statements
//
let weather = 'sunny';
if (weather == 'sunny') {
	console.log('Wear some suncream');
} else if (weather == 'raining') {
	console.log('Get an umbrella');
} else {
	console.log('wear whatever you want');
}

let music = 'classical';

if (music == 'classical') {
	console.log('Oh no it’s that classical again');
} else if (music == 'no music') {
	console.log('Arh, peace and quiet');
} else {
	console.log('Nice and noisy');
}

//
// Example 2
//

// Strict
if (1 === '1') {
	console.log(true);
} else {
	console.log(false);
}

// Not equal
if (1 != '1') {
	console.log(true);
} else {
	console.log(false);
}

//
// Example 3
//

let place = 'Manc';
let weather = 'Cloudy';

if (place == 'Manc' && weather == 'Sunny') {
	console.log('Check again');
} else if (place == 'Manc' && weather == 'Rain') {
	console.log('Obvs');
} else {
	console.log("What it isn't raining?");
}

//
// Example 4
//

let day = 'Saturday';

if (day == 'Saturday' || day == 'Sunday') {
	console.log("It's weekend!");
} else {
	console.log("When's weekend?");
}

//
// Example 5 - From if else to switch
//

// When using if else
let car = 'Peugeot';

if (car == 'Ford' || car == 'GM') {
	console.log("You've got an American car!");
} else if (car == 'Peugeot' || car == 'Citroen') {
	console.log("You've got a French boy!");
} else if (car == 'Honda' || car == 'Toyota' || car == 'Suzuki') {
	console.log('Japanese cars are dead quiet!');
} else if (car == 'Mercedes') {
	console.log('You a re proper posh German!');
} else if (car == 'Volkswagen') {
	console.log("German aren't that bad at all!");
} else if (car == 'Hyundai' || car == 'Kia') {
	console.log('South Korean cars are getting popular!');
} else {
	console.log('Your car is not in the top ten companies in the world!');
}

// When using Switch

let car2 = 'Peugeot';

switch (car2) {
	case 'Ford':
	case 'GM':
		console.log("You've got an American car!");
		break;
	case 'Peugeot':
	case 'Citroen':
		console.log("You've got a French boy!");
		break;
	case 'Honda':
	case 'Toyota':
	case 'Suzuki':
		console.log('Japanese cars are dead quiet!');
		break;
	case 'Mercedes':
		console.log('You are proper posh German!');
		break;
	case 'Volkswagen':
		console.log("German aren't that bad at all!");
		break;
	case 'Hyundai':
	case 'Kia':
		console.log('South Korean cars are getting popular!');
		break;
	default:
		console.log('Your car is not in the top ten companies in the world!!');
}

//
// Example 6
//

const grade = 87;

switch (true) {
	case grade >= 70:
		console.log('Distinction');
		break;
	case grade >= 60:
		console.log('Merit');
		break;
	case grade >= 50:
		console.log('Pass');
		break;
	default:
		console.log('Failed');
}
