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
