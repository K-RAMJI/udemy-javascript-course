"use strict";

/*const calcAge02=function(birthYear) //Anonymous function. Function without name.
{
    return (2024-birthYear);
}*/

//Arrow function. It is a short form of function expression.
//Arrow function doesn't get 'this' keyword.
const calcAge=(birthYear=>2037-birthYear); //birthYear here is the parameter.
const age=calcAge(1991);
console.log(age);

const yearsUntilRetirement =(birthYear,firstName)=>{
    const age =2024 - birthYear;
    const retirement=65-age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, `Ramji`));
console.log(yearsUntilRetirement(1963, `Kumar`));

