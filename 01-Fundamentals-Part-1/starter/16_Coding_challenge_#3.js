/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Whales. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise, no team wins the trophy


Test data:

§ Data 1: Dolphins score 96, 108 and 89. Whales score 88, 91 and 110

§ Data Bonus 1: Dolphins score 97, 112 and 101. Whales score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Whales score 109, 95 and 106*/

/*const dolphinsAverage=(96+108+89)/3;
const whalesAverage=(88+91+110)/3;
console.log(dolphinsAverage.toFixed(3),whalesAverage.toFixed(3));

if(dolphinsAverage > whalesAverage)
{
    console.log(`Dolphins average ${dolphinsAverage.toFixed(3)} is higher than ${whalesAverage.toFixed(3)}. Dolphins win`);
}
else if(whalesAverage > dolphinsAverage)
{
    console.log(`Whales average ${whalesAverage.toFixed(3)} is higher than ${dolphinsAverage.toFixed(3)}. Dolphins win`);
}
else{
    console.log(`Match draw.`);
}*/



/*Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉*/

//Data Bonus 1: Dolphins score 97, 112 and 101. Whales score 109, 95 and 123


/*const dolphinsAverage=(97+112+101)/3;
const whalesAverage=(109+95+123)/3;
const minScore=100;
console.log(dolphinsAverage.toFixed(3),whalesAverage.toFixed(3));

if(dolphinsAverage > whalesAverage && minScore>=100)
{
    console.log(`Dolphins average ${dolphinsAverage.toFixed(3)} is higher than ${whalesAverage.toFixed(3)}. Dolphins win`);
}
else if(whalesAverage > dolphinsAverage && minScore>=100)
{
    console.log(`Whales average ${whalesAverage.toFixed(3)} is higher than ${dolphinsAverage.toFixed(3)}. Dolphins win`);
}
else{
    console.log(`Match draw.`);
}*/

/*Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal to 100 points. Otherwise, no team wins the trophy*/

//Data Bonus 2: Dolphins score 97, 112 and 101. Whales score 109, 95 and 106


const dolphinsAverage=(97+112+101)/3;
const whalesAverage=(109+95+123)/3;
const minScore=100;
console.log(dolphinsAverage.toFixed(3),whalesAverage.toFixed(3));

if(dolphinsAverage > whalesAverage && minScore>=100)
{
    console.log(`Dolphins average ${dolphinsAverage.toFixed(3)} is higher than ${whalesAverage.toFixed(3)}. Dolphins win`);
}
else if(whalesAverage > dolphinsAverage && minScore>=100)
{
    console.log(`Whales average ${whalesAverage.toFixed(3)} is higher than ${dolphinsAverage.toFixed(3)}. Dolphins win`);
}
else if(whalesAverage === dolphinsAverage && whalesAverage >=100 && dolphinsAverage>=100){
    console.log(`Match draw. Both teams win.`)
}
else{
    console.log(`No team wins.`);
}