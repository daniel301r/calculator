const keyboard = document.querySelectorAll(".button");
const screenDisplay = document.querySelector(".screenNums");

// have a state to say whether or not it is playing or whether it is the first time

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
    if (!secondNum) {
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

function buttonHit() {

    if (this.id === "zero"){
        if (!secondNum) {
            firstNum.push("0");
            screenDisplay.innerHTML = "0";
            // function to stop the 0 appearing if the number before is 0
        } else {
            nextNum.push("0");
            screenDisplay.innerHTML = "0";
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
    } else if (this.id === "clearScreen") {
        
        if (!secondNum) {
            firstNum = [];
        } else {
            nextNum = [];
        }

        screenDisplay.innerHTML = "0";
               

    } else if (this.id === "clearAll") {
        
        console.log("clear all"); 
        totalSum = 0;
        firstNum = [];
        nextNum = [];
        screenDisplay.innerHTML = "0";
        secondNum = false;
        mathFunction = "";

    } else if (this.id === "add") {

        mathFuntion = this.id;

        if (firstNum.length > 0 && nextNum.length > 0) {
            continuation = true;
            console.log(continuation);
        }

        if (!secondNum) {
            secondNum = true;
        } else {
            secondNum = false;
        }

    } else if (this.id === "subtract") {


        mathFunction = this.id;

        if (!secondNum) {
            secondNum = true;
        } else {
            secondNum = false;
        }

    } else if (this.id === "divide") {
        
        mathFunction = this.id;

        if (!secondNum) {
            secondNum = true;
        } else {
            secondNum = false;
        }

    } else if (this.id === "multiply") {
        
        mathFunction = this.id;

        if (!secondNum) {
            secondNum = true;
        } else {
            secondNum = false;
        }

    } else if (this.id === "equals") {
        
        firstNum = firstNum.join("");
        firstNum = parseInt(firstNum, 10);
        nextNum = nextNum.join("");
        nextNum = parseInt(nextNum, 10);

        let result = ""
        
        if (mathFunction === "add"){
            result = firstNum + nextNum;
        } else if (mathFunction === "subtract") {
            console.log(firstNum, nextNum);
            result = firstNum - nextNum;
        } else if (mathFunction === "divide") {
            result = firstNum / nextNum;
        } else if (mathFunction === "multiply"){
            result = firstNum * nextNum;
        }

        screenDisplay.innerHTML = result;
    }
}

keyboard.forEach(button => button.addEventListener('click', buttonHit));


