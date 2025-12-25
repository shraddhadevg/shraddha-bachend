// memory

//1. stalk memory (primitive type) = you are getting a copy of variables.
//2. heap memory (non- primitive type) =  referance of original value.(if you did any change in referance then original value get changed.)

let myname = "shraddha"  // string(primitive type)

let anothername = "khushi"
anothername = "khushikumari"

console.log( myname);
console.log( anothername);

let UserOne = {
   Email :"UserOne@google.com",
   upi  : "user@ybl"
}

let UserTwo =  UserOne
UserTwo.Email = "UserTwo@google.com"

console.log(UserOne.Email);
console.log(UserTwo.Email);

