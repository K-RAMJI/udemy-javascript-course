"use strict";

/*const age = 33;
age >= 18? console.log(`Eligible to vote.`):
    console.log(`Not eligible to vote.`);*/

// we can use ternary operator to conditionally declare variables.

const age = 33;
const vote=age >= 18?`Eligible to vote.`:`Not eligible to vote`;
console.log(vote);


let vote2;
if(age>=18){
    vote2=`Eligible to vote.`;
}else{
    vote2=`Not eligible to vote.`;
}
console.log(vote2);

// we can use ternary operator in template literal.

console.log(`My name is ramji and I am ${age>=18?`eligible to vote`:`not eligible to vote`} `);


/*The Conditional (Ternary) Operator

    If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

    After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

const population=52;
console.log(`Portugal's population is ${population>130?`above`:`below`} average`);












