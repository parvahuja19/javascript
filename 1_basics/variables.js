//there are 4 types of variable declaration method in javascript

//cannot be changed
const id=1

//can be changed
let name="parv ahuja"
var password="parvprogrammes"
location="bhubaneshwar"

console.log(id)
console.log(name)
console.log(password)
console.log(location)

console.log("OR")

console.table([id,name,password,location])

console.log("after new assignment")
name="veer ahuja"
password="vforveer"
location="new delhi"
console.log(id)
console.log(name)
console.log(password)
console.log(location)

console.log("OR")

console.table([id,name,password,location])

//var should not be used as it is old practice and we should use var only