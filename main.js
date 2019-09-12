const keyboard = document.querySelectorAll(".button");
const screenDisplay = document.querySelector(".screenNums");
const mathOperator = document.querySelector(".mathFunction");

let mathFunction = "";
let totalSum = 0;
let firstNum = "";
let nextNum = "";

let secondNum = false;
let continuation = false;

function addDisplayNumbers(num) {
    if (continuation) {
        stopDisplayOperator();
        if (firstNum.length <= 0) {
            firstNum += num;
            screenDisplay.innerHTML = num;
        } else {
            firstNum += num;
            screenDisplay.innerHTML = firstNum;
        }   
    } else if (!secondNum) {
        if (firstNum.length <= 0) {
            firstNum += num;
            screenDisplay.innerHTML = num;
        } else {
            firstNum += num;
            screenDisplay.innerHTML = firstNum;
        }   
    } else {
        stopDisplayOperator();
        if (nextNum.length <= 0) {
            nextNum += num;
            screenDisplay.innerHTML = num;
        } else {
            nextNum += num;
            screenDisplay.innerHTML = nextNum;
        }
    }
}

function displayOperator(operator) {
    mathOperator.style.display = "block";
    screenDisplay.style.padding = 0;
    mathOperator.innerHTML = operator;

}

function stopDisplayOperator() {
    mathOperator.style.display = "none";
    screenDisplay.style.paddingRight = "0.3rem";
}

function reset() {
    totalSum = 0;
    firstNum = "";
    nextNum = "";
    screenDisplay.innerHTML = "0";
    secondNum = false;
    continuation = false;
    mathFunction = "";
}

function setState() {
    if (firstNum.length > 0 && nextNum.length > 0) {
        continuation = true;
    } else if (!secondNum) {
        secondNum = true;
    } else {
        secondNum = false;
    }
}

function calculate () {
    if (continuation) {
        if (firstNum.length === 0) {
            screenDisplay.innerHTML = totalSum;
        } else if (nextNum.length === 0) {
            if (mathFunction === "add"){
                totalSum += parseFloat(firstNum);
            } else if (mathFunction === "subtract") {
                totalSum -= parseFloat(firstNum);
            } else if (mathFunction === "divide") {
                totalSum /= parseFloat(firstNum);
            } else if (mathFunction === "multiply"){
                totalSum *= parseFloat(firstNum);
            }
            firstNum = "";
            screenDisplay.innerHTML = totalSum;
        } else {
            if (mathFunction === "add"){
                totalSum = parseFloat(firstNum) + parseFloat(nextNum);
            } else if (mathFunction === "subtract") {
                totalSum = parseFloat(firstNum) - parseFloat(nextNum);
            } else if (mathFunction === "divide") {
                totalSum = parseFloat(firstNum) / parseFloat(nextNum);
            } else if (mathFunction === "multiply"){
                totalSum = parseFloat(firstNum) * parseFloat(nextNum);
            }
            screenDisplay.innerHTML = totalSum;
            firstNum = "";
            nextNum = "";
        }
    }
}

