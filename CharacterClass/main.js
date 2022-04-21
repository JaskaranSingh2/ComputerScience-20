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
	name() {
		return this.n;
	}
}

let char1 = new Char("Kadam", "Ok", "Problem?", 0);
let char2 = new Char("John", "Yes", "I have one", 10000);
const h2El = document.createElement("h2");
h2El.innerHTML += "Name 1: " + char1.name() + "<br>";
h2El.innerHTML += "P1: " + char1.speak(1) + "<br>";
h2El.innerHTML += "P2: " + char1.speak(2) + "<br>";
h2El.innerHTML += "Level: " + char1.setLevel(2) + "<br>";
h2El.innerHTML += "Name 2: " + char2.name() + "<br>";
h2El.innerHTML += "P1: " + char2.speak(1) + "<br>";
h2El.innerHTML += "P2: " + char2.speak(2) + "<br>";
h2El.innerHTML += "Level: " + char2.setLevel(2) + "<br>";
document.body.append(h2El);
