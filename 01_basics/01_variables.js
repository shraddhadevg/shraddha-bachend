const accountid = 144553
let accountEmail = "shra@google.com"
var accountpassword = "12121234"
accountcity = "jaipur"
let accoutstate;

//accountid = 2// not allowed
accountEmail = "shraddha@gmail.com"
accountpassword = "12345"
accountcity = "pune"


console.log(accountid);

console.table([accountid, accountEmail, accountpassword,accountcity, accoutstate])
/*
prefer not to use var
beacuse of issue in block scope and funtional scope
*/