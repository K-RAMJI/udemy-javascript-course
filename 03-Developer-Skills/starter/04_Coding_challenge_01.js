// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 day ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
Understanding the Problem:
    Given an array of forecasted maximum temperatures.
    The thermometer displays a string with these temperatures.
    Breaking into Sub-Problems:

How to handle errors in the forecasted temperatures.
    How to format and print the forecasted temperatures for display.*/

'use strict';

const printForecast = function (arr) {
  let dayCounter = 0;

  if (arr.length !== 0) {
    for (let counter = 0; counter < arr.length; counter++) {
      if (typeof arr[counter] !== 'number') {
        continue;
      }
      dayCounter += 1;
      console.log(`${arr[counter]}ºC for day: ${dayCounter}`);
    }
  } else {
    console.log('Provided array is empty.');
  }
};
// printForecast([17,21,23]);
printForecast([12, 5, -5, 0, 4]);
