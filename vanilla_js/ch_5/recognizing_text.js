import SCRIPTS from "./ch5_dataset.js";
function countBy(arr, groupVal){
    let occs = [];
    for(let element of arr){
        let name = groupVal(element);
        let known = occs.find(n=>n.name==name);
        if(!known){
            occs.push({name, count:1})
        }
        else{
            known.count++
        }
    }
    return occs;
}

console.log(countBy(SCRIPTS, script=>script.direction=="ltr"));