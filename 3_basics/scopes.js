//here we will see the scopes

//in Console(browser) there is a global scope Window
//here is no global scope by default

//block scope is only for a block for eg if(){ } for(){ }
//which means that the variables defined here are not accessible outside of the scope

//when we use "var" the variables are even accessible outside of the scope, that is why we don't use var

//in this case the inner function is able to use the values of the outer function but the outer is not able to use the inner one

function one()
{
    const user="parv";
    console.log(user);
    function two()
    {
        const inneruser="veer";
        console.log(user);
        console.log(inneruser);
    }
    // console.log(inneruser);
    two();
}
one();

//we cannot access the inner function like this, we have to go through outside only
// two();

/****************************interesting******************************/

// this is a normal function
add(1);
function add(num)
{
    return num+1;
}
console.log(add(add(add(3))));
//under this it will not matter whether you call the 'add()' before of after the declaration of the function

//this is when a variable holds a function and it is a function itself
addtwo(3);  //this is will always result in an error
//This code defines a function named 'addTwo' that takes a number as input (num) and returns the result of adding 2 to that number. So, if you give the function a number, it will give you back that number increased by 2 but it is inside an variable therefore it is like an expression
const addtwo=function(num)
{
    return num+2;
}
addtwo(4); //correct way
//under this we cannot call 'addtwo()' before its declaration as it is holded inside a variable 

