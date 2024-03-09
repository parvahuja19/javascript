//iife is Immediately Invoked Function Expressions
//in this the functions are immediately called and there is no need to call them
//we just have to add () at the start and end
//normal
(function(){
    console.log("database connected");
})();

//arrow function
((username)=>{
    console.log(`${username}, just joined the server`);
})('parv');