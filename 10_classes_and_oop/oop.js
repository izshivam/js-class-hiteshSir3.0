/** Object Literal **/

const user = {
    username: "Hitesh",
    loginCount: 8,
    SingedIn: true,

    getUserDetails: function() {
        console.log("Got user details from database");
        console.log(`username: ${this.username}`);
        console.log(this);   
    }
}

// console.log(user);
// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(this);



/** Constructor Function **/

function User (username, loginCount, SingedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.SingedIn = SingedIn

    this.greeting = function() {
        console.log(`welcome ${this.username}`);
        
    }

    return this
}

// const userOne = new User ("Hiesh", 8, true)
// const userTwo = new User ("JS", 5, false)

// console.log(userOne);
// console.log(userTwo);


const userOne = User ("Hiesh", 8, true)
const userTwo = User ("JS", 5, false)

console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);