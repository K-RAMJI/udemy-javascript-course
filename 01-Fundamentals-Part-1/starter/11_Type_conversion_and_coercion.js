"use strict";

//type conversion
//String to Number
const birthYear=`1991`;
console.log(Number(birthYear)); //using built-in Number() function.
console.log(Number(birthYear)+18);

// trying to convert a string to number. We get 'NaN' which stands for 'Not-a-Number'.
//JS gives us this 'Not-a-Number' value whenever an operation that involves numbers fails to produce a new number. Basically 'Not-a-Number' means invalid number. It is still a number somehow...but it's an invalid one.
console.log(Number(`Ramji`));
console.log(typeof NaN); //number

//Number to String
console.log(String(1991),23);

//type coercion

//type coercion occurs. converting number to string. type coercion occurs in template literals too.
console.log(`I am` + 33 + ` years old`);

//Minus will trigger reverse coercion. Strings to Numbers
console.log('50' - '20' - 5);

//Plus will trigger normal coercion. Numbers to strings
console.log('25' + '20' + 5);

//String to number conversion.
console.log('23' * '2');
console.log('23' / '2');

//guess the output
let n = '1' + 1;
n = n-1;
console.log(n);

let m=5+5+5+5+`6`; //206
console.log(m);

let p=`10`-`4`-`3`- 2 +`5`; //15
console.log(p);

//Note : Read '#3' in section notes for reference.

//Assignment

console.log('9' - '5'); // -> ? 4
console.log('19' - '13' + '17'); // -> ? 617
console.log('19' - '13' + 17); // -> ? 23
console.log('123' < 57); // -> ? false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ? 1143
