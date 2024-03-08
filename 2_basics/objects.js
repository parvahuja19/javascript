// here we will be discussing about the objects
// JSON is also an object just without a name
// there are 2 types of objects in javascript
// objects can be declared in two ways (1. Literal , 2. Constructor)
// when we declare the object using the constructor approach the object created is an singleton object
// whereas an object declared using literals has multiple instances

// singleton
Object.create() //this is using constructor


// symbols are a datatype that are used as unique values for indentifying or as keys

// literal format
const obj={
    //this is a very normal key : value format 
    fname:"parv",
    lname:"ahuja",
    email:"parvahuja307@gmail.com",
}

// they are accessed by using a dot (obj.fname,obj.lname,etc)
console.log(obj.fname,obj.lname,obj.car="ferrari");  // i am initializing car over here therefore we can initialize anywhere
console.log(obj.car);

obj.pass="pfizer@133";
console.log(obj);

Object.freeze(obj.email) //for freezing any particular aspect of the object
Object.freeze(obj)  //for freezing the whole object
const sym=Symbol("key1"); //here the key value doesn't matter we can change inside the object
const mixed_obj={
    //here I will add the string typeof key and Symbols
    fname:"veer",
    lname:"ahuja",
    [sym]:"key1",  //this is for initializing symbol datatype using [ ]
    "full name":"veer ahuja"
}
console.log(mixed_obj);
console.log(mixed_obj["full name"]); //for accessing a string key
console.log(mixed_obj[sym]);    //for accessing Symbol
console.log(mixed_obj.email="veerahuja05@gmail.com");

//we can even define functions under the objects
const new_obj={
    greeting:function(){console.log("hello");},
    food:function(){console.log("bread")}
}

// these are the way of referencing
console.log(new_obj.greeting); 
console.log(new_obj.food);

// way of actually executing also they're giving undefined because they are not returning anything and they're used in an explicit way without return keyword
console.log(new_obj.greeting());
console.log(new_obj.food());