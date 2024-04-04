const fivePromise = new Promise(function(resolve){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "JavaScript Error", password: "1234"})

        } else {
            reject('ERROR: Js went wrong')

        }
    }, 1000)
})

async function consumePromiseFive() {
     const response = await  fivePromise
     console.log(response);


}

consumePromiseFive()