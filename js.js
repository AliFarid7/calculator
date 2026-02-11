let num1;
let num2;
let op;

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a,b) {
    return a / b;
};

function operator(op, num1, num2){
    if (op === "+") return add(num1, num2);
    if (op === "-") return subtract(num1, num2);
    if (op === "*") return multiply(num1, num2);
    if (op === "/") return divide(num1, num2);
}


console.log(operator('*', 5, 6));