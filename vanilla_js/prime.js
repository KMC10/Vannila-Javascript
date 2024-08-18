function isP(num){
    if(num==2){
        return console.log(true);
    }
    for(let i=2; i<num; i++){
        if(num%i==0){
            return console.log(false);
        }
    }
    return console.log(true);
}


let ob1 = {
    value:10
}

let ob2 = ob1;

let ob3 = {
    value:10
}

console.log("This is", ob2==ob1);