// вывод в консоли браузера
console.log('Hello, JavaScript!');

// объявляем переменную.
let word = "я слово";

word = "another word";
console.log(word)

const something = "another text";

console.log("тип данных до переопределения - ", typeof word);
word = 5
console.log("тип данных переменной word -", typeof word);

console.log(document);

const btn = document.getElementById("btn1");
console.log(btn);

let text = document.getElementsByClassName("heading");
console.log(text);
console.log(text[0]);

let mdnLink = document.getElementsByTagName("a");
console.log(mdnLink);
console.log(mdnLink[0])

const heading2 = document.createElement("h2");
console.log(heading2);
document.body.appendChild(heading2);

const textNode = document.createTextNode("текст");
heading2.appendChild(textNode)
console.log(heading2);
