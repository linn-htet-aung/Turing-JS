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
/**
 * ------------------------------------------------------------------------------------------
 * 2. Invoking Function
 * ------------------------------------------------------------------------------------------
 */
{
    // Invoke as Function
    function sayHello() {
        console.log("Invoke as Function");
    }
    sayHello();
}
{
    // Invoke as Method
    let obj = {
        sayHello: () => {
            console.log("Invoke as Method");
        },
    };
    obj.sayHello();
}
{
    // Invoke as Constructor
    let date = new Date();
    console.log("Invoke as Constructor:", date);
}
{
    // Invoke as Implicit
    // When Obj make a + with other , toString() or valueOf() automatically invoke
}
{
    // call()
}
{
    // apply()
}
/**
 * ------------------------------------------------------------------------------------------
 * 3. Function Arguments & Parameters
 * ------------------------------------------------------------------------------------------
 */
{
    // Arguments & Parameters
    function sayHello(msg) { // parameter here
        console.log("Hello,", msg);
    }
    sayHello("I'm Arguments and I will go to function parameters."); // argument here

    function sayHello2(msg) {
        console.log("Hello,", msg); // This will print undefined
    }
    sayHello2();
}
{
    // Default parameters 
    function sayHello1(msg) {
        msg = msg || "Default"; //with b4 ES6 Style
        console.log("Hello, ", msg);
    }
    sayHello1(); 

    function sayHello2(msg = "Default") {
        console.log("Hello, ", msg); // with ES6 Style
    }
    sayHello2();
}
{
    // Arguments Object
    function sayHello3(firstParam, secondParam, thirdParam) {
        console.log("Argument Object:", arguments);
        if (arguments.length !== 3) {
            console.warn("Function sayHello3 required 3 parameters!");
        }
    }
    sayHello3();

    // Parameters Passing As Object including default Obj
    function color(clr) {
        let defaultObj = {
            red: 'red',
            green: 'green',
            blue: 'blue'
        };
        clr = Object.assign(clr, defaultObj);

        console.log(clr.red);
        console.log(clr.green);
        console.log(clr.blue);
    }
    color({
        // red: "red",
        green: "green",
        blue: "blue",
    });
}
{
    // Rest Parameters
    function fun(msg, ...rest) {
        console.log("msg:", msg);
        for (const arg in rest) {
            console.log("arg:", arg);
        }
    }
    fun("Hello");
    fun("Hello", 1, 2, 3, 4, 5);
}
{
    // The Spread Operator for Function Call
    let data = [1, 2, 3, 4, 5, 6];
    let min = Math.min(... data);
    console.log("The Spread Operator for Function Call (Math.min):", min);
}
{
    // Destructuring Function Arguments into Parameters
    function fun([x, y]) {
        console.log("x:", x, "y:", y);
    }
    fun([10, 20]); // Array

    let obj = {
        name: "Alice",
        age: 23,
    };
    function showParam( {name, age} ) {
        console.log("Name:", name, "Age:", age);
    }
    showParam(obj); // Object
}

/**
 * ------------------------------------------------------------------------------------------
 * 4. Function As Namespace
 * ------------------------------------------------------------------------------------------
 */
{
    function MyModule() {

        function privateFun() {
            console.log("Private Function");
        }

        function publicFun() {
            console.log("Public Function");
        }
        
        return {
            api: publicFun,
        }
    }
    let m = MyModule();
    m.api();
}

/**
 * ------------------------------------------------------------------------------------------
 * 5. Clousre
 * ------------------------------------------------------------------------------------------
 */
{
    function Human(argName, argAge) {
        let name = argName;
        let age = argAge;
        
        function display() {
            console.log("Name:", name, "Age:", age);
        }

        return {
            display: display,
        }
    }   
    
    let obj = Human("Alice", 23); // oo encapsulation concept with closure

    console.log(obj.name); // print undefined
    console.log(obj.display()); 
}

/**
 * ------------------------------------------------------------------------------------------
 * 6. Function Properties, Method & Constructor
 * ------------------------------------------------------------------------------------------
 */
{
    // call() Method
    let obj = {
        name: "Alice",
        age: 37,

        display: function(msg) {
            console.log(msg);
            console.log("Name:", this.name, " & Age:", this.age);
        },
    }
    obj.display("hello");
    let d = obj.display; // Problem? method only assign to var d

    d("Good Morning"); // print name and age : undefined
    d.call(obj, "This is Object One."); // call() Method

    let obj2 = {
        name: "Eric",
        age: 27,
    }
    d.call(obj2, "This is Object Two.") // Borrowing, Monkey Patching, Mixim
}
{
    // apply() Method
    let arr = [10, 20, -10, 8, 3];
    console.log(Math.min.apply(Math, arr)); // apply method
}

