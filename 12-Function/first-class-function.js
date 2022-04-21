// Rule:1 - Function Assign to variable, remember not to invoke while doing assignment
function sayHello() {
    console.log("Hello World");
}
const hello = sayHello;
hello();

// Rule:2 - Function pass as argument
function execFunc(func) {
    func();
}
execFunc(hello);

// Rule:3 - Function return as function
function getFunc() {
    return hello;
}
getFunc()();
