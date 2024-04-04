// const fivePromise = new Promise(function(resolve){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "JavaScript Error", password: "1234"})

//         } else {
//             reject('ERROR: Js went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//      try{
//         const response = await fivePromise
//         console.log(response);

//      } catch(error){
//         console.log(error);
//      }
// }
// consumePromiseFive()


// if error are in the code the it should be try catch()
// async function consumePromiseFive() {
//      const response = await  fivePromise
//      console.log(response);


// }

// consumePromiseFive()

// async awit method  

// fetch() is a network request it wil take a time so we await for that

// async function getAllUsers() {
//     try{
//             const response =  await fetch('https://api.github.com/users/shivam7348')
//             console.log(response)
//         //  const data = response.json()
//         //     console.log(data);
//     } catch(error) {
//         console.log("E:", error)
//     }

 
// }
// getAllUsers()

fetch('https://api.github.com/users/shivam7348')

.then((response) => {
    return response.json()
.then((data) => {
    console.log(data)
})

}).catch((error) => console.log(error));

// fetch is exicting web request 









