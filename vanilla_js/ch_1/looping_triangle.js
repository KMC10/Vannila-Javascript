function LoopingTriangle(){
    for(let i= 1; i<=7; i++){
        let str = "";
        while(str.length<i){
            str += "#";
        }
        console.log(str);
    }
    
}

LoopingTriangle();