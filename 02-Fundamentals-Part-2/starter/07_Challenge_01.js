"use strict";

const calcAverage= (s1,s2,s3) => (s1+s2+s3)/3;
console.log(calcAverage);

const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);

function checkWinner(avgDolphins, avgKoalas)
{
    if(avgDolphins >= avgKoalas*2)
    {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas >= avgDolphins*2)
    {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else
    {
        console.log(`No team wins...`);
    }
}
checkWinner(scoreDolphins,scoreKoalas);
