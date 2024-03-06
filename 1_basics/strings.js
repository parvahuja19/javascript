//here we will discuss about the normal and object string
let str="Parv is great"
console.log(str.toLocaleUpperCase())
console.log(str.toUpperCase())
console.log(str.substring(0,4))
console.log(str.charAt(5,90))       //row,column
console.log(str.concat(" for real"))
let s=" for real"
console.log(str.concat(s))
let whitespace="     u     "
console.log(whitespace)
console.log(whitespace.trim())
console.log(whitespace.length)

//another type here the string is generated in the form of an object
let str1=new String("parv is great")
console.log(str1.length)

//types of concatination
//1.adding the string using '+' sign
console.log(str+s)

//2.using the concat function
console.log(str.concat(s))

//3.using the best method
console.log((`i just called to say ${str},${s} and yeah f*** ${whitespace.trim()}`))

//in fact in console.log() also we can use the string functions
console.log((`hey`).length)

console.log(str.__proto__) //meaning an object
console.log(str1.__proto__) //also an object


