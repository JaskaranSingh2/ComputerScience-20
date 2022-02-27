// Graphics Library

// Requires global cnv and ctx

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
function text(font, msg, x, y, style, colour) {
	ctx.font = font;
	if (style == "fill") {
		ctx.fillStyle = colour;
		ctx.fillText(msg, x, y);
	} else if (style == "stroke") {
		ctx.strokeStyle = colour;
		ctx.strokeText(msg, x, y);
	}
}

// ------------------------------------------------------------------

// draw ellipse
function ellipse(x, y, xR, yR, rotation, sAng, eAng, style, colour, lW) {
	ctx.beginPath();
	ctx.ellipse(x, y, xR, yR, rotation, sAng, eAng);
	if (style == "fill") {
		ctx.fillStyle = colour;
		ctx.fill();
	} else if (style == "stroke") {
		ctx.lineWidth = lW;
		ctx.strokeStyle = colour;
		ctx.stroke();
	}
}
// ------------------------------------------------------------------

// change canvas background with choice of colour
function background(colour) {
	rect(0, 0, cnv.width, cnv.height, "fill", colour);
}
// ------------------------------------------------------------------

/*
Draw Image
let imgEl = document.createElement("img");
imgEl.src = "download.jpg";
window.addEventListener("load", draw);
function draw() {
	ctx.drawImage(imgEl, 200, 400, 100, 100);
	ctx.drawImage(imgEl, 50, 50, 100, 200);
}
*/

// didn't do Image Clip
