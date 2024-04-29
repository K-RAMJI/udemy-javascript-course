"use strict";

/*function logger(){
    console.log(`logger function is called.`);
}
// calling/running/invoking a function
logger();
logger();
logger();
logger();*/

/*we specify what is called parameters inside the parenthesis and parameters are like variables that are specific to this function. the parameters will get defined once the function is called. they represent the input data of this function.*/

function fruitProcessor(apples, pomegranates){
    console.log(apples, pomegranates); //using parameters like normal variables.
    /*const juice=`Juice with ${apples} apples and ${pomegranate} pomegranates.`;
    return juice;*/
    return `Juice with ${apples} apples and ${pomegranates} pomegranates.`;
}

const appleJuice=fruitProcessor(5, 0);
console.log(appleJuice);

const pomegranateJuice=fruitProcessor(0,10);
console.log(pomegranateJuice);

const fruitMixer=fruitProcessor(2,4)
console.log(fruitMixer); //this is built-in function

const num = Number('23'); //this is also a built-in function.

/*Note : watch last three minutes of the video to recall few points. */


//Assignment

/*Functions

    Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

    Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

    sample:

        United States
        Population: Approximately 331 million (as of 2022)
        Capital City: Washington, D.C.

    China
        Population: Approximately 1410 million (as of 2022)
        Capital City: Beijing

    Brazil
        Population: Approximately 213 million (as of 2022)
        Capital City: Brasília
*/



function describeCountry(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

let usDesc=describeCountry('US', 331, `Washington, D.C.`);
let chinaDesc=describeCountry('China', 1410, `Beijing`);
let brazilDesc=describeCountry('Brazil', 213, `Brasilia`);

console.log(usDesc + '\n' + chinaDesc + '\n' + brazilDesc);