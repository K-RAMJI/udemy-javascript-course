"use strict";

//Function declaration
function calcAge01(birthYear){
    return (2024-birthYear);
}

const age01=calcAge01(1963);
console.log(age01);

//Function expression

const calcAge02=function(birthYear) //Anonymous function. Function without name.
{
    return (2024-birthYear);
}
const age02=calcAge02(1991);
console.log(age01,age02);

