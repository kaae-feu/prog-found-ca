// question 1

var cat = "cat";

// question 2

var person = {
	sex: "male"
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
	console.log("Out of stock");
} else {
	console.log("In stock");
}

// question 4

var numbers = [ 1, 5, 25, 125, 625 ];

for (var i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

// question 5

for (var i = 5; i < 26; i++) {
	console.log(i);
}

// question 6

for (var i = 5; i < 26; i++) {
	console.log(20);
}

// question 7

var familyMemberInfo = [
	{
		name: "John",
		age: 23,
		livingAtHome: false
	},
	{
		name: "Sarah",
		age: 18,
		livingAtHome: true
	}
];

for (var i = 0; i < familyMemberInfo.length; i++) {
	console.log(familyMemberInfo[i].age);
	console.log(familyMemberInfo[i].livingAtHome);
}

// question 8

function whatIDontLike(logDislikes) {
	console.log("I don't like " + logDislikes);
}

whatIDontLike("rainy days.");

// question 9

function subtractNumbers(firstNumber, secondNumber) {
	var total = secondNumber - firstNumber;
	console.log(total);
}

subtractNumbers(30, 100);

// question 10

var motorcycle = [];

function motorcycleBrand(logBrand) {
	motorcycle.push(logBrand);
	console.log(motorcycle);
}

motorcycleBrand("Yamaha");
