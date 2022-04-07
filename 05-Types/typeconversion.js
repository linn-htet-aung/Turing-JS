// Primitive to Primitive Conversion //
// undefined
console.log("undefined to string:", "" + undefined); // "undefined"
console.log("undefined to number:", +undefined); // NaN
console.log("undefined to boolean:", !!undefined); // false

// null
console.log("null to string:", "" + null); // "null"
console.log("null to number:", +null); // zero
console.log("null to boolean:", !!null); // false

// NaN
console.log("NaN to string:", "" + NaN); // "NaN"
console.log("NaN to number:", +NaN); // NaN
console.log("NaN to boolean:", !!NaN); // false

// boolean
console.log("boolean true to string:", "" + true); // "true"
console.log("boolean false to string:", "" + false); // "true"
console.log("boolean true to number:", +true); // 1
console.log("boolean false to number:", +false); // 0

// string
console.log("empty string to number:", +""); // 0
console.log("empty string to boolean:", !!""); // false
console.log("non-empty(numeric) string to number:", +"100"); // 100
console.log("non-empty(numeric) string to boolean:", !!"100"); // true
console.log("non-empty(non-numeric) string to number:", +"100abc"); // NaN
console.log("non-empty(non-numeric) string to number with parseInt:", parseInt("100abc")); // 100
console.log("non-empty(non-numeric) string to boolean:", !!"100abc"); // true

// zero
console.log("poszero to string:", "" + 0); // "0"
console.log("poszero to number:", +0); // 0
console.log("negzero to string:", "" + (-0)); // "0"
console.log("negzero to number:", +(-0)); // -0

// Object to Primitive Conversion //
// Object
console.log("empty object to number:", +{}); // NaN
console.log("empty object to boolean", !!{}); // true

// Array
console.log("empty array to number:", +[]); // 0
console.log("empty array to boolean:", !![]); // true
console.log("empty array to string:", "" + []); //
console.log("one element array to number:", +[9]); // 9
console.log("one element array to boolean:", !![9]); // true
console.log("one element array to string:", "" + [9]); // "9"
console.log("more than one element array to number:", +[9, 10]); // NaN
console.log("more than one element array to boolean:", !![9, 10]); // true
console.log("more than one element array to string:", "" + [9, 10]); // "9,10"

// Function
function hello() {

}
console.log("function to number:", +hello); // NaN
console.log("function to boolean:", !!hello); // true

