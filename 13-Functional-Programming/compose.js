const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => "Hi," + str;
const addHello = (str) => "Hello," + str;

function compose(funA, funB) {
    return function(str) {
        return funA(funB(str));
    }
}

const process = compose(compose(appendHi, toUpper), addHello);
console.log(process("test"));