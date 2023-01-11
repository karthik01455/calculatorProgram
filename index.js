function add(a, b){
    return a+b;
}
function isPrime(a)
{
    var i;
    for(i=2;i<Math.sqrt(a);i++)
    {
        if(a%i==0)
        return false;
    }
    return true;
    
}


function sub(a,b)
{
    return a-b;
}


function div(a, b){
    return a/b;
}

function isEven(a){
    if(a%2==0){
        return true;
    } 
    else{
        return false;
    }
}
 
