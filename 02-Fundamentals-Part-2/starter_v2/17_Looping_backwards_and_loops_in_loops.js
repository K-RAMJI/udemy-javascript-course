"use strict";

const ramjiDetails = ['ramji', 'kumararajan', 2024 - 1991, 'developer', ['sathish', 'malar']];

// 0 , 1 ,.... , 4 -> looping forward
// 4 , 3 ,.... , 0 -> looping backward

for (let counter = ramjiDetails.length - 1; counter >= 0; counter--) {
    console.log(`Index number: ${counter}`, ramjiDetails[counter]);
}

//loops inside loops

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`===== |Starting Exercise : ${exercise}| =====`);
    for (let rep = 1; rep <= 10; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
    }
}


/*let totalCounter=1;
let innerCounter=0;
for(let counter=1;counter<=3;counter++){

    for( innerCounter=totalCounter;innerCounter<=30;innerCounter++){
        console.log(`rep counter ${innerCounter}`)
    }
    totalCounter=innerCounter;
}*/


//assignment

/*Looping Backwards and Loops in Loops

1. Store this array of arrays into a variable called listOfNeighbours:

[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

sample output :

Neighbour: Canada
Neighbour: Mexico
Neighbour: Spain
Neighbour: Norway
Neighbour: Sweden
Neighbour: Russia

3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway*/

console.log(`
===== assignment =====
`)
const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let x = 0; x < listOfNeighbours.length; x++) {
    for (let y = 0; y < listOfNeighbours[x].length; y++) {
        console.log(`Neighbour: ${listOfNeighbours[x][y]}`)
    }
}


/*for(let counter=0;counter < listOfNeighbours.length;counter++)
{
    let neighbour=listOfNeighbours[counter];
    for(let counter=0; counter < neighbour.length;counter++){
        console.log(`Neighbour: ${neighbour[counter]}`);
    }
}*/