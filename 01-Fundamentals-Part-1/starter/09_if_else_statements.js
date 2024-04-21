"use strict";

const age = 15;
// const isOldEnough= age >=18;

if (age>=18) {
    console.log(`Eligible for driving license.`);
}else{
    //(let or const) age = 18 - age ; this line took much time to understand. revise about this later.
    const yearsLeft=18-age;
    console.log(`Not eligible for driving license at the age of ${age}.`);
}

const birthYear=1991;
let century; //declaring out of if/else blocks to access outside if/else blocks.
if(birthYear <=2000){
     century=20;
}else{
     century=21;
}

console.log(`Ramji is from century:${century}.`);


//Assignments

/*Taking Decisions: if / else Statements

    If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

    After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/

let country=`India`
let countryPopulation=1366;
// let populationAverage;
if(countryPopulation>33)
{
        console.log(`${country}'s population is above average`) ;
}
else{
    // populationAverage = 33 - countryPopulation;
    console.log(`${country}'s population ${33 - countryPopulation} is below average`)
}