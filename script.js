'use strict';

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
let today = new Date ();

week.forEach((elem, index) => {
	if (elem === "Суббота" || elem === "Воскресение") {
		elem = elem.italics();
		if (index === today.getDay()) {
			elem = elem = elem.italics().bold();
		}
	} else if (index === today.getDay()) {
		elem = elem.bold();
	}
	console.log(elem);
});
