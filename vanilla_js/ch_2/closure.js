function Closure(x){
    let ass_val = x;
    return ()=>ass_val;
}

let f_value = Closure(113);
console.log("This is the first value:", f_value());

let s_value = Closure(29);
console.log("Here is the second value: ", s_value());