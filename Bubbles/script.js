let canvas = document.getElementById("canva");
let ctx = canvas.getContext("2d");
screenWidthStored = screen.width - 20;
canvas.width = screenWidthStored;
canvas.height = screen.height - 123;

// Associative Array like Dictionaries in python (I think this is an object idk)
// Property:Value Pairs
let bubble = {
	x: 400,
	y: 300,
	r: 25,
};

requestAnimationFrame(animate);

function animate() {
	fill("blue");
	circle(bubble.x, bubble.y, buubl);
	requestAnimationFrame(animate);
	// We add this at the end of the function so that it loops through
}
