"use strict";

/*We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."*/

//1. Understanding the problem
//  -what is the temp amplitude? Answer: Difference between highest and lowest temperature.
//  -How to compute max and min temperature?
//  -What's a sensor error? and what to do when one occurs?

//2. Breaking up into sub-problems
//  -How to ignore errors?
//  -Find max value in temperature array
//  -Find min value in temperature array
//  -Subtract min from max (amplitude) and return it

/*// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures = [];
function temperature(tempArray)
{
    let length=tempArray.length;
    if(length===0){
        console.log("Provided array is empty.");
        return
    }

    let min =tempArray[0];
    let max =tempArray[0];
    let amplitude=0;

    for(let counter=0; counter < length; counter++)
    {
        let tempValue=tempArray[counter];
        if(typeof(tempValue) !== 'number') continue;

        if(tempValue>max){
            max=tempValue;
        }
        else if(tempValue<min){
            min=tempValue;
        }
        amplitude=max-min;
    }
    console.log(max, min, amplitude)
}

temperature(temperatures);*/

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const temperatures = [3, -2, -6, -14, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [12, 'error', 8, -3, 10, 'error', 16, 19, -5, 7, 95, 11, 'error'];

// const temperatures = [];
function temperature(tempArray,tempArray2)
{
    tempArray.push(...tempArray2);
    console.log(tempArray);

    let length=tempArray.length;
    if(length===0){
        console.log("Provided array is empty.");
        return
    }

    let min =tempArray[0];
    let max =tempArray[0];
    let amplitude=0;

    for(let counter=0; counter < length; counter++)
    {
        let tempValue=tempArray[counter];
        if(typeof(tempValue) !== 'number') continue;

        if(tempValue>max){
            max=tempValue;
        }
        else if(tempValue<min){
            min=tempValue;
        }
        amplitude=max-min;
    }
    console.log(max, min, amplitude)
}

temperature(temperatures, temperatures2);


//NOTE : VISIT INSTRUCTOR CODE AND REVIEW. INSTRUCTOR USES CONCAT METHOD TO MERGE ARRAYS. Also visit section notes for different approaches.