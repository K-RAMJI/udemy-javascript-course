"use strict";

const ramjiDetails = {
    firstName: 'ramji',
    lastName: 'kumararajan',
    birthYear: 1991,
    profession: 'developer',
    friends: ['sathish', 'malar'],
    hasDriverLicense: false,

    //Any function that is attached to an object is called a 'method'.
    /*calcAge: function (birthYearRamji) {
        return 2024 - birthYearRamji
    }*/

    /* The 'this' keyword is basically equal to the object on which the method is called.
    In other words, it is equal to the object calling the method.*/

    /* why not just use ramjiDetails.birthYear instead of the confusing 'this' keyword.
    It will defeat the 'don't repeat yourself' principle.
    Because if we use object name directly and if we change the object name, then we have to modify the object name everywhere.*/

    /* calcAge: function () {
         console.log(this);
         return 2024 - this.birthYear; //using property 'birthYear' from this object directly.
     }*/

    calcAge: function () {
        //creating a new 'age' property and adding it to object. so we can call the age property and use its value instead of calculating everytime.
        this.age = 2024 - this.birthYear;

        //return age; //this looks for a variable named 'age' inside the scope of this function. that's y we mention this.age to refer the property of this object.
        return this.age;  //using property 'birthYear' from this object directly.
    },

    //challenge
    // "Ramji is a 33-year-old developer, and he has a/no driver's license."
    getSummary: function () {
        // calling 'calcAge()' for the 'age' property to be created.
        return `${this.firstName} is a ${this.calcAge()}-year-old ${this.profession}, and he has ${(this.hasDriverLicense) ? `a` : `no`} driver's license.`;
    }
};


// console.log(ramjiDetails.calcAge()); // dot notation

// console.log(ramjiDetails['calcAge']()); //bracket notation

//accessing age property multiple times but the calculation was done only once.
/*console.log(ramjiDetails.age);
console.log(ramjiDetails.age);
console.log(ramjiDetails.age);
console.log(ramjiDetails.age);*/

console.log(ramjiDetails.getSummary());


//Assignments

/*
Object Methods

Add a method called 'describe' to the 'myCountry' object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

Call the describe method.

Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'. 'isIsland' will be 'true' if there are no neighbouring countries, and 'false' if there are. Use the ternary operator to set the property.*/


const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],
    // neighbours: [],

    describe:function(){
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },

    checkIsland:function(){
        this.isIsland=(this.neighbours.length===0);
        return (this.isIsland)?`It is true that there are no neighbouring countries.It is an island`:`There are neighbouring countries. It is not an island.`;
    }
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);