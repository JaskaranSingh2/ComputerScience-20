function checkGuess() {
	let correct = 0; //This is the number of letters that are correct
	let letterCount = {}; // KADAM => {K:1, A:2, D:1, M:1}
	for (let h = 0; h < randomWord.length; h++) {
		letter = randomWord[h];
		if (letterCount[letter]) {
			letterCount[letter] += 1;
		} else {
			letterCount[letter] = 1;
		}
	}
	console.log(letterCount);

	// first iteration check all correct
	for (let c = 0; c < width; c++) {
		let currentTile = document.getElementById(
			row.toString() + "-" + c.toString()
		);
		let letter = currentTile.innerText;

		if (randomWord[c] == letter) {
			currentTile.classList.add("correct");
			correct++;
			letterCount[letter] -= 1;
		}
		if (correct == 5) {
			gameOver = true;
			document.getElementById("answer").innerHTML = "CORRECT!";
		}
	}
	// go again and mark which are present but in wrong position
	for (let c = 0; c < width; c++) {
		let currentTile = document.getElementById(
			row.toString() + "-" + c.toString()
		);
		let letter = currentTile.innerText;

		if (!currentTile.classList.contains("correct")) {
			if (randomWord.includes(letter) && letterCount[letter] > 0) {
				// found .includes through research before starting project
				currentTile.classList.add("exists");
				letterCount[letter] -= 1;
			} else {
				currentTile.classList.add("dnexist");
			}
		}
	}
}
