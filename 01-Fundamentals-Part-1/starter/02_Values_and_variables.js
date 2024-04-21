"use strict";

/*let js = `amazing`;
console.log(45 + 65);

console.log(`Ramji`);
console.log(22);*/

let firstName = `Muthulakshmi`;
console.log(firstName);
/*console.log(firstName);
console.log(firstName);*/

//Naming conventions
let first = `Ramji`;
let firstPersonName = `Ramji`;

//Invalid variable names
// let 3years=3; Understand the error messages.
//let not$valid=`lorem`;

//Valid
let not_valid = `lorem`;
let _new = 27;
let $function = 30;

//Reserved keywords not allowed
// let new =27;
// let function= 30;
// let name = `Ramji`; Valid but not advised. May cause issues at some point.

//Not a proper convention
//let Person =`Ramji`

// All upper-case variable names are reserved for constants
// let PI=3.1415;

//Descriptive variable names
let myFirstJob = `Programmer`;
let myCurrentJob = `Teacher`;

//Bad variable naming
let job1 = `programmer`;
let job2 = `programmer`;

/*console.log(myFirstJob); */ //line 37 variable.

/*Assignment

Values and Variable
    Declare variables called country, continent and population and assign their values according to your own country (population in millions).
    Log their values to the console.
*/

let country=`India`;
let continent=`Asia`;
let population=1417;

console.log(country, continent, population);
// console.log(country, continent, typeof(population +`million`));