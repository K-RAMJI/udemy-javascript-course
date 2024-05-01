"use strict";

/*
const friend1=`Ramji`;
const friend2=`Rakesh`;
const friend3=`Sarath`;
const friend4=`Thennarasu`;
*/

//array literal syntax
const friends = ['Ramji', 'Rakesh', 'Sarath', 'Thennarasu'];
console.log(friends);

//accessing particular array element
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);

//fetching array length . It is not zero based.
console.log(friends.length);

//fetching last element using length properly.
//also we can use any expression which generates a value inside of square bracket.
console.log(friends[friends.length - 1])

//mutating the array
/*
1. Variables declared with `const` are typically considered immutable, but there's a distinction with arrays.
2. Arrays are not primitive values, so they can be mutated even if declared with `const`.
3. This behavior is possible due to how JavaScript handles memory storage.
4. A more in-depth explanation on this topic will be covered in a separate lecture.
5. Despite being able to mutate arrays, replacing the entire array is not allowed.
6. Attempting to reassign the entire array will result in an error, "assignment to constant variable".*/

//Read more on section notes.

friends[2] = 'Jay';
console.log(friends); //[ 'Ramji', 'Rakesh', 'Jay', 'Thennarasu' ]
// friends=['kumar','rajan','ravathi','ramji']; //TypeError: Assignment to constant variable.


//array with different types of data
const firstName = 'Ramji';
const ramjiDetails = [firstName, 'kumararajan', 2024 - 1991, 'developer', friends];
console.log(ramjiDetails);
console.log(ramjiDetails.length);

//Exercise
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const birthYears = [1990, 1967, 2002, 2010, 2018];

/*
console.log(calcAge(birthYears)); //NaN
console.log(calcAge(birthYears + 10)); //NaN
console.log(calcAge(birthYears - 10)); //NaN
*/

/*const age1=calcAge(birthYears[0]);
const age2=calcAge(birthYears[1]);
const age3=calcAge(birthYears[birthYears.length-1]);*/

const ages = [calcAge(birthYears[0]), calcAge(birthYears[1]), calcAge(birthYears[birthYears.length - 1])];
console.log(ages);


/*using array constructor syntax :
    The array constructor syntax, which uses the Array constructor and the new keyword, provides a way to create arrays dynamically, particularly when you need to create an array with a predefined length or when the elements are not known at the time of creation. Read section notes about it.*/
const years = new Array(1991, 1994, 2008, 2020);
console.log(years);

//Assignments

/*Introduction to Arrays

    Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

    Log to the console whether the array has 4 elements or not (true or false).

    Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.*/

// console.log(describePopulation(1441, 'China'));
// console.log(describePopulation(678, 'Germany'));
// console.log(describePopulation(238, 'Australia'));
// console.log(describePopulation(1102, 'Brazil'));

const populations = [1441, 678, 238, 1102];
console.log(populations.length === 4);

const percentageOfWorld = (population) => ((population / 7900) * 100).toFixed(2);

const percentages = [
    percentageOfWorld(populations[0]),
    percentageOfWorld(populations[1]),
    percentageOfWorld(populations[2]),
    percentageOfWorld(populations[3])
].map(Number);

console.log(percentages);