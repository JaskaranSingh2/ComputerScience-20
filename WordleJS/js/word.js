// let words = [
// 	"KOHLI",
// 	"SINGH",
// 	"DHONI",
// 	"RAINA",
// 	"KUMAR",
// 	"SCOTT",
// 	"BROWN",
// 	"ROYLE",
// 	"MOTOR",
// ];

function chooser() {
	list = list.replace("\n", " ");
	console.log(list);
	let sortedWordList = list.split(" ");
	console.log(sortedWordList);
	let instance =
		sortedWordList[Math.floor(Math.random() * sortedWordList.length)];
	return (wordArray = instance.split(""));
}
