function isEven(num){
    if(num==0){
        return console.log(num%2==0);
    }
    else if(num==1){
        return console.log(num%2==0);
    }
    else{
        return isEven(num-2);
    }
}

isEven(75)
