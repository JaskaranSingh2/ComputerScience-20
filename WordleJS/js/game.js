thisGame = chooser();
console.log(thisGame);

document.addEventListener("keydown", processor);

function processor(e) {
	let word = "";
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
	let checkList = [];
	wordArr = word.split("");
	for (j in wordArr) {
		for (k in thisGame) {
			id = rowNumber.toString() + "-" + j.toString();
			if (j < 5) {
				if (wordArr[j] == thisGame[k]) {
					checkList += wordArr[j];
					if (
						checkList.count(wordArr[j]) > 1 &&
						thisGame.count(wordArr[j]) == 1
					) {
						document.getElementById(id).style.backgroundColor = "grey";
					} else {
						if (j == k) {
							document.getElementById(id).style.backgroundColor = "green";
							console.log(document.getElementById(id));
						} else {
							document.getElementById(id).style.backgroundColor = "yellow";
						}
					}
					j++;
				} else {
					console.log(id);
					document.getElementById(id).style.backgroundColor = "grey";
				}
			}
		}
	}
}
