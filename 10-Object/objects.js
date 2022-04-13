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

    // Java Style with new Keyword
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
{
    for (let p in global) {
        console.log("Properties:", p, "Values:", global[p]);
    }
    console.log("Keys in Global Object:", Object.keys(global));
}