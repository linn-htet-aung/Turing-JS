let k = 10;
function imp(x) {
    return x + k;
}

console.log("IMP:", imp(2));

/**
 * If someone change the value of k, we can't guess the output.
 * So this function has side effect, impure function.
 */

function getRandom() {
    return Math.random();
}

console.log("Random:", getRandom());
/**
 * function that relies on other libraries also have side effect.
 */