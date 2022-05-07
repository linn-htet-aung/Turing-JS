/**
 * A function can accept other function as parameter.
 * A function can return other function.
 */

function hello() {
    return "Hello";
}

function getHello() {
    return hello;
}

console.log(getHello()());


let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map((x) => {
    return x * x;
});
console.log(arr2);