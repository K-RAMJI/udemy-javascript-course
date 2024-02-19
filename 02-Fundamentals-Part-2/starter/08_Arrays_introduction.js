"use strict";

// const friend1 ="Ramji";
// const friend2 ="Sarath";
// const friend3 ="Thennarasu";

const friends=["ramji", "sarath", "thennarasu"];
console.log(friends);

// const years = new Array(1991,1995,1996,2000);
// const years = [1991,1995,1996,2000];

// console.log(friends[0]);
// console.log(friends[2]);
console.log(friends.length);

console.log(friends[friends.length-1]); //getting the last element from 'friends' array.

//mutating the array.
//Here a constant variable is mutated. Only primitive values are immutable. Array is not a primitive value.
friends[2]="Rakesh";
console.log(friends);

friends[2]="Thennarasu";
console.log(friends);

//cannot replace entire array
//friends=["revathi", "kumararajan"];

//arrays can hold different values at the same time
const firstName="Ramji";
const personalDetails=[firstName, "kumararajan", 2024-1991,"teacher",friends/*placing an array inside an array*/];

console.log(personalDetails);
console.log(personalDetails.length);

//Exercise

const calcAge = year => 2024 - year;

const birthYears =[1991,1963,1984,1997,2000]
const ages=[
    calcAge(birthYears[0]),
    calcAge(birthYears[1]),
    calcAge(birthYears[2]),
    calcAge(birthYears[3]),
    calcAge(birthYears[birthYears.length-1])
];

console.log(ages);