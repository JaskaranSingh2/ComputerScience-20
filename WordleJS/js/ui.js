btnEl = document.getElementById("dark-mode-button");
btnEl.addEventListener("click", darkToggle);
function darkToggle() {
	bodyEl = document.body;
	bodyEl.classList.toggle("dark-mode-class");
}
