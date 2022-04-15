/**
 * ------------------------------------------------------------------------------------------
 * 1. Integer Literal
 * ------------------------------------------------------------------------------------------
 */
{
    console.log("Decimal 10: ", 10); // Decimal
    console.log("Hexa 10: ", 0x10); // Hexa 
    console.log("Octal 10: ", 0o10); // Octal
    console.log("Binary 10: ", 0b10); // Binary
}

/**
 * ------------------------------------------------------------------------------------------
 * 2. Floating Point Literal
 * ------------------------------------------------------------------------------------------
 */
{
    console.log("Decimal 10.3: ", 10.3); // Decimal Notation
    console.log("Scientific 10.3E-32: ", 10.3E-32); // Scientific Notation
}

/**
 * ------------------------------------------------------------------------------------------
 * 3. Pre Define Global Constants
 * ------------------------------------------------------------------------------------------
 */
// Infinity
{
    console.log(Infinity);
    console.log(Number.POSITIVE_INFINITY);
    console.log(1/0);
    
    console.log(-Infinity);
    console.log(Number.NEGATIVE_INFINITY);
    console.log(-1 / 0);
}

// NaN
{
    console.log(NaN);
    console.log(Number.NaN);
    console.log(0 / 0);
    console.log(Infinity / Infinity);
    console.log("123hello" * 1);
}

/**
 * ------------------------------------------------------------------------------------------
 * 4. Overflow & Underflow
 * ------------------------------------------------------------------------------------------
 */
// Overflow
{
    console.log(Number.MAX_VALUE * 2); //print Infinity
    console.log(-Number.MAX_VALUE * 2); // print -Infinity
}

// Underflow
{
    console.log(Number.MIN_VALUE / 2); //print zero
    console.log(-Number.MIN_VALUE / 2); //print minus zero
}

/**
 * ------------------------------------------------------------------------------------------
 * 5. BigInt
 * ------------------------------------------------------------------------------------------
 */
{
    let a = BigInt("10000000000000000000000");
    let b = BigInt("10000003000000000000000");
    let c = a + b;
    console.log(c);
}

