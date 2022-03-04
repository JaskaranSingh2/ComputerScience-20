function createGridArray() {
	// Create and return a grid array
	// 2D array --> array inside an array
	return [
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	];

	/* 0 cell = white
    1 cell = grey */
}
function createDivGrid(grid) {
	for (let row = 0; row < NUM_ROWS; row++) {
		for (let col = 0; col < NUM_COL; col++) {
			// create a div for each element in 2D grid
			let divEl = document.createElement("div");

			// Add an id to each divEl
			divEl.id = "cell" + row + "-" + col;
			// Add appropriate class to each divEl created
			if (grid[row][col] == 1) {
				divEl.classList.add("grey");
			} else if (grid[row][col] == 2) {
				divEl.classList.add("player");
			}

			// Add divEl created to the container (append)
			document.getElementById("container").append(divEl);

			// add dataset values for row and col
			divEl.dataset.row = row;
			divEl.dataset.col = col;

			// add event listener to each divEl
			divEl.addEventListener("click", cellClicked);
		}
	}
}

function cellClicked(event) {
	// Set the color of the clicked cell

	// Get value of color select element
	let colour = document.getElementById("cell-colour").value;

	// Get row and col of the clicked cell
	let row = event.target.dataset.row;
	let col = event.target.dataset.col;

	// Update clicked cell based on selected color
	event.target.classList = ""; // Emptys cell classList --> Default is white
	grid[row][col] = 0; // Set grid to "white"
	if (colour == "grey") {
		event.target.classList.add("grey");
		grid[row][col] = 1; // Set grid to "grey"
	}
}
