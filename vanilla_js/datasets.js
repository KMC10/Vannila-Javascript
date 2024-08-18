let listOfNumbers = [2, 4, 5, 83, 45, 11, 89];
console.log(typeof(listOfNumbers));
for(let i=0; i<listOfNumbers.length; i++){
    if(i%2==0){
        console.log(listOfNumbers[i]);
    }
}



let sequence = ["Mary", "Martha", "John", "Susan", 23.4];
console.log(typeof(sequence[4]));
sequence.push(5);
sequence.push(11.4);
//console.log(sequence);

let day1 = {
    squirell: false,
    activities: ["ate pizza", "drank milk", "touch tree"]
}
console.log(day1.squirell + " " + day1.activities[2]);
console.log(Object.keys({ name: "Khulani", sname: "Dlamini" }));

let numAlpha = {
    a: 1,
    b: 2
}
console.log(numAlpha);
Object.assign(numAlpha, {b: 3, c: 7});
console.log(numAlpha);

//console.log(day1.activities[1]);
