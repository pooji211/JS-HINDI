const accountId = 13243
let accountEmail = "pooja32@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 //     not allowed

accountEmail = "pooj@21.com"
accountPassword = "21433"
accountCity = "mumbai"


console.log(accountId);
/*prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])