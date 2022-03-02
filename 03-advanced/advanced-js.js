"use strict"

//global
let arrayGlobal = [0, 1, 2];

//4
const novaGlobalna = function () {
    console.log("globalna funkcia");
};

const myFunction = () => {
    console.log("jahodka");
    const obj = {
        name: "Michaela",
        lastname: "Bacikova",
    };
    changeObject(obj);
    console.log(obj);

    let variable = 5;
    changeVar(variable);
    console.log(variable);

    const array = [1, 2, 3, 4, 5];
    changeArray(array);
    console.log(array);

    //1
    const novaCezFunction = function () {
        console.log("vnoreny function");
    };
    callMyFunction(novaCezFunction);

    //2
    const nova = () => console.log("vnorena funkcia");
    callMyFunction(nova);

    //3
    callMyFunction(() => console.log("vnorena funkcia inline"));

    //4
    callMyFunction(novaGlobalna);
    console.log(arrayGlobal);
};

function changeObject(obj) {
    obj.age = 15;
}

function changeVar(vrbl) {
    vrbl = 10;
}

function changeArray(array) {
    array[100] = 18;
}

function callMyFunction(func) {
    func();
    //lokalna premenna!
    let arrayGlobal = 4;
    // prepisujem globalnu hodnotu!
    // arrayGlobal = 4;
    console.log(arrayGlobal);
}

function displayConfirm() {
    let r = confirm("Press a button");
    if (r === true)
        document.write("Pressed OK!");
    else
        document.write("Pressed Cancel!");
}

function displayPrompt() {
    let name = prompt("Enter your name", "Bond");
    if (name !== null && name !== "")
        document.write("Hello " + name);
}