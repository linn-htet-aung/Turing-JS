/**
 * ------------------------------------------------------------------------------------------
 * Creating Array
 * ------------------------------------------------------------------------------------------
 */
{
    // Array Literal Style
    let arr = [10, 20, 30, 40, 50];
    console.log("Create Array - Array Literal:", arr);
}
{
    // With the spread Operator on iterable object
    let arr1 = [10, 20, 30, 40, 50];
    let arr2 = [... arr1];
    console.log("Create Array - Spread Operator:", arr2);
    let str1 = "Hello World";
    let str2 = [... str1];
    console.log("Create Array - Spread Operator:", str2);
}
{
    // Array() Constructor
    let arr1 = new Array();
    console.log("Create Array - Array Constructor():", arr1);
    let arr2 = new Array(4);
    console.log("Create Array - Array Constructor():", arr2);
    let arr3 = new Array(1, 2, 3, 4, 5);
    console.log("Create Array - Array Constructor():", arr3);
}
{
    // Array.of() Method
    let arr = Array.of(1, 2, 3, 4, 5);
    console.log("Create Array - Array.of():", arr);
}
{
    // Array.from() Method
    let arr1 = Array.from("Hello World");
    console.log("Create Array - Array.from():", arr1);
    let arr2 = Array.from([1, 2, 3, 4, 5]);
    console.log("Create Array - Array.from():", arr2);
}
{
    // Create With Other Method Eg: slice();
    let arr1 = [10, 20, 30, 40, 50];
    let arr2 = arr1.slice(0, 3);
    console.log("Create Array - With Other Method:", arr2);
}
/**
 * ------------------------------------------------------------------------------------------
 *  Iterating Array
 * ------------------------------------------------------------------------------------------
 */
{
    // for/of Loop
    let arr = [10, 20, 30, 40, 50];
    for (let element of arr) {
        console.log("Iterating Array - for/of Method:", element);
    }

    for (let [index, element] of arr.entries()) {
        console.log("Iterating Array - for/of Method with Destructuring:", index, element);
    }
}
{
    // for Loop
    let arr = [10, 20, 30, 40, 50];
    for (let i = 0, len = arr.length; i < len; i++) {
        console.log("Iterating Array - for Loop:", arr[i]);
    }
}
{
    // forEach Loop
    let arr = [10, 20, 30, 40, 50];
    arr.forEach(element => {
        console.log("Iterating Array - forEach Loop:", element);
    });
}

/**
 * ------------------------------------------------------------------------------------------
 * Array Element
 * ------------------------------------------------------------------------------------------
 */
{
    // Reading Element
    let arr = [10, "Hello World", true, null];
    console.log("Reading Element - [] Operator @ index 0:", arr[0]);
    console.log("Reading Element - [] Operator @ index 1:", arr[1]);
    console.log("Reading Element - [] Operator @ index 2:", arr[2]);
    console.log("Reading Element - [] Operator @ index 3:", arr[3]);
}
{
    // Writing Element
    let arr = [1, 2, 3, 4, 5];
    arr[0] = 5;
    arr[1] = 4;
    console.log("Writing Element - [] Operator @ index 0, 1:", arr);
}
{
    // Adding Element
    let arr = [1, 2, 3, 4, 5];
    arr[5] = 6;
    console.log("Adding Element - [] Operator:", arr);
    arr.push(7);
    console.log("Adding Element - Array.push() Method:", arr);
    arr.unshift(0);
    console.log("Adding Element - Array.unshift() Method:", arr);
}
{
    // Deleting Element
    let arr = [1, 2, 3, 4, 5];
    delete arr[0];
    console.log("Deleting Element - delete Operator:", arr);
    arr.pop();
    console.log("Deleting Element - Array.pop() Method:", arr);
    arr.shift();
    console.log("Deleting Element - Array.shift() Method:", arr);
}
/**
 * ------------------------------------------------------------------------------------------
 * Array Method
 * ------------------------------------------------------------------------------------------
 */
