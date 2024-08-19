function every1(arr, test){
    for(let element of arr){
        if(!test(element)){
            return false;
        }
    }
    return true;
}

let array1 = [2, 40, 8, 10];

//console.log(every1(array1, n=>n%2==0));


// function some(arr, test){
//     for(let element of arr){
//         if(test(element)){
//             return true;
//         }
//     }
//     return false;
// }

function every2(arr, test) {
    // Use 'some' to check if there is any element that does NOT pass the test
    return !arr.some(element => !test(element));
}
//let array1 = [2, 9, 8, 10];
console.log(every2(array1, n => n % 2 == 0)); // Should return false because 9 is not even
