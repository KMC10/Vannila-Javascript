//Classes with public properties
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    Area() {
        return this.width * this.height;
    }
    Perimeter() {
        return (2 * this.width) + (2 * this.height);
    }
}
Rectangle.prototype.volume = "This a 2d object thus it does not a volume";
let Rect1 = new Rectangle(4, 3);
console.log("The area of rectangle 1 is", Rect1.Area(), "and it's perimeter is", Rect1.Perimeter(), ".", Rect1.volume); 

//Class with (Private definitions)
class Triangle {
    #base;
    #height;
    #side1;
    #side2;
    constructor(base, height, side1, side2) {
        this.#base = base;
        this.#height = height;
        this.#side1 = side1;
        this.#side2 = side2;
    }

    #Area() {
        return 0.5 * this.#base * this.#height;
    }
    Perimeter() {
        return (this.#base + this.#side1 + this.#side2)
    }
    getArea(){
        return this.#Area();
    }
}
let Triangle1 = new Triangle(6, 4, 5, 6);
console.log(`The area of triangle 1 is ${Triangle1.getArea()} and its perimeter is ${Triangle1.Perimeter()}`);