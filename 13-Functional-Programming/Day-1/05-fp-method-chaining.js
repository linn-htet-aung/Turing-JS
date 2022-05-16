const toUpper = (str) => str.toUpperCase();
const appendHi = (str) => "Hi," + str;

const result = appendHi(toUpper("hello"));
console.log(result);