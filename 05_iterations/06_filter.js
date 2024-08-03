const coding = ["A", "B", "C", "D", "E", "F"]
// const values = coding.forEach( (item) => {
//     console.log(item);
// } )
// console.log(values);

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )
// console.log(values);

// const values = coding.forEach( (item) => {
//     return item
// } )
// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

// const newNums = myNums.filter( (num) => {num > 4} )
// console.log(newNums);

// const newNums = myNums.filter( (num) => {return num > 4} )
// console.log(newNums);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);


const Book = [
    {
        tittle: 'BookOne', genre: 'Fiction', publish: '1981', edition: '2004'
    },
    {
        tittle: 'BookTwo', genre: 'Non-Fiction', publish: '1992', edition: '2004'
    },
    {
        tittle: 'BookThree', genre: 'History', publish: '1999', edition: '2008'
    },
    {
        tittle: 'BookFour', genre: 'Non-Fiction', publish: '1989', edition: '2007'
    },
    {
        tittle: 'BookFive', genre: 'Fiction', publish: '1981', edition: '2010'
    },
    {
        tittle: 'BookSix', genre: 'Science', publish: '2009', edition: '2010'
    },
    {
        tittle: 'BookSeven', genre: 'Fiction', publish: '1987', edition: '2014'
    },
    {
        tittle: 'BookEight', genre: 'History', publish: '1986', edition: '1996'
    },
    {
        tittle: 'BookNine', genre: 'Science', publish: '2011', edition: '2016'
    },
    {
        tittle: 'BookTen', genre: 'Non-Fiction', publish: '1981', edition: '1989'
    }
]
let userBooks = Book.filter( (bk) => bk.genre === 'History' )
userBooks = Book.filter( (bk) => {bk.publish >= 2000} )
userBooks = Book.filter( (bk) => {return bk.publish>= 2000} )
userBooks = Book.filter( (bk) => {return bk.publish >= 1995 && bk.genre === 'History'} )
console.log(userBooks);