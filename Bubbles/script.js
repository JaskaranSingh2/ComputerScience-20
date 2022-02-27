// Associative Arrays like Dictionaries in python (I think this is an object idk)
// Property:Value Pairs

/* Manual bubble maker, you would have to push this into the bubbles list
function bubbleProp(X, Y, R, C) {
	return {
		// returns a'dictionary'
		x: X,
		y: Y,
		r: R,
		colour: C,
	};
}
*/

// ---------------------------------------------------------------------------------

// get x,y,r, and colour properties from function newPushBubProp and store into our bubbles list

// empty array that we push random bubbles into
let bubbles = [];

// creates new, random bubbles
function newPushBubProp() {
	return {
		x: randomInt(0, cnv.width),
		y: randomInt(0, cnv.height),
		r: randomInt(5, 40),
		colour: randomRGB(),
	};
}

for (let i = 0; i <= 100; i++) {
	bubbles.push(newPushBubProp());
}

console.log(bubbles);

// ---------------------------------------------------------------------------------

// begin animation
requestAnimationFrame(animate);

function animate() {
	ctx.clearRect(0, 0, cnv.width, cnv.height);
	for (i = 0; i < bubbles.length; i++) {
		moveBubble(bubbles[i]);
		drawBubble(bubbles[i]); // draws circ of bubble[i]
	}
	requestAnimationFrame(animate);
	// We add this at the end of the function so that it loops through
}

// ---------------------------------------------------------------------------------
