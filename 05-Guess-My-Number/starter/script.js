'use strict';

/*
console.log(document.querySelector(`.message`));

document.querySelector(`.message`).textContent=`Correct number !!!`;

document.querySelector(`.number`).textContent=13;
document.querySelector(`.score`).textContent=10;

document.querySelector(`.guess`).value=23;
console.log(document.querySelector(`.guess`).value);*/

document.querySelector(`.check`).addEventListener(`click`, function () {
    // console.log(document.querySelector(`.guess`).value);
    const guess = Number(document.querySelector(`.guess`).value);
    console.log(guess, typeof (guess));

    if (!guess) {
        document.querySelector(`.message`).textContent = `NO NUMBER !!!`;
    }
});
