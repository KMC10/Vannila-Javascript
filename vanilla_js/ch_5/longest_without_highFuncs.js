import SCRIPTS from './ch5_dataset.js'
function Longest(arr){
    let script = null;
    let max_size = 0;
    for(let element of arr){
        element.ranges.reduce((count, [from, to])=>{
            let curr_size = count + (to - from);
            if(curr_size>max_size){
                max_size = curr_size;
                script = element;
            }
            return curr_size;
        }, 0)
    }
     //console.log(`the biggest script is ${script.name} with size ${max_size}`);
     return `the biggest script is ${script.name} with size ${max_size}`
}

console.log(Longest(SCRIPTS));

//As an example, let’s write code that finds the average year of
// origin for living and dead scripts in the dataset.