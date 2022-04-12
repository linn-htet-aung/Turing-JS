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
 * 2. Querying properties
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