// Bubble Functions

// get x,y,r, and colour properties from function newPushBubProp and store into our bubbles list
// creates new, random bubbles
function newPushBubProp() {
	return {
		x: randomInt(0, cnv.width),
		y: randomInt(0, cnv.height),
		r: randomInt(5, 40),
		colour: randomRGB(),
	};
}

// Create and return array with n bubble objects
function randBubArr(n) {
	// empty array that we push random bubbles into
	let objects = [];
	for (let i = 0; i < n; i++) {
		objects.push(newPushBubProp());
	}
	console.log(objects);
	return objects;
}

// ---------------------------------------------------------------------------------

// Draw and Move Bubble Functions

// bubbles[i] is passed into anyBub and a circle is drawn with the x,y,r, and colour properties
// draws bubble
function drawBubble(anyBub) {
	circ(anyBub.x, anyBub.y, anyBub.r, 0, 2 * Math.PI, "stroke", anyBub.colour);
}

// moves bubble
function moveBubble(anyBub) {
	// Move the bubble by an integer between -2 (inclusive) and 3 (exclusive)
	anyBub.x += randomInt(-2, 3);
	anyBub.y += randomInt(-2, 3);
}

// ---------------------------------------------------------------------------------
