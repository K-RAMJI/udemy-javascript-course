"use strict";

const ramjiDetails = [
    'ramji',
    'kumararajan',
    2024 - 1991,
    'developer',
    ['sathish', 'malar']
];

const types = [];

for (let counter = 0; counter < ramjiDetails.length; counter++) {
    // console.log(ramjiDetails[counter]);
    // types[counter]=typeof ramjiDetails[counter];

    //using array method. it is a bit cleaner.
    types.push(typeof ramjiDetails[counter]);
}
console.log(types);


const birthYears = [1969, 1991, 1997, 2008, 2014];
const age = [];

for (let counter = 0; counter < birthYears.length; counter++) {
    age.push(2024 - birthYears[counter]);
}
console.log(age);

// continue and break

//continue : to exit the current iteration of the loop and continue to the next iteration.

console.log(`==========ONLY STRINGS==========`)
for (let counter = 0; counter < ramjiDetails.length; counter++) {
    //when this condition IS satisfied...current iteration is skipped and continued to next iteration. Meaning...if the typeof an element is NOT string...current iteration is skipped and continued to next iteration. Only string is printed. Not-string elements are not printed because the iteration skipped because of 'continue' keyword.
    if (typeof ramjiDetails[counter] !== `string`) continue;

    console.log(ramjiDetails[counter], typeof ramjiDetails[counter]);
}


//break : is to completely terminate the whole loop not just the current iteration


console.log(`==========BREAK WITH NUMBER==========`)

for (let counter = 0; counter < ramjiDetails.length; counter++) {
    if (typeof ramjiDetails[counter] === `number`) {
        console.log(`Number type element found. Loop breaks.`)
        break;
    }

    console.log(ramjiDetails[counter], typeof ramjiDetails[counter]);
}

//Assignment

/*Looping Arrays, Breaking and Continuing

    Let's bring back the populations array from a previous assignment.

    Use a for loop to compute an array called 'percentages2' containing the percentages of the world population for the 4 population values. Use the function 'percentageOfWorld' that you created earlier.

    Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.*/

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

const percentage2 = [];
for (let counter = 0; counter < populations.length; counter++) {
    let perCalc = percentageOfWorld(populations[counter]);
    percentage2.push(perCalc);
}
console.log(percentage2.map(Number));