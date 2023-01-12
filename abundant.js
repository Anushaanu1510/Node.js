const prompt=require("prompt-sync")({sigint:true})

var num=parseInt(prompt("Enter the number:"))
var sum

for (var i=1; i<num;i++)
{
    if(num%i==0)
    {
        sum=sum+i
    }
}

if(num<sum)
{
    console.log("Its an abundant number")
}
else
{
    console.log("Its not an abundant number")
}