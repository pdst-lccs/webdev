// Variables and Assignments


let firstNumber = 1;
let secondNumber;

console.log("Here");

secondNumber = Number(prompt("Enter a number"));
console.log("Here again");
let sum = firstNumber + (secondNumber);
console.log("%d + %d = %d", firstNumber, secondNumber, sum);


/*
let x, y=x, z=y;
//let x=1, y=x, z=y;
//let y = 0;
//let z = 1;
//let x = y = z;
console.log("x:", x, "y:", y, "z:", z); // x: 1 y: 1 z: 1
*/

/*
{
//var corkToDublin;
let corkToDublin;
}
const corkToDublin = 258.5;
console.log("Distance:", corkToDublin); // SyntaxError: Identifier 'corkToDublin' has already been declared
*/


/*
// const PI; // SyntaxError: Missing initializer in const declaration
const PI = 3.14; 
console.log("PI:", PI); // 3.14
PI = 3.14159; // TypeError: Assignment to constant variable.
*/

/*
var distance;
console.log("Distance:", distance); // displays, Distance: undefined
var distance=10;
console.log("Distance:", distance); // displays, Distance: 10
*/


/*
let width, height;
let w=10, h;
let length=10, breadth=15;
let l, b=20;

console.log("Width:", width, "Height:", height);
console.log("w:", w, "h:", h);
console.log("length:", length, "breadth:", breadth);
console.log("l:", l, "b:", b);
*/
/*
month = 1;
let month; 
console.log("The month is", month);
*/
/*
var 99;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of b is ' + b); // The value of b is undefined
var b;
// This one may puzzle you until you read 'Variable hoisting' below

//console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

let x;
console.log('The value of x is ' + x); // The value of x is undefined

console.log('The value of y is ' + y); // Uncaught ReferenceError: y is not defined
let y;
*/
