let h1 = document.getElementById("h1");
let back = new Image();
back.src = "mountains.jpg";

let snowBallArrObj = multipleBallObjectArray(prompt("How many snowballs?"));

requestAnimationFrame(animateFunc);
function animateFunc() {
	ctx.drawImage(back, 0, 0, cnv.width, cnv.height);
	move(snowBallArrObj);
	draw(snowBallArrObj);
	requestAnimationFrame(animateFunc);
}

// EVENT LISTENERS
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
	if (event.keyCode === 39) {
		// Right Arrow
		// Add a new random bubble
		snowBallArrObj.push(
			new BallProperties(
				randomInt(0, cnv.width),
				randomInt(0, cnv.height),
				randomInt(2, 10),
				randomInt(-2, 3),
				randomInt(6, 10)
			)
		);
	} else if (event.keyCode === 37) {
		// Left Arrow
		// Remove the last bubble
		snowBallArrObj.pop();
	}
	console.log(snowBallArrObj);
}
