// Graphics Library

let cnv = document.getElementById("canva");
let ctx = cnv.getContext("2d");
cnv.width = screen.width - 20;
cnv.height = screen.height - 123;

// ------------------------------------------------------------------

// draw line
function line(colour, sX, sY, eX, eY, lW) {
	ctx.strokeStyle = colour;
	ctx.lineWidth = lW;
	ctx.beginPath();
	ctx.moveTo(sX, sY); // start
	ctx.lineTo(eX, eY); // end
	ctx.stroke();
}

/*
Call function
line("blue", 100, 100, 300, 300, 10);
line("red", 1000, 1000, 400, 400, 1);
*/

// ------------------------------------------------------------------

// draw rectangle (filled or stroked)
function rect(x, y, w, h, style, colour) {
	if (style == "fill") {
		ctx.fillStyle = colour;
		ctx.fillRect(x, y, w, h); // fill rectangle
	} else if (style == "stroke") {
		ctx.strokeStyle = colour;
		ctx.strokeRect(x, y, w, h); // stroke rectangle
	}
}

/*
Call function
line("blue", 100, 100, 300, 300, 10);
rect(300, 300, 600, 200, "fill", "orange");
rect(300, 500, 600, 200, "stroke", "black");
*/

// ------------------------------------------------------------------

// draw circle
// counterC is counter-clockwise: default is false --> indicates clockwise
function circ(x, y, r, sAng, eAng, counterC, style, colour) {
	if (style == "fill") {
		ctx.fill();
        ctx.fillStyle() = colour; // fill circle
		ctx.arc(x, y, r, sAng, eAng, counterC);
	} else if (style == "stroke") {
		ctx.stroke();
        ctx.strokeStyle = colour;
		ctx.arc(x, y, r, sAng, eAng, counterC);
	}
}

line("blue", 100, 100, 300, 300, 10);
rect(300, 300, 600, 200, "fill", "orange");
rect(300, 500, 600, 200, "stroke", "black");
circ(300, 400, 100, 0, 2 * Math.PI, false, "stroke", "red");
