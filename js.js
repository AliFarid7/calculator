let num1;
let num2;
let op;
let displayCleared = false;
let result;
let error = false;


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
    if(b === 0) {
        return "Cannot divide by zero!"
    };
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
let myDot = document.querySelector(".dot");
let myBackspaceButton = document.querySelector(".backspace");
let clearButton = document.querySelector(".clear");

function handleNumber(){
    digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (error) {
                num1 = undefined;
                num2 = undefined;
                op = undefined;
                error = false;
                myDisplay.textContent = "";
            }
        if (displayCleared) {
                myDisplay.textContent = "";
                displayCleared = false;
            }
        myDisplay.textContent += button.textContent;
    });
});
}

function handleOperator(){
    operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (error) return;
        if (myDisplay.textContent === "") {
            op = button.textContent;
            return;
            }
        if (num1 !== undefined && op !== undefined && displayCleared === false) {
                calculate();
                op = button.textContent;
                displayCleared = true;
                return;
            }
        num1 = Number(myDisplay.textContent);
        op = button.textContent;
        myDisplay.textContent = "";
    });
});
}

function getResult(){
    myResult.addEventListener("click", () =>{
        calculate();
    })
}

function calculate() {
    if (op === undefined) return;
    if (num1 === undefined || op === undefined) return;
    num2 = Number(myDisplay.textContent);
    result = operator(op, num1, num2);
    if (result === "Cannot divide by zero!") {
        myDisplay.textContent = result;
        error = true;
        return;
    }
    result = Math.round(result * 100) / 100;
    myDisplay.textContent = result;
    num1 = result;
    op = undefined;
    num2 = undefined;
    displayCleared = true;
}

function clear(){
    clearButton.addEventListener("click", () =>{
        num1 = undefined;
        num2 = undefined;
        op = undefined;
        result = undefined;
        myDisplay.textContent = "";
        return;
    })
}

function addDecimal(){
    myDot.addEventListener("click", () =>{
        if (myDisplay.textContent.includes(".")) {
    return;
}
        myDisplay.textContent += ".";
    })
}

function goBack(){
    myBackspaceButton.addEventListener("click", () =>{
        myDisplay.textContent = myDisplay.textContent.slice(0, -1);
    })
}

function handleKeyboard() {
    document.addEventListener("keydown", (e) => {
        if (e.key >= '0' && e.key <= '9') {
            const button = Array.from(digitButtons).find(btn => btn.textContent === e.key);
            if (button) button.click();
        }
        
        if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            const button = Array.from(operatorButtons).find(btn => btn.textContent === e.key);
            if (button) button.click();
        }
        
        if (e.key === 'Enter' || e.key === '=') {
            myResult.click();
        }
        
        if (e.key === '.') {
            myDot.click();
        }
        
        if (e.key === 'Backspace') {
            myBackspaceButton.click();
        }
        
        if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
            clearButton.click();
        }
    });
}

handleNumber();
handleOperator();
getResult();
clear();
addDecimal()
goBack()
handleKeyboard();