let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function range(Array) {
    console.log(Array.slice(Array[4]));
}

range(numArray);

function sum(Array) {
    let range_sum = 0;
    for (let num of Array) {
        range_sum += num;
    }
    return range_sum;
}

console.log("The sum of the range of the array is", sum(numArray));

let ranArr = [90, 87, 101, 65, 78, 49, 9];
console.log(ranArr.slice(3));

function StepArgument(start_num, end_num, step_num) {
    let genArray = [];
    genArray.push(start_num);
    for (let i = 0; i < genArray.length; i++) {
        let num = genArray[i] + step_num;
        if (end_num > start_num) {
            if (num <= end_num) {
                genArray.push((genArray[i] + step_num));
            }
        }
        else if(num>=end_num){
            genArray.push((genArray[i] + step_num));
        }
    }
    return console.log("The generated array is", genArray);
}

StepArgument(5, 2, -1);