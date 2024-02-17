"use strict";

//"use strict";

const calcAverage=(s1,s2,s3)=>(s1+s2+s3)/3;
console.log(calcAverage(3,4,5));


let scoreDolphins=calcAverage(44,23,71);
let scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins,scoreKoalas);


function checkWinner(avgDolphins,avgKoalas){

    // const avgDolphinsDouble=avgDolphins*2;
    // const avgKoalasDouble=avgKoalas*2;


    if(avgDolphins >= avgKoalas*2)
    {
        // console.log(avgDolphins, avgKoalas*2)
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas*2})`);
    }
    else if(avgKoalas >=avgDolphins*2)
    {
        // console.log(avgKoalas,avgDolphins*2)
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins*2})`);
    }
    else{
        console.log(`No team wins...`);
    }

}

/*const calcAverage=(s1,s2,s3)=>
   { (s1+s2+s3)/3;
}*/

/* const calcAverage=(s1,s2,s3)=>
   { let calcAvg=(s1+s2+s3)/3;
   return calcAvg;
} */


// Test data #1
/*let scoreDolphins=calcAverage(44,23,71);
let scoreKoalas=calcAverage(65,54,49);
console.log(scoreDolphins , scoreKoalas);*/

// //Test data #2
// const scoreDolphins=calcAverage(85,54,41);
// const scoreKoalas=calcAverage(23,34,27);


/*function checkWinner(avgDolphins,avgKoalas){

    if(avgDolphins > avgKoalas*2)
    {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    }
    else if(avgKoalas > avgDolphins*2){
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
    else{
        console.log(`No team wins`);
    }

}

checkWinner(scoreDolphins,scoreKoalas);*/

//============================below is another part=====================================================

/* const avgDolphinsDouble=avgDolphins*2;
    const avgKoalasDouble=avgKoalas*2;


    if(avgDolphins > avgKoalasDouble)
    {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalasDouble})`)
    }
    else if(avgKoalas > avgDolphinsDouble)
    {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphinsDouble})`)
    }
    else{
        console.log(`No team wins.`)
    }
 */
