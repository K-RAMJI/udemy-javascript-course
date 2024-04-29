/*
Coding Challenge #1

Back to the two gymnastics teams, the Sharks and the Rockers! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgSharks' and 'avgRockers'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Rockers win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2

5. Ignore draws this time

Test data:

- Data 1:
Sharks score 44, 23, and 71.
Rockers score 65, 54, and 49

- Data 2:
Sharks score 85, 54, and 41.
Rockers score 23, 34, and 27

Hints:
- To calculate the average of 3 values, add them all together and divide by 3

- To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores*/

const calcAvg = (s1, s2, s3) => (s1 + s2 + s3) / 3;

/*const avgSharks = calcAvg(44, 23, 71);
const avgRockers = calcAvg(65, 54, 49);*/

function checkWinner(avgSharks, avgRockers) {

    if (avgSharks >= (avgRockers * 2)) {
        return `Sharks win. ${avgSharks} vs ${avgRockers * 2}`;
    } else if (avgRockers >= (avgSharks * 2)) {
        return `Rockers win. ${avgRockers}  vs ${avgSharks * 2}`;
    }else{
        return `No team wins.`
    }
}

let test_data01=checkWinner(calcAvg(44,23,71), calcAvg(65,54,49));
let test_data02=checkWinner(calcAvg(85,54,41), calcAvg(23,34,27));

console.log(test_data01 + '\n' + test_data02);