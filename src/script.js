class Worker {
	constructor(name, surname, rate , date) {
		this._name = name;
		this._surname = surname;
		this._rate = rate;
		this._date = date;
	}
	getSellery() {
		return this._rate * this._date;
	}
	
}

const work = new Worker("volodymyr", "kopynets", 15, 7 );
const anton = new Worker("anton","pashko", 20, 2);

console.log(`${work._name} ${work._surname} get his ${work.getSellery()}`);
console.log(`${anton._name} ${anton._surname} get his ${anton.getSellery()}`);
