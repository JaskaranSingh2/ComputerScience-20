let h1 = document.getElementById("h1")



requestAnimationFrame(animateFunc);

let snowBallArrObj = multipleBallObjectArray(prompt("How many snowballs?"));

function animateFunc() {
    draw(snowBallArrObj[i]);
    h1.innerHTML = snowBallArrObj[i]
    requestAnimationFrame(animateFunc);
}