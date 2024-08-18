let array = [[34, 7], [2, 17], [43, 1], [3, 15], [6, 8]];

let result_arr = array.reduce((flat, curr_arr)=>
                (flat.concat(curr_arr)),[]);

//console.log(result_arr);

//Using function

function Flat(arr){
   return arr.reduce((flat, curr_arr)=>
        flat.concat(curr_arr)
   ,[]);
}

//console.log(reduce(array));

let arr = [7, 9 ,0], qrr = [4, 7, 11], hrr = [];

console.log(Flat(array));