class Char {
	constructor(name, p1, p2, lvl) {
		this.n = name;
		this.p1 = p1;
		this.p2 = p2;
		this.lvl = lvl;
	}
	speak(phraseN) {
		if (phraseN == 1) {
			return this.p1;
		} else if (phraseN == 2) {
			return this.p2;
		} else {
			alert("Input a valid parameter!");
		}
	}
	setLevel(newLevel) {
		this.lvl = newLevel;
		return this.lvl;
	}
}

let char1 = new Char("Kadam", "Ok", "Problem?", 0);

const h2El = document.createElement("h2");
h2El.innerHTML += "P1: " + char1.speak(1) + "<br>";
h2El.innerHTML += "P2: " + char1.speak(2) + "<br>";
h2El.innerHTML += "Level: " + char1.setLevel(2) + "<br>";
document.body.append(h2El);
