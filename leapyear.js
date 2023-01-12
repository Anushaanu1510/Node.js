const prompt=require("prompt-sync")({sigint:true})
var year=parseInt(prompt("Enter the year"))

if ((year%400==0) || (year %100!=0) && (year%4==0))
{
    console.log(year,"This is a leap year")
}
else
{
    console.log(year,"This is not a leap year")
}