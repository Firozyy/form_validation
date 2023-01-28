// let cart = ["shoe", "mobile", "laptop"];

// api.createOrder(cart, function (){
//     api.payment(function(){
//         api.summary(function (){
//             api.walletUpdate();
//         });
//     });
// });


// function successCallback(result) {
//     console.log(`Audio file ready at URL: ${result}`);
//   }
  
//   function failureCallback(error) {
//     console.error(`Error generating audio file: ${error}`);
//   }
  
//   createAudioFileAsync(audioSettings, successCallback, failureCallback); // Callback

//   createAudioFileAsync(audioSettings).then(successCallback,failureCallback)  // Immutable
  



// doSomething()
//   .then((url) => {
//     // I forgot to return this
//      fetch(url);
//   })
//   .then((result) => {
//     // result is undefined, because nothing is returned from
//     // the previous handler.
//     // There's no way to know the return value of the fetch()
//     // call anymore, or whether it succeeded at all.
//   });




const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
