// Assignment Operator Side Effect //
let a;
a = 10; 

// Increment & Decrement Operator Side Effect //
let b;
b++;
b--;

// Delete Operator Side Effect //
let obj = {
    name: "Alice",
    age: 23,
}
delete obj.age;
console.log(obj);