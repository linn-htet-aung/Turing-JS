/**
 * ------------------------------------------------------------------------------------------
 * 1. Defining Functions
 * ------------------------------------------------------------------------------------------
 */
{
    // Function Declaration
    function sayHello(name) {
        return "Hello " + name;
    }
}
{
    // Function Expression
    const square = function(x) {
        return x * x;
    }
}
{
    // Arrow Function
    const square = (x) => x * x;
    const triple = (x) => {
        return x * x * x;
    }
}
{
    // Function Constructor
    let hello = new Function("console.log('Hello World')");
}
