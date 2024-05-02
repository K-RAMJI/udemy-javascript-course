"use strict";

const ramjiDetailsArray = [
    'ramji',
    'kumararajan',
    2024 - 1991,
    'developer',
    ['sathish', 'malar']
];


//using curly braces to create an object is called 'object literal syntax'. Because we are literally writing down the entire object content.
//elements are written in key:value pairs. key can be called as property.

const ramjiDetailsObject = {
    firstName: 'ramji',
    lastName: 'kumararajan',
    age: 2024 - 1991,
    profession: 'developer',
    friends: ['sathish', 'malar']
};

//assignments

/*Introduction to Objects

    Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).*/

const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia']
};