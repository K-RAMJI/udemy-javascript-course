"use strict";

const calcAge = function (birthYear) {
    return 2024 - birthYear
}

const yearsUntilRetirement = function (birthYear, name) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    let personDetails = `My name is ${name} and I am ${age} years old.`;
    if (retirement > 0) {
        return `${personDetails} I have ${retirement} years until retirement.`;
    } else if (retirement === 0) {
        return `${personDetails} I am retiring this year.`;
    } else {
        return `${personDetails} I have already retired ${-retirement} years ago.`;
    }
    // return `My name is ${name} and I am ${age} years old. Still ${retirement} years to go for my retirement.`;
};
console.log(`${yearsUntilRetirement(1991, `Ramji`)}`); //retirement > 0
console.log(`${yearsUntilRetirement(1959, `Baksheesh`)}`); //retirement === 0
console.log(`${yearsUntilRetirement(1955, `Vishik`)}`); // <0