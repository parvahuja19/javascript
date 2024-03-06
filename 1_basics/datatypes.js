//this file contains all the different types of data and their conversion
let a=13
let b="lucknow"
let c=34.87
let d=true
//these are the main ones

console.log(typeof(a))
console.log(typeof(b))
console.log(typeof d)
console.log(typeof c)

let e=Number(d)
let f=Number(!d)  // numeric value
let g=!Number(d)  // boolean value since ! is a logical NOT operator 
console.log(e)
console.log(f)

console.log(typeof (String(a)))
console.log(Number(b))
console.log(typeof (Number(b)))
console.log(typeof NaN) // it is a number
console.log(typeof null)    // it is an object
console.log(typeof undefined)   // it is undefined