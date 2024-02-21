"use strict";

const personalDetailsArray = [
    "ramji",
    'kumararajan',
    33,
    'developer',
    ['sarath', 'thennarasu', 'malar', 'sathish'],
    true,
];

const types = [];

/*
console.log(personalDetailsArray[0]);
console.log(personalDetailsArray[1]);
....
console.log(personalDetailsArray[4]);
personalDetailsArray[5]; does not exist.
*/

for (let counter = 0; counter < personalDetailsArray.length; counter++) {
    //reading from personalDetailsArray
    console.log(personalDetailsArray[counter], types[counter]);

    //Filling types array
    // types[counter]=typeof personalDetailsArray[counter];

    //Filling types using array method 'push'
    types.push(typeof personalDetailsArray[counter]);

}
console.log(types);

/*=======================================================================*/

const years = [1963, 1984, 1991, 2000, 2017];
const ages = [];

for (let counter = 0; counter < years.length; counter++) {
    //ages[counter]=2024-years[counter];
    ages.push(2024 - years[counter]);
}

console.log(ages);

/*=======================================================================*/

//continue and break statement.

//continue
console.log(`===========ONLY STRINGS==========`);
for (let counter = 0; counter < personalDetailsArray.length; counter++) {
    if(typeof personalDetailsArray[counter] !== 'string') continue;
    console.log(personalDetailsArray[counter], types[counter]);
}

//break
console.log(`===========BREAK WITH NUMBER==========`);
for (let counter = 0; counter < personalDetailsArray.length; counter++) {
    if(typeof personalDetailsArray[counter] === 'number') break;
    console.log(personalDetailsArray[counter], types[counter]);
}