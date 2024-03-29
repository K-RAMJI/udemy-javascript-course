"use strict";

const measureKelvin= function(){
    const measurement ={
        type:'temp',
        unit:'celsius',

        //C) FIX
        //value: Number(prompt('Degrees celsius:'))
        value:10,
    };
    //B) FIND
    // console.log(measurement);
    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin=Number(measurement.value)+273;
    return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

/*==========================================================*/

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    //C) FIX
    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    //B) FIND
    console.log(max, min);
    return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);

