// Number

//new Number(123); // creates a number object ...
//... not strictly equal to the primitive value 123
//var a = new Number('123'); // a === 123 is false
//var b = Number('123'); // b === 123 is true


Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN 
Number("John");        // returns NaN

Number('123')     // 123
Number('12.3')    // 12.3
Number('12.00')   // 12
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    





let x = Number("19.645");
console.log(Number.parseFloat(x)); // 19.64
console.log(parseFloat(x)); // 19.64

console.log(Number.parseInt(x)); // 19
console.log(parseInt(x)); // 19

/*
console.log(x.toExponential()); // 1.9645e+1

console.log(x.toFixed()); // 20
console.log(x.toFixed(1)); // 19.6
console.log(x.toFixed(2)); // 19.64
console.log(x.toFixed(3)); // 19.645
*/

/*
let y = Number("19.64738");
console.log(y.toPrecision()); // 19.64738
console.log(y.toPrecision(1)); // 2e+1
console.log(y.toPrecision(2)); // 20
console.log(y.toPrecision(3)); // 19.6
console.log(y.toPrecision(4)); // 19.65
console.log(y.toPrecision(5)); // 19.647
console.log(y.toPrecision(6)); // 19.6474
console.log(19.64738.toPrecision(6)); // 19.6474

console.log(y.toFixed()); // 20
console.log(y.toFixed(1)); // 19.6
console.log(y.toFixed(2)); // 19.65
console.log(y.toFixed(3)); // 19.647

console.log(y.toExponential()); // 1.964738e+1
console.log(20..toExponential()); // 2e+1
*/
console.log(Number.isNaN("Joe"));
console.log(Number.isNaN("999"));
console.log(Number.isNaN(999));
console.log(Number.isNaN(9.99));
console.log(Number.isNaN(999/0));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(NaN));

console.log(isNaN("Joe"));
console.log(isNaN("999"));
console.log(isNaN(999));
console.log(isNaN(9.99));
console.log(isNaN(999/0));
console.log(isNaN(Infinity));
console.log(isNaN(NaN));



/*
console.log(Number.isFinite("Joe")); // false
console.log(Number.isFinite("999"));  // false
console.log(Number.isFinite(999)); // true
console.log(Number.isFinite(9.99)); // true
console.log(Number.isFinite(999/0)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false
*/

parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN

parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

console.log(Number(19.64738).toPrecision(4));


console.log(parseInt("111two"));
console.log(parseInt("111",2)); // 7
console.log(parseInt("4.7",10)); // 4
console.log(parseInt("47")); // 47
console.log(parseInt(true)); // NaN


console.log(parseFloat("50.5")); // 50.5
console.log(parseFloat("50point5")); 50
console.log(parseFloat("point5")); 50
console.log(parseFloat(0.0123E+2)); // 1.23
console.log(parseFloat(123E-2)); // 1.23
console.log(parseFloat("fifty")); // NaN
console.log(parseFloat(false));

console.log(parseFloat(".5")); 50