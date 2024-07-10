const score = 400

//console.log(score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNum = 1124.567
//console.log(otherNum.toPrecision(3));

const hundreds = 2000000
//console.log(hundreds.toLocalString('en-IN'));



//****************************MATHS***************************//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(6.6));
console.log(Math.ceil(6.7));
console.log(Math.floor(8.2));
console.log(Math.min(5,6,3,7));
console.log(Math.max(4,7,9,2));

console.log(Math.random());
console.log((Math.random()*10) +1);                        // + 1 is to make sure to output will not be 0.04 like value shifting to 0

const min = 10                        //defined range in min and max in math random method
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) +min )