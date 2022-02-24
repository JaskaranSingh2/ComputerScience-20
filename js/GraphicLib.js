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
	ctx.closePath();
}

// ------------------------------------------------------------------

// draw rectangle (filled or stroked)
function rect(x, y, w, h, style, colour, lW) {
	if (style == "fill") {
		ctx.fillStyle = colour;
		ctx.fillRect(x, y, w, h); // fill rectangle
	} else if (style == "stroke") {
		ctx.lineWidth = lW;
		ctx.strokeStyle = colour;
		ctx.strokeRect(x, y, w, h); // stroke rectangle
	}
}

// ------------------------------------------------------------------

// draw circle
// counterC is counter-clockwise: default is false --> indicates clockwise
function circ(x, y, r, sAng, eAng, style, colour, lW, counterC) {
	ctx.beginPath(); // begin path
	ctx.arc(x, y, r, sAng, eAng, counterC);
	if (style == "fill") {
		ctx.fillStyle = colour; // fill colour
		ctx.fill(); // fill circle
	} else if (style == "stroke") {
		ctx.lineWidth = lW;
		ctx.strokeStyle = colour; // outline colour
		ctx.stroke(); // stroke/outline circle
	}
}

// ------------------------------------------------------------------

// draw triangle
function triangle(x1, y1, x2, y2, x3, y3, style, colour, lW) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	if (style == "fill") {
		ctx.fillStyle = colour;
		ctx.fill();
	} else if (style == "stroke") {
		ctx.lineWidth = lW;
		ctx.strokeStyle = colour;
		ctx.closePath();
		ctx.stroke();
	}
}

// ------------------------------------------------------------------

// write text
function text(font, msg, x, y, style) {
	ctx.font = font;
	if (style == "fill") {
		ctx.fillText(msg, x, y);
	} else if (style == "stroke") {
		ctx.strokeText(msg, x, y);
	}
}
