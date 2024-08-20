import SCRIPTS from "./ch5_dataset.js";

function filter(arr, filt){
    let filtered = [];
    for(let element of arr){
        if(filt(element)){
            filtered.push(element);
        }
    }
    return filtered;
}

//Finding the average number of years of origin for living and death scripts

function average(liv_dead){
    return liv_dead.reduce((a, b)=>a+b)/liv_dead.length;
}
//Living scripts
console.log(`The average year of origin for living scripts is ${Math.round(average(SCRIPTS.filter(script=>script.living)
.map(script=>script.year)))}`);

//death scripts
console.log(`The average year of origin for death scripts is ${Math.round(average(SCRIPTS.filter(scripts=>!scripts.living)
.map(script=>script.year)))}`);