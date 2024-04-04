const fivePromise = new Promise(function(resolve){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JavaScript Error", password: "1234"})

        } else {
            reject('ERROR: Js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
     try{
        const response = await fivePromise
        console.log(response);

     } catch(error){
        console.log(error);
     }
}
consumePromiseFive()


// if error are in the code the it should be try catch()
// async function consumePromiseFive() {
//      const response = await  fivePromise
//      console.log(response);


// }

// consumePromiseFive()
