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

/**
 * ------------------------------------------------------------------------------------------
 * 1. Array Method
 * ------------------------------------------------------------------------------------------
 */
// Array Iterator Method
{
    // 1. forEach() Method (use case for action)
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;;
    arr.forEach(element => {
        sum += element;
    });
    console.log("sum:", sum);

    arr.forEach((element, index, array) => {
        console.log("element:", element);
        console.log("index:", index);
        console.log("array:", array);
    });
}
{
    // 2. map() Method (use case for transform)
    let arr = [1, 2, 3, 4, 5];
    let doubleArr = arr.map((element) => {
        return element * 2; // need to return
    });
    console.log("doubleArr:", doubleArr);

    let users = [
        {
            name: "One",
            age: 11,
        },
        {
            name: "Two",
            age: 22,
        },
        {
            name: "Three",
            age: 33,
        },
    ];
    let userName = users.map((user) => {
        return user.name;
    });
    console.log("Username:", userName);
}
{
    // 3. filter() Method
    let arr = [1, 2, 3, 4, 5, 6];
    let even = arr.filter((value) => {
        return value % 2 == 0; // predicate function
    });
    console.log("Even:", even);

    let users = [
        {
            name: "Alice",
            age: 11,
            gender: "female",
        },
        {
            name: "Bob",
            age: 22,
            gender: "male",
        },
        {
            name: "Yoshi",
            age: 33,
            gender: "male",
        },
    
    ]
    // get male username
    let maleUserName = users.filter(user => user.gender == "male").map(user => user.name);
    console.log("Male Username:", maleUserName);
}
{
    // 4. findIndex() Method (return index)
    let arr = [1, 2, 3, 4, 5, 6];
    console.log("Arr findIndex > 4:", arr.findIndex(value => value > 4)); // return first condition only
}
{
    // 5. find() Method (return element)
    let arr = [1, 2, 3, 4, 5, 6];
    console.log("Arr find > 4:", arr.find(value => value > 4)); // retur first condition only
}
{
    // 6. every() Method (return true false depend on predicate function)
    let users = [
        {
            name: '',
            age: 11,
        },
        {
            name: "Alice",
            age: 23,
        },
        {
            name: "Bob",
            age: 22,
        },
    ];
    let isAllNameNotBlank = users.every(value => value.name !== ""); // print false
    console.log("Is All Name is Not Blank:", isAllNameNotBlank);
}
{
    // 7. some() Method (return true false depend on predicate function)
    let users = [
        {
            name: '',
            age: 11,
        },
        {
            name: "Alice",
            age: 23,
        },
        {
            name: "Bob",
            age: 22,
        },
    ];
    let isAllNameNotBlank = users.some(value => value.name !== ""); // print true
    console.log("Is All Name is Not Blank:", isAllNameNotBlank);
}
{
    // 8. reduce() Method
    let arr = [1, 2, 3, 4, 5, 6];
    let sum = arr.reduce((a,b) => {
        console.log("a:", a, "b:", b);
        return a + b;
    });
    console.log("Sum:", sum);
}
{
    // 9. reduceRight() Method
    let arr = [1, 2, 3, 4, 5];
}