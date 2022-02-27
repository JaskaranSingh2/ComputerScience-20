// ------------------------------------------------------------------

// Canvas info
let cnv = document.getElementById("canva");
let ctx = cnv.getContext("2d");

// Canvas Width and Height
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

window.addEventListener("resize", windowResize);

function windowResize() {
	cnv.width = window.innerWidth;
	cnv.height = window.innerHeight;
}

// ------------------------------------------------------------------

// Create an array of random bubble objects
let bubbles = randBubArr(prompt("Number of Bubbles?"));

// ------------------------------------------------------------------

// Main Draw Loop
requestAnimationFrame(animate);

function animate() {
	background("black");
	for (i = 0; i < bubbles.length; i++) {
		moveBubble(bubbles[i]);
		drawBubble(bubbles[i]); // draws circ of bubble[i]
	}
	// Loop Draw Function
	requestAnimationFrame(animate);
	// We add this at the end of the function so that it loops through
}

// ---------------------------------------------------------------------------------

// EVENT LISTENERS
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
	if (event.keyCode === 39) {
		// Right Arrow
		// Add a new random bubble
		bubbles.push(newPushBubProp());
	} else if (event.keyCode === 37) {
		// Left Arrow
		// Remove the last bubble
		bubbles.pop();
	}
	console.log(bubbles);
}
