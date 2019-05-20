// Arithmetic Operators
/*
// Example 1
let x = 2, y = 3;
let z = x * y;

console.log("Sum:", x, "+", y, "=", x+y);
console.log("Difference:", z, "-", y, "=", z-y);
console.log("Product:", y, "*", z, "=", y*z);
console.log("Quotient 1:", y, "/", z, "=", y/z);
console.log("Quotient 2:", z, "/", x, "=", z/x);
console.log("Remainder 1:", z, "%", x, "=", z%x);
console.log("Remainder 2:", x, "%", z, "=", x%z);
console.log("Divide into zero:", 0, "/", x, "=", 0/x);
console.log("Divide by zero:", x, "/", 0, "=", x/0);
console.log("Zero into zero:", 0, "/", 0, "=", 0/0);
console.log("Remainder and zero 1:", 0, "%", x, "=", 0%x);
console.log("Remainder and zero 2:", x, "%", 0, "=", x%0);
console.log("Remainder and zero 3:", 0, "%", 0, "=", 0%0);
console.log("Power 1:", x, "**", y, "=", x**y);
console.log("Power:", x, "**", -y, "=", x**-y);
*/

/*
// Unary arithmetic - increment and decrement
let x = 7;
let y = x;

console.log("x before post-increment", x); // 7
console.log("Post-increment:", x++); // 7
console.log("x after post-increment", x); //8

console.log("y before pre-increment", y); // 7
console.log("Pre-increment:", ++y); // 8
console.log("y after pre-increment", y); // 8
*/

/*
// Unary decrement
let a = 2;
let b = 3;

console.log("a before post-decrement", a);
console.log("Post-decrement:", a--);
console.log("a after post-decrement", a);

console.log("b before pre-decrement", b);
console.log("Pre-decrement:", --b);
console.log("b after pre-decrement", b);
*/

/*
// Compound Assignments
const grossPay = 35000;
const taxRate = 0.2; // 20% tax

let tax = grossPay * taxRate;
let netPay = grossPay - tax;
console.log("Net Pay:", netPay);
*/

/*
// Running Total
let total = 0;

const priceProduct1 = 12.56;
total = total + priceProduct1;

const priceProduct2 = 3.71;
total = total + priceProduct2;

console.log("Total Due:", total);
*/
/*
// Compound Assignments
let total = 0;

const priceProduct1 = 12.56;
total += priceProduct1;

const priceProduct2 = 3.71;
total += priceProduct2;

console.log("Total Due:", total);
*/

//let val1 = Math.random();
//val1 += 


let score = 100;
score += 10; // 110
console.log("Score:", score);


/*
let n1 = 1.234
let n2 = 4.321

let sum = n1 + n2;
console.log(sum);
console.log(typeof(sum));
*/

/*
// Adding strings and numbers
console.log("Joe" + "Bloggs")
console.log(1 + "Bloggs")
console.log("Joe" + 1)
console.log("1" + 2); // 12
console.log(1 + 2 + "Goals");
console.log(1 + (2 + "Goals"));
*/
/*
console.log(10 - "2"); // 8
console.log("10" * "50"); // 500 
console.log("100" / 50); // 2 

console.log("fifty" - "ten"); // NaN
console.log(5 * "hotel"); // NaN
console.log(99 / "true"); // NaN
*/
/*
console.log(isNaN("fifty")); // true
console.log(isNaN("10")); // false
console.log(isNaN(99)); // false
console.log(isNaN(NaN)); // true
// console.log(isNaN(Infinity)); // false
*/
/*
console.log("fifty" == NaN)
console.log("5" == NaN)
console.log(5 == NaN)
console.log(NaN == NaN)
*/
/*
console.log(isFinite("fifty")); // false
console.log(isFinite("10")); // true
console.log(isFinite(99)); // true
console.log(isFinite(NaN)); // false
*/
// console.log(isFinite(Infinity)); // false

/*
// Arithmetic involving booleans
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log(true+false); // 1

console.log(true+"false"); // trueflase
*/

console.log(true - false); // 1
console.log(99 * true); // 99
console.log(false / 1); // 0
console.log(true / 1); // 1



console.log(1 / false); // Infinity



console.log(2**3**2);


