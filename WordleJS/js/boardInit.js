let boardContainer = document.getElementById("board-container");
function boardInit() {
	for (row = 0; row < 6; row++) {
		for (letter = 0; letter < 5; letter++) {
			let letterDiv = document.createElement("div");
			letterDiv.id = row.toString() + "-" + letter.toString();
			letterDiv.classList.add("letter");
			boardContainer.appendChild(letterDiv);
		}
	}
}
window.onload = boardInit();
