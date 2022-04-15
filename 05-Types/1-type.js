/**
 * ------------------------------------------------------------------------------------------
 * 1. Immutable & Mutable
 * ------------------------------------------------------------------------------------------
 */
// Immutable
{
    let str = "Hello World";
    str[0] = "A";
    console.log("str:", str);
    
    let x = 20;
    x = 30; 
    x++;
    console.log("x:", x); // x value doesn't change, can imagine replace the value of x.
}

// Mutable
{
    let obj = {
        name: "Alice",
        age: 23,
    }
    obj.name = "Eric";
    console.log("obj:", obj);
}

/**
 * ------------------------------------------------------------------------------------------
 * 2. Value Model & Reference Model
 * ------------------------------------------------------------------------------------------
 */
// Value Model
{
    let a = 10;
    let b = 20;
    a++;
    console.log("a:", a); // 11
    console.log("b:", b); // 20
}

// Reference Model
{
    let obj1 = {
        name: "Alice",
        age:23,
    }
    let obj2 = obj1;
    obj1.name = "Eric";
    console.log("obj1:", obj1); // Eric, 23
    console.log("obj2:", obj2); // Eric, 23
    
    obj2 = {
        name : "John Doe",
        age: 33,
    }
    console.log("obj1:", obj1); // Eric, 23
    console.log("obj2:", obj2); // John Doe, 23 (because now obj2 start create new memory address on heap)
}



