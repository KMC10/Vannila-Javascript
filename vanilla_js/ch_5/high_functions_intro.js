function range(num1, num2) {
    let arr = [];
    let num = num1;
    arr.push(num1);
    if (num1 < num2) {
        for (let i = num1; i < num2; i++) {
            num += 1;
            arr.push(num);
        }
        return arr;
    }
    else if (num1 > num2) {
        for (let i = num1; i > num2; i--) {
            num -= 1;
            arr.push(num);
        }
        return arr;
    }
    else {
        return "Error"
    }
}

//console.log(range(5, -2));

function sumRange(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

//console.log(sumRange(range(1, 10)));

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log)


function greaterThan(n){
    return(m)=>m>n;
}