/**
 * ------------------------------------------------------------------------------------------
 * 1. Mathematical Operator
 * ------------------------------------------------------------------------------------------
 */

console.log(2 + 2); // Add Operator
console.log(4 - 2); // Substract Operator
console.log(2 * 2); // Multiply Operator
console.log(2 / 2); // Division Operator
console.log(2 % 1); // Modulo Operator

/**
 * ------------------------------------------------------------------------------------------
 * 2. Unary Arithmetic Operator
 * ------------------------------------------------------------------------------------------
 */

// Unary Plus (convert its operands to number) //
{
    let x = "100";
    console.log("+x:", +x);
}

// Unary Minus (convert its operands to number and change sign) //
{
    let x = "100";
    console.log("-x:", -x);
}

// Increment //
    /**
     * add 1 to its single operand
     * Right hand   => Post Increment (increment operand but evaluate unincremented value of the operand)
     * Left Hand    => Pre Increment (increment operand and evaluate value of the operand)
     */
     {
        let a = 2;
        let b;
    
        b = a++;
        console.log("Right Hand (a, b):", a, b); // print 3, 2
    
        let c = 2;
        let d;
        d = ++c;
        console.log("Left Hand (c, d:", c, d); // print 3, 3
    }

// Decrement //
    /**
     * substract 1 to its single operand
     * Right hand   => Post Increment (increment operand but evaluate unincremented value of the operand)
     * Left Hand    => Pre Increment (increment operand and evaluate value of the operand)
     */
{
    let a = 2;
    let b;

    b = a--;
    console.log("Right Hand (a, b):", a, b); // print 1, 2

    let c = 2;
    let d;
    d = --c;
    console.log("Left Hand (c, d:", c, d); // print 1, 1
}

/**
 * ------------------------------------------------------------------------------------------
 * 3. The Plus Operator
 * ------------------------------------------------------------------------------------------
 */

// Primitive Case Sematics //
    /**
     * If either one of the operands is string, execute string concat, otherwise number addition.
     */
     {
        let a = 1;
        let b = '2';
        let c = 0 / 0;
        let d = false;
        let e = null;
        let f = undefined;
    
        console.log("a + '2':", a + b); // print 12
        console.log("'b' + NaN:", b + c); // print 2NaN
        console.log("a + false:", a + d); // print 1
        console.log("a + null", a + e); // print 1
        console.log("a + undefined:", a + f); // print NaN
    }
    
// Object Case Sematics //
    /**
     * If either one the opreands is object, convert object to primitive,
     *      => Date Obj : toString();
     *      => Other Obj : valueOf() -> toString();
     * 
     * If either one of the operands is string, execute string concat, otherwise number addition.
     */
    {
        // default object
        let a = 1;
        let obj = {};       
        console.log("a + obj(default object):", a + obj); // print 1[Object Object]
    }
    
    {
        // valueOf
        let a = 1;
        let obj = {
            valueOf: function() {
                return 3;
            }
        };   
        console.log("a + obj(valueOf):", a + obj); // print 4
    }
    
    {
        // toString
        let a = 1;
        let obj = {
            toString: function() {
                return 4;
            },
        };   
        console.log("a + obj(toString):", a + obj); // print 4
    }
    
    {
        // valueOf, toString
        let a = 1;
        let obj = {
            valueOf: function() {
                return 3;
            },
            toString: function() {
                return 4;
            },
        };   
        console.log("a + obj(valueOf & toString):", a + obj); // print 4
    }
    
    {
        // valueOf with {}, toString
        let a = 1;
        let obj = {
            valueOf: function() {
                return {};
            },
            toString: function() {
                return 4;
            },
        };
        console.log("a + obj(valueOf with {} & toString):", a + obj); // print 5
    }
    
    {
        // valueOf with {}, toString
        let a = 1;
        let obj = {
            valueOf: function() {
                return {};
            },
            toString: function() {
                return {};
            },
        };
        console.log("a + obj(valueOf with {} & toString with {}):", "algorithm fail");
    }
    
    {
        // Date Object
        let a = 1;
        let now = new Date();
        console.log("a + now(Date Object:)", a + now); // print 1timestamp
    }
    
// Array Case Sematics //
    /**
     * If empty array,
     *      return 0.
     * If one element array,
     *      toString();
     * If multiple element array,
     *      toString() with Join Method
     */
    {
        // Empty Array
        let a = 1;
        let arr = []; 
        console.log("a + []:", a + arr); // print 1
    }
    
    {
        // One Element Array
        let a = 1;
        let arr = [1];   
        console.log("a + [1]:", a + arr); // print 11
    }
    
    {
        // Multiple Element Array
        let a = 1;
        let arr = [1, 2];  
        console.log("a + [1, 2]:", a + arr); // print 11, 2
    }

/**
 * ------------------------------------------------------------------------------------------
 * 3. Bitwise Operator
 * ------------------------------------------------------------------------------------------
 */

// Binary string representation with toStirng(2) Method
{
    let a = 3;
    let b = 2;
    console.log("a in Binary:", a.toString(2));
    console.log("b in Binary:", b.toString(2));
}

// Bitwise AND
{
    let a = 3;
    let b = 2;
    console.log("Bitwise AND:", (a & b).toString(2)); // print 10
}

// Bitwise OR
{
    let a = 3;
    let b = 2;
    console.log("Bitwise OR:", (a | b).toString(2)); // print 11
}

// Bitwise XOR
{
    let a = 3;
    let b = 2;
    console.log("Bitwise XOR:", (a ^ b).toString(2)); // print 1
}

// Bitwise NOT
{
    let a = 3;
    console.log("Bitwise NOT:", (~a).toString(2)); // print -100
}

// Bitwise ShiftLeft
{
    let a = 3;
    console.log("Bitwise ShiftLeft 1 bit:", (a << 1).toString(2)); // print 110
}

// Bitwise ShiftRight
{
    let a = 3;
    console.log("Bitwise ShiftRight 1 bit:", (a >> 1).toString(2)); // print 1
}

// Bitwise ShiftRight Zero Fill
{
    let a = 3;
    console.log("Bitwise ShiftRight Zero Fill 1 bit:", (a >>> 1).toString(2)); // print 1
}