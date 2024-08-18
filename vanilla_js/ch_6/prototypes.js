function Rabbit(type, height){
    this.type = type;
    this.height = height;
}
Rabbit.prototype.fav = "I love carrots";
Rabbit.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says ${line} and i am ${this.height}. ${this.fav}`);
}

let whiteRabbit = new Rabbit("white", 'short');
let hungryRabbit= new Rabbit("hungry");

whiteRabbit.speak(`I have white fur`);


let empty = {};
console.log("first", empty.toString);
console.log("Second", empty.toString());

//Understanding the whole concept about Prototypes.
let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} says "${line}"`)
    }
}
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
blackRabbit.speak("I am black and i love peanuts");