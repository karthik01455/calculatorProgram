function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}
function isPrime(a)
{
    var i;
    i=0;
    for(i=2;i<Math.sqrt(a);i++)
    {
        if(a%i==0)
        return false;
    }
    return true;
}
function isEven(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
