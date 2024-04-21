"use strict";

//math operators
const currentYear=2024; //implementing D.R.Y
const ageRamji=currentYear-1991;
const ageMuthulakshmi=currentYear-1997;

console.log(ageRamji,ageMuthulakshmi);

console.log(ageRamji*2, ageMuthulakshmi/2, 2**3);
//2**3 means 2 to the power of 3 which is 2*2*2.

const firstName= `Ramji`;
const lastName=`Kumararajan`;
console.log(firstName+` `+lastName); // 'template strings' will be used in future for these kind of operations.

//Assignment operators
let x = 10 + 5; //15
x+=10; // x = x + 10;  =25
x*=4; //x = x * 4; =100
x++; //x = x + 1;
x--;
x--;
console.log(x);

//Comparison operators
//we use comparison operators to produce boolean values.

console.log(ageRamji>ageMuthulakshmi); // >, <, >=, <=
console.log(ageMuthulakshmi>=18);

const isFullAge = ageRamji>=18;

//example for operator precedence.
console.log(currentYear - 1991 > currentYear - 1997);


//Assignment
/*Basic Operators

    1.If your country split in half, and each half would contain half the population, then how many people would live in each half?
    2.Increase the population of your country by 1 and log the result to the console.
    3.Finland has a population of 6 million. Does your country have more people than Finland?
    4.The average population of a country is 33 million people. Does your country have lesser people than the average country?
    5.Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/

const country=`India`;
const continent=`Asia`;
let populationIndiaInMillions=1417000000;
let language=`English`;

//If your country split in half, and each half would contain half the population, then how many people would live in each half?
populationIndiaInMillions /=2;

//Increase the population of your country by 1 and log the result to the console.
populationIndiaInMillions++;

//Finland has a population of 6 million. Does your country have more people than Finland?
const populationFinlandInMillions=6000000;
let isIndianPopulationHigher=populationIndiaInMillions > populationFinlandInMillions;
console.log(isIndianPopulationHigher);

//The average population of a country is 33 million people. Does your country have lesser people than the average country?
const averagePopulationOfAnyCountryInMillions=33000000;
isIndianPopulationHigher=populationIndiaInMillions< averagePopulationOfAnyCountryInMillions;
console.log(isIndianPopulationHigher);

//Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
const description = country + ` is in `+ continent + `, and its `+populationIndiaInMillions+` million people speak `+language+`.`;

console.log(description);