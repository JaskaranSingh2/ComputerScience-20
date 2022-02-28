class Square {
	constructor(_width) {
		this.width = _width;
		this.height = _width;
		this.numOfRequestsForArea = 0;
	}

	// getter
	get area() {
		this.numOfRequestsForArea++;
		return this.width * this.height;
	}

	// setter
	set area(area) {
		this.width = Math.sqrt(area);
		this.height = this.width;
	}
}

let square1 = new Square(4);
// no need to put .area() [parentheses] because it is a property of an object

// setter cont.: in this case we will 'set' area to 25
square1.area = 25;
console.log(square1.width);
console.log(square1.height);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.area);
console.log(square1.numOfRequestsForArea);
