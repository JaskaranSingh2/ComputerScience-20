const inputs = 6;
let remainingInputs = inputs;

let gameLost = false;
function sorter() {
	let word = getRandomWord();
	let wordArray = word.split("");
	return wordArray;
}

const width = 5;
const height = 6;
let xPosNew = 0;
let yPosNew = 0;

console.log(sorter());

// Starting rules
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

document.addEventListener("keydown", input);
str = "";

function input(e) {
	if (gameLost) return;
	let input = e.key;
	let letterDivision = document.getElementById(
		yPosNew.toString() + "-" + xPosNew.toString()
	);
	let letterDivision2 = document.getElementById(
		yPosNew.toString() + "-" + (xPosNew - 1).toString()
	);
	if (xPosNew < width) {
		if (e.code == "Backspace") {
			backspace(letterDivision2);
			return;
		} else if (letterDivision.innerHTML == "") {
			letterDivision.innerHTML = input;
			xPosNew++;
			console.log(letterDivision);
		}
	}
}

function backspace(pos) {
	pos.innerHTML = "";
	xPosNew--;
}
