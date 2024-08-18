import SCRIPTS from './ch5_dataset.js'

function CountCharacters(script){
    return script.ranges.reduce((count, [start, end])=>{
        return count + (end - start);
    },0);
}

console.log(SCRIPTS.reduce((a, b)=>{
    if(CountCharacters(b)>CountCharacters(a)){
        return b;
    }else{
        return a;
    }
}));
// console.log(SCRIPTS.reduce((a, b) => {
//     return CountCharacters(a) < CountCharacters(b) ? b : a;
//     }));
    

