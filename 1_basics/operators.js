//here we will discuss about operators
//there are many +,-,=,*,**,==,>,<,<=,>=,etc which are done previously

console.log("2"==2)
// this is true cause javascript automatically converts it to number from string

console.log("2"+2) //here number is converted to string
console.log(2+"2")
console.log(1+1+2+"7")
console.log(1+'7')      // here '' is also regarded as strings
console.log(1+'2'+5)
console.log(1+'2'+'3'+3+3)
console.log(3+3+'2'+'3'+1) // in this case addition will only be done if the addition or subtraction operators are before the first string
console.log('1'+4+5+6) // here no addition since after the string 


// === is to check the value as well as the datatype then only true
console.log('1'==="1")
console.log('1'===1)
console.log('1'==='2')

// for the case of null and undefined

// both are false because here the value of null is not being converted from an object to a numeric value
console.log(null==0)
console.log(null<0)
console.log(null>0)
//where as in the greater than or less than equal to it does, become 0
console.log(null>=0)
console.log(null<=0)

// for the case of undefined (here value not converted)
console.log(undefined==0)
console.log(undefined===0)
console.log(undefined>0)
console.log(undefined<0)

console.log(undefined>=0)
console.log(undefined<=0)