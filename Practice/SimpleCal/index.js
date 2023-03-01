let num1 = 8
let num2 = 1

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let resEl = document.getElementById("res-el")
let res;

function add() {
    res = num1 + num2
    resEl.textContent = "Result" + ":" +" "+res
}

function sub(){
    res = num1 - num2
    resEl.textContent = "Result" + ":" +" "+res
}

function multiply(){
    res = num1*num2
    resEl.textContent= "Result" + ":" +" "+res
}

function divide(){
    res = num1/num2
    resEl.textContent= "Result" + ":" +" "+res
}