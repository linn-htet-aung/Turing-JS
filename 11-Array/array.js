/**
 * ------------------------------------------------------------------------------------------
 * 1. Creating Array
 * ------------------------------------------------------------------------------------------
 */
// Array Literal
{
    let arr1 = [];
    let arr2 = [10, 20, 30, 40, 50];
    let arr3 = [10, "Hello World", true, null, 33.33];
}

// The spread operator on iterable object
{
    let arr1 = [10, 20, 30, 40, 50];
    let arr2 = [... arr1];
    console.log("arr1:", arr1);
    console.log("arr2:", arr2);
}

// Array() Constructor
{
    let arr1 = new Array(5); // 5 empty element
    console.log("arr1:", arr1, "arr1.length:", arr1.length);

    let arr2 = new Array(1, 2, 3); // 3 element
    console.log("arr2:", arr2, "arr2.length:", arr2.length);
}

// Array.of() Method
{
    let arr = Array.of(1, 2, 3);
    console.log("Array.of:", arr);
}

// Array.from() Method
{
    let arr1 = Array.from("Hello World");
    console.log("Array.from():", arr1);

    let arr2 = Array.from([10, 20, 30]);
    console.log("Array.from():", arr2);
}

// Create New Array with other method (eg: slice())
{
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = arr1.slice(1, 4);
    console.log("arr1.slice():", arr2);
}

/**
 * ------------------------------------------------------------------------------------------
 * 2. Iterating Array
 * ------------------------------------------------------------------------------------------
 */
// for/of Loop
{
    let arr = [1, 2, 3, 4, 5];
    for (let element of arr) {
        console.log("element", element);
    }

    for (let [index, element] of arr.entries()) { // array destructuring
        console.log("index:", index, "element:", element);
    }
}

// forEach Loop
{
    let arr = [1, 2, 3, 4, 5];
    arr.forEach(element => {
        console.log("element:", element);
    });
}

// for Loop
{
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0, len = arr.length; i < len; i++) {
        console.log("element:", arr[i]);
    }
}


/**
 * ------------------------------------------------------------------------------------------
 * 1. Reading Array Element
 * ------------------------------------------------------------------------------------------
 */
// with [] Operator
{
    let arr = [10, 20, "Hello World", false];
    console.log("Index 0:", arr[0]);
    console.log("Index 1:", arr[1]);
    console.log("Index 2:", arr[2]);
    console.log("Index 3:", arr[3]);
    console.log("Array Lenght:", arr.length);

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log("total:", total);
}

/**
 * ------------------------------------------------------------------------------------------
 * 1. Writing Array Element
 * ------------------------------------------------------------------------------------------
 */
// with [] Operator
{
    let arr = [1, 2, 3, 4, 5];
    console.log("arr:", arr);
    arr[1] = 1,
    arr[2] = 1,
    console.log("arr:", arr);
}

/**
 * ------------------------------------------------------------------------------------------
 * 1. Adding Array Element
 * ------------------------------------------------------------------------------------------
 */
// [index] Operator
{
    let arr = [1, 2, 3, 4, 5];
    arr[5] = 6;
    console.log("arr:", arr);
}

// Array.push() Method
{
    let arr = [1, 2, 3, 4, 5];
    arr.push(6);
    console.log("arr:", arr);
}

// Array.unshift() Method
{
    let arr = [1, 2, 3, 4, 5];
    arr.unshift(0);
    console.log("arr:", arr);
}

/**
 * ------------------------------------------------------------------------------------------
 * 1. Deleting Array Element
 * ------------------------------------------------------------------------------------------
 */
// delete Operator
{
    let arr = [1, 2, 3, 4, 5];
    delete arr[0];
    console.log("arr:", arr);
    console.log("arr.lenght:", arr.length); // print 5
}

// Array.pop() Method
{
    let arr = [1, 2, 3, 4, 5];
    arr.pop();
    console.log("arr:", arr);
}

// Array.shift() Method
{
    let arr = [1, 2, 3, 4, 5];
    arr.shift();
    console.log("arr:", arr);
}