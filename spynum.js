//1124,2114
const prompt=require("prompt-sync")({sigint:true})

var num= parseInt(prompt("Enter the number:"))

function sumnum(num)
{
    var num2=num.toString().split('')
    var sumn=0
    for(let i of num2)
    {
        sumn=sumn+parseInt(i)
    }
    return sumn
}

function summultiply(num)
{
    var num3=num.toString().split('')
    var multi=1
    for(let i of num3)
    {
        multi=multi*parseInt(i)
    }
    return multi
}
console.log(sumnum(num))
console.log(summultiply(num))

if(sumnum(num)==summultiply(num))
{
    console.log("Its a spy number")
}
else
{
    console.log("Its not a spy number")
}