// Iterator Method
{
    // forEach() - use case for some action
    let arr = [10, 20, 30, 40, 50];
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    console.log("Array Method - forEach():", sum);

    arr.forEach((value, index, array) => {
        console.log("Array Method - forEach() value:", value);
        console.log("Array Method - forEach() index:", index);
        console.log("Array Method - forEach() array:", array[0], arr);
    });
}
{
    // map() - use case for transformation
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = arr1.map((element) => {
        return element * 2;
    });
    console.log("Array Method - map():", arr2);

    let users = [
        {
            name: "User One",
            age: 23,
        },
        {
            name: "User Two",
            age: 24,
        },
        {
            name: "User Three",
            age: 25,
        },
    ];
    let username = users.map((user) => {
        return user.name;
    });
    console.log("Array Method - map():", username);
}
{
    // filter() - filtering
    let arr1 = [1, 2, 3, 4, 5, 6];
    let arr2 = arr1.filter((element) => {
        return element % 2 == 0;
    });
    console.log("Array Method - filter():", arr2);

    let users = [
        {
            name: "User one",
            age: 23,
            gender: "male",
        },
        {
            name: "User Two",
            age: 24,
            gender: "female",
        },
        {
            name: "User Three",
            age: 25,
            gender: "male",
        },
    ];
    let maleUsers = users.filter((user) => {
        return user.gender == "male";
    });
    console.log("Array Method - filter():", maleUsers);
    let maleusernameOnly = users.filter(user => user.gender == "male").map(user => user.name);
    console.log("Array Method - filter() & map():", maleusernameOnly);
}
{
    // findIndex() - accept predicate function and return index only
    let arr1 = [1, 2, 3, 4, 5, 6, 7];
    let arr2 = arr1.findIndex((element) => {
        return element > 3;
    });
    console.log("Array Method - findIndex():", arr2);
}
{
    // find() - accept predicate function and return element only
    let arr1 = [1, 2, 3, 4, 5, 6, 7];
    let arr2 = arr1.find((element) => {
        return element > 3;
    });
    console.log("Array Method - find():", arr2);
}
{
    // every() - return true/false depend on predicate function
    let users = [
        {
            name: "",
            age: 23,
        },
        {
            name: "User Two",
            age: 24,
        },
        {
            name: "User Three",
            age: 25,
        },
    ];
    let isUsernameBlank = users.every((user) => {
        return user.name == "";
    });
    console.log("Array Method - every():", isUsernameBlank);
}
{
    // some() - return true/false depend on predicate function
    let users = [
        {
            name: "",
            age: 23,
        },
        {
            name: "User Two",
            age: 24,
        },
        {
            name: "User Three",
            age: 25,
        },
    ];
    let isUsernameBlank = users.some((user) => {
        return user.name == "";
    });
    console.log("Array Method - some():", isUsernameBlank);
}
{
    // reduce() - starts at the first element and travels toward the last
    let arr1 = [1, 2, 3, 4, 5, 6];
    let arr2 = arr1.reduce((a, b) => {
        return a + b;
    });
    console.log("Array Method - reduce():", arr2);
}
{
    // reduceRight() - starts at the last element and travels backward the first
    let arr1 = [1, 2, 3, 4, 5, 6];
    let arr2 = arr1.reduceRight((a, b) => {
        return a + b;
    });
    console.log("Array Method - reduceRight():", arr2);
}


// Flattening Method
{
    // flat() - multidimensional array to one dimensional array
    let arr1 = [1, 2, [3, 4, [5, 6]]];
    console.log("Array Method - flat():", arr1.flat(3));
}
{
    // flatMap() - flat() + map()
    let phrases = ["Hello World", "The definite Guide"];
    let words = phrases.flatMap((phrase) => {
        return phrase.split(" ");
    });
    console.log("Array Method - flatMap():", words);
}


// Concatination Method
{
    // concat() - Join Array
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = arr1.concat([6, 7, 8]);
    console.log("Array Method - concat():", arr2);
}


// Sub Arrays Method
{
    // slice() - slice array
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = arr1.slice(0, 4);
    console.log("Array Method - slice():", arr2);
}
{
    // splice() - both delete and insert with mutable operation
    let arr = [1, 2, 3, 4, 5, 6, 7];
    console.log("Array Method - splice(): ORG ARRAY:", arr);
    arr.splice(1, 2, 100, 200);
    console.log("Array Method - splice():", arr);
}
{
    // fill() - sets the element of an array
    let arr1 = [1, 2, 3, 4, 5, 6, 7];
    arr1.fill(0);
    console.log("Array Method - fill(0):", arr1);

    let arr2 = [1, 2, 3, 4, 5, 6, 7];
    arr2.fill(0, 2);
    console.log("Array Method - fill(0, 2):", arr2);

    let arr3 = [1, 2, 3, 4, 5, 6];
    arr3.fill(0, 2, 5);
    console.log("Array Method - fill(0, 2, 4):", arr3);
}
{
    // copyWithin() - copies a slice of an array to new position within the array
    let arr1 = [1, 2, 3, 4, 5];
    arr1.copyWithin(1);
    console.log("Array Method - copyWithin(1):", arr1);

    let arr2 = [1, 2, 3, 4, 5];
    arr2.copyWithin(2, 3, 5);
    console.log("Array Method - copyWithin(1):", arr2);
}

// Searching & Sorting Method
{
    // indexOf() - searching index from left
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log("Array Method - indexOf():", arr1.indexOf(5));
    console.log("Array Method - indexOf():", arr1.indexOf(100)); // return -1 if not found
}
{
    // lastIndexOf() - searching index from right
    let arr1 = [1, 2, 2, 4, 1, 5, 6];
    console.log("Array Method - lastIndexOf():", arr1.lastIndexOf(1));
}
{
    // includes() - elements includes? return true/false
    let arr1 = [1, 2, 3, 4, 5, 6, 7];
    console.log("Array Method - includes(4):", arr1.includes(4));
    console.log("Array Method - includes(48):", arr1.includes(48));
}
{
    // sort() - sort the array by lexiographic order
    let arr1 = [10, 2, 100, 3, 500];
    arr1.sort();
    console.log("Array Method - sort():", arr1.sort());

    let arr2 = [23, 44, 1, 423, 677, 234];
    arr2.sort(function(a, b){
        return a - b; // comparison function with ascending order
    });
    console.log("Array Method - sort():", arr2);

    let arr3 = [23, 44, 1, 423, 677, 234];
    arr3.sort((a, b) => {
        return b - a; // comparison function with descnding order
    });
    console.log("Array Method - sort():", arr3);

    let users = [
        {
            name: "user one",
            age:23,
        },
        {
            name: "user two",
            age:24,
        },
        {
            name: "user three",
            age:25,
        },
    ];
    users.sort((userA, userB) => {
        return userB.age - userA.age;
    });
    console.log("Array Method - sort():", users);
}
{
    // reverse() - sort the array by lexiographic with reverse order
    let arr1 = [1, 2, 3];
    console.log("Array Method - reverse():", arr1.reverse());
}

// Array to String conversion Method
{
    // join() Method
    let arr1 = [1, 3, 4];
    console.log("Array Method - join():", arr1.join(","));
    console.log("Array Method - join():", arr1 + "");
}