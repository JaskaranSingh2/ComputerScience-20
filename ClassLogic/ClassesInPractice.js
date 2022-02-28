let myList = document.getElementById("myList");
class ListBinding {
	constructor(element) {
		this.listElement = element;
		this.textList = [];
	}

	/* Makes an <li>text</li> element/tag */
	static createListItem(text) {
		const li = document.createElement("li");

		li.textContent = text;

		return li;
	}

	update() {
		/* Remove all existing <li> elements/tags */
		/* While there is a first child, remove the first child */
		while (this.listElement.firstChild) {
			this.listElement.removeChild(this.listElement.firstChild);
		}
		/* Fill <ul>/<ol> tag with <li> */
		for (const text of this.textList) {
			this.listElement.appendChild(ListBinding.createListItem(text));
		}
	}

	add(text) {
		this.textList.push(text);
		this.update();
	}

	remove(index) {
		this.textList.splice(index, 1);
		this.update();
	}
}

let listBinding = new ListBinding(myList);
