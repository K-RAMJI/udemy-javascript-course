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

/* CHALLENGE #2 -CODE */

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

/////////////////////////////////////////////////////////////

/* Type conversion and type coercion. */

/* //type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Ramji`)); //results in 'NaN'

//results in 'number'. NaN means it is a number. but invalid number.
console.log(typeof NaN);

console.log(String(123), 123);

//type coercion. Read the notes on type coercion in section notes.

console.log(`I am ` + 23 + ` years old`);
console.log(`23` - `10` - 3);
console.log(`25` * `4`);
console.log(`25` / `4`);

//guess the output

let n = `1` + 1; // output ->`11`
n = n - 1; // output -> 10
console.log(n);

let n2 = 2 + 3 + 4 + `5`;
console.log(n2);

let n3 = `10` - `4` - `3` - 2 + `5`;
console.log(n3); */

/////////////////////////////////////////////////////////////

/* Truthy and Falsy values */

/* Five falsy values : 0, '', undefined, null , NaN. False too by default. Everything else is true.*/

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(``));

/* const money = 0;
if (money) {
  console.log(`Don't spend it all.`);
} else {
  console.log(`You should get a job!`);
}

let height = 0; //
if (height) {
  console.log(`Height is defined.`);
} else {
  console.log(`Height is UNDEFINED.`);
}
 */

/////////////////////////////////////////////////////////////

/* Equality operators == vs. === */
//=== -> strict equality operator.
//== -> loose equality operator.

/* const age = `18`;
if (age === 18) console.log(`You just became an adult.(strict)`);

if (age == 18) console.log(`You just became an adult.(loose)`); */

/* const favouriteNumber = Number(prompt(`Enter a number: `));
// favouriteNumber = Number(favouriteNumber);
console.log(favouriteNumber);
console.log(typeof favouriteNumber);

if (favouriteNumber === 23) {
  console.log(`You entered : ${favouriteNumber}`);
} else if (favouriteNumber === 20) {
  console.log(`You entered : ${favouriteNumber}`);
} else if (favouriteNumber === 9) {
  console.log(`You entered : ${favouriteNumber}`);
} else {
  console.log(`Number is not 23 or 20 or 9.`);
}

if (favouriteNumber !== 23) console.log(`Why not 23?`); */

/////////////////////////////////////////////////////////////

/* Logical Operators */

// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const sarahShouldDrive = hasDriversLicense && hasGoodVision;

/* if (sarahShouldDrive && hasGoodVision) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Sarah is not allowed to drive.`);
} */

/* const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (sarahShouldDrive && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Sarah is not allowed to drive.`);
}
*/

/////////////////////////////////////////////////////////////

/* CHALLENGE #3 -CODE*/

// let scoreDolphins = Number((96 + 108 + 89) / 3);
// let scoreKoalas = Number((88 + 91 + 110) / 3);

// console.log(
//   typeof scoreKoalas,
//   typeof scoreDolphins,
//   scoreKoalas,
//   scoreDolphins
// );

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the trophy`);
// } else if (scoreKoalas > scoreDolphins) {
//   console.log(`Koalas win the trophy`);
// }
// // else if(scoreKoalas === scoreDolphins)
// // {
// //     console.log(`Both win the trophy`);
// // }
// else {
//   console.log(`Both win the trophy`);
// }

/////////////////////////////////////////////////////////////
/*The Switch Statement*/

/*const day = `monday`;

switch (day) {
    case `monday`: //day === `monday`
        console.log(`Plan course structure.`);
        console.log(`Go to coding meetup`);
        break;

    case `tuesday`:
        console.log(`Prepare theory videos`);
        break;

    case `wednesday`:
    case `thursday`:
        console.log(`Write code examples`);
        break;

    case 'friday':
        console.log(`Record videos`);
        break;

    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend`);
        break;

    default:
        console.log(`Not a valid day !`);
}*/

/*
const day = `wednesday`;

if(day===`monday`)
{
    console.log(`Plan course structure.`);
    console.log(`Go to coding meetup`);
}
else if (day ===`tuesday`)
{
    console.log(`Prepare theory videos`);
}
else if(day===`wednesday` || day===`thursday`)
{
    console.log(`Write code examples`);
}
else if(day===`friday`)
{
    console.log(`Record videos`);
}
else if(day===`saturday` || day===`sunday`)
{
    console.log(`Enjoy the weekend`)
}
else
{
    console.log(`Not a valid day !`);
}*/

/////////////////////////////////////////////////////////////

/*The conditional(Ternary) operator*/

/*const drinkingAge = 15;
drinkingAge>=18? console.log(`I like to drink wine`): console.log(`I like to drink water`);*/

/*const drinkingAge = 15;
const drinkingStatus= drinkingAge>=18? `My age is ${drinkingAge}. I like to drink wine`: `My age is ${drinkingAge}. I like to drink water`;
console.log(drinkingStatus)*/

/*const drinkingAge = 15;
let drink2;
if(drinkingAge>=18){
    drink2=`wine`;
}else{
    drink2=`water`;
}
console.log(drink2);*/

/*
const drinkingAge = 15;
console.log(`I like to drink. ${drinkingAge>=18? `My age is ${drinkingAge}. I like to drink wine`: `My age is ${drinkingAge}. I like to drink water`}`);*/

/////////////////////////////////////////////////////////////

/* CHALLENGE #4 -CODE*/

/*
const bill = 310;
const tip = (bill >=50 && bill <=300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);*/
