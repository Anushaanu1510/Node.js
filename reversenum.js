const prompt=require("prompt-sync")({sigint:true})
var num=parseInt(prompt("Enter the number:"))
var s=0
var t=num

while(num>0)
{
    rem=num%10
    s=s*10+rem
    num=Math.floor(num/10)
   
}

console.log("The number after reversing is",s)

if(t==s)
{
console.log("It's a palindrome")
}
else
{
console.log("It's not a palindrome")
}