let words = [
	"KOHLI",
	"SINGH",
	"DHONI",
	"RAINA",
	"KUMAR",
	"SCOTT",
	"BROWN",
	"ROYLE",
	"MOTOR",
];

function chooser() {
	let instance = words[Math.floor(Math.random() * words.length)];
	return (wordArray = instance.split(""));
}
