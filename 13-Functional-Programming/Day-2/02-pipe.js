const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => "Hi " + str;

const pipe = (funA, funB) => (str) => funB(funA(str));
const process = pipe(toUpper, appendHi);

console.log(process("Hello"));