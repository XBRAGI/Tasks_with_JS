/* Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
   Ожидаемый результат: (3, 'a') => ['a', 'a', 'a'] */

function pushArr(num, str) {
	let finish = [];
	for (let i = 1; i <= num; i ++) {
		finish.push(str);
	}
	return finish;
}

console.log(pushArr(3, 'a'));