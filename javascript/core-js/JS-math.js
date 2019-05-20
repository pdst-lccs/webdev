// Math

Math.PI;            // returns 3.141592653589793
Math.E        // returns Euler's number


Math.round(9.7); // 10
Math.round(9.3); // 9
Math.ceil(9.7);  // 10
Math.ceil(9.3);  // 10
Math.floor(9.7); // 9
Math.floor(9.3); // 9


Math.pow(2, 5); // 32
console.log(Math.pow(-2, 3)); // -8
console.log(Math.pow(1.5, 2)); // 2.25

/*
Math.sqrt(16); // 4
//console.log(Math.sqrt(16));
//console.log(Math.sqrt(16.5));
//console.log(Math.sqrt(25)); // 5
//console.log(Math.sqrt(-25)); // NaN

console.log(Math.cbrt(64)); // 4
console.log(Math.cbrt(-64)); // -4

Math.abs(-1); // 1

Math.min(1, -1, 2, -2, 0);  // -2
Math.max(1, -1, 2, -2, 0);  // 2
*/

// Random Numbers
let r;
r = Math.random(); // 0 <= r < 1
r = Math.floor(Math.random() * 10); // 0 <= r < 10
r = Math.floor(Math.random() * 11); // 0 <= r <= 10
r = Math.floor(Math.random() * 10) + 1;  // 1 <= r <= 10
r = Math.floor(Math.random() * (13 - 7 + 1) ) + 7; // 7 <= r <= 13


r = Math.random(); // 0 <= r < 1
r = Math.floor(Math.random() * 10); // 0 <= r < 10
r = Math.floor(Math.random() * 11); // 0 <= r <= 10
r = Math.floor(Math.random() * 10) + 1;  // 1 <= r <= 10

let randomNumber;
for (let i=0; i<5; i++) {
   let randomNumber = Math.floor(Math.random() * 100) + 1;
   console.log(randomNumber);
}

//r = Math.floor(Math.random() * (13 - 7 + 1) ) + 7; // 7 <= r <= 13
//let minValue = Number(prompt("Enter a min"));
//let maxValue = Number(prompt("Enter a max"));
//let randomNumber = Math.floor(Math.random() * (maxValue - minValue +1)) + minValue;
//console.log(minValue+" <= "+randomNumber+" <= "+maxValue);
//randomNumber = Math.floor(Math.random() * 10) + 1;
