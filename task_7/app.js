// Написать функцию, которая проверяет, является ли переданная строка палиндромом? Палиндром - это слово, фраза или последовательность, которые читаются так же, как вперед, назад, например, level. (возвращает true / false).

function palindromeChecker(str) {
	let newString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	if (str === newString) {
		return true;
	} else {
		return false;
	}
}

console.log(palindromeChecker('dog'));