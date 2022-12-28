const prompt=require("prompt-sync")({sigint:true})
var a = parseInt(prompt("Enter the first point"))
var b = parseInt(prompt("Enter the second point"))

function point_calculate(a,b)
{
a=a*2;
b=b*3;
c=a+b
return c
}

console.log("The result after 2 points is:" ,point_calculate(a,b))



