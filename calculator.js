const prompt=require("prompt-sync")({sigint:true})
var a = parseInt(prompt("Enter the value of a:"));
var b = parseInt(prompt("Enter the value for b:"));

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

console.log("The sum of", a, "and", b, "is", add(a, b));
console.log("The difference of", a, "and", b, "is", subtract(a, b));
console.log("The product of", a, "and", b, "is:", multiply(a, b));
console.log("The division of", a, "and", b, "is:", divide(a, b));