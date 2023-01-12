//replace  0's with 1's

const prompt=require("prompt-sync")({sigint:true})
var num=parseInt(prompt("Enter sequence of numbers containing 0-9:"))
console.log("Entered number is:",num)

var numstr=num.toString()
var numstr2=""

for (i=0;i<=numstr.length;i++)
{
    if(numstr[i]=='0')
    {
        numstr2=numstr2+'1'
    }
    else
    {
        numstr2=numstr2+numstr[i]
    }
}

var num2=parseInt(numstr2)
console.log("Number after replacing 0 with 1 is:",num2)