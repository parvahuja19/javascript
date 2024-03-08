// here we will be discussing various types of array and different ways to initialise them
// there can be many types of arrays (numbers,strings,objects)

// eg of object
let obj = {
    name:"parv",
    age:19,
    salary:"20 LPA base"
};
console.log(obj);
const friends=["parv","veer","raj","santusht"];
const num_arr=[1,2,3,4,5];
const obj_arr=[{name:"parv",age:19},obj,{name:"veer",age:18}];
console.log(friends);
console.log(num_arr);
console.log(obj_arr);

// // another way of initialization
const new_arr=new Array("parv","veer",{name:"raj",age:19},9);
console.log(new_arr[0],arr[2],arr[0]);
// //in array we can literally put anything inside but it is considered good practise not to

// there are many methods applicable on array
// push 
// pop
// length
//shift
//unshift
//slice
//splice
const arr=new Array(1,2,3,4,5,6,7,8,9,10,11,12,13);
arr.push(14);
arr.pop();
console.log(arr.length);
arr.concat() //to merge two array we can also use + operator
arr.fill() //changes all elements to a static value that is defined 
console.log(arr.find((element)=>element>9))//this is a function
console.log(arr.includes(12)); // checks whether the element is there or not
// console.log(arr.findIndex((element)=>element==12)); finds the index of the first element that fulfills the condition
console.log(arr.keys());
arr.shift(14);
console.log(arr);
arr.shift()  // removes an element from the front
arr.unshift(2)
arr.unshift(44) // adds an element at the front
console.log(arr.slice(2,5));  // give an array as output with the element from the parent array from (start to end-1)
console.log(arr)
console.log(arr.splice(2,2));  //removes the given range of indexes from the array (start - end+1)
console.log(arr.splice(2,2));
console.log(arr.splice(0,20)); //till the end making the array empty
console.log(arr.slice(0,20));   //till the end but not affecting the array
console.log(arr);
