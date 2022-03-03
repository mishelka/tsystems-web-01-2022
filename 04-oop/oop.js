"use strict"

const myFunction = () => {
    const obj = {
        name: "Michaela",
        age: 30,
    };
    console.log(obj);

    const obj2 = Object.create(obj);
    obj2.name = "Peter";
    console.log(obj2);

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const obj3 = new Person("Michaela", 30);
    console.log(obj3);
    const obj4 = Object.create(obj3);
    console.log(obj4);

    function Student(name, age, idCard = new IdCard(new Date(2045, 8, 1))) {
        this.name = name;
        this.age = age;
        this.idCard = idCard;
        this.hairColor = "brown";
        this.display = function() {
            let result= "";
            result += this.name + " - " + this.age;
            //result += "<BR>";
            console.log(result);
        };
    };

    function IdCard(exspirationDate) {
        this.exspirationDate = exspirationDate;
        this.check = () => console.log(
            exspirationDate.getTime() > new Date().getTime() ?
            "Karta je overena" : "Karta je exspirovana");
    }

    const idCard = new IdCard(new Date(2022, 3, 3));
    let student = new Student("Jano", 16, idCard);
    const student2 = new Student("Peter", 18);
    student.idCard.check();
    console.log(student2);
    student.display();
    student.display = function() {console.log(this.name)};
    student.display();
    student2.display();
    console.log(student.hairColor);

    const x = 4;
    //x = 7; cannot do!
    
    function Superclass() {
        this.anOverride= function() {console.log("override parent");};
        this.aBaseFunction= function() {console.log("base function parent");};
    }
    function Subclass() {
        this.anOverride= function() {console.log("override child");};
    }
    let base = new Superclass();
    Subclass.prototype = base;
    let sub = new Subclass();
    console.log(base, sub);
    sub.aBaseFunction();
    sub.anOverride();
}