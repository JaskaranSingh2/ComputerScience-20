// Parent and Child Class
class Person {
	constructor(_name, _age) {
		this.name = _name;
		this.age = _age;
	}

	describe() {
		console.log(`I am ${this.name} and I am ${this.age} years old`);
	}
}

// Take attributes from class Person
class Programmer extends Person {
	constructor(_name, _age, _yearsOfExperience) {
		// gets access from the parent class and gets access to its properties
		super(_name, _age);

		// Custom behavior
		this.yearsOfExperience = _yearsOfExperience;
	}

	code() {
		// only programmers can access this, not 'person'
		console.log(`${this.name} is coding`);
	}
}

let person1 = new Person("Jeff", 45);
let programmer1 = new Programmer("Dom", 56, 12);
console.log(person1);
console.log(programmer1);
programmer1.code();

programmer1.describe();

const programmers = [
	new Programmer("Dom", 56, 12),
	new Programmer("Jeff", 24, 4),
];

function developSoftware(programmers) {
	// Develop software
	for (let programmer of programmers) {
		programmer.code();
	}
}

developSoftware(programmers);
