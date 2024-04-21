"use strict";

const hasDriversLicense=true; //A
const hasGoodVision=true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

/*if(hasDriversLicense && hasGoodVision){
    console.log(`Sarah is eligible to drive.`)
}else{
    console.log(`Sarah is not eligible to drive.`)
}*/

const isTired=false; // C
// const isTired=false; // C
/*console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);*/

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log(`Sarah is eligible to drive.`)
}else{
    console.log(`Sarah is not eligible to drive.`)
}

//Assignment

/*Logical Operators

    Comment out the previous code so the prompt doesn't get in the way.

    Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

    Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

    If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

    Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).
*/

/*    Define Sarah's Criteria:
        Sarah wants a country that:
            Speaks English
            Has less than 50 million people
            Is not an island

    Check Your Country:
        Write an if statement to check if your country meets Sarah's criteria.

    Logging the Result:
        If your country meets Sarah's criteria, log a message indicating it's suitable for her.
        If not, log a message indicating it doesn't meet her criteria.

    Modify Variables (Optional):
        If your country doesn't meet Sarah's criteria, you can temporarily change some variables to make the condition true (unless you're from Canada).

    Implement the Solution:
        Write the if statement with the condition checking Sarah's criteria.
        Log the appropriate message based on whether your country meets Sarah's criteria or not.*/


const country=`India`;
const language=`English`;
const population=50;
const isIsland=true;

if(language===`English` && population<50 && !isIsland){
    console.log(`You should live in ${country}`);
}
else{
    console.log(`${country} does not meet your criteria :(`);

}