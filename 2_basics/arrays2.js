//here we will be discussing about concat, spreading, flat, etc
//there are many ways to merge two arrays
const arr=[1,2,4,5,6];
const new_arr=[7,8,9];
const mix=arr+new_arr;  //makes the array to strings therefore not acceptable
console.log(typeof new_arr);
console.log(mix);
console.log(typeof mix);
const mix2=arr.concat(new_arr);
console.log(typeof mix2);
const mix3=[...arr,...new_arr];  // spread operator, best and easiest
console.log(mix3);
console.log(typeof mix3);

//incase of arrays where there are multiple arrays inside we use the flat method to make it into a single array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(another_array.flat(Infinity));
const mix4=[...another_array,...mix3];
console.log(mix4.flat(2));
console.log(Array.isArray("parv")) // checks whether the input is array or not
console.log(Array.of("parv"));  // in this we get parv as a single element
console.log(Array.from("parv")) // in this we get each letter as a different element in the array and accepts only 1 input
console.log(Array.from(123456)) // returns an empty array because it doesn't know how to form an array out of the input

//similarly for this, result is an empty array
console.log(Array.from({name:"parv"}))

console.log(Array.of({name:"parv"},{age:10},{sub:"evs"}));
console.log(Array.of(1,3,2,3434));
console.log(Array.of(mix,mix2,mix3,mix4.flat(2)));

