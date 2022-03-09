// Grid Designer
// Create an array to represent a grid
const NUM_ROWS = 10;
const NUM_COL = 10;
let grid = createGridArray(); // Equals returned value
console.log(grid.length);
// Add a player to grid array
let player = {
	row: 5,
	col: 5,
};

grid[player.row][player.col] = 2; // 0 is white, 1 is grey, 2 is where the player is
// Create divs to model the grid array
createDivGrid(grid);

// Player Movement - Key Event Listeners
document.addEventListener("keydown", movePlayer);

function movePlayer(event) {
	console.log(event.keyCode);

	if (event.keyCode == 39) {
		// Right Arrow Key
		updatePlayer(player.row, player.col + 1);
	} else if (event.keyCode == 37) {
		// Left Arrow Key
		updatePlayer(player.row, player.col - 1);
	} else if (event.keyCode == 38) {
		// Up Arrow Key
		updatePlayer(player.row - 1, player.col);
	} else if (event.keyCode == 40) {
		// Down Arrow Key
		updatePlayer(player.row + 1, player.col);
	}
}

function updatePlayer(newRow, newCol) {
	// Left Arrow Key
	// Continutation of last in a way
	let cellId = "cell" + player.row + "-" + player.col;
	document.getElementById(cellId).classList.remove("player");

	// Set grid array to 0 for current location
	grid[player.row][player.col] = 0;

	// Update player location
	player.row = newRow;
	player.col = newCol;
	// Update class and grid
	cellId = "cell" + player.row + "-" + player.col;
	document.getElementById(cellId).classList.add("player");

	grid[player.row][player.col] = 2;
}
