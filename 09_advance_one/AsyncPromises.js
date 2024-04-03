const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async is complete');
        resolve()

    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");

})

// in next method it can also be like promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is resolved")
})

// three 
const promiseThree = new Promise(function(resolve, reject ){
    setTimeout(function(){

        console.log("async code 3");
    },1000)
})
