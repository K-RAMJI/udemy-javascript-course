"use strict";

const calcAverage=(s1,s2,s3)=>{
    return (s1+s2+s3)/3;
}

const scoreDolphins=calcAverage(44,23,71);
const scoreKoalas=calcAverage(65,54,49);

function checkWinner(avgDolphins,avgKoalas){

    const avgDolphinsDouble=avgDolphins*2;
    const avgKoalasDouble=avgKoalas*2;


    if(avgDolphinsDouble > avgKoalasDouble)
    {
        console.log(`Dolphins win (${avgDolphinsDouble} vs ${avgKoalasDouble})`)
    }
    else if(avgKoalasDouble > avgDolphinsDouble)
    {
        console.log(`Koalas win (${avgKoalasDouble} vs ${avgDolphinsDouble})`)
    }
    else{
        console.log(`No team wins.`)
    }

}

checkwinner(scoreDolphins,scoreKoalas);
