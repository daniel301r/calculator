const keyboard = document.querySelectorAll(".button");
const screenDisplay = document.querySelector(".screenNums");

// idea to have one big function for every button and then list
// individual functions below

// ----------- !!!!!!!!!!!!!!!!!!!!! ------------ have a state to say whether or not it is playing or whether it is the first time

// ----- play around with the below code tomorrow ---- that's how you target shit!!

// const key = e.target
// const action = key.dataset.action




let mathFunction = "";
let totalSum = 0;
let firstNum = [];
let nextNum = []

let secondNum = false;


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
        if (!secondNum) {
            
            // we need to check if it is the first number or not so we know what to display
            if (firstNum.length <= 0) {
                firstNum.push("1");
                screenDisplay.innerHTML = "1";
            } else {
                firstNum.push("1");
                screenDisplay.innerHTML = firstNum.join("");
            }
            
        } else {
            if (nextNum.length <= 0) {
                nextNum.push("1");
                screenDisplay.innerHTML = "1";
            } else {
                nextNum.push("1")
            }

        }
        


    } else if (this.id === "two") {
        if (!secondNum) {
            firstNum.push("2");
            screenDisplay.innerHTML = "2";
        } else {
            nextNum.push("2");
            screenDisplay.innerHTML = "2";
        }
        

    } else if (this.id === "three") {
        if (!secondNum) {
            firstNum.push("3");
            screenDisplay.innerHTML = "3";
        } else {
            nextNum.push("3");
            screenDisplay.innerHTML = "3";
        }


    } else if (this.id === "four") {
        if (!secondNum) {
            firstNum.push("4");
            screenDisplay.innerHTML = "4";
        } else {
            nextNum.push("4");
            screenDisplay.innerHTML = "4";
        }


    } else if (this.id === "five") {
        if (!secondNum) {
            firstNum.push("5");
            screenDisplay.innerHTML = "5";
        } else {
            nextNum.push("5");
            screenDisplay.innerHTML = "5";
        }

    } else if (this.id === "six") {
        if (!secondNum) {
            firstNum.push("6");
            screenDisplay.innerHTML = "6";
        } else {
            nextNum.push("6");
            screenDisplay.innerHTML = "6";
        }


    } else if (this.id === "seven") {
        if (!secondNum) {
            firstNum.push("7");
            screenDisplay.innerHTML = "7";
        } else {
            nextNum.push("7");
            screenDisplay.innerHTML = "7";
        }


    } else if (this.id === "eight") {
        if (!secondNum) {
            firstNum.push("8");
            screenDisplay.innerHTML = "8";
        } else {
            nextNum.push("8");
            screenDisplay.innerHTML = "8";
        }


    } else if (this.id === "nine") {
        if (!secondNum) {
            firstNum.push("9");
            screenDisplay.innerHTML = "9";
        } else {
            nextNum.push("9");
            screenDisplay.innerHTML = "9";
        }


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

    } else if (this.id === "add") {

        mathFuntion = this.id;

        if (!secondNum) {
            secondNum = true;
        } else {
            secondNum = false;
        }

        



    } else if (this.id === "subtract") {


        
        // totalSum.push("-");
        mathFunction = this.id;

    } else if (this.id === "divide") {
        
        // totalSum.push("/");
        mathFunction = this.id;

    } else if (this.id === "multiply") {
        
        // totalSum.push("*");
        mathFunction = this.id;

    } else if (this.id === "equals") {
        firstNum = firstNum.join("");
        firstNum = parseInt(firstNum, 10);
        nextNum = nextNum.join("");
        nextNum = parseInt(nextNum, 10);

        let result = ""
        
        if (mathFunction = "add"){
            result = firstNum + nextNum;
        } else if (mathFunction = "subtract") {
            result = firstNum - nextNum;
        } else if (mathFunction = "divide") {
            result = firstNum / nextNum;
        } else if (mathFunction = "multiply"){
            result = firstNum * nextNum;
        }

        screenDisplay.innerHTML = result;

    }


}

keyboard.forEach(button => button.addEventListener('click', buttonHit));


