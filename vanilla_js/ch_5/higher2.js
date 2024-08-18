let nums = [3, 4, 89, 3, 1, 102];

//Addtion function
function add(a, b) {
    return a + b;
}
//Multiplication function
function times(arr) {
    let result = 1;
    for (let element of arr) {
        result = result * element;
    }
    return result;
}
//The function repeat
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
//Function unless which demonstartes that functions can change contrl flow
function unless(test, then, however) {
    if (test) {
        then();
    }
    else {
        however();
    }
}

repeat(10, (n=>{
    unless(n%2==0, ()=>{
        console.log(`${n} is even`);
    }, ()=>{
        console.log(`${n} is not even`);
    });
}));
//function that makes changes to other functions
function noisyAdd(add) {
    return (...args) => {
        console.log("Called with", args);
        let result = add(...args);
        console.log("Calling with", args, "returns", result);
        return result;
    }
}
console.log(times(nums));

//noisyAdd(add)(3, 5);

function sumAll(a, b, c, d, e,) {
    return a + b + c + d + e;
}

//console.log("Sum all gives", sumAll(...nums));