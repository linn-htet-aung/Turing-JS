// Array of Array or Jagged Array
let arr = [
    [1, 2, 3, 4, 5],
    ["Hello", "World"],
    [true, false],
];

console.log("arr:", arr);

for (let row = 0, rowLen = arr.length; row < rowLen; row++) {
    for (let col = 0, colLen = arr[row].length; col < colLen; col++) {
        console.log(arr[row][col]);
    }
}