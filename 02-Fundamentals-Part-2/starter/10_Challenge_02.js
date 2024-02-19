const calcTip=(billValue) => (billValue >= 50 && billValue <=300)? billValue*0.15: billValue*0.20;
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[bills.length-1])];
const totals = [bills[0]+tips[0],bills[1]+tips[1],bills[bills.length-1]+tips[tips.length-1]];
console.log(bills, tips, totals)
