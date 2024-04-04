 const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
         console.log('Async is complete');
       resolve()

     },1000)
 })
promiseOne.then(function(){
     console.log("Promise consumed");
 })

//  in next method it can also be like promise
 new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
      resolve()
    },1000)
 }).then(function(){
    console.log("Async 2 is resolved")
 })

//  three  promises
 const promiseThree = new Promise(function(resolve, reject ){
    setTimeout(function(){
        console.log("async code 3");
        resolve({usename: "chai", email: "chaifa-border.com"})

         },1000)
})

 promiseThree.then(function(user){
     console.log(user)
 })


   // four

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "shivam", password: "1234"})
        } else {
            reject('Error: something went Wrong')
        }

    },1000)
})
fourPromise.then((user) => {
    console.log((user));
    return user.username

}).then((username)=> {
    console.log(username);

}).catch(function(error) {
    console.log("error");

})