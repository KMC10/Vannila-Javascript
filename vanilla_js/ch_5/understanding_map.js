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

function map(array, transformation_function){
    let transformed_elements = [];
    for(let element of array){
        transformed_elements.push(transformation_function(element))
    }
    return transformed_elements;
}
//let rtlScripts = SCRIPTS.FilterArray(s => s.direction === "rtl");
console.log(map(FilterArray(SCRIPTS, s=>s.direction=="rtl"), s=>s.name));