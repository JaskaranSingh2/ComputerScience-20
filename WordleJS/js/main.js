const inputs = prompt("How many words do you want to guess?");
let remainingInputs = inputs;

function boardInit() {
	let board = document.getElementById("board");
}

function sorter() {
	let word = getRandomWord();
	let wordArray = word.split("");
	return wordArray;
}

console.log(sorter());
