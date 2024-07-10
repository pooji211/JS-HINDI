let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());                //for date 
console.log(myDate.toLocaleString());              //for time show in output with date
console.log(typeof myDate);                       //DATE IS AN OBJECT IN JAVASCRIPT


let myCreatedDate = new Date(2023 , 0 , 23)  
let myCreatedDate = new Date(2023, 0, 23, 5, 3)   // months start in javascript with 0 , so 0 is jan
let myCreatedDate = new Date("2023-01-14")         // months starts with 01 because of  dd-mm-yyyy format
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocalString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
