// HTML Elements
let steveImgEl = document.getElementById("steve-img");
let alexImgEl = document.getElementById("alex-img");
let villagerImgEl = document.getElementById("villager-img");
let fishBtnEl = document.getElementById("fish-btn");
let resultImgEl = document.getElementById("result-img");
let codSpanEl = document.getElementById("cod-span");
let salmonSpanEl = document.getElementById("salmon-span");
let tropicalSpanEl = document.getElementById("tropical-span");
let pufferSpanEl = document.getElementById("puffer-span");

// Global Variables
let character = "steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Event
fishBtnEl.addEventListener("click", catchFish);

function simCatch(x, y, z) {
	let randNum = Math.random();
	if (randNum < x) {
		numCod++;
		codSpanEl.innerHTML = numCod;
		resultImgEl.src = "img/Raw-Cod.png";
	} else if (randNum < y) {
		numSalmon++;
		salmonSpanEl.innerHTML = numSalmon;
		resultImgEl.src = "img/Raw-Salmon.png";
	} else if (randNum < z) {
		numTropical++;
		tropicalSpanEl.innerHTML = numTropical;
		resultImgEl.src = "img/Tropical-Fish.png";
	} else {
		numPuffer++;
		pufferSpanEl.innerHTML = numPuffer;
		resultImgEl.src = "img/Pufferfish.png";
	}
}
function catchFish() {
	if (character === "steve") {
		// STEVE PROBABILITIES: cod (70%), salmon (20%), tropical (5%), puffer (5%)
		simCatch(0.7, 0.9, 0.95);
	} else if (character === "alex") {
		// ALEX PROBABILITIES: cod (10%), salmon (10%), tropical (30%), puffer (50%)
		simCatch(0.1, 0.2, 0.5);
	} else if (character === "villager") {
		// VILLAGER PROBABILITIES: cod (25%), salmon (25%), tropical (25%), puffer (25%)
		simCatch(0.25, 0.5, 0.75);
	}
}

// Character Select
steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
villagerImgEl.addEventListener("click", selectVillager);

function selectSteve() {
	character = "steve";
	steveImgEl.classList.add("active");
	alexImgEl.classList.remove("active");
	villagerImgEl.classList.remove("active");
}

function selectAlex() {
	character = "alex";
	steveImgEl.classList.remove("active");
	alexImgEl.classList.add("active");
	villagerImgEl.classList.remove("active");
}

function selectVillager() {
	character = "villager";
	steveImgEl.classList.remove("active");
	alexImgEl.classList.remove("active");
	villagerImgEl.classList.add("active");
}
