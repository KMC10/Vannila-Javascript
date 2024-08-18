let ranArr = [90, 87, 101, 65, 78, 49, 9];

function ReverseArray(arr) {
    let rev_arr = [];
    let val = arr.length;
    for (let i = val - 1; i >= 0; i--) {
        rev_arr.push(arr[i]);
    }
    return rev_arr;
}

console.log(ReverseArray(ranArr));

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
