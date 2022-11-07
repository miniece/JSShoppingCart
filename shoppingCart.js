class Product {
	name;
	price;

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

products = [];

products[0] = new Product('Apples', 4.5);
products[1] = new Product('Bananas', 6.5);
products[2] = new Product('Hot Dogs', 7.5);

let goOn = true;

while (goOn == true) {
	let pick = prompt('Please select a product that you want 0 through ' + (products.length - 1));

	let cart = [];

	cart = products[pick];
	console.log(cart);

	goOn = keepRunning();
}

function keepRunning() {
	let answer = prompt('Would you like to add another item? Y/N');

	if (answer.toLowerCase() === 'n') {
		return false;
	} else if (answer.toLowerCase() === 'y') {
		return true;
	} else {
		console.log("I'm sorry I didn't understand that let's try again");
		return keepRunning();
	}
}
