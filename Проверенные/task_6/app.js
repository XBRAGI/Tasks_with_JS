// Написать функцию, которая принимает строку, а возвращает эту же строку только задом наперед.

function reverseString(str) {
	let newString = "";
	for (let i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString
}

console.log(reverseString('hello'));