/**
 * ------------------------------------------------------------------------------------------
 * 1. The Conditional Operator
 * ------------------------------------------------------------------------------------------
 */
{
    let a = 2;
    let sign = a % 2 == 0 ? "Even" : "Odd";
    console.log("Sign:", sign);
}

/**
 * ------------------------------------------------------------------------------------------
 * 2. First Defined Operator ??
 * ------------------------------------------------------------------------------------------
 */
{
    let a;
    let b = a ?? 4;
    console.log("b:", b);

    let option = {
        title: "Old Title",
    };
    let title = option.title ?? "New Title";
    console.log("title:", title);
}

/**
 * ------------------------------------------------------------------------------------------
 * 3. The typeof Operator
 * ------------------------------------------------------------------------------------------
 */
{
    console.log(typeof 3);
    console.log(typeof null);
    console.log(typeof undefined);
    console.log(typeof false);
    console.log(typeof '3');
    console.log(typeof []);
    console.log(typeof Symbol('3'));
    console.log(typeof console.log);
}

/**
 * ------------------------------------------------------------------------------------------
 * 4. The delete Operator
 * ------------------------------------------------------------------------------------------
 */
{
    let obj = {
        one: "Value One",
        two: "Value Two",
    };
    delete obj.one; // return true if success
    console.log("obj:", obj);
}

/**
 * ------------------------------------------------------------------------------------------
 * 5. The void Operator
 * ------------------------------------------------------------------------------------------
 */
{
    let i = 0;
    let value = void i++;
    console.log("value:", value);
}

/**
 * ------------------------------------------------------------------------------------------
 * 6. The Comma Operator
 * ------------------------------------------------------------------------------------------
 */
{
    let i = 0;
    let data = 0;
    data = (i++, console.log("Some Code Executing"), 20); // return the last expression
    console.log("data:", data);
}