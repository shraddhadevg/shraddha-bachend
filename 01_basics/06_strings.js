const name = "shraddha"
const lastname = "devgayya"

//console.log(name + lastname + "bharadi");

//console.log(`Hello my name is ${name} and my repo count is $`);

const gameName = new String('shraddh-aa-com')
//console.log(gameName[7]);
//console.log(gameName.__proto__);
//console.log (gameName.length)
//console.log (gameName. toLocaleUpperCase());
//console.log (gameName. toLocaleLowerCase());
//console.log (gameName. toLowerCase());
//console.log (gameName. toWellFormed());

//console.log(gameName.charAt(5));
//console.log(gameName.indexOf("s"));
//console.log(gameName.substring());

const newString = gameName.substring(0, 6)
console.log(newString );
const anotherString = gameName.slice(-9,5)

console.log(anotherString);  

const newStringOne = "   shra   "
console.log (newStringOne);
console.log (newStringOne.trim());

const url = "https://shraddha.com/shraddha%20devgayya"
console.log(url.replace('%20','-'));

console.log(url.includes("shraddha"));

console.log(gameName.split('-'));
