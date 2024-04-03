// consume and creations of the promises
// promises take call backs function
// promises have two properties 1 resoleve and reject

// const promisesOne = new Promise(function (resolve, reject) {
//     // DO an async task 
//     // DB calls, cryptography network calls
//      setTimeout(function() {
//         console.log("Async task is complete")
//         resolve()
//      }, 1000)
// })

// promisesOne.then(function() {
//     console.log("Promises consumed");
// })

new Promise(function(resolve, reject) {
    setTimeout(function( ){
    console.log("Async task is complete")
    resolve()
    },1000)

})
.then(function(){
    console.log("Async is resolved");
})


const promisesThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username:"chai", email:"chai@1234"})

    },1000)
})

promisesThree.then(function(user){
    console.log(user
        );

})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true

    },1000)
})
