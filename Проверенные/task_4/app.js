// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
	document.write('-' + arr[i]);
}
document.write('-' + '<br>');

//--------------------------------------------------------

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

const arr1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < arr1.length; i++) {
	if (arr1[i] === 'Saturday' || arr1[i] === 'Sunday') {
		document.write('<b>' + arr1[i] + '</b> ');
	} else {
		document.write(arr1[i] + ' ');
	}
}
document.write('<br>')

//---------------------------------------------------------

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const day = 4;

for (let i = 0; i < week.length; i++) {
	if (i == day) {
		document.write('<i>' + week[i] + '<i>' + ' ');
	} else {
		document.write(week[i] + ' ');
	}
}