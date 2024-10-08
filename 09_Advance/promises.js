const PromiseOne = new Promise (function(resolve, reject) {
      setTimeout(function(){
        console.log('Async task completed');
        resolve()
      }, 1000)
})

PromiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve, reject){
    setTimeout(function(){
    console.log("Async task 2");
    resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})



const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    } , 1000)
})
PromiseThree.then(function(user){
    console.log(user);    
})



const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if (!error){
            resolve({username: "HITESH", password: "123"})
        } else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})

PromiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolve or rejected")
)



const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        // let error = true
        let error = false
        if (!error) {
            resolve({username: "JS", password: "54321"})
        } else {
            reject ('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response);        
    } catch (error) {
        console.log(error);       
    }
}
consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
// } 

// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);    
})