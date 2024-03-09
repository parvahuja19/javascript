// here we will learn about functions exactly the same as c++

// no parameters
function fullname(){
    console.log("parv","ahuja");
    console.log("ahuja");
}
console.log("hello")
fullname()

// with parameters
function add(num1,num2){
    const result=num1+num2;
    return result;
}
console.log(add(2,4));

function subtract(num1,num2)
{
    return num1-num2;
}
console.log(subtract(45,35));

function isloggedin(username)
{
    return `${username}, just logged in`;
}
console.log(isloggedin());

// just in case if we do not give any value to the parameter we can just add a default value to it 
function logged_on(username="xyz")
{
    return `${username}, just logged on`;
}
console.log(logged_on("parv"));
console.log(logged_on());

// we can also pass objects as parameters
const user={
    name:"parv",
    age:18
}
function check(user)
{
    return `the name of the user is ${user.name} and their age is ${user.age}`;
}
let str=check(user);
console.log(str);

//can also be done in this format
let str2=check({name:"veer",age:18});
console.log(str2);
