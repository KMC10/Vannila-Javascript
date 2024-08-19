class Person{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this._age = age;
    }
    set TheAge(num){
        this._age = num;
    }

    get age(){
        return this._age;
    }
}

let person1 = new Person("Jack", "Smith", 49);

//console.log(person1);
person1.TheAge = 50 ;
console.log(`Modified age is ${person1.age}`);
