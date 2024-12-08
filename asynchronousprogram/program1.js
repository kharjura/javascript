function orderpizza(flavour) {
    let pizza = flavour;
    console.log("pizza ordered successfully");
    console.log("pizza getting prepared");
    setTimeout(() => {
        for (let i = 0; i <= 1000; i++) {
            console.log("i");
        }
        console.log("pizza Delivered");
    },2000);
}

function CallFriend() {
    console.log("Calling Friend");
    console.log("Takes 30 mins to reach");
}

orderpizza("margaretta");
CallFriend();

// callfriend() is called even before orderpizza() is completed
// which is taking more time to execute
// so making it asynchronous in nature brings about a better execution time