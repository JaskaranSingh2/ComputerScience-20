let words = [
	"Kohli",
	"Singh",
	"Dhoni",
	"Raina",
	"Kumar",
	"Scott",
	"Brown",
	"Royle",
];

function getRandomWord() {
	return words[Math.floor(Math.random() * words.length)];
}
