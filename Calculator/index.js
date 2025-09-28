

let num1 = 8
let num2 = 2


document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")

function subtractEl(){
    sumEl.textContent = "Sum: " + (num1 - num2)
} 
 

function addEl() {
    sumEl.textContent = "Sum: " + (num1 + num2)

}

function divideEl() {
    sumEl.textContent = "Sum: " + (num1 / num2)

}

function multiplyEl() {
    sumEl.textContent = "Sum: " + (num1 * num2)

}

