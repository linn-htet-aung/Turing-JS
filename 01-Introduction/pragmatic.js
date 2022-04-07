let arr = [10, 20, 30, 40, 50, 1];

// Option-1
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log("Max: ", max);

// Option-2
max = Math.max.apply(Math, arr);
console.log("Max: ", max);

// Option-3
max = Math.max(... arr);
console.log("Max: ", max);