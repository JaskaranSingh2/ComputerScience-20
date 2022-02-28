/* Basically, a static method is a method that does not 
require an instance of the class to be initialized. */

class Square {
	constructor(_width) {
		this.width = _width;
		this.height = _width;
	}

	static equals(a, b) {
		return a.width * a.height === b.width * b.height;
	}

	static isValidDimensions(width, height) {
		return width === height;
	}
}

let square1 = new Square(8);
let square2 = new Square(8);

// When doing static methods use the class name not the created instances
console.log(Square.isValidDimensions(7, 6));
