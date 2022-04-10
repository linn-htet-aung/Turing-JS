/**
 * ------------------------------------------------------------------------------------------
 * 1.Equality Operator
 * Algorithm
 * 1. If x and y same type?, process strict equality rule
 * 2. If x = null and y = undefined ? return true
 * 3. If one of the operands is string ? process number comparison
 * 4. If one of the operands is boolean ? process number comparison
 * 5. If one of the operands is object AND other is String/Number ? process object to primitive 
 * conversion => valueOf()-> toString();
 * ------------------------------------------------------------------------------------------
 */
{
    let a = 3;
    let b = '3';
    console.log("a + 'b':", a == b);
}

// Strict Equality Operator //
{
    let a = 3;
    let b = '3';

    console.log("a + 'b':", a === b);
}

/**
 * -----------------------------------------------------------------------------------------
 * 2.Comparision Operator
 * Algorithm
 * 1. If either operands operate to an Object?  obj => primitie (valueOf()->toString());
 * 2. If both operands are string? compare as stirng (using alphabetical order)
 * 3. If at least one operand is not a string? number comparison
 * -----------------------------------------------------------------------------------------
 */

let a = 2;
let b = 2;
let c = 3;
 
// Both operands are string
console.log("'Hello' > 'Hello'", "Hello" > "Hello");
console.log("a > b", "b" > "a"); // alphabatical order

// At least one operand is not a string
console.log("False < True", false < true); // number comparison

// null case
console.log(`null < 1: ${null < 1}`); // true (0 < 1)
console.log("'null' < null", "null" < null); // return false (NaN < 0)

// undefined case
console.log(`undefined < 1: ${undefined < 1}`); // return false (NaN < 1)
console.log(`undefined > 1: ${undefined > 1}`); // return false (NaN > 1)

// array case
let arr1 = [1, 2, 3];
let arr2 = [1, 2];

console.log(`arr1 > arr2: ${arr1 > arr2}`); // return true ( "1, 2, 3" > "1, 2")

let arr3 = [1];
console.log(`arr3 > 0: ${arr3 > 0}`); // return true ()