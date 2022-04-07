// The Global Object //
// In Node
global.date = new Date();
console.log(date);
console.log(global.date);

// In Web Browser
var name = "Hello World";
console.log(name);
console.log(window.name); // it doesn't run in node since no window obj.