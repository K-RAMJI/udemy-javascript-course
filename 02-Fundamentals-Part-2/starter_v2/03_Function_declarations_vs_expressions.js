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

//Assignment

/*Function Declarations vs. Expressions

    The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

    To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

    Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

    Create a function expression which does the exact same thing, called percentageOfWorld2, and also call it with 3 country populations (can be the same populations).*/


//function declaration
function percentageOfWorld1(population, country) {
    const average = (population / 7900) * 100;
    return `${country} has ${population} million people, so it's about ${average.toFixed(1)}% of the world population.`
}

console.log(percentageOfWorld1(1441, 'China'));
console.log(percentageOfWorld1(331, 'United States'));
console.log(percentageOfWorld1(213, 'Brazil'));
console.log(percentageOfWorld1(60, 'Spain'));

//function expression
const percentageOfWorld2 = function (population, country) {
    const average = (population / 7900) * 100;
    return `${country} has ${population} million people, so it's about ${average.toFixed(1)}% of the world population.`
};

console.log(percentageOfWorld2(1441, 'China'));
console.log(percentageOfWorld2(331, 'United States'));
console.log(percentageOfWorld2(213, 'Brazil'));
console.log(percentageOfWorld2(60, 'Spain'));