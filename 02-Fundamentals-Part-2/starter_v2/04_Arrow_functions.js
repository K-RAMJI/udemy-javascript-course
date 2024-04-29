"use strict";

"use strict";

//function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression

/*here function is without a name which is also called an anonymous function. Also, this function is an expression, and it produces a value which is then stored in calcAge2 variable.*/

const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}// here this function is just a value and we can store it in a variable.

const age2 = calcAge2(1991);

console.log(age1, age2);

/*Important note
* Difference between function declaration and function expression:
*
* We can call a function declaration before it is actually defined in the code.
*
* But we cannot call a function expression before it is actually defined in the code.
*
* This happens because of a feature called hoisting.
* ------
*
* Suggested to use function expressions over function declaration. This forces to make the function call AFTER the function is actually defined and keeps the code clean. Also, we can store the value for usage.
* */

//-------------------------------

//Arrow functions

/*It is a special form of function expression that is faster to write. */

/*//function expression
const calcAge3=function(birthYear){
    return 2024-birthYear;
}*/

//writing the above function expression in arrow function

/*if the arrow function has a concise body consisting of a single expression, you can omit the `return` keyword, as the result of the expression will be implicitly returned. However, if the function body requires multiple statements or more complex logic, you need to use `return` explicitly to return a value.View section notes for more details. Also read about the advantages and disadvantages of arrow functions. A small point to remember : arrow function doesn't get 'this' key word. read about this online.*/

//no parameter
const calcAge3 = () => 2024 - 1991;
console.log(calcAge3());

//single parameter
const calcAge4 = birthYear => 2024 - birthYear;
console.log(calcAge4(1991));

// single parameter with multiple statements.
const yearsUntilRetirement = birthYear => {
    const age = 2024 - birthYear;
    return 65 - age;
}
console.log(`Years until retirement ${yearsUntilRetirement(1991)}.`)

// multiple parameters with multiple statements.
const ramjiDetails = (birthYear, name) => {
    const age = 2024 - birthYear;
    return `My name is ${name} and I am ${age} years old.`;
}
console.log(`${ramjiDetails(1991, `Ramji`)}`)

//Assignment

//function declaration
function percentageOfWorld1(population, country) {
    const average = (population / 7900) * 100;
    return `${country} has ${population} million people, so it's about ${average.toFixed(1)}% of the world population.`
}

console.log(percentageOfWorld1(1441, 'China'));
console.log(percentageOfWorld1(331, 'United States'));
console.log(percentageOfWorld1(213, 'Brazil'));
console.log(percentageOfWorld1(60, 'Spain'));

console.log(`========================================================`)
//function expression
const percentageOfWorld2 = function (population, country) {
    const average = (population / 7900) * 100;
    return `${country} has ${population} million people, so it's about ${average.toFixed(1)}% of the world population.`
};

console.log(percentageOfWorld2(1441, 'China'));
console.log(percentageOfWorld2(331, 'United States'));
console.log(percentageOfWorld2(213, 'Brazil'));
console.log(percentageOfWorld2(60, 'Spain'));

console.log(`========================================================`)

//Arrow function expression

const percentageOfWorld3 = (population, country) => {
    const average = (population / 7900) * 100;
    return `${country} has ${population} million people, so it's about ${average.toFixed(1)}% of the world population.`
};

console.log(percentageOfWorld3(1441, 'China'));
console.log(percentageOfWorld3(331, 'United States'));
console.log(percentageOfWorld3(213, 'Brazil'));
console.log(percentageOfWorld3(60, 'Spain'));