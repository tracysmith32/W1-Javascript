// let i = '2';

// if (1 === '1') {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

// let i = '1';

// if (1 !== '1') {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

// const pressGrindBeans = () => {
// 	console.log('grinding beans for 20 seconds');
// };

let coffeeIsGrinding;

const pressGrindBeans = () => {
	if (coffeeIsGrinding) {
		console.log('stopping the grind');
		coffeeIsGrinding = true;
	} else {
		console.log('grinding is about to begin');
		coffeeIsGrinding = false;
	}
};

pressGrindBeans();

const cashWithdrawal = (amount, accnum) => {
	console.log(`Withdrawing ${amount} from account ${accnum}`);
};

cashWithdrawal(3300, 56473857);
cashWithdrawal(330, 56475757);

const faveFilms = ['coffee', 'tea', 'coke'];

console.log(faveFilms);
