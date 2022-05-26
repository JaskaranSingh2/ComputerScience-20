thisGame = chooser();

document.addEventListener("keydown", processor);

function processor(e) {
	let input = e.keyCode;
	let key = e.key;
	// Output results
	out = document.getElementById("out");
	if (gameOver) return;
	if ((input >= 65 && input <= 90) || input == 8 || input == 13) {
		let nextLetter = document.getElementById(
			rowNumber.toString() + "-" + letterIndex.toString()
		);
		let currentLetter = document.getElementById(
			rowNumber.toString() + "-" + (letterIndex - 1).toString()
		);
		if (e.code == "Backspace" && letterIndex > 0) {
			console.log(letterIndex);
			backspace(currentLetter);
		} else if (
			letterIndex < width &&
			nextLetter.innerHTML == "" &&
			e.code != "Backspace" &&
			e.code != "Enter"
		) {
			nextLetter.innerHTML = key.toUpperCase();
			letterIndex++;
		} else if (e.code == "Enter" && letterIndex == width) {
			search();
			rowNumber++;
			letterIndex = 0; // set it back to zero for every check
		}
	}
}

function backspace(pos) {
	pos.innerHTML = "";
	letterIndex--;
}

function search() {
	let correct = 0;
	let letterCount = {}; // {a: 1, b: 3, c: 5}
	for (let i = 0; i < thisGame.length; i++) {
		letterKey = thisGame[i];
		if (letterCount.letterKey) {
			// if it exists, add 1 to the count
			letterCount.letterKey += 1;
		} else {
			/* if it isn't in the object, 
			add it by setting the keyCount for the letter equal to 1
			*/
			letterCount.letterKey = 1;
		}
	}
	console.log(letterCount);

	// First check: check all the letters that are correct
	for (let i = 0; i < width; i++) {
		tileChecked = document.getElementById(
			rowNumber.toString() + "-" + i.toString()
		);
		char = tileChecked.innerHTML;
		if (thisGame[i] == char) {
			tileChecked.classList.add("correctPlace");
			correct++;
			letterCount.char--; // removes those letters that have already been checked for in the count
		}
		if (correct == 5) {
			out.innerHTML = "You Win!";
			gameOver = true;
		}
	}
}
