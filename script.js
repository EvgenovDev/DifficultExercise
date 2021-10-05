'use strict';

let a = " Какая-то строчка,написанная специально для этого урока у которой вначале и в конце есть пробелы ";
let b = " Просто строчка ";
let c = null;

const someThingFunction = (elem) => {
	if (typeof(elem) !== "string") {
		return "Аргумент не является строкой";
	} else {
			if(elem.length > 30) {
				return elem.substring(0, 31).trim() + "...";
			} else {
				return elem.trim();
			}
		}
};

console.log(someThingFunction(a));
console.log(someThingFunction(b));
console.log(someThingFunction(c));