let array = [34, 7, 2, 17];

function Mult(arr, val, test, operation, update){
    let product = 1;
    for(let element of arr){
        if(!test(val)){
            return product;
        }
        else{
            product = operation(element, product);
            update(val);
        }
    }
    return product;
}

console.log(Mult(array, 0, n=>n<array.length, (a, b)=>{
    return a*b;
}, n=>n+1));