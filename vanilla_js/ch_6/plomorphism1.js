class Animal {
    constructor(name, habitat, diet_class) {
        this.name = name;
        this.habitat = habitat;
        this.diet_class = diet_class;
    }
    walk(feet_num) {
        console.log(`This animal is a ${this.name}, it can walk using ${feet_num} feet`);
    }
}

class Cow extends Animal {
    constructor(name, habitat, diet_class) {
        super(name, habitat, diet_class);
    }
}
class Cheetah extends Animal {
    constructor(name, habitat, diet_class, speed) {
        super(name, habitat, diet_class);
        this.speed = speed;
    }

    walk(feet_num) {
        console.log(`The ${this.name} do not walk but runs with ${feet_num} feet and can run 
at a speed of ${this.speed} km per hour. The cheetah lives in the ${this.habitat} and it is a
${this.diet_class}`);
    }
}

let myCow = new Cow("cow", "domestic", "herbivore");
myCow.walk(4);

let theCheetah = new Cheetah("cheetah", "bush", "carnivore", 80)
theCheetah.walk(4);