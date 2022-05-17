thisGame = chooser();
thisGameInitState = thisGame.slice();
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
			nextLetter.innerHTML = key.toUpperCase();
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
				thisGame = thisGameInitState;
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
// check if it is in the word
// if it is, check if the guess[index] is equal to word[index]
// if it isn't then shade yellow
function search(word, rowNumber) {
	let wordArr = word.split("");
	for (let i = 0; i < 5; i++) {
		id = document.getElementById(rowNumber.toString() + "-" + i.toString());
		indexOfReturn = thisGame.indexOf(wordArr[i]);
		if (indexOfReturn == -1) {
			id.style.backgroundColor = "grey";
		} else {
			if (wordArr[i] === thisGame[i]) {
				console.log("WordArr" + wordArr[i]);
				console.log("thisGame" + thisGame[i]);
				id.style.backgroundColor = "green";
				console.log(id);
			} else {
				console.log("WordArr" + wordArr[i]);
				console.log("thisGame" + thisGame[i]);
				id.style.backgroundColor = "yellow";
			}
			thisGame[indexOfReturn] = "#";
		}
	}
	// for (j in wordArr) {
	// 	for (k in thisGame) {
	// 		id = rowNumber.toString() + "-" + j.toString();
	// 		if (j < 5) {
	// 			if (wordArr[j] == thisGame[k]) {
	// 				if (j == k) {
	// 					document.getElementById(id).style.backgroundColor = "green";
	// 					console.log(document.getElementById(id));
	// 				} else {
	// 					document.getElementById(id).style.backgroundColor = "yellow";
	// 				}
	// 				j++;
	// 			} else {
	// 				console.log(id);
	// 				document.getElementById(id).style.backgroundColor = "grey";
	// 			}
	// 		}
	// 	}
	// }
}
