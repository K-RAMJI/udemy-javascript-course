"use strict";

const _a='18';
if(_a===33){ // strict equality operator. doesn't perform type coercion.
    console.log(`strict equality operator used here.`)
}

if(_a==18){ // loose equality operator. does perform type coercion. string to number.
    console.log(`loose equality operator used here.`)
}

// const favourite=prompt(`What's your favourite number ??`);
/*const favourite=Number(prompt(`What's your favourite number ??`));
console.log(favourite);
console.log(typeof favourite);*/

let favourite=33;
if(favourite===33){ //33===33
    console.log(`Your favourite number is 33`)
}else if(favourite===7){
    console.log(`Your favourite number is 7.`)
}else if(favourite===9){
    console.log(`Your favourite number is 9.`)
}else{
    console.log(`Your favourite number is not 33 or 7 or 9.`)
}

if(favourite!==33) console.log(`Why not 33 ?`);



//Assignment
/*Equality Operators: == vs. ===

    Declare a variable numNeighbours based on a prompt input like this:prompt('How many neighbour countries does your country have?');

    If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

    Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

    Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

    Test the code with different values of numNeighbours, including 1 and 0.

    Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

    Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

    Reflect on why we should use the === operator and type conversion in this situation.*/


let numNeighbours=Number(prompt(`How many neighbour countries does your country have?`));

if(numNeighbours===1){ // use === strict equality always to avoid coercion by using == loose equality operator.
    console.log(`Only 1 border!`);
}else if(numNeighbours>1){
    console.log(`More than 1 border`);
}else{
    console.log(`No borders`);
}