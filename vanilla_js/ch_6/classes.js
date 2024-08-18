class Rabbit{
    constructor(type){
        this.type = type;
    }
    fav(food){
        console.log(`I love ${food}`)
    }
    speak(line){
        console.log(`The ${this.type} rabbit says "${line} and ${this.fav("roots")}"`);
    }
}

let killerRabbit = new Rabbit("killer");


killerRabbit.speak("I am dangerous");


class Area{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    quad(width, height){
        console.log(width*height);
    }
}

let square = new quad(4, 3)
square.quad();