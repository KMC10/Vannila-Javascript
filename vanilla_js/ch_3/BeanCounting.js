function CountBs(str){
    let total=0;
    for(let i=0; i<str.length; i++){
        if(str[i]==="B"){
            total++;
        }
    }
    return total;
}
console.log(CountBs("evBbbBlveB"));

// let str = "Hello";

// for(let i=0; i<str.length; i++){
//     console.log(str[i]);
// }