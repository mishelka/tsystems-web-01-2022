"use strict"

const myFunction = () => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    };

    const persons = [
        new Person("Michaela", 38),
        new Person("Peter", 39),
        new Person("Richard", 25),
        new Person("Majo", 16),
        new Person("Alzbeta", 55),
    ];

    console.log(persons);

    let result = persons.find(function (p) {
        if(p.name.startsWith('R')) 
            return true;        //ugly!!
        else 
            return false;
        });
    let result2 = persons.find(p => p.name.startsWith('M'));
    console.log(result, result2);

    result = persons.filter(p => p.name.startsWith('M') && p.age < 30);
    result = persons.find(function (p) {
        return p.name.startsWith('M') && p.age < 30;    //nice
    });
    console.log(result);

    result = persons.every(p => p.age >= 18);
    console.log("All persons are adults: ", result);

    result = persons.some(p => p.age < 18);
    console.log("There is at least one person younger than 18: ", result);

    result = persons.map(p => p.name.length);
    console.log(result);

    persons.forEach((p, index) => console.log(index + ": " + p.name));

    // podmienka ? a : b
    result = persons.reduce((previousVal, currentVal) => {
        if(previousVal && previousVal instanceof Person) 
            return previousVal.age + currentVal.age;
        else return previousVal + currentVal.age;
    });
    console.log(result);

    const arrFromString = Array.from('ABCD');
    console.log(arrFromString.includes('A'));
    console.log(arrFromString.includes('X'));
}