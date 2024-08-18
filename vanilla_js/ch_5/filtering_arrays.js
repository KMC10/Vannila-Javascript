import SCRIPTS from "./ch5_dataset.js";

function FilterArray(arr, condition){
    let results = [];
    for(let element of arr){
        if(condition(element)){
            results.push(element);
        }
    }
    return results;
}


function map(array, transform) {
    let mapped = [];
    for (let element of array) {
    mapped.push(transform(element));
    }
    return mapped;
    }
    let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
    console.log(map(rtlScripts, s => s.name));
    
console.log(FilterArray(SCRIPTS, script=>script.living));

export default FilterArray;