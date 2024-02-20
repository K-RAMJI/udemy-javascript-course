"use strict";

const personalDetailsArray=[
    'Ramji',
    'Kumararajan',
    33,
    'Developer',
    [
        'Sarath','Thennarasu','Malar','Sathish'
    ]
];
/*=================================================================*/
const personalDetailsObject= {
    firstname     :   'Ramji',
    lastname      :   'Kumararajan',
    age           :   23,
    profession    :   'Developer',
    friends       :   ['Sarath','Thennarasu','Malar','Sathish']
};
console.log(personalDetailsObject);
/*=================================================================*/

//using dot notation
console.log(personalDetailsObject.firstname);
//bracket notation.
console.log(personalDetailsObject['profession']);

/*=================================================================*/

//we can put expression inside square brackets.
const nameKey='Name';
console.log(personalDetailsObject['first'+nameKey]);
console.log(personalDetailsObject['last'+nameKey]);

//not valid statement.
//console.log(personalDetailsObject.'last'+nameKey);

/*=================================================================*/

/*let interestedIn=prompt(`What do you want to know about Ramji? Choose between firstName, lastName, age, profession and friends`);

//returns undefined. There is no just property in the object.
/*console.log(personalDetailsObject.interestedIn); */
//The bracket notation works.
/*console.log(personalDetailsObject[interestedIn]);*/

/*if(personalDetailsObject[interestedIn]){
    console.log(personalDetailsObject[interestedIn]);
}else{
    console.log(`wrong request. choose between firstName, lastName, age, job and friends`);
}*/

/*=================================================================*/

//adding a property to an object. dot and bracket notations.
/*personalDetailsObject.location=`pondicherry`;
personalDetailsObject[`email`]=`k.ramjics@gmail.com`;
console.log(personalDetailsObject);*/

/*=================================================================*/

//Challenge
//"Ramji has 3 friends, and his best friend is called Rakesh"

const name=personalDetailsObject.firstname;

//dotted notation.
// const noOfFriends=personalDetailsObject.friends.length;
// const bestFriend=personalDetailsObject.friends[2];

//bracket notation
const noOfFriends = personalDetailsObject['friends'].length;
const bestFriend = personalDetailsObject['friends'][2];

console.log(`${name} has ${noOfFriends} friends, and his best friend is called ${bestFriend}`)
/*=================================================================*/