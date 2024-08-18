class Quad{
    constructor(width, height){
        this.width = width;
        this.height = height;
        console.log("This is the parent Quad class", this)
    }
    Area(){
        return (2*this.width+2*this.height);
    }
}

class Trapezium extends Quad{
    constructor(width, height, p_height){
        super(width, height);
        this.p_height = p_height;
        console.log("This is the", this)
    }

    Area(){
        return (0.5*(this.width+this.height)*this.p_height);
    }

   
}

let myTrapezium = new Trapezium(12, 18, 8);
console.log(myTrapezium.Area());

let mySquare = new Quad(2.5, 8);
console.log("The area of my square is", mySquare.Area());

