console.log("coconuts".slice(0, 7));
console.log("coconuts".lastIndexOf("s"));

let numbers = [34, 75, 89, 2, 12, 900, 45.78, -56, -98.65];
function max(...numbers) {
    let val = Infinity;
    for (let num of numbers) {
        if (num < val) {
            val = num;
        }
    }
    return val;
}
console.log(max(numbers));