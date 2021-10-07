'use strict';

let arr = [];

const getRandomNumber = (min, max) => {
	min = Math.ceil();
	max = Math.floor();
	return Math.floor(Math.random(min, max) * 1000);
};


for (let i = 0; i < 30; i++) {
	arr[i] = String(getRandomNumber(300, 2000));
	for (let j = 0; j < 1; j++) {
		if(arr[i][0] == 2 || arr[i][0] == 4) {
			console.log(arr[i]);
		}
	}
}
console.log(arr);

console.log("Вывод простых числел от 0 до 100: ");
let str = "Делители этого числа -> ";
let n = 100;
let specialNum;

here:
for (let i = 2; i <= n; i++) {
			for(let k = 2; k < i; k++) {
				if (i % k == 0) {
					continue here;
				}
		}
		console.log(i + " " + str + " 1 и " + i);
}