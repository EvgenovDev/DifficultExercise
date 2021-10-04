"use strict";
// let num = 266219;
// //Создаем массив делая каждую цифру элементом массива из значения переменной num
// let numStr = num.toString();
// let numArray = numStr.split("");
// //Создаем переменную для записи итога перемножения цифр и записываем в нее самую первую цифру массива
// let multipliedNum = +numArray[0];
// let cubeRootNum = 0;

// for(let i = 1; i < numArray.length; i++){
// 	multipliedNum *= +numArray [i];
// }
// //Возводим в куб наше перемноженное число 
// cubeRootNum =  multipliedNum**3;

// console.log("Результат перемножения цифр в числе " + num + " -> " + multipliedNum);

// console.log ("Возводим полученное число сверху в куб -> " + multipliedNum + "^3" + " = "  + cubeRootNum);

// console.log ("Первые две цифры от числа " + cubeRootNum + " -> " + (cubeRootNum.toString()).substring(0,2));

let lang = prompt("Введите язык на котором хотите увидеть названия дней недели", "Рус-для русского / Англ - для английского");


let days = [
	["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресение"],
	["Sunday","Monday","Tuesday","Wendsday","Thursday","Friday","Saturday"]
];

// if (lang === "Рус") {
// 	days[0].forEach((element) => {
// 		console.log(element);
// 	});
// 	} else if (lang ==="Англ") {
// 		days[1].forEach((element) => {
// 			console.log(element);
// 		});
// 	} else if (lang === "") {
// 		console.log("Вы ничего не ввели. Обновите страницу и попробуйте еще раз");
// 	} else {
// 		console.log("Вы ввели не то слово, либо ввели с маленькой буквы, либо нажали отмена. Обновите страницу и попробуйте еще раз");
// 	}

switch (lang) {
	case "Рус":
		days[0].forEach((elem) => {
			console.log(elem);
		});
		break;
	case "Англ": 
		days[0].forEach((elem) => {
			console.log(elem);
		});
		break;
	default:
		console.log("Вы ввели не то слово или ничего не ввели,либо ввели с маленькой буквы, либо нажали отмена. Обновите страницу и попробуйте еще раз");
}