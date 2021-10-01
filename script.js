let num = 266219;
//Создаем массив делая каждую цифру элементом массива из значения переменной num
let numStr = num.toString();
let numArray = numStr.split("");
//Создаем переменную для записи итога перемножения цифр и записываем в нее самую первую цифру массива
let multipliedNum = +numArray[0];
let cubeRootNum = 0;

for(let i = 1; i < numArray.length; i++){
	multipliedNum *= +numArray [i];
}
//Возводим в куб наше перемноженное число 
cubeRootNum =  multipliedNum**3;

console.log("Результат перемножения цифр в числе " + num + " -> " + multipliedNum);

console.log ("Возводим полученное число сверху в куб -> " + multipliedNum + "^3" + " = "  + cubeRootNum);

console.log ("Первые две цифры от числа " + cubeRootNum + " -> " + (cubeRootNum.toString()).substring(0,2));