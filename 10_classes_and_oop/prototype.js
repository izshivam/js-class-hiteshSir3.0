// let myName = "Hitesh     "
// let myChannel = "Chai_____"

// console.log(myName.truelength);




let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "slig",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Hitesh = function() {
    console.log(`Hitesh is present in all object`);   
}

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`);    
}

// heroPower.Hitesh()
// myHeros.Hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()



/***** INHERITANCE *****/

const User = {
    name: "Chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeViseo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: `JS assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

/** Modern Syntax **/

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.truelenght = function() {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);   
}

anotherUsername.truelenght()
"Hitesh".truelenght()
"iceTea".truelenght()