//Task
console.log('    |    |    ');
console.log('    |    |    ');
console.log('    |    |    ');
console.log('- - - - - - - -');
console.log('    |    |    ');
console.log('    |    |    ');
console.log('    |    |    ');
console.log('- - - - - - - -');
console.log('    |    |    ');
console.log('    |    |    ');
console.log('    |    |    ');

//Stretch
let array = ['    |    |    ', '- - - - - - - -'];
for (let i = 0; i < 9; i++) {
	if (i == 3 || i == 6) {
		console.log(array[1]);
	}
	console.log(array[0]);
}
