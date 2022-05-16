/**
 * A function can accept other function as parameter.
 * A function that can return a function.
 */
// Example 1
function hello() {
    return "Hello";
}

function getHello() {
    return hello;
}

console.log(getHello()());

// Example 2
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map((x) => {
    return x * x;
});
console.log("Arr2: ", arr2);