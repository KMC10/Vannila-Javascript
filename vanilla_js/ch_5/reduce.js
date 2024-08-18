import SCRIPTS from "./ch5_dataset.js";
//manual reduce function
function reduce(array, combine, start){
    let current=start;
    for(let element of array){
        current = combine(current, element)
    }
    return current;
}
//my function call
console.log(reduce(nums,(a, b)=>a+b, 0));

 let nums = [2, 4, 6, 8, 10];
 //starndad/built-in reduce function
 console.log(nums.reduce((a, b)=>a+b));
