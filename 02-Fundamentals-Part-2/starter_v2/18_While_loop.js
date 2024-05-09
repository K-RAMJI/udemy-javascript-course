"use strict";

/*console.log(`-----FOR LOOP-----`);
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
}

console.log(`-----WHILE LOOP-----`);
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}*/

let dice = Math.trunc(Math.random() * 6 + 1);

if (dice === 6) {
    console.log(`You rolled a ${dice}. Game over.`)
} else {
    while (dice !== 6) {
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6 + 1);
        if (dice === 6) {
            console.log(`You rolled a ${dice}. Game over.`)
        }
    }
}

//Assignment

/*The while Loop

    Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

    Reflect on what solution you like better for this task: the for loop or the while loop?
*/

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

let counter = 0;
let percentage3 = [];
while (counter < populations.length) {
    let perCalc = percentageOfWorld(populations[counter]);
    percentage3.push(perCalc);
    counter++
}
console.log(percentage3.map(Number));