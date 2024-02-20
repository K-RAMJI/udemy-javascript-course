"use strict";

const personalDetailsObject= {
    firstname     :   'Ramji',
    lastname      :   'Kumararajan',
    birthYear     :   1991,
    profession    :   'Developer',
    friends       :   ['Sarath','Thennarasu','Malar','Sathish'],
    married       :   true,
    hasDriverLicense: true,
    /*==================================================*/
    /*calcAge     :   function(birthYear){
                        return 2024 - birthYear;
                        }*/

    //using 'this' keyword
    /*calcAge       :   function(){
                        console.log(this);
                        return 2024 - this.birthYear;
                        }*/

    //doing calculation only once and creating a new 'age' properly.
    calcAge       :   function(){
                        this.age=2024-this.birthYear;
                        return this.age;
                        },

    /*==================================================*/

    /*write a method called 'getSummary' and this method should return a string. which should kind of summarize the data about ramji */

    //"ramji is a 33-year-old developer, and he is married."

    getSummary : function(){
        /*return `${this.firstname} is a ${this.calcAge()}-year-old ${this.profession} and his marital status is ${this.married}.`;*/
        return `${this.firstname} is a ${this.calcAge()}-year-old ${this.profession} and he has ${this.hasDriverLicense? `a`:`no`} driver's license.`;
        
    }

}; //object ends here.

console.log(personalDetailsObject.calcAge());

//we need to call calcAge before calling getSummary. If calcAge is not called there won't be age property to use.
//but in the code above calcAge is called from inside getSummary directly. we may not call like this 'console.log(personalDetailsObject.calcAge());' all the time.
console.log(personalDetailsObject.getSummary());




