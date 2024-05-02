"use strict";

const ramjiDetails = {
    firstName: 'ramji',
    lastName: 'kumararajan',
    age: 2024 - 1991,
    profession: 'developer',
    friends: ['sathish', 'malar']
};

console.log(ramjiDetails);

//dot notation. the '.' operator which will go to the object and retrieves the property we specify.
console.log(ramjiDetails.profession);

//we can do the same thing using brackets '[]'. we need to mention the property name as a string.
//in bracket notation we can place any expression which produces a value.
console.log(ramjiDetails['profession']);

const nameKey = 'Name';
console.log(ramjiDetails['first' + nameKey]);
console.log(ramjiDetails['last' + nameKey]);

//the bracket way of using expression doesn't work for dot notation. in dot notation we have to use the actual property name itself.
//console.log(ramjiDetails.'first'+nameKey);

/* when to use dot and when to use bracket notation.
*
* 1. when we need to first compute the property name we have to use the bracket notation. ex: console.log(ramjiDetails['first'+nameKey]);
*
* 2. In any other case use dot notation.
*/

//small note: prompt function returns a string.
//const interestedIn=prompt(`What do you want to know about Ramji. firstName, lastName, age, profession or his friends list?`);

const interestedIn = ramjiDetails['age']; //just for running here instead of browser every time.


//dot notation doesn't work. we also get undefined. undefined is what we get when we try to access a property on an object that doesn't exist.
//console.log(ramjiDetails.interestedIn);


console.log(ramjiDetails[interestedIn]);//bracket notation works.
console.log(ramjiDetails['location']);//undefined. property doesn't exist.

if (ramjiDetails[interestedIn]) {
    console.log(ramjiDetails[interestedIn])
} else {
    console.log(`Wrong request !!. Choose between firstName, lastName, age, profession or his friends list`);
}

//adding new properties to object using dot and bracket notation

ramjiDetails.location = 'Pondicherry';
ramjiDetails['qualification'] = 'MCA';

console.log(ramjiDetails);

//challenge
// "'Ramji' has '2' friends and his best friend is 'Malar'"

console.log(`${ramjiDetails.firstName} has ${ramjiDetails.friends.length} friends and his best friend is ${ramjiDetails.friends[1]}`); // need to keep in mind about operator precedence for '.' operator. because we used 'ramjiDetails.friends.length'.

//Assignment

/*Dot vs. Bracket Notation

    Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

    Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.*/

const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia']
};

// console.log(`Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.`);
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population = myCountry.population + 2;
myCountry.population += 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry['population'] = myCountry['population'] - 2;
myCountry['population'] -= 2;
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);