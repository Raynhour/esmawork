class Dog {
	constructor(title){
		this.title= "vova";
		
		console.log(Dog.title);
	}
	get name () {
		return this._lastName = "again";
	}
}

let scream = new Dog("vova");
let name = scream.name;
console.log(name);
console.log(scream.title);
