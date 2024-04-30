/*Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:

Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.

Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.*/

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