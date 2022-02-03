// button grabbers
const randomUser = document.getElementById("rand");
const allUser = document.getElementById("all");

randomUser.addEventListener("click", chooseRandomNickName);

function chooseRandomNickName() {
	// gets first+last name
	const input1 = document.getElementById("first").value;
	const input2 = document.getElementById("last").value;

	// Shows on HTML
	var showNickName = document.getElementById("showNickName");
	var names = ["Flash", "Dimes", "The Prez", "Che", "Splash", "Sparkles"];

	index = Math.floor(Math.random() * names.length);
	showNickName.innerHTML = `${input1} "${names[index]}" ${input2}`;
}
