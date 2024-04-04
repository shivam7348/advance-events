// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async is complete');
//         resolve()

//     },1000)
// })



// promiseOne.then(function(){
//     console.log("Promise consumed");

// })

// // in next method it can also be like promise
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 is resolved")
// })

// three 
// const promiseThree = new Promise(function(resolve, reject ){
//     setTimeout(function(){
//         console.log("async code 3");
//         resolve({usename: "chai", email: "chaifa-border.com"})

//         },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


   // four

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "shivam", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }

    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
    console.log(error);
})
.finally(()=> console.log(" The promise is either resolve or reject"))