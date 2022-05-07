const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => "Hi," + str;

const result = appendHi(toUpper("hello"));
console.log(result);

// Functional programming Compose function
const compose = function (funA, funB) {
    return function(str) {
        return funA(funB(str));
    }
}

const process = compose(appendHi, toUpper);
console.log(process('Hello'));
// Railway Orient Programming