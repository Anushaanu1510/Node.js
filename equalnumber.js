const prompt=require("prompt-sync")({sigint:true})
var a=parseInt(prompt("Enter the first number"))
var b = parseInt(prompt("Enter the second number")) 

if(a==b)
{
    console.log("Both are equal")
}
else{
    console.log("Both are not equal")
}
