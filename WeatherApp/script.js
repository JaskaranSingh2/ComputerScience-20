cityIn.addEventListener("keypress", (e) => {
	if (e.key === "Enter") {
		e.preventDefault();
		cityHandler();
	}
});

window.onload = () => {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=2c88e700955f6362d510e3050fc9725d"
	)
		.then((data) => data.json())
		.then((data) => {
			desc1 = data.weather[0].description;
			console.log("desc1 " + data.weather[0].description);
			console.log(data);
			desc.innerHTML = desc1;
			temp.innerHTML = data.main.temp + "&deg;";
			loc.innerHTML = data.name;
			if (desc1.indexOf("rain") != -1) {
				display.classList.add("rainy");
			} else if (desc1.indexOf("cloud") != -1) {
				document.classList.add("cloudy");
			} else if (desc1.indexOf("sunny") != -1) {
				document.classList.add("sunny");
			}
		});
};

function cityHandler() {
	let cityName = cityIn.value;
	const myKey = config.key;
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			cityName +
			"&units=metric&appid=" +
			myKey
	)
		.then((data) => data.json())
		.then((data) => {
			desc1 = data.weather[0].description;
			console.log("desc1 " + data.weather[0].description);
			console.log(data);
			desc.innerHTML = desc1;
			temp.innerHTML = data.main.temp + "&deg;";
			loc.innerHTML = data.name;
			if (desc1.indexOf("rain") != -1) {
				document.body.className = "rainy";
			} else if (desc1.indexOf("cloud") != -1) {
				document.body.className = "cloudy";
			} else if (desc1.indexOf("sunny") != -1) {
				document.body.className = "sunny";
			}
		});
}
