//here we will discuss the THIS keyword and arrow functions
const user={
    name:"parv ahuja",
    age:21,

    //this is a variable which is holding a function 
    logged_in_text: function(){
        console.log(this); //gives out the whole object
        return `${this.name} of age ${this.age} just logged in`;
    }
}
console.log(user.logged_in_text); //this is a expression and not an execution statement

console.log(user.logged_in_text()); //this is an execution statement

console.log(this); //here it is an empty object whereas in Console of a browser it gives out window as the global variable

/*************arrow function**************/
//these are the same as the variable based function only difference is that we do not write the term 'function' and put an => in that case

const fun = () => {
    let username="parv ahuja";
    console.log(this);
}
fun();

//normal way of returning output
const add=(n1,n2)=>{
    return n1+n2;
}
console.log(add(1,2));

//another way
const add1=(n1,n2)=>{return n1+n2};
console.log(add1(2,3))

//another one (this is not a correct way as it gives out undefined therefore in the case of {} we have to add return word explicitly)
const add2=(n1,n2)=>{n1+n2};
console.log(add2(2,3))

//this is implicit way of return we don't have to add the keyword return 
const add3=(n1,n2,n3,n4)=>(n1+n2+n3+n4)
console.log(add3(1,2,4,4,4));  //the extra digits are not even seen

//just in case we need to return an object then we wrap the object in round bracket and then return 
const fun2=(n2,n3)=>({username:"parv"}); 
console.log(fun2());
