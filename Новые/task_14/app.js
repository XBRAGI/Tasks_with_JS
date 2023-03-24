/* Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
   Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] */

// function clearArr(arr) {
// 	let finish = [];
// 	for (i = 0; i <= arr.length-1; i++) {
// 		if (arr[i] !== false || arr[i] !== undefined || arr[i] !== '' || arr[i] !== 0 || arr[i] !== null) {
// 			finish.push(i);
// 		} else {
// 			break;
// 		}
// 	}
// 	return finish;
// }

// console.log(clearArr([0, 1, false, 2, undefined, '', 3, null]))

function compact(array) {
	let newArray = array.filter(function(i) {
		return i > 0;
	})
	return newArray;
}

console.log(compact([0, 1, false, 2, undefined, '', 3, null]));