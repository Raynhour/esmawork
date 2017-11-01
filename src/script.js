class Dog {
	constructor(){
		this._bark = "gavgavgav";
	}
	bark () {
		console.log(this._bark);
	}
	
}

class SubDog extends Dog {
	constructor(parent) {
		super();
		this.parent = parent;
	}
	bark () {
		this._bark = "gavmewgavmew";
	}
}

scream.bark();

const scream = new Dog();
const subscream = new SubDog(scream);

scream.bark();
subscream.bark();
