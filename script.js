'use strict';

const updateTime = () => {
	let weekDayArr = [ "Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
	let monthArray = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
	let todayDate = new Date();
	let todayDay = todayDate.getDate();
	let todayWeekDay = todayDate.getDay();
	let todayMonth = todayDate.getMonth();
	let todayYear = todayDate.getFullYear();
	let hourNow = todayDate.getHours();
	let minuteNow = todayDate.getMinutes();
	let secondNow = todayDate.getSeconds();
	
	const whatMonthToday = (month) => {
		let monthToday;
		monthArray.forEach((elem, i) => {
			if (month == i) {
				monthToday = monthArray[i];
			}
		});
		return monthToday;
	};
	
	const whatDayWeekDayToday = (day) => {
		let today;
		weekDayArr.forEach((elem, i) => {
			if (day == i) {
				today = weekDayArr[i];
			}
		});
		return today;
	};
	
	const subjectiveCaseHour = (hour) => {
		if (hour == 1 || 21) {
			return "час";
		} else if ((hour > 1 && hour < 5) || (hour > 21 && hour < 25)) {
			return "часа";
		} else {
			return "часов";
		}
	};
	
	const subjectiveCaseMinute = (minute) => {
		let minuteX = minute % 10;
		if ((minuteX == 1) && (minute % 100 != 11)) {
			return "минута";
		}else if (minute < 21 && minute > 4) {
			return "минут";
		} else if ((minuteX == 2 || minuteX == 3 || minuteX == 4)) {
			return "минуты";
		} else {
			return "минут";
		}
	};
	
	const subjectiveCaseSecond = (second) => {
		let secondX = second % 10;
		if ((secondX == 1) && (second % 100 != 11)) {
			return "секунда";
		}  else if(second < 21 && second > 4) {
			return "секунд";
		} else if (secondX == 2 || secondX == 3 || secondX == 4) {
			return "секунды";
		} else {
			return "секунд";
		}
	};
	
	const addZero = (value) => {
		if (value < 10) {
			return  "0" + value;
		} else {
			return value;
		}
	};
	//Первый вариант
	document.getElementById("div").innerHTML = "Сегодня " + whatDayWeekDayToday(todayWeekDay) + ", " + todayDay + " " + whatMonthToday(todayMonth) + " " + todayYear + " года, " + hourNow + " " + subjectiveCaseHour(hourNow) + " " + minuteNow + " " + subjectiveCaseMinute(minuteNow) + " " + secondNow + " " + subjectiveCaseSecond(secondNow);
	//Второй вариант
	// document.getElementById("div").innerHTML = addZero(todayDay) + "." + addZero(todayMonth) + "." + addZero(todayYear) + " - " + addZero(hourNow) + ":" + addZero(minuteNow) + ":" + addZero(secondNow);
};
setInterval (updateTime, 1000);