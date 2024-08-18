import SCRIPTS from './ch5_dataset.js';

function countCharacters(script){
    return script.ranges.reduce((size, [from, to])=>{
        return size + (to-from);
    },0);
}

// console.log(SCRIPTS.reduce((a, b) => {
//     return countCharacters(a) < countCharacters(b) ? b : a;
//     }));
//console.log('The 9nth script has', countCharacters(SCRIPTS[10]), "characters");


//My own logic 1
function redChar(array){
    let max = array[0]; // Assume the first script is the max
    array.forEach(script => {
        if(countCharacters(script) > countCharacters(max)){
            max = script;
        }
    });
    return max;
}

//console.log(redChar(SCRIPTS));

//Own logic 2
function MaxScript(array){
    let max = array[0];
    for(let i=1; i<array.length; i++){
        if(countCharacters(max)<countCharacters(array[i])){
            max = array[i];
        }
    }
    return max;
}

console.log(MaxScript(SCRIPTS));