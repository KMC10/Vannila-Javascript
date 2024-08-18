//Using plain js objects
let ages1 = {
    Brian: 36,
    Martin: 24,
    Ruth: 27,
    Rachel: 30
};

console.log(`Brian's age is ${ages1["Brian"]}`);
console.log("Do we have Jck's age in the first dataset:","Jack" in ages1);
console.log("toString" in ages1);
//Using map in js to do the same thing
let ages2 = new Map();
ages2.set("Mike", 40);
ages2.set("David", 34);
ages2.set("Robert", 38);

console.log(`Mike's age is ${ages2.get("Mike")}`);
console.log("Do we have Jack's age in the second dataset:", ages2.has("Jack"));