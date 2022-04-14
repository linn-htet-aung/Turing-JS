let arr1 = new Array(10);
console.log("arr1:", arr1, "arr1.length:", arr1.length);

let arr2 = [10, 20];
arr2[100] = 30;
console.log("arr2:", arr2, "arr2.length:", arr2.length);

let arr3 = [,];
console.log("0 in arr3:", 0 in arr3); // print false
console.log("arr[0]:", arr3[0]); // print undefined
console.log("1 in arr3:", 1 in arr3); // print false
console.log("arr[1]:", arr3[1]); // print undefined
arr3[2] = undefined;
console.log("2 in arr3:", 2 in arr3); // print true ***** (undefined from here is not the same)
console.log("arr[2]:", arr3[2]); // print undefined