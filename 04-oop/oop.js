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

    function Student(name, age) {
        this.name = name;
        this.age = age;
        this.display = () => {
            let result= "";
            result += this.name + " - " + this.age;
            result += "<BR>";
            document.write(result);
        };
    };

    const student = new Student("Jano", 16);
    student.display();
    function Superclass() {
        this.anOverride= function() {console.log("override parent");};
        this.aBaseFunction= function() {console.log("base function parent");};
    }
    function Subclass() {
        this.anOverride= function() {console.log("override child");};
    }
    var base = new Superclass();
    Subclass.prototype = base;
    var sub = new Subclass();
    console.log(base, sub);
    sub.aBaseFunction();
    sub.anOverride();
}