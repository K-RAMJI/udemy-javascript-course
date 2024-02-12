/* let js='connection';
if (js==='connection') alert('js file connected.!!');

console.log("Js file connected."); */

/////////////////////////////////////////////////////////////

/* Values and Variables */

/* console.log("Ramji");
console.log(23);
console.log(20 + 65 + 84 + 65); */

// Use camelCase for javascript.
/* let firstName = "Ramji";
console.log(firstName);
console.log(firstName);
console.log(firstName); */

/* let ramji_kumararajan = "RM";
let $function = 27;

let person = "ramji";
let PI = 3.1415; */

//providing meaningful variable names
/* let myFirstJob = "Programmer";
let myCurrentJob = "Teacher"; */

//No proper meaning for variable names.
/* let job1 = "programmer";
let job2 = "teacher"; */

// console.log(myFirstJob);

/* Assignment for values and variables 
    1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
    2. Log their values to the console.
*/
/* let country = "India";
let continent = "Asia";
let population = 1_436_661_535;
console.log(country);
console.log(continent);
console.log(population); */

/////////////////////////////////////////////////////////////
/* Data Types */

/* let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 430);
// console.log(typeof "Ramji");

//reassigning the variable.
javascriptIsFun = "YES";
console.log(javascriptIsFun);

//undefine
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); */

/////////////////////////////////////////////////////////////

/* let, const, var */

/* let age = 31;
age = 33; //variable mutated.

const birthYear = 1991; //immutable. */

/* const job; //const needs initial value.*/

/* var job = "programmer";
job = "teacher"; */

/* lastName="kumararajan";
console.log(lastName) */ //not a good way to create variable without declaring.

/////////////////////////////////////////////////////////////

/* Basic operators. */

/* const now = 2024;
const ageRamji = now - 1991;
const ageKumararajan = now - 1963;
console.log(ageRamji, ageKumararajan);

const number = 100;
console.log(number + 10, number / 25, 2 ** 3);
//2**3 means 2 to the power of 3 which is 2*2*2.

const firstName = "Ramji";
const lastName = "Kumararajan";
console.log(firstName + " " + lastName);

//Assignment operators

let x = 10 + 5;
x += 10; //x = x + 10 =25
x *= 4; //x = x * 4 = 100
x++; // x = x + 1 = 101
x--; //x = x - 1 = 100
x--; //x = x - 1 = 99
console.log(x);

//comparison operators

console.log(ageRamji > ageKumararajan); //>, <, >=, <=
console.log(ageKumararajan >= 18);

const isFullAge = ageKumararajan >= 18;

console.log(now - 1991 > now - 2018); */

/////////////////////////////////////////////////////////////

/* Operator Precedence. */

/* const now = 2024;
const ageRamji = now - 1991;
const ageKumararajan = now - 1963;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageRamji + ageKumararajan) / 2;
console.log(ageRamji, ageKumararajan, averageAge); */

/////////////////////////////////////////////////////////////

// CHALLENGE #1

/* Write your code below. Good luck! 🙂 */

/* const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("BMIMark :" + BMIMark);
console.log("BMIJohn :" + BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John : " + markHigherBMI); */

/////////////////////////////////////////////////////////////

/* Strings and Template Literals */

/* const firstName = "Ramji";
const job = "Web developer";
const birthYear = 1991;
const currentYear = 2024;

const normalString =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";
console.log(normalString);

//template string. Used back tick(`). back tick can be used for all strings.
const templateString = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;

console.log(templateString);

//multiline string using template literal

console.log(`This is template literal line one
This is template literal line two
This is template literal line three`); */

/////////////////////////////////////////////////////////////

/* Taking Decisions. If Else statements. */
/* const age = 15;
const isOldEnough = age >= 18;

//if else control structure.
if (isOldEnough) {
  console.log(`Candidate allowed to take driving lessons.`);
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Candidate is too young. Need to wait another ${yearsLeft} years.`
  );
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
  console.log(`Ramji was born in ${century}th century.`);
} else {
  century = 21;
  console.log(`Ramji was born in ${century}st century.`);
} */

/////////////////////////////////////////////////////////////

/* CHALLENGE #2 */

/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI {${BMIMark}} is higher than John's {${BMIJohn}}!`);
} else if (BMIJohn > BMIMark) {
  console.log(`John's BMI {${BMIJohn}} is higher than Mark's {${BMIMark}}!`);
} else {
  console.log(`Both are equal.`);
} */
