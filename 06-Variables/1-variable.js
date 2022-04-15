/**
 * ------------------------------------------------------------------------------------------
 * 1. var & let
 * ------------------------------------------------------------------------------------------
 */
var a = 10; // declare in main function scope (Global Variable)
let b = 20; // declare in main function scope (Global Varialbe)

function print() {
    var x = 10; // declare in function scope (Local Variable)
    let y = 10; // declare in function scope (Local Variable)

    console.log("Value of x within function scope:", x);
    console.log("Value of y within function scope:", y);
    console.log("Value of a within function scope:", a);
    console.log("Value of b within funciton scope:", b);
    console.log("Value of i within block scope:", i); // hoisting here
    // console.log("Value of J within block scope:", j); // print error

    {
        var i = "Hello from i"; // declare in block scope
        i = "New Hello from i"; // redefine
        let j = "Hello from J"; // declare in block scope
        console.log("Value of x within block scope:", x);
        console.log("Value of y within block scope:", y);
        console.log("Value of a within block scope:", a);
        console.log("Value of b within block scope:", b);
    }
}

// console.log("Value of x access from main function scope:", x); // print error
// console.log("Value of y access from main function scope:", y); // print error







