// const square = function(x) {
// 	return x * x;
// };

// const square = (x) => {
// 	return x * x;
// };

// const square = (x) => x * x;

// console.log(square(2));

//object
const event1 = {
	name: 'Birthday party',
	guestList: [ 'jack', 'jen', 'mike' ],
	//method
    printGuestList() { 
		console.log('Guest list for ' + this.name);
		this.guestList.forEach((guest) => {
			console.log(guest + ' is attending ' + this.name);
		});
	}
};

event1.printGuestList();
