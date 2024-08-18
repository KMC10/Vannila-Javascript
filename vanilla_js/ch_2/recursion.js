function Square(base, power){
    if(power==0){
        return 1;
    }
    else{
       return base * Square(base, power - 1);
    }
}

console.log(Square(2, 3));


function Factorial(num){
    if(num==0 || num==1){
        return 1;
    }
    else{
        return num*Factorial(num-1);
    }
}

console.log(Factorial(4));