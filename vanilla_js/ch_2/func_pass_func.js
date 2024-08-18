function Future(){
    return "You will be a js master";
}
console.log("Please do believe that:", Future());

console.log("The sqrt of x is:", Sqrt_x(100))

function Sqrt_x(x){
    return Math.sqrt(x);
}

const age = (current_year, birth_year)=>{
    return (current_year - birth_year);
}

console.log("Your age is:", age(2024, 2000));

function greet(who) {
    console.log("Hello " + who);
    }
    greet("Harry");
    console.log("Bye");