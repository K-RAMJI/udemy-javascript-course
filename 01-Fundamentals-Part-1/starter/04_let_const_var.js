"use strict";

//var - old way
// let , const - Introduced in ES6. Modern JS.

let age = 30;
age =33; // variable mutated. possible with let keyword.

const birthYear= 1991;
// birthYear=1992; // immutable

// const job ; //cannot declare empty const variable.

/*Always advisable to use 'const' to avoid possibility of generating issues. Advisable to use 'let' only when the value of the variable gets changed.*/

//var - is mutable. Advisable not to use var.

/*Note : 'var' is block-scoped and 'let' is function-scoped. Detailed in section-7*/

var job=`programmer`;
job= `teacher`;

//Always declare variables properly.
/*lastName=`Kumararajan`;
console.log(lastName);*/

/* Assignments
* let, const and var

    Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

    Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

    Try to change one of the changed variables now, and observe what happens.
*/

const country=`India`;
const continent=`Asia`;
let population=1417;

const isIsland=false;
let language;

console.log(typeof(country),typeof(continent),typeof(population),typeof(isIsland),typeof(language));

language=`English`;
// isIsland = true; //TypeError: Assignment to constant variable.

console.log(typeof(country),typeof(continent),typeof(population),typeof(isIsland),typeof(language));

