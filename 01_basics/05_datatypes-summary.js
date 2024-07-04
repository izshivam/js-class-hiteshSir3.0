/* DATATYPES */
// 2 Types : 
// Primitive Datatypes : String, number, BigInt, Null, Undefined, Boolean, Symbol
// Reference Datatypes : Array, Object, Function


// const id = Symbol('123');
// const anotherId = Symbol('123')
// console.log(id == anotherId);



/* Arrays => []
Objects => {}
Functions => function(){}
*/


const heros = ["Superman", "PowerRanger", "SpiderMan"];

let myObj = {
    name : "Shivam",
    age : 25 
};

const myFunction = function(){
    console.log("Shivam");
};


/********************  MEMORY  **********************/
// Memory : Stack & Heap

let myYoutubename = "hiteshchoudharydotcom"
let anotherName = "myYoutubename"
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);



let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "hc@google.com"

console.log(userOne.email);
console.log(userTwo.email);

/***********************************************************************/