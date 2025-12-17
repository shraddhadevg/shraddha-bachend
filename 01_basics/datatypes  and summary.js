/* Officially detatypes are devided into 2 types( catagarisation byhow data stored in mamory and how could you access it ) 
1. premitive
2. non premative(other remaining)
if interviwer asks you that, how datatypes are devided ?
=> tthey are devided in two basic characters like how data is stored in memmory and how should we access it.
 
premative :-  there are 7 catagoris in premative

1. String
2. Number 
3. Boolean
4. Null
5. Undefined
6. Symbol
7. Bigint


* seconnd data type
***Referance datatype( non premative)***
1. Array
02.Objects
03.Function
*/

// // string
// const score = "shraddha" // string
// const score = false // boolean
// const score = 100 //number
// const score =100.9 //number (desimal is also in number)

// const isloggedIn = false
// const outSideTemp = null
// let userEmail; // undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );

