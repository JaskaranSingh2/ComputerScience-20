thisGame = chooser();
console.log(thisGame);

let word = "";
document.addEventListener("keydown", processor);

function processor(e) {
	let input = e.keyCode;
	let key = e.key;
	// Output results
	out = document.getElementById("out");
	if (gameLost) return;
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
			console.log(currentLetter);
		} else if (
			letterIndex < width &&
			nextLetter.innerHTML == "" &&
			e.code != "Backspace" &&
			e.code != "Enter"
		) {
			nextLetter.innerHTML = key;
			letterIndex++;
		} else if (e.code == "Enter" && letterIndex == width) {
			for (let i = 0; i < width; i++) {
				word += document.getElementById(
					rowNumber.toString() + "-" + i.toString()
				).innerHTML;
			}
			if (word == thisGame.join("")) {
				out.innerHTML = "You Win!";
				for (let i = 0; i < 5; i++) {
					document.getElementById(
						rowNumber.toString() + "-" + i.toString()
					).style.backgroundColor = "green";
				}
			} else {
				search(word, rowNumber);
				rowNumber++;
				letterIndex = 0;
			}
		}
	}
}

function backspace(pos) {
	pos.innerHTML = "";
	letterIndex--;
}

function search(word, rowNumber) {
	wordArr = word.split("");

	for (let j in wordArr) {
		for (let k in thisGame) {
			if (wordArr[j] == thisGame[k]) {
				console.log(`${wordArr[j]} is in the word`);
				if (j == k) {
					document.getElementById(
						rowNumber.toString() + "-" + j.toString()
					).style.backgroundColor = "green";
					console.log(
						document.getElementById(rowNumber.toString() + "-" + j.toString())
					);
				} else {
					document.getElementById(
						rowNumber.toString() + "-" + j.toString()
					).style.backgroundColor = "yellow";
				}
				j++;
			} else {
				document.getElementById(
					rowNumber.toString() + "-" + j.toString()
				).style.backgroundColor = "grey";
				console.log(`${wordArr[j]} is not in the word`);
			}
		}
	}
}
