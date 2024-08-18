function speak(line){
    console.log(`I am a(n) ${this.name}, I am ${this.height} and ${line}`)
};

let girraffe = {name:"girraffe", height:"tall", speak}

girraffe.speak("I love eating trees");

speak.call(girraffe, "I Run fast!!");


let find = {
    finder(arr){
        return arr.some(n=>n==this.value);
    },
    value: 10
}

console.log(find.finder([11, 12, "p", 90, 10]))