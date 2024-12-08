let ansEle = document.getElementById("ans");

function handleSubmit(event) {
    event.preventDefault();  
    let input1 = parseFloat(document.getElementById("input1").value);
    let input2 = parseFloat(document.getElementById("input2").value);
    let choice = document.getElementById("operation").value;

    switch (choice) {
        case "add":
            add(input1, input2);
            break;
        case "sub":
            sub(input1, input2);
            break;
        case "mul":
            mul(input1, input2);
            break;
        case "div":
            div(input1, input2);
            break;
        case "modulus":
            modulus(input1, input2);
            break;
    }
}

function add(a, b) {
    let r = a + b;
    ansEle.innerHTML = r;
}

function sub(a, b) {
    let r = a - b;
    ansEle.innerHTML = r;
}

function mul(a, b) {
    let r = a * b;
    ansEle.innerHTML = r;
}

function div(a, b) {
    if (b !== 0) {
        let r = a / b;
        ansEle.innerHTML = r;
    } else {
        ansEle.innerHTML = "Cannot divide by 0";
    }
}

function modulus(a, b) {
    let r = a % b;
    ansEle.innerHTML = r;
}