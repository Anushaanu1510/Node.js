const prompt=require("prompt-sync")({sigint:true})

var num=parseInt(prompt("Enter the number:"))
console.log("Entered number is:",num)

var square=Math.pow(num,2)
console.log("Square of the number is:",square)
var squarestr=square.toString()

if(squarestr.endsWith(num))
{
    console.log(num,"is astromorphic number")
}
else
{
    console.log(num,"is not a astromorphic number")
}