function buttonHit() {
    if (this.id === "zero"){
        if (!secondNum || continuation) {
            if (firstNum.length === 0) {
                if (continuation) {
                    screenDisplay.innerHTML = totalSum;
                } else {
                    screenDisplay.innerHTML = "0";
                }
            } else {
                firstNum += "0";
                screenDisplay.innerHTML = firstNum;
            } 
        } else {
            if (nextNum.length === 0) {
                if (continuation) {
                    screenDisplay.innerHTML = totalSum;
                } else {
                    screenDisplay.innerHTML = "0";
                }
            } else {
                nextNum += "0";
                screenDisplay.innerHTML = nextNum;
            }
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
            if (firstNum.length === 0 &&
                nextNum.length === 0 &&
                totalSum > 0) {
                    screenDisplay.innerHTML = totalSum;
            } else {                              
                firstNum = firstNum.slice(0, firstNum.length - 1);              
                if (firstNum.length === 0) {
                    screenDisplay.innerHTML = "0";
                } else {
                    screenDisplay.innerHTML = firstNum;
                }
            }
        } else {
            if (firstNum.length === 0 &&
                nextNum.length === 0 &&
                totalSum > 0) {
                    screenDisplay.innerHTML = totalSum;
            } else {                 
                nextNum = nextNum.slice(0, nextNum.length - 1);     
                if (nextNum.length === 0) {
                    screenDisplay.innerHTML = "0";
                } else {
                    screenDisplay.innerHTML = nextNum;
                }
            }    
        }
    } else if (this.id === "clearScreen") {   
        if (firstNum.length === 0 &&
            nextNum.length === 0 &&
            totalSum > 0) {
                screenDisplay.innerHTML = totalSum;
        } else {
            if (continuation) {
                firstNum = "";
            } else if (!secondNum) {
                firstNum = "";
            } else {
                nextNum = "";
            }
            screenDisplay.innerHTML = "0";
        }
       
    } else if (this.id === "clearAll") {
        reset();
        stopDisplayOperator();
    } else if (this.id === "add") {
        setState();
        calculate();      
        mathFunction = this.id;
        displayOperator("+");
    } else if (this.id === "subtract") {
        setState();
        calculate();
        mathFunction = this.id;
        displayOperator("-");
    } else if (this.id === "divide") {
        
        setState();
        calculate();
        mathFunction = this.id;
        displayOperator("/");

    } else if (this.id === "multiply") {
        
        setState();       
        calculate();
        mathFunction = this.id;
        displayOperator("x");

    } else if (this.id === "equals") {
        stopDisplayOperator();
        if (continuation) {
            if (mathFunction === "add"){
                totalSum += parseFloat(firstNum);
            } else if (mathFunction === "subtract") {
                totalSum -= parseFloat(firstNum);
            } else if (mathFunction === "divide") {
                totalSum /= parseFloat(firstNum);
            } else if (mathFunction === "multiply"){
                totalSum *= parseFloat(firstNum);
            }
            screenDisplay.innerHTML = totalSum;
            firstNum = "";
            continuation = true;
            secondNum = false;
        } else {          
            if (mathFunction === "add"){
                totalSum = parseFloat(firstNum) + parseFloat(nextNum);
            } else if (mathFunction === "subtract") {
                totalSum = parseFloat(firstNum) - parseFloat(nextNum);
            } else if (mathFunction === "divide") {
                totalSum = parseFloat(firstNum) / parseFloat(nextNum);
            } else if (mathFunction === "multiply"){
                totalSum = parseFloat(firstNum) * parseFloat(nextNum);
            }
            screenDisplay.innerHTML = totalSum;
            firstNum = "";
            nextNum = "";
            continuation = true;
            secondNum = false;
        }
    } else if (this.id === "decimal") {
        if (continuation || !secondNum){
            if (firstNum.includes(".")){
                screenDisplay.innerHTML = firstNum;
            } else if (firstNum.length === 0 && nextNum.length === 0) {
                firstNum = totalSum + ".";
                totalSum = 0;
                screenDisplay.innerHTML =  firstNum;
                continuation = false;
            } else {
                if (firstNum === "") {
                    firstNum = "0.";
                    screenDisplay.innerHTML = firstNum;
                } else {
                    firstNum += ".";
                    screenDisplay.innerHTML = firstNum;
                }
            }
        } else {
            if (nextNum.length === 0) {
                screenDisplay = firstNum;
            } else if (nextNum.includes(".")){
                screenDisplay.innerHTML = nextNum;
            } else {
                if (nextNum === "") {
                    nextNum = "0.";
                    screenDisplay.innerHTML = nextNum;
                } else {
                    nextNum += ".";
                    screenDisplay.innerHTML = nextNum;
                }
            }
        }
    } else if (this.id === "negative") {
        if (continuation || !secondNum) {
            if (firstNum.includes("-")){
                screenDisplay.innerHTML = firstNum;
            } else if (firstNum.length === 0 && nextNum.length === 0) {
                firstNum = "-" + totalSum;
                totalSum = 0;
                screenDisplay.innerHTML =  firstNum;
                continuation = false;
            } else {
                firstNum = "-" + firstNum;
                screenDisplay.innerHTML = firstNum;
            }
        } else {
            if (nextNum.includes("-")) {
                screenDisplay.innerHTML = nextNum;
            } else {
                nextNum = "-" + nextNum;
                screenDisplay.innerHTML = nextNum;
            }
        }
    }
}

keyboard.forEach(button => button.addEventListener('click', buttonHit));


