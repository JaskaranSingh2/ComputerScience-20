// Math Library

// 'high' number is exclusive
function randomInt(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}

function randomRGB() {
	let r = randomInt(0, 256);
	let g = randomInt(0, 256);
	let b = randomInt(0, 256);
	return `rgb(${r}, ${g}, ${b}`;
}

function randomColour() {
	let flip = randomInt(0, 2);
	if (flip == 0) {
		return "rgb(128, 191, 230)";
	} else {
		return "white";
	}
}
