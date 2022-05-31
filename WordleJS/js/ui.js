// check if dark mode is enabled
// if enabled, disable
// if disabled, enable

let darkMode = localStorage.getItem("darkMode");
console.log("Dark Mode:", darkMode);
const darkModeToggle = document.getElementById("dark-mode-button");
const bodyEl = document.body;

const enableDarkMode = () => {
	bodyEl.classList.remove("light-mode-class");
	bodyEl.classList.add("dark-mode-class");
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	bodyEl.classList.add("light-mode-class");
	localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
	enableDarkMode();
} else {
	disableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode");
	if (darkMode != "enabled") {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
