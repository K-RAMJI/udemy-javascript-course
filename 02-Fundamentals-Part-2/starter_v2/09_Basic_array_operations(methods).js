"use strict";


const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 20, 50];

//add elements
const newLength = colors.push('white'); //push function adds elements to the end of the array and returns the length of the new array
console.log(colors, newLength);

colors.unshift('skyblue');//unshift function adds elements to the beginning of the array and returns the length of the new array
console.log(colors);

//remove elements
let poppedElement = colors.pop();//removes the LAST element. no need to pass any argument as there is no need for any information just to take out the last element. returns the removed element.
console.log(poppedElement);
console.log(colors);

let shiftedElement = colors.shift();//shift function removes the FIRST element of the array and returns the element which was removed.
console.log(shiftedElement);
console.log(colors);

console.log(colors.indexOf('yellow')); //returns the element's index. element needs to be passed as argument.
console.log(colors.indexOf('medium-yellow'))// returns -1 if the passed element is not present.

//'includes' method returns true if the element is present. returns false if the element is not present.
// this method uses strict equality for this check. no type coercion.
//we can use 'includes' method for writing conditions.
console.log(colors.includes('yellow')); //true
console.log(colors.includes('Yellow')); //false
console.log(colors.includes('medium-yellow')); //false
console.log(colors.includes(10)); //false
console.log(colors.includes('10')); //false

if (colors.includes('red')) {
    console.log(`red color is available.`)
} else {
    console.log(`red is not available.`);
}

//Assignment

/*Basic Array Operations (Methods)

    Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

    At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

    Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

    If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

    Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.*/


const neighbours = ['Pakistan', 'Nepal'];
neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Germany') === false) {
    console.log(`Probably not a central european country`);
}

neighbours[neighbours.indexOf('Pakistan')] = 'India';
console.log(neighbours);