"use strict"

window.onload = function () {
    let arr = [ 1, 2, 3, 7, 1, 4, 2 ];
    let arr2 = [ "a", "b", "c", ...arr, "d", "e"];
    console.log(arr2);

    let obj  = { x: 1, y: 2, a: 3, b: 4 };
    let obj2 = { ...obj, x: 10, y: 20 };
    console.log(obj2);

    console.log(Math.max(1, 2, 3, 5, 1, 6, 2, 4));
    console.log(Math.max(...arr));

    let str 
    = `Ahoj ja sa 
 volam Michaela
 fdsafasd
 fsdafas
 fsdfa`;
    console.log(str.split(' '));


    defaultValues();
    _eval();
    _parseInt();
    _parseFloat();
    _decodeUri();
    arrays();
    testArgs(1, 2, 3, "arg4", "arg5");
    strings();
    regex();
    etc();
}

class Person {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
const person1 = new Person("Janko Hrasko", 21, 15000);
const person2 = new Person("Jano Hrach", 28, 8000);

function defaultValues() {
    const a = "a = " + NaN + "<br>";
    const b = "b = " + Infinity + "<br>";
    const c = "c = " + undefined + "<br>";
    const x = "d = " + 10 + "<br>";
    const _a = NaN;
    const _b = Infinity;
    const _c = undefined;
    const _x = 10;
    const res = a + b + c + x +
        " isNaN(a): " + isNaN(_a) +
        "<br> isFinite(b): " + isFinite(_b) +
        "<br> isNan(c): " + isNaN(_c) +
        "<br> isFinite(x): " + isFinite(_x);
    document.getElementById("defaultValues").innerHTML = res;
}
function _eval() {
    const x = 10;
    const y = 20;
    const a = eval("x * y") + "<br>";
    const b = eval("2 + 2") + "<br>";
    const c = eval("x + 17") + "<br>";

    const res = a + b + c;
    document.getElementById("eval").innerHTML = res;
}
function _parseInt() {
    const array = [];
    array['a'] = parseInt("10") + "<br>";
    array['b'] = parseInt("10.00") + "<br>";
    array['c'] = parseInt("10.33") + "<br>";
    array['d'] = parseInt("34 45 66") + "<br>";
    array['e'] = parseInt(" 60 ") + "<br>";
    array['f'] = parseInt("40 years") + "<br>";
    array['g'] = parseInt("He was 40") + "<br>";

    array['h'] = parseInt("10", 10) + "<br>";
    array['i'] = parseInt("010") + "<br>";
    array['j'] = parseInt("10", 8) + "<br>";
    array['k'] = parseInt("0x10") + "<br>";
    array['l'] = parseInt("10", 16) + "<br>";

    for (let i in array) {
        document.getElementById("parseInt").innerHTML
            += i + " = " + array[i];
    }
}
function _parseFloat() {
    const array = [];
    array['a'] = parseFloat("10") + "<br>";
    array['b'] = parseFloat("10.00") + "<br>";
    array['c'] = parseFloat("10.33") + "<br>";
    array['d'] = parseFloat("34 45 66") + "<br>";
    array['e'] = parseFloat(" 60 ") + "<br>";
    array['f'] = parseFloat("40 years") + "<br>";
    array['g'] = parseFloat("He was 40") + "<br>";

    for (let i in array) {
        document.getElementById("parseFloat").innerHTML
            += i + " = " + array[i];
    }
}
function _decodeUri() {
    const uri = "my test.asp?name=ståle&car=saab";
    const enc = encodeURI(uri) + " //encodedUri";
    const dec = decodeURI(enc) + " //decodedUri";
    const res = enc + "<br>" + dec;
    document.getElementById("decodeUri").innerHTML
        = res;
}

function arrays() {
    let res = "";
    res += arraysBasics() + "<br><br>";
    res += arraysBulk();
    document.getElementById("arrays").innerHTML = res;
}
function arraysBasics() {
    var res = "";
    const myArray = []; // vytvorim prazdne pole
    myArray.push("hello world"); // pridavam polozku do pola na posledne miesto
    myArray.push("novy prvok"); // pridavam polozku do pola na posledne miesto

    res += "Pole: " + myArray + "<br>";
    res += "myArray[0] =  " + myArray[0] + "<br>";
    res += "Dlzka pola: " + myArray.length + "<br><br>";
    console.log(myArray);

    myArray[30] = 88; // pridanie hodnoty na miesto v poli s indexom 100

    res += "Pole znova: " + myArray + "<br>";
    res += "myArray[30] = " + myArray[30] + "<br>";
    res += "Dlzka pola: " + myArray.length + "<br>";
    console.log(myArray);
    console.log(myArray.toString());

    myArray.pop();

    res += "Popnute pole: " + myArray + "<br>";
    console.log(myArray);
    return res;
}
function arraysBulk() {
    const poleDouble = [];
    let res = "";
    const parne = function (cislo) {
        console.log(cislo);
        return (cislo % 2) === 0;
    };
    const makeDouble = function (cislo, index, pole) {
        const doubleNumber = cislo * 2;
        console.log(index + ": " + doubleNumber);
        poleDouble[index] = doubleNumber;
        //pole[index] = doubleNumber;
        return doubleNumber;
        //console.log(doubleNumber);
    };
    const sum = function (cislo1, cislo2) {
        console.log(cislo1 + " + " + cislo2);
        return cislo1 + cislo2;
    }
    const _concat = function (item1, item2) {
        return "" + item1 + item2;
    }
    const concat2 = function (item1, item2) {
        return item1.toString().concat(item2);
    }
    const sumaPlatov = function (person1, person2) {
        return person1.plat + person2.plat;
    }

    const poleCisel = [1, 2, 4, 7, 8, 10, 16];

    res += "Every number is even: " +
        poleCisel.every(parne) + "<br>";
    res += "At least one number is even: " +
        poleCisel.some(parne) + "<br>";

    poleCisel.forEach(makeDouble);

    res += "forEach(makeDouble): " + poleDouble + "<br>";
    res += "filter(parne): " + poleCisel.filter(parne) + "<br>";
    res += "map(makeDouble): " + poleCisel.map(makeDouble) + "<br>";

    res += "<br>pole:" + poleCisel + "<br>";
    res += "reduceRight(concat): " + poleCisel.reduceRight(_concat) + "<br>";
    res += "reduceRight(concat): " + poleCisel.reduce(_concat) + "<br>";
    res += "reverse(): " + poleCisel.reverse() + "<br><br>";
    poleCisel.reverse(); //reverse again
    poleCisel.shift();
    res += "shift(): " + poleCisel + "<br>";
    poleCisel.unshift(134, 10);
    res += "unshift(134, 10): " + poleCisel + "<br><br>";

    res += "slice(2, 5): " + poleCisel.slice(2, 5) + "<br>";
    res += "indexOf(8): " + poleCisel.indexOf(8) + "<br>";
    res += "indexOf(10): " + poleCisel.indexOf(10) + "<br>";
    res += "indexOf(3): " + poleCisel.indexOf(3) + "<br>";
    res += "lastIndexOf(10): " + poleCisel.lastIndexOf(10) + "<br>";

    return res;
}

function testArgs() {
    let res = "testArgs(1,2,3,\"arg4\",\"arg5\")': <br>";
    res += "len = " + arguments.length + "<br>";

    for (let i = 0; i < arguments.length; i++) {
        res += "i = " + arguments[i] + ((i == arguments.length - 1) ? " " : ", ");
    }
    document.getElementById("args").innerHTML = res;
}
function strings() {
    let res = "";
    let str = "Toto je jeden pekny dlhy string";

    res += "str: " + str + "<br>";
    res += "str.charAt(10): " + str.charAt(10) + "<br>";
    res += "str.indexOf(\"ny\"): " + str.indexOf("ny") + "<br>";
    res += "str.lastIndexOf('n'): " + str.lastIndexOf('n') + "<br>";
    res += "str.concat(\", ktory je fakt dlhy\"):<br>" + str.concat(", ktory je fakt dlhy") + "<br>";
    res += "str.substring(5,25): " + str.substring(5, 25) + "<br>";
    res += "str.toUpperCase(): " + str.toUpperCase() + "<br>";
    res += "str.toLowerCase(): " + str.toLowerCase() + "<br><br>";

    const vstup = "jozko, janko, marienka, peter";
    const poleVstupov = vstup.split(',', 2);

    res += "vstup: " + vstup + "<br>";
    res += "vstup.split(): " + vstup.split(',', 2) + "<br><br>";

    document.getElementById("strings").innerHTML = res;
}
function regex() {
    let res = "";
    const vstup = "michaela.bacikova@tuke.sk";
    const regex = /([a-zA-Z]+)\.(?:([a-zA-Z]+)@([a-zA-Z\.]+))/g;

    const groups = regex.exec(vstup);
    //alert(groups[0] + ", " + groups[1] + ", " +
    //    groups[2] + ", " + groups[3]+ ", " + groups[4]);

    res += "vstup: " + vstup + "<br>";
    res += "regex: /[0-9]+/ <br>";
    res += "vstup.match(regex): " + vstup.match(regex) + "<br>";

    res += "<h4>test + lastIndex + while:</h4>";
    while (regex.test(vstup) == true) {
        res += "- number found. Index now at: "
            + regex.lastIndex + " <br>";
    }

    document.getElementById("regex").innerHTML = res;
}

function etc() {
    const showActualTime = function () {
        console.log(new Date().toLocaleTimeString());
        document.getElementById("timer").innerHTML
            = new Date().toLocaleTimeString() + "<br>";
    };

    //interval ID
    const intervalId = setInterval(showActualTime, 1000);
    //const intervalId = setTimeout(showActualTime, 1000);

    document.getElementById("timer").innerHTML
        = new Date(Date.parse("Jul 8, 2005")).toLocaleDateString();

    console.log("interval ID: " + intervalId);
}
