// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
	 let result = ''
   for (let i = 0; i < string.length; i++) {
		(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) ? result +=  ' '+string[i] : result += string[i]

		
	 }
	 console.log(result);
	 return result
}

// solution('camelCasing')
// solution('identifier')
// solution('AZ  az')

// task 2-----------------------------------------------------------


// Нарциссическое число (или число Армстронга) — это положительное число, которое представляет собой сумму своих цифр, каждая из которых возведена в степень количества цифр в данном основании. В этой Ката мы ограничимся десятичной системой счисления (основание 10).

// Например, возьмем 153 (3 цифры), что является нарциссическим:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// и 1652 (4 цифры), что не является:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narcissistic(value) {
  let result = 0;
valStr = JSON.stringify(value);
for (let i = 0; i < valStr.length-1; i++) {
	console.log(valStr[i]);
	
}
}

narcissistic(132)