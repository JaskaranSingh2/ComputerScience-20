// final!
// use "==="!
// CTX Elements
let canvas = document.getElementById("canva");
let ctx = canvas.getContext("2d");
screenWidth = screen.width - 50;
canvas.width = screenWidth;
canvas.height = 600;
middle = screenWidth / 2;

// Grabs the HTML button element and is referred to as: "whenButtonClicked"
let whenButtonClicked = document.getElementById("whenClicked");
// Grabs the HTML toggle element
let selectionToggle = document.getElementById("toggle");

// The addEventListener for when the button is clicked, to run the function 'draw()'
whenButtonClicked.addEventListener("click", draw);

/* Star is centered around circle with radius [r] at point (xCirc,yCirc)
[n] refers to the number of outer spikes. */
function drawStar(r, xCirc, yCirc, n, colour) {
	// Required variables:

	/* first point is radius plus where the star is centered at, 
  yCirc (y-point) remains the same */
	let firstXPoint = xCirc + r;
	let N = 2 * n; // total number of points
	let twoPi = Math.PI * 2;
	let cos = Math.cos;
	let sin = Math.sin;
	d;
	ctx.moveTo(firstXPoint, yCirc); // Move it to the first (outer) point (pt. 0)

	// locating the rest of the points, starting at point 1 until it is equal to N:
	for (let i = 1; i <= N; i++) {
		if (i % 2 === 0) {
			/* divide angle equally amongst N points, then multiply it by [i] as [i] refers
      to the point number AND the multiples of the angles. If the point is zero, angle is zero */
			let angle = (twoPi / N) * i;
			x = cos(angle) * r + xCirc; // + horizontal translation
			y = sin(angle) * r + yCirc; // + vertical translation
		} else {
			let angle = (twoPi / N) * i;
			// dividing r means it's the inner point
			x = cos(angle) * (r / 1.8) + xCirc; // + horizontal translation
			y = sin(angle) * (r / 1.8) + yCirc; // + vertical translation
		}
		ctx.lineTo(x, y);
	}
	ctx.closePath();
	ctx.strokeStyle = colour;
	ctx.lineWidth = 2;
	ctx.stroke();
}

function drawPlatform(
	colour1,
	colour2,
	width1,
	width2,
	startPt,
	endPt,
	height
) {
	ctx.strokeStyle = colour1;
	ctx.lineWidth = width1;
	ctx.beginPath();
	ctx.moveTo(startPt, height);
	ctx.lineTo(endPt, height);
	ctx.stroke();
	ctx.strokeStyle = colour2;
	ctx.lineWidth = width2;
	ctx.beginPath();
	ctx.moveTo(startPt, height + width1);
	ctx.lineTo(endPt, height + width1);
	ctx.stroke();
}

function draw() {
	// Grabs value of the toggle 'selection'.
	// Inside the function because we want the value when we click it
	let selectionToggleValue = selectionToggle.value;
	if (selectionToggleValue === "Stars") {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawStar(100, screenWidth / 2, 300, 5, "red");
		drawStar(150, screenWidth / 2 + 300, 300, 7, "blue");
		drawStar(80, screenWidth / 2 - 300, 300, 15, "orange");
	} else if (selectionToggleValue === "Platforms") {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawPlatform("green", "brown", 30, 40, middle - 300, middle + 300, 300);
		drawPlatform("red", "blue", 40, 60, middle - 300, middle + 300, 200);
		drawPlatform("pink", "lightgrey", 28, 35, middle - 300, middle + 300, 400);
	}
}
