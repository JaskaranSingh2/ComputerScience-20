const inputs = 6;
let remainingInputs = inputs;

function sorter() {
	let word = getRandomWord();
	let wordArray = word.split("");
	return wordArray;
}

console.log(sorter());

function boardInit() {
	boardContainer = document.getElementById("board-container");
	for (row = 0; row < +inputs; row++) {
		for (letter = 0; letter < 5; letter++) {
			let letterDivision = document.createElement("div");
			letterDivision.id = row.toString() + "-" + letter.toString();
			letterDivision.classList.add("letter");
			boardContainer.appendChild(letterDivision);
		}
	}
}
window.onload = boardInit();

document.addEventListener("keypress", recordInput);
str = "";

function recordInput(e) {
	if (str.length < 5) {
		str += e.key;
		for (let i = 0; i < str.length; i++) {
			letterDivision.innerText += str[i];
		}
	}
}
