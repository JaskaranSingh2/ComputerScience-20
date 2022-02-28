// Start With Capital Letter for Class Name.
class Rectangle {
	/* 
        Class -> Object
        
        Instance Properties: what they have
            - name
            - age
            - height
            - etc.
        
        Instance Methods: what they do
            - talk
            - run
            - jump
    */

	// Setups objects
	constructor(_width, _height, _colour) {
		console.log("the Rectangle is being created!");
		this.width = _width;
		this.height = _height;
		this.colour = _colour;
	}

	getArea() {
		return this.width * this.height;
	}

	printDesc() {
		console.log(
			`I am a rectangle of ${this.width} x ${this.height} and I am ${this.colour}`
		);
	}
}

let myRect1 = new Rectangle(5, 3, "blue");
let myRect2 = new Rectangle(10, 5, "red");

console.log(myRect1.getArea());
console.log(myRect2.getArea());

myRect2.printDesc();
