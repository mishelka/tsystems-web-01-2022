"use strict"

const myFunctionNew = () => {
    class Car {
        constructor(brand) {
            this.started = false;
            this.brand = brand;
        }
        turnOn() {
            this.started = true;
        }
        turnOff() {
            this.started = false;
        }
    };

    class Door {
        constructor() {
            this.opened = false;
        }
        open() {
            this.opened = true;
        }
        close() {
            this.opened = false;
        }
    }

    class PersonalCar extends Car {
        constructor(brand, door) {
            super(brand);
            this.door = door;
        }
    }

    class Truck extends Car {
        constructor(brand, load = null) {
            super(brand);
            this.load = load;
        }
        addLoad(load) {
            this.load = load;
        }
        unload() {
            this.load = null;
        }
    }

    const car = new Car("BMW");
    
    console.log(car);
    car.turnOn();
    console.log(car);
    car.turnOff();
    console.log(car);

    const personalCar = new PersonalCar("Audi", new Door());
    personalCar.turnOn();
    personalCar.door.open();
    console.log(personalCar);

    const truck1 = new Truck("Avia");
    const truck2 = new Truck("V3S", "kopa piesku");
    truck1.turnOn();
    truck1.addLoad("beton");
    truck2.unload();
    truck2.addLoad("strk");
    console.log(truck1, truck2);

    console.log(truck1 instanceof Truck);
    console.log(truck1 instanceof Car);
    console.log(truck1 instanceof Door);
}