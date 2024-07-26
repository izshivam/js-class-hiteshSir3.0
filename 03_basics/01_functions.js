// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");



// function SayMyName() {
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// SayMyName()



// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// addTwoNumbers()
// addTwoNumbers(5 , 3)
// addTwoNumbers(5 , "3")
// addTwoNumbers(5 , "a")
// addTwoNumbers(5 , null)



// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// const result = addTwoNumbers(3 , 5)
// console.log("Result: ", result);



// function addTwoNumbers(num1 , num2){
//     let result = num1 + num2
//     console.log("Hitesh");
//     return result
// }
// const result = addTwoNumbers(5 , 3)
// console.log("Result: ", result);



// function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
//     console.log("Shivam");
// }
// const result = addTwoNumbers(5 , 3)
// console.log("Result: ", result);



// function addTwoNumbers(num1 , num2){
//     return num1 + num2
// }
// const result = addTwoNumbers(5, 3)
// console.log("Result: ", result);



// function LoggedInUserName(username){
//     return `${username} just loggedin`
// }
// console.log(LoggedInUserName("Shivam"));
// console.log(LoggedInUserName());
// console.log(LoggedInUserName(""));



// function LoggedInUserName(username){
//     if (username === undefined) {
//         console.log("Please enter a username");
//     }
//     return `${username} just loggedin`
// }
// console.log(LoggedInUserName());



// function LoggedInUserName(username = "Sam"){
//     if (!username) {
//         console.log("Please enter a username");
//     }
//     return `${username} just loggedin`
// }
// console.log(LoggedInUserName());
// console.log(LoggedInUserName("Shivam"));




/*******************************************************************/
// function CalculateCartPrice(num1){
//     return num1
// }
// console.log(CalculateCartPrice(500));


// function CalculateCartPrice(...num1){
//     return num1
// }
// console.log(CalculateCartPrice(500, 800, 1000));


// function CalculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(CalculateCartPrice(500, 800, 1000));


// const user = {
//     username: "Shivam",
//     price: "199"
// }
// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }
// handleObject(user)
// handleObject({
//     username: "Sam",
//     price: 399
// })


const myNewArray = [200, 400, 600, 800]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));
