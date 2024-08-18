import rabbits from './my_rabbit_Dataset.js';

class Rabbit {
    constructor(name, speed, favoriteFood, color) {
        this.name = name;
        this.speed = speed;
        this.favoriteFood = favoriteFood;
        this.color = color;
    }

    rabbit_attr(arr) {
        console.log("Here is a collection of all fast rabbits");
        for (let element of arr) {
            if (element.speed === "fast") {
                console.log(`This rabbit is known as ${element.name} and it likes ${element.favoriteFood} it is ${element.color} in color`);
            }
        }
    }
}

const fastRabbits = new Rabbit();
fastRabbits.rabbit_attr(rabbits);


function PrintRabbits(arr) {
    //let rabbit = {};
    for (let i = 0; i < arr.length; i++) {
        let rabbitData = arr[i];
        let rabbit = new Rabbit(rabbitData.name, rabbitData.speed, rabbitData.favoriteFood, rabbitData.color);
        console.log(rabbit);
    }
}
//PrintRabbits(rabbits);

let killerRabbit = new Rabbit();
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log((new Rabbit("basic")).teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small