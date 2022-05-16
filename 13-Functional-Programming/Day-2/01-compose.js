const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => "Hi," + str;
const addHello = (str) => "Hello," + str;

function compose1(funA, funB) {
    return function(str) {
        return funA(funB(str));
    }
}

const compose2 = (funA, funB) => (str) => funA(funB(str));

const process1 = compose1(compose1(appendHi, toUpper), addHello);
const process2 = compose2(compose2(appendHi, toUpper), addHello);

console.log("Process1:", process1("Test1"));
console.log("Process1:", process2("Test2"));
