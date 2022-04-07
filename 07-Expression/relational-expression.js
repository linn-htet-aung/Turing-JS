// Equality //
{
    let a = 3;
    let b = '3';
    let obj1 = {
        name: "Alice",
        age:23,
    };
    let obj2 = {
        name: "Alice",
        age: 23,
    };

    console.log("a == 'b':", a == b); // print true
    console.log("a === 'b':", a === b); // print false

    console.log("a != 'b':", a != b); // print false
    console.log("a !== 'b':", a !== b); // print true

    console.log("NaN === NaN:", NaN === NaN); // print false
    console.log("NaN !== NaN:", NaN !== NaN); // print true
    console.log("isNaN(NaN):", isNaN(NaN)); // print true

    console.log("Obj1 == Obj2:", obj1 == obj2); // print false
    console.log("Obj1 === Obj2:", obj1 === obj2); // print false
}

// Comparison //
{

}