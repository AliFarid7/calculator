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
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
let myDisplay = document.querySelector(".display");
let myResult = document.querySelector(".result");

function handleNumber(){
    digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        myDisplay.textContent += button.textContent;
    });
});
}

function handleOperator(){
    operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        num1 = Number(myDisplay.textContent);
        myDisplay.textContent += button.textContent;
        op = button.textContent;
            operatorButtons.forEach(button => {
            button.disabled = true;
            });        
        myDisplay.textContent = "";
    });
});
}

function getResult(){
    myResult.addEventListener("click", () =>{
        if (num1 === undefined || op === undefined) return;
        num2 = Number(myDisplay.textContent);
        const result = operator(op, num1, num2);
        myDisplay.textContent = result;
        num1 = result;
        op = undefined;
        num2 = undefined;
        operatorButtons.forEach(button => {
    button.disabled = false;
        });
    })
}

handleNumber();
handleOperator();
getResult();