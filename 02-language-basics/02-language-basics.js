let a = 5; //7
let b = 3; //1

//co bude v c??
let c = a++ + b-- + ++a + --b;

// var theDay = 3;
// switch (theDay) {
//     case 5: document.write("Finally Friday"); break;
//     case 6: document.write("Super Saturday"); break;
//     case 0: document.write("Sleepy Sunday"); break;
//     case 1: case 2: case 3: document.write("I'm looking forward to this weekend!"); break;
//     default: document.write("I'm looking forward to this weekend!");
// }

// for (let i = 0; i < 3; i++) {
//     document.write("*");
// }

let array = [23, 24, 25, 26, 27];

for(let e of array) {
    console.log(e);
}

for(let i in array) {
    console.log(array[i]);
}