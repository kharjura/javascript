function orderPizza(flavour) {
    return new Promise((resolve, reject) => {
        let pizza = flavour;
        console.log("Pizza ordered successfully");
        console.log("Pizza getting prepared");
        setTimeout(() => {
            for (let i = 0; i <= 1000; i++) {
                console.log("i");
            }
            console.log("Pizza Delivered");
            resolve();
        }, 2000);
    });
}

function callFriend() {
    console.log("Calling Friend");
    console.log("Takes 30 mins to reach");
}

orderPizza("Margherita")
    .then(() => {
        callFriend();
    })
    .catch((error) => {
        console.error(error);
    });
