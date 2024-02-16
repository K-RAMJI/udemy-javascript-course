"use strict";

const calcAge=function(Year){
    return (2024 - Year);
}
const yearsUntilRetirement =
function (birthYear,firstName)
{
    const age=calcAge(birthYear);
    const retirement=65-age;
    
    if(retirement>0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1963,"Kumar"));
console.log(yearsUntilRetirement(1950,"Rajan"));