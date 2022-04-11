/**
 * ------------------------------------------------------------------------------------------
 * 1. while Loop
 * ------------------------------------------------------------------------------------------
 */
function one() {
    while (true) {
        console.log("Hello World");
    }
}
// one();

/**
 * ------------------------------------------------------------------------------------------
 * 2. do while loop
 * ------------------------------------------------------------------------------------------
 */
function two() {
    let i = 0;
    do {
        console.log("Hello World");
    } while(i == 1);
}
// two();

/**
 * ------------------------------------------------------------------------------------------
 * 3. for loop
 * ------------------------------------------------------------------------------------------
 */
function three() {
    for (let i = 0; i < 10; i++) {
        console.log("i:", i);
    }
    
    let arr = [10, 20, 30, 40, 50];
    for(let i = 0, len = arr.length; i < len; i++) {
        console.log("arr:", arr[i]);
    }
}
three();

/**
 * ------------------------------------------------------------------------------------------
 * 4. for/of loop (Read only)
 * ------------------------------------------------------------------------------------------
 */

// Array Case
{
    let arr = [10, 20, 30, 40, 50];
    for (let i = 0; i < arr.length; i++) {
        console.log("Arr with For Loop:", arr[i]);
        arr[i] = arr[i] * 2; // difference
    }
    console.log("Arr:", arr); // print [20, 40, 60, 80, 100]

    let arr2 = [10, 20, 30, 40, 50];
    for (let element of arr2) { // Here should declare with const
        console.log("Arrw with for/of loop:", element);
        element = element * 2; // difference
    }
    console.log("Arr2:", arr2); // print [10, 20, 30, 40, 50]
}


// Object Case
{
    let obj = {
        name: "Yoshi",
        age: 28,
    };
    console.log("Object.keys:", Object.keys(obj));
    console.log("Object.values:", Object.values(obj));
    console.log("Object.entries:", Object.entries(obj));

    for(let key of Object.keys(obj)) {
        console.log("Key:", key);
    }

    for(let value of Object.values(obj)) {
        console.log("Value:", value);
    }

    for(let [key, value] of Object.entries(obj)) {
        console.log("Key:", key, "Value:", value);
    }
}


// String Case
{
    let frequency = {};
    for(let letter of "mississippi") {
        if (frequency[letter]) {
            frequency[letter]++;
        } else {
            frequency[letter] = 1;
        }
    }
    console.log("frequency:", frequency);
}


// Set
{
    let str = "Java Programming & JavaScript Programming";
    let words = str.split(" ");
    console.log("words:", words);

    let wordSet = new Set(words);
    console.log("wordSet:", wordSet);

    for(word of wordSet) {
        console.log("word:", word);
    }
}

// Map
{
    let map = new Map([
        [1, "Hello"],
        [2, "How are you."],
    ]);
    console.log("map:", map);

    for(const [key, value] of map) {
        console.log("key:", key, "value:", value);
    }
}

/**
 * ------------------------------------------------------------------------------------------
 * 5. for/in loop
 * ------------------------------------------------------------------------------------------
 */
{
    for(const key in global) {
        console.log("key:", key, "value:", global[key]);
    }
}
