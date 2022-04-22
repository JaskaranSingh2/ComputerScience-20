let words = [
	"Kohli",
	"Singh",
	"Dhoni",
	"Raina",
	"Kumar",
	"Scott",
	"Brown",
	"Royle",
	"Motor",
];

function chooser() {
	let instance = words[Math.floor(Math.random() * words.length)];
	return (wordArray = instance.split(""));
}
