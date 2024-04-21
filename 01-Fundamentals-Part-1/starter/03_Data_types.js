"use strict";

/*let tempVariable;
let tempVariable=null;
console.log(tempVariable);*/


let javascriptIsFun=true;
console.log(javascriptIsFun);

//console.log(typeof true); //boolean
console.log(typeof javascriptIsFun); //boolean
/*console.log(typeof 33); //number
console.log(typeof `Ramji`); //string*/

//assigning a new value to a variable and dynamic typing.
javascriptIsFun=`YES`;
console.log(typeof javascriptIsFun); //boolean

//undefined
let year; //empty variable hold 'undefined'
console.log(year); //undefined
console.log(typeof year); //undefined

year=1991;
console.log(typeof year);

//An error/bug in JavaScript.
console.log(typeof null); // output is displayed as 'object'. but it is an error/bug in JS. It is not fixed for legacy reasons.

/* Assignments

Data Types

    Declare a variable called isIsland and set its value according to your country.
    The variable should hold a Boolean value.
    Also declare a variable language, but don't assign it any value yet.

    Log the types of isIsland, population, country and language to the console.
*/

let country=`India`;
let continent=`Asia`;
let population=1417;

let isIsland=false;
let language;

console.log(typeof(country),typeof(continent),typeof(population),typeof(isIsland),typeof(language));

