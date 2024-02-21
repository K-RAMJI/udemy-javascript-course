"use strict";

/*for(let rep=1;rep< 6;rep++){
    console.log(`Lifting weight repetition ${rep}`);
}

let rep=1;
while(rep<=10){
    console.log(`WHILE: Lifting weight repetition ${rep}`);
    rep++;
}*/

let dice = Math.trunc(Math.random()*6)+1;

while(dice!==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
}
console.log(`Hurray !!! You rolled ${dice} !!!`);