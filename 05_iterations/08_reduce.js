// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// }, 0)
// console.log(myTotal);


// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);


// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// }, 3)
// console.log(myTotal);


// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( (acc, currval) => 
//     acc + currval
// , 0)
// console.log(myTotal);


const shoppingCart = [
    {
        item: "js",
        price: 299
    },
    {
        item: "py",
        price: 399
    },
    {
        item: "java",
        price: 499
    },
    {
        item: "html",
        price: 599
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);