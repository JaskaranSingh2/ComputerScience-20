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
// grabs value of the toggle 'selection'
let selectionToggleValue = selectionToggle.value;

// the addEventListener for when the button is clicked, to run the function 'draw()'
whenButtonClicked.addEventListener("click", draw);

function draw() {
  if (selectionToggle == "Stars") {
    console.log(1);
  }
}
