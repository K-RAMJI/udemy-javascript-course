"use strict";

/*
function logger(){
    console.log(`My name is Ramji.`);
}
logger();
logger();
logger();*/

function fruitProcessor(noOfApples,noOfOranges){
    console.log(noOfApples , noOfOranges);
    /*const juice=`juice with ${noOfApples} apples and ${noOfOranges}`;
    return juice;*/
    return `juice with ${noOfApples} apples and ${noOfOranges}`;
}
// console.log(fruitProcessor(10,15));
const fruitJuiceOne=fruitProcessor(10,15);
console.log(fruitJuiceOne);

const fruitJuiceTwo=fruitProcessor(3,9);
console.log(fruitJuiceTwo);