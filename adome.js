const prompt=require("prompt-sync")({sigint:true})
var n=parseInt(prompt("Enter the number"))
console.log(n)

var sqre=Math.pow(n,2)
console.log(sqre)

var rev=parseInt(sqre.toString().split('').reverse().join(''))
console.log(rev)

var root=Math.sqrt(rev)
console.log(root)

var revlast=parseInt(root.toString().split('').reverse().join(''))
console.log(revlast)

if (n==revlast)
{
    console.log("Its a adome number")

}
else
{
    console.log("Its not a adome number")
}