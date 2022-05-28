thisGame = chooser();

document.addEventListener("keydown", processor);

function processor(e) {
	let word = "";
	let input = e.keyCode;
	let key = e.key;
	console.log(word);
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
			for (let i = 0; i < width; i++) {
				word += document.getElementById(
					rowNumber.toString() + "-" + i.toString()
				).innerHTML;
			}
			if (!words.includes(word)) {
				for (let i = 0; i < width; i++) {
					document.getElementById(
						rowNumber.toString() + "-" + i.toString()
					).innerHTML = "";
				}
				letterIndex = 0;
				alert("Not found in the dictionary!");
			} else {
				search();
				rowNumber++;
				letterIndex = 0; // set it back to zero for every check
			}
		}
	}
}

function backspace(pos) {
	pos.innerHTML = "";
	letterIndex--;
	word.pop(-1);
	console.log(word);
}

function search() {
	let correct = 0;
	let letterCount = {}; // {a: 1, b: 3, c: 5}
	for (let i = 0; i < thisGame.length; i++) {
		letterKey = thisGame[i];
		if (letterCount[letterKey]) {
			// if it exists, add 1 to the count
			letterCount[letterKey] += 1;
		} else {
			/* if it isn't in the object, 
			add it by setting the keyCount for the letter equal to 1
			*/
			letterCount[letterKey] = 1;
		}
	}
	console.log("letterCount", letterCount);

	// First check: check all the letters that are correct
	for (let i = 0; i < width; i++) {
		let tileChecked = document.getElementById(
			rowNumber.toString() + "-" + i.toString()
		);
		let char = tileChecked.innerHTML;
		console.log(tileChecked, char);
		if (thisGame[i] == char) {
			tileChecked.classList.add("correctPlace");
			correct++;
			letterCount[char] -= 1; // removes those letters that have already been checked for in the count
		}

		for (let i = 0; i < width; i++) {
			tileChecked = document.getElementById(
				rowNumber.toString() + "-" + i.toString()
			);
			char = tileChecked.innerHTML;
			if (!tileChecked.classList.contains("correctPlace")) {
				if (thisGame.includes(char) && letterCount[char] > 0) {
					tileChecked.classList.add("exists");
					letterCount[char]--;
				} else {
					tileChecked.classList.add("non-existent");
				}
			}
		}
	}
	for (let j = 0; j < width; j++) {
		let tileChecked = document.getElementById(
			rowNumber.toString() + "-" + j.toString()
		);
		let char = tileChecked.innerHTML;

		if (!tileChecked.classList.contains("correctPlace")) {
			if (thisGame.includes(char) && letterCount[char] > 0) {
				tileChecked.classList.add("exist");
				letterCount[char] -= 1;
			} else {
				tileChecked.classList.add("non-existent");
			}
		}
	}
}
