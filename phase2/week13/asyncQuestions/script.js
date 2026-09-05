// What is the output of the code below?

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise.then(function () {
//     console.log("Success 1"); 
//   })

//   .then(function () {
//     console.log("Success 2");
//   })

//   .then(function () {
//     console.log("Success 3");
//   })

//   .catch(function () {
//     console.log("Error 1"); //First output
//   })


  // .then(function () {
  //   console.log("Success 4"); //second output
  // });



// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success'); //The promise returns 'success'
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true); //promise holds an object {'success'}

// promise.then(function(data) {
//     console.log(data); //first output -> success

//     return job(false); // it makes the promise rejected and it yields string -> 'error'
// })


// .catch(function(error) {
//     console.log(error); //second output string -> 'error'

//     return 'Error caught'; // return the string -> 'error caught'
// })

// .then(function(data) {
//     console.log(data); //Third output string -> 'Error caught'

//     return job(true); // it makes the promise resolved but no can handle it
// })

// .catch(function(error) {
//     console.log(error);
// });

//final answer will be 
             //success
            //error
            //Error caught

//**question 3 */
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success'); // promise resolves return an object that holds string -> 'success'
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true); //promise variable holds an object that contains string -> 'success'

// promise

// .then(function(data) {
//     console.log(data); // **first output prints string-> 'success'

//     return job(true); //makes the promise fulfilled
// })

// .then(function(data) {
//     if (data !== 'victory') {  //the condition is true
//         throw 'Defeat';       // it throws string 'defeat' and makes the promise rejected and holds 'Defeat'
//     }

//     return job(true); // This block not executed because the above if statement is true
// })

// .then(function(data) { //then escaped
//     console.log(data); 
// })

// .catch(function(error) {
//   console.log(error); // **second output prints string -> 'Defeat'

//   return job(false); //makes the promise rejected and yields string -> 'error'
// })

// .then(function(data) { //then escaped
//     console.log(data); 

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error); // **third output prints string -> 'error'

//     return 'Error caught'; //promise fulfilled and returns string -> 'Error caught'
// })

// .then(function(data) {
//     console.log(data); // **Third output string -> 'Error caught'

//     return new Error('test'); //promise rejected and yields string -> 'test'
// })

// .then(function(data) {
//     console.log('Success:', data.message); // **Fourth output string -> 'Success: test' sand promise fulfilled
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });
// What is the output of the code above?
 //final result
   // *! success
   // *! Defeat
   // *! error
   // *! error caught
   // *! Success: test

// *** question4
//read about micro and macro task

// console.log("Start"); //First it is synchronous

// setTimeout(function () {
//   console.log("Timeout3");
// }, 3); //Fourth it is macrotask

// setTimeout(function () {
//   console.log("Timeout");
// }, 0); //third it is macrotask

// Promise.resolve("Promise").then(function (value) {
//   console.log(value); //Third microtask
// });

// console.log("End"); //second it is synchronous

//*** final anser
// **! Start  
// **! End
 // **! Promise
 // **! Timeout
 // **! Timeout3



