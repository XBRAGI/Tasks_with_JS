// Написать функцию, которая принимает два аргумента: строку и букву. Функция должна подсчитывать количество вхождений указанной буквы в строке и вернуть это число.

function char_count(str, letter) {
	let letterCount = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === letter) {
			letterCount += 1;
		}
	}
	return letterCount;
}

console.log(char_count('hello', 'h'));