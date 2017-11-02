class MyString {
	constructor() {

	}
	reverse(text) {
		return console.log(text.split("").reverse().join(""));
	}
	ucFirst(text) {
		return console.log(text[0].toUpperCase() + text.slice(1));
	}
	ucWords(text) {
		let texts = text.split(" ");
		for (let i=0;i<texts.length;i++) {
			let letter = texts[i].split("");
			texts[i] = letter[0].toUpperCase() + letter.slice(1).join("");
		}
		texts = texts.join(" ");
		console.log(texts);
	}
}

var str = new MyString();
str.reverse("vova");

str.ucFirst("vova");
str.ucWords("vova anton artur vasya");