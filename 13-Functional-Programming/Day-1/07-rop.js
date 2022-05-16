/**
 * railway oriented style programming
 * one function output is another function input
 */

const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => "Hi " + str;

let result = appendHi(toUpper("Hello"));
console.log("Result:", result);


// Another Example
const compose = function(funA, funB) {
    return function(str) {
        return funB(funA(str));
    }
}

const process = compose(appendHi, toUpper);
console.log(process("Hello"));