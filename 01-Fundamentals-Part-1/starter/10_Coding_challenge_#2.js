/*Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and

improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement*/


//"use strict";

const markMass= 78;
const markHeight=1.69;

const johnMass=92;
const johnHeight=1.95;

// Read about implicit variable declaration in section notes under '#2'.
// No variable declaration is a bad practice. Leads to implicit global declaration. Use "use strict"; to avoid it.
/*markBMI= markMass / markHeight** 2;
johnBMI= johnMass / johnHeight** 2;*/

const markBMI= markMass / markHeight** 2;
const johnBMI= johnMass / johnHeight** 2;

const  markHigherBMI= markBMI > johnBMI;
console.log(markBMI,johnBMI);
console.log(markHigherBMI);

if(markBMI>johnBMI)
{
    console.log(`Mark's BMI(${markBMI.toFixed(2)}) is higher than John's(${johnBMI.toFixed(2)})!`);
}
else{
    console.log(`John's BMI(${johnBMI.toFixed(2)}) is higher than Mark's!(${markBMI.toFixed(2)})`);
}