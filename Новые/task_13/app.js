/* Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке. Чтобы было интересно НЕ ИСПОЛЬЗУЙ МЕТОД reverse()
   Ожидаемый результат: [1, 2, 3] => [3, 2, 1] */

function reverseArr(arr) {
	let finish = [];
	for (let i = arr.length; 0 < i; i--) {
		finish.push(i);
	}
	return finish;
}

console.log(reverseArr([1, 2, 3]));