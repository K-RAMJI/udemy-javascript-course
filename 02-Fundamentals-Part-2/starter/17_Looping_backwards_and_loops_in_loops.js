"use strict";

const personalDetailsArray = [
    "ramji",
    'kumararajan',
    33,
    'developer',
    ['sarath', 'thennarasu', 'malar', 'sathish'],
];

for(let counter=personalDetailsArray.length-1;counter>=0;counter--){
    console.log(counter, personalDetailsArray[counter]);
}

for(let exercise=1;exercise<=3;exercise++)
{
    console.log(`===========STARTING EXERCISE ${exercise}`);
    for(let rep=1;rep< 6;rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}