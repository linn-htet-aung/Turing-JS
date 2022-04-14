/**
 * ------------------------------------------------------------------------------------------
 * 1. Creating Object
 * ------------------------------------------------------------------------------------------
 */
{
    // Object Literal Style
    let obj1 = {
        name: "Alice",
        age: 23,
    };

    // Object Constructor (Java Style with new Keyword)
    let date = new Date();
    console.log("date:", date);

    // Object.create() Method
    let obj2 = Object.create({
        name: "Alice", // those value automatically assign to parent/prototype object
        age: 23, // those value automatically assign to parent/prototype object
    });
    console.log("obj2:", obj2); 
}

/**
 * ------------------------------------------------------------------------------------------
 * 2. Extending Object
 * ------------------------------------------------------------------------------------------
 */
// with for of Loop 
{
    let target = {
        max: 30,
        min: 5,
    };
    let source = {
        max: 50,
    };

    for (const key of Object.keys(source)) {
        target[key] = source[key];
    }
    console.log("Target:", target);
}
// with Object.assign() Method
{
    let target = {
        max: 30,
        min: 5,
    };
    let source = {
        max: 50,
    };
    let modified = Object.assign(target, source, { something: "Hello World" });
    console.log("target:", target);
    console.log("source:", source);
    console.log("modified:", modified);
}

/**
 * ------------------------------------------------------------------------------------------
 * 3. Serializing Object
 * ------------------------------------------------------------------------------------------
 */
// JSON.stringinfy() Method [ object to string ]
{
    let obj = {
        name: "Alice",
        age: 23,
    };
    let str = JSON.stringify(obj);
    console.log("str String:", str);
}
// JSON.parse() Method [ string to object ]
{
    let str = '{"name": "Alice", "age"  :23}';
    let obj = JSON.parse(str);
    console.log("obj Object:", obj);
}

/**
 * ------------------------------------------------------------------------------------------
 * 4. Read properties
 * ------------------------------------------------------------------------------------------
 */
{
    let obj = {
        name: "Alice",
        age: 23,
        school: {
            name: "GIT",
            location: "Yangon",
        },
    };
    console.log("obj.name:", obj.name); // with dot operator
    console.log('obj["name"]', obj["name"]); // with square bracket
    console.log("obj.school.name:", obj.school.name); // with hierarchical ways

    let fieldName = "age";
    console.log("obj[fieldName]:", obj[fieldName]); // dynamically invoke with square bracket
}

/**
 * ------------------------------------------------------------------------------------------
 * 5. Write properties
 * ------------------------------------------------------------------------------------------
 */
{
    let obj = Object.create({
        x: 20,
        y: 30,
    },{
        x:{
            value: 100,
        },
    });
    console.log("obj:", obj); // print 100
    console.log("obj.x:", obj.x); // print 100
    console.log("obj.y:", obj.y); // print 30
    obj.y = "change"; // writing property didn't update the value on prototype, will create new
    obj["z"] = "New Z Character"; // writing property didn't update the value on prototype, will create new
    console.log("obj:", obj); // print 100, change
}

/**
 * ------------------------------------------------------------------------------------------
 * 6. Delete properties
 * ------------------------------------------------------------------------------------------
 */
{
    let obj = {
        name: "Alice",
        age: 23,
    };

    console.log("obj:", obj);
    delete obj.name; // delete both key and value
    console.log("obj:", obj);
}

/**
 * ------------------------------------------------------------------------------------------
 * 7. Testing Properties
 * ------------------------------------------------------------------------------------------
 */
{
    let obj = {
        x: 10,
        y: 20,
    };
    console.log("x in obj:", "x" in obj); // return true
    console.log("z in obj:", "z" in obj); // return false
    console.log("obj hasOwnProperty x?:", obj.hasOwnProperty("x")); // return true
    console.log("obj propertyIsEnumerable x?:", obj.propertyIsEnumerable("x"));
}

/**
 * ------------------------------------------------------------------------------------------
 * 8. Enumerating Properties
 * ------------------------------------------------------------------------------------------
 */
// with for in loop
{
    for (let p in global) {
        console.log("Properties:", p, "Values:", global[p]);
    }

}

// with Object.keys() Method
{
    console.log("Keys in Global Object:", Object.keys(global));
}

// with Object.getOwnPropertyNames() Method
{
    console.log("Keys in Global Object:", Object.getOwnPropertyNames(global));
}

// with Objet.getOwnPropertySymbol() Method
{
    console.log("Keys in Global Object:", Object.getOwnPropertySymbols(global));
}

// with Reflect.ownKeys() Method
{
    console.log("Reflect Keys:", Reflect.ownKeys(global));
}

/**
 * ------------------------------------------------------------------------------------------
 * 9. Object Methods
 * ------------------------------------------------------------------------------------------
 */
// toString() Method
{
    let obj = {
        name: "Alice",
        age: 23,
        toString: function () { // redefine toStirng() Method that already defined on prototype object
            return `name: ${this.name} and age: ${this.age}`;
        },
    };
    console.log("Invokde toString():", obj.toString());
}

// valueOf() Method
{
    let obj1 = {
        name: "Alice",
        age: 23,
        valueOf: function () {
            return this.age;
        },
    };
    let obj2 = {
        name: "Yoshi",
        age: 14,
        valueOf: function () {
            return this.age;
        },
    };
    console.log("obj1 < obj2:", obj1 < obj2); // print false
}

// toJSON() Method
{
    let obj = {
        username: "alice",
        password: "",
        max: 30,
        min: 10,
        toJSON: function() { // when stringify invoke, toJSON function will called, we can pass specific prop
            return {
                username: this.username,
                max: this.max,
            };
        },
    };
    console.log("stringify:", JSON.stringify(obj));
}
