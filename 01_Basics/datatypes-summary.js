//Primitive

//7 types :String , Number , Boolean , Null , undefined , symbol , BigInt 

//Reference (Non primitive)

//Array , Objects , Functions 

const score = 100                                        //num
const scoreValue = 100.3                                //num

const isLoggedIn = false                                //Boolean
const outsideTmp = null                                  //null
let userEmail;                                           //undefined

const id = Symbol('123')                                //symbol
const anotherId = Symbol('123')                         //symbol

//console.log(id == anotherId);

const bigNumber = 4943580422244n                        //bigInt

const heros = ["shaktiman" , "naagraj" , "doga"];     //array

let myobj = {
    name: "Pooja" ,
    age:  22 ,
}

const myFunction = function() {
    console.log("Hello World");
}

//console.log(typeof bigNumber);                //output=undefined
//console.log(typeof outsideTmp);              //output=object
//console.log(typeof myFunction);              //output=function


//*******************************************************//

//stack(primitive) , heap(Non-primitive)

let myYoutubename = "poojak"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com" , 
    upi : "user@ybl" ,
}

let userTwo = userOne 
userTwo.email = "pooja@google.com"

console.log(userOne.email);
console.log(userTwo.email);