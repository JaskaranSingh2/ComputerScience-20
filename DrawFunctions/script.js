// use "==="!
// CTX Elements
let canvas = document.getElementById("canva");
let ctx = canvas.getContext("2d");
screenWidth = screen.width - 50;
canvas.width = screenWidth;
canvas.height = 600;

// Grabs the HTML button element and is referred to as: "whenButtonClicked"
let whenButtonClicked = document.getElementById("whenClicked");
// Grabs the HTML toggle element
let selectionToggle = document.getElementById("toggle");

// The addEventListener for when the button is clicked, to run the function 'draw()'
whenButtonClicked.addEventListener("click", draw);

/*
Whereas:
The star is centered around a circle with a radius [r]
at point (xCirc,yCirc)
and [n] refers to the number of outer spikes.
r/2 is the radius of the inner points
n*2 is the number of total points */

function drawStar(r, xCirc, yCirc, n) {
  // Required variables:

  /* we add the x-point the circle is centered at (xCirc), to R
  because we know that the first point on the circle is a direct horizontal translation
  therefore the y-point on the firstPoint remains the same, therefore: 
  the first point on the star is = (firstPoint, yCirc) */

  let firstPoint = xCirc + r;
  let N = 2 * n; // total number of points
  let twoPi = Math.PI * 2;
  let cos = Math.cos;
  let sin = Math.sin;
  x = cos(angle) * r + xCirc; // Have to add the horizontal translation
  y = sin(angle) * r + yCirc; // Have to add the vertical translation

  // begin drawing the star:
  ctx.beginPath();
  ctx.moveTo(firstPoint, yCirc); // Move it to the first point

  // drawing the rest of the points, starting at point zero:
  for (let i = 0; i < N; i++) {
    if (i % 2 == 0) {
      let angle = (twoPi / N) * i;
      /* divide angle equally amongst N points, then multiply it by [i] as [i] refers
      to the point number AND the multiples of the angles. */
    }
  }
}

function draw() {
  // Grabs value of the toggle 'selection'.
  // Inside the function because we want the value when we click it
  let selectionToggleValue = selectionToggle.value;
  if (selectionToggleValue === "Stars") {
  } else if (selectionToggleValue === "Platforms") {
    console.log(2);
  }
}
