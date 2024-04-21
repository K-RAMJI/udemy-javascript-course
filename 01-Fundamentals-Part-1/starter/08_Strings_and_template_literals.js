"use strict";

const firstName=`Ramji`;
const job=`programmer`;
const birthYear=1991;
const currentYear=2024;

const stringConcatExample = `I'm ` +firstName + `, a `+(currentYear-birthYear)+` old `+job+`!`; //type coercion occurs here. result of (currentYear-birthYear) is converted to a string.

//writing template strings. Use backticks which is ` `. ES6 feature.
const templateStringExample=`I'm ${firstName}, a ${currentYear-birthYear} year old ${job}`;
console.log(templateStringExample);


//Using backticks always for strings.
console.log(`using backticks always \` \` `);

//Multiline strings using \n.
console.log(`"This is a \nmultiline string"`);

//Multiline string using template string
console.log(`'This is a 
multiline using 
template string.'`);

//Assignment
/*Strings and Template Literals

    Recreate the 'description' variable from the last assignment, this time using the template literal syntax.*/

const country=`India`;
const continent=`Asia`;
let populationIndiaInMillions=1417000000;
let language=`English`;


populationIndiaInMillions /=2;
populationIndiaInMillions++;
const populationFinlandInMillions=6000000;
let isIndianPopulationHigher=populationIndiaInMillions > populationFinlandInMillions;
console.log(isIndianPopulationHigher);

const averagePopulationOfAnyCountryInMillions=33000000;
isIndianPopulationHigher=populationIndiaInMillions< averagePopulationOfAnyCountryInMillions;
console.log(isIndianPopulationHigher);
let description = country + ` is in `+ continent + `, and its `+populationIndiaInMillions+` million people speak `+language+`.`;

console.log(description);

//description variable using template string
description=`${country} is in ${continent}, and its ${populationIndiaInMillions} million people speak ${language}.`;
console.log(description);
