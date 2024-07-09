let score = undefined

//console.log(typeof score);
//console.log(typeof(score));

let valueInNum = Number(score)
//console.log(typeof valueInNum);
//console.log(valueInNum);

//  "33"  =>  33
//  "33abc"  =>  NaN   //not a number //
//  true  =>  1;   false  =>   0
//  null  =>  0
//  "string"   =>  NaN
// undefined  =>   NaN

let isLoggedIn = 33 
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true;  0  => false
// ""  => false
//"Pooja"  =>  true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(typeof stringNumber);

//****** Operations ****** //

let value = 3
let negValue = -value
//console.log(negValue);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/3);
//console.log(2%3);

let str1 = "Pooja"
let str2 = "pooji"

let str3 = str1 + str2
//console.log(str3);

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2);
//console.log(1 + 2 + " 2");

console.log( (3+4) * 5 % 3);    //it is a production level coding 

console.log(+true);      //not a production base 
console.log(+"");        //not a production base 

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2 

let gameCounter = 100
gameCounter++ ;
console.log(gameCounter);
