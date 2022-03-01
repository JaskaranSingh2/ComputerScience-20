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

function multipleBallObjectArray(n) {
    arrayOfSnowBalls = [];
    for (let i = 0; i < n; i++) {
        arrayOfSnowBalls.push(randomizeProperties());
    }
    return arrayOfSnowBalls;
}

function draw() {
    for (let i = 0; i < multipleBallObjectArray(5).length; i++) {
        circ(multipleBallObjectArray(5)[i].this.x, multipleBallObjectArray(5)[i].this.y, multipleBallObjectArray(5)[i].this.r, 0, 2 * Math.PI, "fill", "black");
    }
}

draw();