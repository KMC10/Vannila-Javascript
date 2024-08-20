import SCRIPTS from './ch5_dataset.js';
function charScript(code, arr){
    for(let element of arr){
        if(element.ranges.some(([from, to])=>{
            return code>=from && code < to;
        })){
            console.log(`The code is for the "${element.name}" script`);
        }
    }
}
charScript(121, SCRIPTS);