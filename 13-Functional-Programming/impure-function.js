let k = 10;

function imp(x) {
    return x + k;
}

console.log(imp(2));

/**
 * If someone change the value of k, we can't guess the output.
 * So this function has side effect, impure function.
 */


function getRandom() {
    return Math.random();
}
console.log(getRandom());