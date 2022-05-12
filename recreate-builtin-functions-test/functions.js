// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA
function indexOf(item, arr) {
	let position = -1
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == item) {
			position = i
		}
	}
	return position
}

function reverse(arr) {
	result = []
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[arr.length - 1 - i]);
	}
	return result;
}
function concat(a, b) {
	for (let i = 0; i < b.length; i++) {
		a.push(b[i]);
	}
	return a;
}

function slice(start, stop, arr) {
	let result = [];
	for (let i = start; i < stop; i++) {
		result.push(arr[i]);
	}
	return result;
}
function join(sep, arr) {
	let result = "";
	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			result += arr[i];
		} else {
			result += arr[i] + sep;
		}
	}
	return result;
}

function max(n) {
	// Check if the current one is greater that the next one, if so replace the current
	let current = 0;
	let currentAlpha = "";
	for (let i = 0; i < n.length; i++) {
		if (typeof n[i] === "string") {
			if (n[i] >= currentAlpha) {
				currentAlpha = n[i];
			}
		} else {
			if (n[i] >= current) {
				current = n[i];
			}
		}
	}

	if (currentAlpha != "") {
		return currentAlpha;
	} else {
		return current;
	}
}
