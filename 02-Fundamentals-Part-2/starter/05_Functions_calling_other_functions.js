"use strict";

function fruitSlicer(fruit){
    return fruit*4;
}
function juiceMaker(apples, oranges)
{
    //calling another function from inside this function.
    let applePieces=fruitSlicer(apples);
    let orangePieces=fruitSlicer(oranges);

    return `The juice with ${applePieces} of apples and ${orangePieces} of oranges.`
}
console.log(juiceMaker(2,3));