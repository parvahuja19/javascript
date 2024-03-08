//under this we learn about the nesting of objects and how to combine two or more objects into one


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // under ob3 there are 2 separate objects 1&2
// const obj3 = Object.assign({}, obj1, obj2, obj4) //this is one of the ways of combining different types of objects the empty {} is defining an empty object under which the combined obj1 and obj2 go into

const ob5 = {name:"parv",age:10}
const obj3 = {...obj1, ...obj2, ...ob5}  //best method is spreading

//accessing the elements in case of mixed(combined) objects
console.log(obj3[4])
console.log(obj3[1])
console.log(obj3.age)
console.log(obj3.name)

//nesting of objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//to access from this

console.log(regularUser)
console.log(regularUser.email)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj6={
    fname:"parv",
    lname:"ahuja",
    siblings:1,
    sibiling_name:"veer",
}
console.log(obj6); 

console.log(Object.keys(obj6));  //gives out the keys present in the object in a array format
console.log(Object.values(obj6)); //gives out the values present in the object in array format
console.log(Object.entries(obj6)); //gives out the key-value pair 

console.log(obj6.hasOwnProperty('isLoggedIn')); //checks whether the input property is there or not

