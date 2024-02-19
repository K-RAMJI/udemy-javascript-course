"use strict";

const friends = ['ramji','sarath','thennarasu'];

//ADDING ELEMENTS
//push function returns the length of the new array. push adds element at the end of an array.
const newLength=friends.push('mani');

console.log(newLength);
console.log(friends);

friends.unshift('john'); //returns length same as 'push' function
console.log(friends);

//REMOVE ELEMENTS

//no need to pass an argument to take out the last element. pop returns the removed element.
friends.pop(); //removes 'mani;
console.log(friends.pop()); //removes 'thennarasu' and logged to console.
console.log(friends);

const removedElement =friends.shift(); //removes first element. no argument needed.
console.log(removedElement, friends);

console.log(friends.indexOf("ramji")); //indexOf displays an element's index. parameter is passed. if the element is not present in the array, it will return -1.

//similar to indexOf which is 'includes()' method. it does strict equality check.

console.log(friends.includes("ramji")); //true is displayed
console.log(friends.includes("Ramji")); //false is displayed because of strict equality check.
console.log(friends.includes("rakesh")); //false is displayed

friends.push(23);
console.log(friends.includes('23'));//false is displayed because of strict equality check.

//using 'includes' to check condition
(friends.includes("ramji"))?console.log("ramji is a friend."): console.log("ramji is not a friend");