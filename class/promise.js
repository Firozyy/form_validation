let cart = ["shoe", "mobile", "laptop"];

createOrder(cart)
.then(function(orderId){ // parameter
    proceedToPay(orderId); // arg
})
.then(function(paymentStatus){
    console.log(paymentStatus);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    
    const pr = new Promise(function(resolve,reject){

        if(!validateCart(cart)){
            
            const err = new Error("Invalid Cart");

            return reject(err);

        }

        let orderId = "5545455";

        return resolve(orderId);


    })

    return pr;

}

function validateCart(cart){

    if(cart.length < 1){
        return false;
    }else{
        return true;
    }

}

function proceedToPay(orderId){
  const pr =  new Promise(function(resolve,reject){

        let paymentStatus = "Success";
        return resolve(paymentStatus);

    });

    return pr;
}

