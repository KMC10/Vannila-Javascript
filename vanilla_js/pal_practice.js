function isPal(str){
    let strLowerCase = str.toLowerCase();
    let str1 = "";
    for(let i = str.length-1; i>=0; i--){
        str1 += strLowerCase[i];

    }
    return console.log(str1===strLowerCase);
}

isPal("noon");
