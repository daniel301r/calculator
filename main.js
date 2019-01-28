const keyboard = document.querySelectorAll(".button");
const screenDisplay = document.querySelector(".screenNums");

// ----- play around with the below code tomorrow ---- that's how you target shit!!

// const key = e.target
// const action = key.dataset.action

// ------------ !!!!!!! -------- made continuation variable - if true do different functions i.e. add amount to total sum and then
// only use a first number - probably will have to change loads of code


let mathFunction = "";
let totalSum = 0;
let firstNum = [];
let nextNum = []

let secondNum = false;
let continuation = false;

function addDisplayNumbers(num) {
    if (continuation) {
        if (firstNum.length <= 0) {
            firstNum.push(num);
            screenDisplay.innerHTML = num;
        } else {
            firstNum.push(num);
            screenDisplay.innerHTML = firstNum.join("");
        }   
    } else if (!secondNum) {
        if (firstNum.length <= 0) {
            firstNum.push(num);
            screenDisplay.innerHTML = num;
        } else {
            firstNum.push(num);
            screenDisplay.innerHTML = firstNum.join("");
        }   
    } else {
        if (nextNum.length <= 0) {
            nextNum.push(num);
            screenDisplay.innerHTML = num;
        } else {
            nextNum.push(num);
            screenDisplay.innerHTML = nextNum.join("");
        }
    }
}
function determineState() {
    if (firstNum.length > 0 && nextNum.length > 0) {
        continuation = true;
    } else if (!secondNum) {
        secondNum = true;
    } else {
        secondNum = false;
    }
}

function parseFirstNumber() {
    firstNum = firstNum.join("");
    firstNum = parseInt(firstNum, 10);
}

function parseBothNumbers() {
    firstNum = firstNum.join("");
    firstNum = parseInt(firstNum, 10);
    nextNum = nextNum.join("");
    nextNum = parseInt(nextNum, 10);
}

function calculate () {
    if (continuation) {
        if (firstNum.length === 0) {
            screenDisplay.innerHTML = totalSum;
        } else if (nextNum.length === 0) {
            parseFirstNumber();
            if (mathFunction === "add"){
                totalSum += firstNum;
            } else if (mathFunction === "subtract") {
                totalSum -= firstNum;
            } else if (mathFunction === "divide") {
                totalSum /= firstNum;
            } else if (mathFunction === "multiply"){
                totalSum *= firstNum;
            }
            firstNum = [];
            screenDisplay.innerHTML = totalSum;
        } else {
            parseBothNumbers();
            if (mathFunction === "add"){
                totalSum = firstNum + nextNum;
            } else if (mathFunction === "subtract") {
                totalSum = firstNum - nextNum;
            } else if (mathFunction === "divide") {
                totalSum = firstNum / nextNum;
            } else if (mathFunction === "multiply"){
                totalSum = firstNum * nextNum;
            }
            screenDisplay.innerHTML = totalSum;
            firstNum = [];
            nextNum = [];
        }
    }
}

function bkSpace (num) {
    num.pop();
    if (num.length === 0) {
        screenDisplay.innerHTML = "0";
    } else {
        screenDisplay.innerHTML = num.join("");
    }
}

function zero (num) {
    if (num.length === 0) {
        if (continuation) {
            screenDisplay.innerHTML = totalSum;
        } else {
            screenDisplay.innerHTML = "0";
        }
    } else {
        num.push("0");
        screenDisplay.innerHTML = num.join("");
    }
}

function buttonHit() {

    if (this.id === "zero"){
        if (!secondNum || continuation) {
            zero(firstNum);
        } else {
            zero(nextNum);
        }      
    } else if (this.id === "one") {    
        addDisplayNumbers("1");         
    } else if (this.id === "two") {
        addDisplayNumbers("2");     
    } else if (this.id === "three") {
        addDisplayNumbers("3"); 
    } else if (this.id === "four") {
        addDisplayNumbers("4"); 
    } else if (this.id === "five") {
        addDisplayNumbers("5"); 
    } else if (this.id === "six") {
        addDisplayNumbers("6"); 
    } else if (this.id === "seven") {
        addDisplayNumbers("7"); 
    } else if (this.id === "eight") {
        addDisplayNumbers("8"); 
    } else if (this.id === "nine") {
        addDisplayNumbers("9"); 
    } else if (this.id === "bkSpace") {
        if (continuation || !secondNum){
            bkSpace(firstNum);
        } else {
            bkSpace(nextNum);
        }
    } else if (this.id === "clearScreen") {   
        if (continuation) {
            firstNum = [];
        } else if (!secondNum) {
            firstNum = [];
        } else {
            nextNum = [];
        }
        screenDisplay.innerHTML = "0";
    } else if (this.id === "clearAll") {
        totalSum = 0;
        firstNum = [];
        nextNum = [];
        screenDisplay.innerHTML = "0";
        secondNum = false;
        continuation = false;
        mathFunction = "";

    } else if (this.id === "add") {
        
        determineState();
        calculate();      
        mathFunction = this.id;

    } else if (this.id === "subtract") {

        determineState();
        calculate();
        mathFunction = this.id;

    } else if (this.id === "divide") {
        
        determineState();
        calculate();
        mathFunction = this.id;

    } else if (this.id === "multiply") {
        
        determineState();       
        calculate();
        mathFunction = this.id;

    } else if (this.id === "equals") {
        if (continuation) {
            parseFirstNumber();
            if (mathFunction === "add"){
                totalSum += firstNum;
            } else if (mathFunction === "subtract") {
                totalSum -= firstNum;
            } else if (mathFunction === "divide") {
                totalSum /= firstNum;
            } else if (mathFunction === "multiply"){
                totalSum *= firstNum;
            }
            screenDisplay.innerHTML = totalSum;
            firstNum = [];
            continuation = true;
            secondNum = false;
        } else {
            parseBothNumbers();            
            if (mathFunction === "add"){
                totalSum = firstNum + nextNum;
            } else if (mathFunction === "subtract") {
                totalSum = firstNum - nextNum;
            } else if (mathFunction === "divide") {
                totalSum = firstNum / nextNum;
            } else if (mathFunction === "multiply"){
                totalSum = firstNum * nextNum;
            }
            screenDisplay.innerHTML = totalSum;
            firstNum = [];
            nextNum = [];
            continuation = true;
            secondNum = false;
        }
    }
}

keyboard.forEach(button => button.addEventListener('click', buttonHit));


