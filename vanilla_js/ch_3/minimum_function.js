function min(num1, num2){
    if(num1>num2){
        return num2;
    }
    else if(num1<num2){
        return num1;
    }
    else{
        return "These numbers are equal";
    }
}

console.log(min(200, 20));