const prompt=require("prompt-sync")({sigint:true})

var n=parseInt(prompt("Enter the number"))
var i=1
var f=0

while(i<=n)
{
    if(n%i==0)
    {
        f=f+1
    }
    i=i+1
}

if((f==1) || (f==1))
{
    console.log(n,"It's a palindrome")
}
else
{
    console.log(n,"It's not a palindrome")
}