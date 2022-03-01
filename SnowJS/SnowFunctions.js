// Canvas info
let cnv = document.getElementById("canva");
let ctx = cnv.getContext("2d");

// Canvas Width and Height
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;


// Create and return the properties of the ball

class BallProperties {
    constructor(x, r) {
        this.x = x;
        this.y = r;
        this.r = r;
    }
}
function randomizeProperties() {
    return new BallProperties(randomInt(0, cnv.width), randomInt(0, 15));
}
console.log(randomizeProperties())
function multipleBallObjectArray(n) {
    arrayOfSnowBalls = [];
    for (let i = 0; i < n; i++) {
        arrayOfSnowBalls.push(randomizeProperties());
    }
    return arrayOfSnowBalls;
}

function draw(specificBall) {
    for (let i = 0; i < specificBall.length; i++) {
        circ(specificBall.x, specificBall.y, specificBall.r, 0, 2 * Math.PI, "fill", "black");
    }
}