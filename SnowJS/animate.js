requestAnimationFrame(animateFunc);

snowBallArrObj = multipleBallObjectArray(prompt("How many snowballs?"));

function animateFunc() {
    draw(snowBallArrObj[i]);
    requestAnimationFrame(animateFunc);
}