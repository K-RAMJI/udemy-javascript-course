"use strict";

/*falsy values are values that are not exactly false, but will become false when we try to convert them into a boolean.*/

//5 falsy values in JavaScript : 0, empty-string (''), undefined, null, NaN

/*false itself is already false, so we don't need to include it in the list of falsy values. All of these five values will be converted to false when we attempt to convert them to a boolean. They're not exactly false initially, but they will become when converted to a boolean. So, that's the definition of falsy values.*/

/*Everything else are our so-called truthy values. So, values that will be converted to true, for example, any number that is not zero or any string that is not an empty string will be converted to true when we attempt to convert them to a boolean.*/


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ramji'));
console.log(Boolean({})); //empty object
console.log(Boolean(''));
console.log(Boolean(``));
console.log(Boolean(""));

//Boolean() function usage is very rare.

/*In practice, the conversion to boolean is always implicit, not explicit, or in other words it is always type coercion that JavaScript does automatically behind the scenes.*/

/*when exactly does JavaScript do type coercion to booleans? Well, it happens in two scenarios. First, when using logical operators, and second in a logical context, like for example, in the condition of an if else statement.*/

const money=0; //0 is falsy value
if(money){ // implicit boolean coercion occurs.
    console.log(`Don't spend it all`);
}else{
    console.log(`You should get a job.`);
}

//let height; //undefined. falsy.
let height=0; //valid number is defined but 0 is falsy and leads to an error.
if(height){// implicit boolean coercion occurs.
    console.log(`height is defined.`);
}else{
    console.log(`height is UNDEFINED.`);
}