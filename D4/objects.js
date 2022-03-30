// **********************************
// Code Nation - wearecodenation.com
// Week 1 - Objects
// **********************************

//
// Example 1 - basic object
//

const cafe = {
	name: 'Whitesheep',
	seatingCapacity: 100,
	hasSpecialOffers: true,
	drinks: ['Cappuccino', 'Latte', 'Filter coffee', 'Tea', 'Hot chocolate'],
};

//
// Example 2 - accessing object data
//

let offer = 'none';
let time = 1200;

const cafe2 = {
	name: 'Whitesheep',
	seatingCapacity: 100,
	hasSpecialOffers: true,
	drinks: ['Cappuccino', 'Latte', 'Filter coffee', 'Tea', 'Hot chocolate'],

	breakfastOffer: 'Free croissant with coffee',
	lunchOffer: 'Free drink with surprisingly priced sandwich',
	noOffer: 'Sorry no offer',
};

if (time < 1100) {
	offer = cafe2.breakfastOffer;
	console.log(cafe2.breakfastOffer);
} else if (time < 1500) {
	offer = cafe2.lunchOffer;
	console.log(cafe2.lunchOffer);
}

//
// Example 3 - using methods
//

const cafe3 = {
	name: 'Whitesheep',
	seatingCapacity: 100,
	hasSpecialOffers: true,
	drinks: ['Cappuccino', 'Latte', 'Filter coffee', 'Tea', 'Hot chocolate'],
	breakfastOffer: 'Free croissant with coffee',
	lunchOffer: 'Free drink with surprisingly priced sandwich',
	noOffer: 'Sorry no offer',

	openCafe: () => {
		return 'Come on in';
	},
	closeCafe: () => {
		return 'We are closed, come back tomorrow!';
	},
};

console.log(cafe3.openCafe());
console.log(cafe3.closeCafe());

//
// Example 4 - using object data within a function (method)
//

const cafe4 = {
	name: 'Whitesheep',
	seatingCapacity: 100,
	hasSpecialOffers: true,
	drinks: ['Cappuccino', 'Latte', 'Filter coffee', 'Tea', 'Hot chocolate'],
	breakfastOffer: 'Free croissant with coffee',
	lunchOffer: 'Free drink with surprisingly priced sandwich',
	noOffer: 'Sorry no offer',
	openCafe() {
		if (this.hasSpecialOffers) {
			return 'Time for a special offer!';
		}
	},
	closeCafe() {
		return 'We are closed, come back tomorrow!';
	},
};

console.log(cafe4.openCafe());
