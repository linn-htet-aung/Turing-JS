/**
 * ------------------------------------------------------------------------------------------
 * 1. 16 bits unicode character represented as String
 * ------------------------------------------------------------------------------------------
 */
{
    let str1 = "A";
    console.log("A", str1.length);
}

/**
 * ------------------------------------------------------------------------------------------
 * 2. 32 bits unicode character (such as emoji) reprsented as String
 * ------------------------------------------------------------------------------------------
 */
{
    let str2 = "\ud83d\udc99";
    console.log(str2, str2.length);
}

/**
 * ------------------------------------------------------------------------------------------
 * 3. String Literals
 * ------------------------------------------------------------------------------------------
 */
{
    let str3 = 'Hello World with Single Quote'; // With single quote
    let str4 = "Hello World with Double Quote"; // With double quote
    let str5 = `Hello World
    with Backticks`; // With backticks
}

/**
 * ------------------------------------------------------------------------------------------
 * 4. String Escape Sequence
 * ------------------------------------------------------------------------------------------
 */
{
    let str6 = "We\'ll go later!";
}

/**
 * ------------------------------------------------------------------------------------------
 * 5. String Concatination
 * ------------------------------------------------------------------------------------------
 */
{
    let str7 = "Hello" + " " + "World";
}

/**
 * ------------------------------------------------------------------------------------------
 * 6. String Method & Properties
 * ------------------------------------------------------------------------------------------
 */
{
    let str8 = "Hello World";

    console.log("Length:", str8.length); // 11

    console.log("Slice:", str8.slice(0, 5)); // Hello
    console.log("Slice:", str8.slice(-5)); // World

    console.log("SubString", str8.substring(0, 5)); // Hello

    console.log("Split:", str8.split(" ")); // ["Hello", "World"]

    console.log("indexOf:", str8.indexOf("l")); // 2
    console.log("indexOf:", str8.indexOf("g")); // -1
    console.log("lastIndexOf:", str8.lastIndexOf("l")); // 9

    console.log("startWith:", str8.startsWith("Hell")); // true
    console.log("endWith:", str8.endsWith("rd")); // false
    console.log("include:", str8.includes("o W")); // true

    console.log("replace:", str8.replace("World", "Universe")); // "Hello Universe"
    console.log("toLowerCase:", str8.toLocaleLowerCase()); // "hello world"
    console.log("toUpperCase:", str8.toUpperCase()); // "HELLO WORLD"

    console.log("charAt:", str8.charAt(0)); //"H"
    console.log("charAt:", str8.charAt(str8.length - 1)); //d
    console.log("charCodeAt:", str8.charCodeAt(0)); // 72

    console.log("padStart:", str8.padStart(33)); // "       Hello World"
    console.log("padStart:", str8.padStart(33, "-")); // "-----------Hello World"
    console.log("padEnd:", str8.padEnd(33)); //"Hello World         "
    console.log("padEnd:", str8.padEnd(33, "-")); // "Hello World----------"

    console.log("trim:", " Hello ".trim()); // "Hello"
    console.log("trimStart:", " Hello ".trimStart()); // "Hello "
    console.log("trimEnd:", " Hello ".trimEnd()); // " Hello"
}

/**
 * ------------------------------------------------------------------------------------------
 * 7. String As Read Only Array
 * ------------------------------------------------------------------------------------------
 */
{
    console.log("index zero:", str8[0]); // "H"
    console.log("last index:", str8[str8.length - 1]); // "d"
}

/**
 * ------------------------------------------------------------------------------------------
 * 8. Template Literal Style
 * ------------------------------------------------------------------------------------------
 */
{
    console.log("Template Literal: ", `${str8}, This is new Hello World here!.`);
}


