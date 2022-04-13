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
			letterDivision.innerText = "P";
			boardContainer.appendChild(letterDivision);
		}
	}
}
window.onload = boardInit();
