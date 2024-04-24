"use strict";

const day = `Friday`;

switch (day) {
  case `Monday`: //day ===`Monday`. The comparison is strict.
    console.log(`Plan course structure`);
    console.log(`Coding meetup`);
    break;

  case `Tuesday`:
    console.log(`Prepare theory videos`);
    break;

  case `Wednesday`:

  case `Thursday`:
    console.log(`Write code examples`);
    break;

  case `Friday`:
    console.log(`Record videos`);
    break;

  case `Saturday`:

  case `Sunday`:
    console.log(`Enjoy the weekend`);
    break;

  default:
    console.log(`Not a valid day`);
    break;
}

/*
if (day === `Monday`) {
  console.log(`Plan course structure`);
  console.log(`Coding meetup`);
} else if (day === `Tuesday`) {
  console.log(`Prepare theory videos`);
} else if (day === `Wednesday` || day === `Thursday`) {
  console.log(`Write code examples`);
} else if (day === `Friday`) {
  console.log(`Record videos`);
} else if (day === `Saturday` || day === `Sunday`) {
  console.log(`Enjoy the weekend`);
} else {
  console.log(`Not a valid day`);
}
*/


/*The switch Statement

Use a switch statement to log the following string for the given language:

chinese or mandarin: 'Highest number of native speakers!';
spanish: '2nd place in number of native speakers';
english: '3rd place';
hindi: 'Number 4';
arabic: '5th most spoken language';
for all other simply log 'Great language too :D'.*/


// let language = prompt("Enter a language");
let language =`chinese`;
switch(language){

  // case `chinese` || 'mandarin': <- This is not a valid statement.
  case `chinese`:
  case `mandarin`:
    console.log(`Highest number of native speakers`);
    break;

  case `spanish`:
    console.log(`2nd place in number of native speakers`);
    break;

  case `english`:
    console.log(`3rd place`);
    break;

  case `tamil`:
    console.log(`4th place`);
    break;

  case `arabic`:
    console.log(`5th most spoken language`);
    break;

  default:
    console.log(`This is a great language too.`);
    break;
}