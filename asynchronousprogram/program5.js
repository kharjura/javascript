function add(a, b, callSub) {
    // add function
    let r = a + b;
    callSub(r, 3, (subResult, b) => {
        // mul function
        let result = subResult * b;
        document.write("result after Mul: " + result + "<br>");
    });
}

add(10, 15, (addResult, b, callMul) => {
    // sub function
    let result = addResult - b;
    document.write("result after sub: " + result + "<br>");
    callMul(result, 3);
});