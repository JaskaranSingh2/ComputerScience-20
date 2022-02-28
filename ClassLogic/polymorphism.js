/* 
The polymorphism is a core concept of an object-oriented paradigm
that provides a way to perform a single action in different forms.
It provides an ability to call the same method on different JavaScript objects.
*/

class Animal {
	constructor(name) {
		this.name = name;
	}

	makeSound() {
		console.log("Generic Animal Sound.");
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}

	// Achieves polymorphism by overriding the method inside the child class Dog of that parent class's makeSound
	makeSound() {
		super.makeSound(); // calls parent class's makeSound function
		console.log("Woof! Woof!");
	}
}

const a1 = new Animal("Dom");
const a2 = new Dog("Jeff");

a1.makeSound();
a2.makeSound();
