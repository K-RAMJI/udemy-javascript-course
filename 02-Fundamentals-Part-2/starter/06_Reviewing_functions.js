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
        return retirement;
    }else {
        return -1;
    }
    // return (`${firstName} retires in ${retirement} years`);
}
console.log(yearsUntilRetirement(1963,"Kumar"));
console.log(yearsUntilRetirement(1950,"Rajan"));