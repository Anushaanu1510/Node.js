n=1

while(n<=1000)
{
    i=1
    f=0
    while(i<=n)
    {
        if(n%i==0)
        {
            f=f+1
        }
        i=i+1
    }
    if(f==2)
    {
        console.log(n)
    }
    n=n+1
}



