let words = list.toUpperCase().split("\n");
// everytime it encounters whatever is in the params, it will split whatever is before that thing in the params
function chooser() {
	let instance = words[Math.floor(Math.random() * words.length)];
	return (wordArray = instance.split(""));
}
