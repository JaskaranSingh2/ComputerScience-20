// Canvas info
let cnv = document.getElementById("canva");
let ctx = cnv.getContext("2d");

// Canvas Width and Height
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

window.addEventListener("resize", windowResize);

function windowResize() {
	cnv.width = window.innerWidth;
	cnv.height = window.innerHeight;
}

// Create and return the properties of the ball
class BallProperties {
	constructor(x, y, r, xV, yV) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.xVelocity = xV;
		this.yVelocity = yV;
	}
}

function multipleBallObjectArray(n) {
	arrayOfSnowBalls = [];
	for (let i = 0; i < n; i++) {
		arrayOfSnowBalls.push(
			new BallProperties(
				randomInt(0, cnv.width),
				randomInt(0, cnv.height),
				randomInt(2, 10),
				randomInt(-2, 3),
				randomInt(6, 10)
			)
		);
	}
	return arrayOfSnowBalls;
}

function draw(specificBall) {
	for (let i = 0; i < specificBall.length; i++) {
		circ(
			specificBall[i].x,
			specificBall[i].y,
			specificBall[i].r,
			0,
			2 * Math.PI,
			"fill",
			"white"
		);
	}
}

function move(specificBall) {
	for (let i = 0; i < specificBall.length; i++) {
		if ((specificBall[i].x >= cnv.width) | (specificBall[i].y >= cnv.height)) {
			specificBall[i].x = randomInt(0, cnv.width);
			specificBall[i].y = randomInt(0, 15);
			specificBall[i].xVelocity = randomInt(-4, 6);
			specificBall[i].yVelocity = randomInt(5, 12);
		} else {
			specificBall[i].x += specificBall[i].xVelocity;
			specificBall[i].y += specificBall[i].yVelocity;
		}
	}
}
