"use strict";

const fruitChopper = function (fruit) {
    return fruit * 4;
};

const fruitMixer = function (apples, pomegranates) {
    //calling fruitChopper function from fruitMixer function.
    const applePieces = fruitChopper(apples);
    const pomegranatesPieces = fruitChopper(pomegranates);

    return `Juice made with ${applePieces} pieces of apples and ${pomegranatesPieces} pieces of pomegranates.`;
};
console.log(fruitMixer(4, 5));

//Assignment

/*Functions Calling Other Functions

    Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

    To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

    Call describePopulation with data for 3 countries of your choice.
*/

const percentageOfWorld1 = (population) => (population / 7900) * 100;

function describePopulation(population, country) {
    const average = percentageOfWorld1(population);
    return `${country} has ${population} million people, so it's about ${average.toFixed(1)}% of the world population.`
}

console.log(describePopulation(1441, 'China'));
console.log(describePopulation(678, 'Germany'));
console.log(describePopulation(238, 'Australia'));
console.log(describePopulation(1102, 'Brazil'));