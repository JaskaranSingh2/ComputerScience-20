// HTML elements

let sideA = document.getElementById("legA");
let sideB = document.getElementById("legB");
let sideC = document.getElementById("hypC");
// The '+' returns the numerical representation of the value

// Button:
let confirmB = document.getElementById("confirm");

// To show the value of whatever side we need an empty h1
let emptyH1 = document.getElementById("return");

// HTML elements

confirmB.addEventListener("click", report);

function report() {
	/* get values when we click the button, so put it inside 
    the function to get the most updated value */

	/* Place the '+' before the value of the element in 
    order to turn them into integers, if it is empty it will show '0'*/
	let legA = +sideA.value;
	let legB = +sideB.value;
	let hypC = +sideC.value;
	emptyH1.innerHTML = pythagoreanTheorem(legA, legB, hypC);
}

// The actual calculations into a simplified function with some parameters

function pythagoreanTheorem(a, b, c) {
	let sides = [a, b, c];

	/* shorthanded function that has a parameter and 
    presumes everything after is returned (true of false in this case) */

	// special conditions
	let isInputted = (abORc) => abORc > 0;
	let determineIfAllFilled = sides.every(isInputted);
	let ifLessThanZero = (abORc) => abORc < 0;
	let determineIfLess = sides.some(ifLessThanZero);
	let someNotANum = sides.some(isNaN);
	// special conditions

	//////////////////////////////////////////////////////////////////////

	if (
		(a == 0 && b == 0) ||
		(a == 0 && c == 0) ||
		(b == 0 && c == 0) ||
		(a == 0 && b == 0 && c == 0)
	) {
		return "Please input at least two numbers greater than 0";
	} else if (someNotANum) {
		return "One of your things is not a number lol";
	} else if (determineIfAllFilled) {
		return "Only two numbers!";
	} else if (determineIfLess) {
		return "You can't put negative numbers bruh";
	} else if (c == 0) {
		return "Side C: " + Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
	} else if (a == 0) {
		return "Side A: " + Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
	} else if (b == 0) {
		return "Side B: " + Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
	}
}
