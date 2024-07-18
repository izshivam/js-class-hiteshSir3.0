// singleton => constructor
// Object.create 


// Object.literals 

const mySym = Symbol("key1")
const JsUser = {
    name: "Shivam",
    "full name": "Shivam kumar",
    mySym: "myKey1",
    [mySym]: "myKey1",
    age: 25,
    location: "Siliguri",
    isLoggedIn: false,
    email: "shiv@gmail.com",
    loggedInDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.location);
// console.log(JsUser[location]);
// console.log(JsUser["location"]);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(JsUser[mySym]);
// console.log(JsUser["mySym"]);
// console.log(typeof JsUser.mySym);



// JsUser.location = "Mumbai",
// // Object.freeze(JsUser)
// JsUser.location = "Delhi"
// console.log(JsUser);



JsUser.greeting = function() {
    console.log("Hello Js User");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());