// Loops

/*
console.log("Hello World"); // 1st time
console.log("Hello World"); // 2nd time 
console.log("Hello World"); // 3rd time
console.log("Hello World"); // 4th time

console.log("Hello World"); // 50th time. (Yawn!)
console.log("Hello World"); // 51st time. (Yawn! Yawn!)

console.log("Hello World"); // 99th time. (zzzZZ!)
console.log("Hello World"); // 100th time (At last!)
*/

/*
let counter = 0;
while (counter < 100) {
  console.log("Hello World");
  counter++; // Add 1 to counter
}
*/

/*
// 7 times tables
let counter = 0;
while (counter <= 12) {
   console.log("7 x", counter, "=", 7*counter);
   counter++; // Add 1 to counter
}
*/

/*
// Any times tables
let counter = 0;
let tables = prompt("What times tables do you require?");
while (counter <= 12) {
   console.log(tables, "x", counter, "=", tables*counter);
   counter++; // Increment counter
}
*/
/*
let x1 = Number(prompt("Enter integer value 1"));
let x2 = Number(prompt("Enter integer value 2"));
let x3 = Number(prompt("Enter integer value 3"));
let x4 = Number(prompt("Enter integer value 4"));
let x5 = Number(prompt("Enter integer value 5"));
let total = x1+x2+x3+x4+x5;

console.log("Mean value:", total/5);
*/

/*
// Sentinel
let runningTotal = 0;
let number = Number(prompt("Enter a number (0 to end):"));

while (number != 0) {
   runningTotal += number;
   number = Number(prompt("Enter a number (0 to end):"));
}

console.log("Total:", runningTotal);
*/

/*
// using 'stop' as a sentinel
let counter = 0;
let runningTotal = 0;
let number = prompt("Enter a number ('stop' to end):");

while (number != 'end') {
   counter++; // Increment counter
   number = Number(number)
   runningTotal += number;
   number = prompt("Enter a number ('stop' to end):");
}

if (counter == 0) // avoid dividing by zero
   console.log("No mean value as there were no values entered");
else
   console.log("Mean value:", runningTotal/counter);
*/

/*
// Validate a yes/no response
let response = prompt("Do you wish to continue (Y/N)");
while (response != "Y" && response != "N") {
    response = prompt("Do you wish to continue (Y/N)");
} 

// response is valid
console.log("Thank you. You entered a valid response ... ");
*/

/*
// Validate a month number
let month = Number(prompt("Enter a month number (1-12)"));
while (isNaN(month) || (month < 1 || month > 12)) {
   month = Number(prompt("Enter a month number (1-12)"));
  console.log(month);
}

console.log("Thank you. You entered a valid month number ... ");
*/

/*
// Validate a yes/no response (do-while version)
let response;
do {
    response = prompt("Do you wish to continue (Y/N)");
} while (response != "Y" && response != "N"); 


// response is valid
console.log("Thank you. You entered a valid response ... ");
*/

/*
for (let counter = 0; counter < 3; counter++) {
  console.log("Hello World");
}

let counter = 0;
if (counter < 3)
  console.log("Hello World");
counter++;
if (counter < 3)
  console.log("Hello World");
counter++;
if (counter < 3)
  console.log("Hello World");
counter++;

*/

/*
// display the integers from 1 .. 10
for (let count = 1; count <= 10; count++) {
  console.log(count);
}

// display the integers from 1 .. 10
let count = 1;
while (count <= 10) {
  console.log(count);
  count++;
}
*/

/*
// display the sequence 0, 5, 10, 15, ... 100
for (let count = 0; count <= 100; count+=5) {
  if (count % 5 == 0)
     console.log(count);
}

let count = 0;
while (count <= 100) {
  if (count % 5 == 0)
     console.log(count);
  count++;
}
*/


/*
// display the square of every 5th number between 1 and 100
for (let count = 0; count <= 100; count+=5) {
  if (count % 5 == 0)
     console.log(count, Math.pow(count,2));
}

let count = 0;
while (count <= 100) {
  if (count % 5 == 0)
     console.log(count, Math.pow(count,2));
  count+=5;
}
*/

/*
// count the number of multiples of 3 between 1 and 100
let i, multiplesOf3;
for (i = 0, multiplesOf3 = 0; i <= 100; i++) {
  if (i % 3 == 0)
    multiplesOf3++;
}
console.log(multiplesOf3, "found");
*/

/*
// count the number of multiples of 3 between 1 and 100
let i = 0, multiplesOf3 = 0;
while (i <= 100) {
  if (i % 3 == 0)
    multiplesOf3++;
  i++;
}
console.log(multiplesOf3, "found");
*/

/*
// calculate n! (e.g. 5x4x3x2x1) and then display the result
let factorial = 1;
let n = 5;
for (let number = n; number > 0; number--) {
  factorial = factorial * number;
}
console.log(n+"! =", factorial);

// calculate n! (e.g. 5x4x3x2x1) and then display the result
let factorial = 1;
let n = 5;
let number = n;
while (number > 0) {
  factorial = factorial * number;
  number--;
}
console.log(n+"! =", factorial);
*/

/*
// break and continue statements
let someValue = 7;
while (someValue > 0) {
  someValue--;
  if (someValue == 3)
    break;

  console.log(someValue);
}
*/
/*
let start = Number(prompt("Enter a number to start from"));
let end = Number(prompt("Enter a number to end at"));
let outStr = "";

while (start <= end) {
   outStr = outStr + start + ", ";
   start++;
}
console.log(outStr);
*/

/*
let start = Number(prompt("Enter a number to start from"));
let end = Number(prompt("Enter a number to end at"));

for (; start <= end; start++) {
   console.log(start);
}
*/

// Programming Exercises 1

/*
// 1 2 3 4 5
let count = 1;
while (count <= 5) {
   console.log(count);
   count++;
}
*/

/*
// 2 3 4 5 6
let count = 1;
while (count <= 5) {
  count++;
  console.log(count);
}
*/

/*
// No output
let count = 1;
while (count > 5) {
   console.log(count);
   count++;
}
*/

/*
// 0 2 4 6 8
let count = 0;
while (count < 10) {
   console.log(count);
   count += 2;
}
*/
/*
// 5 4 3 2 1
let count = 5;
while (count > 0) {
   console.log(count);
   count--;
}
*/
/*
// 4 3 2 1 
let count = 5;
while (count > 0) {
  count--;
  console.log(count);
}
*/

/*
// 2 3 4 5
let count = 1;
while (++count <= 5) {
  console.log(count);
}
*/
/*
for (let count = 10; count >= 0; ) {
   console.log(count);
   count -= 2;
}
*/

/*
for (let row = 1; row<5; row++) {
  for (let col = 1; col<=3; col++) {
     console.log(row, col);
  }
}
*/

/*
// 7 times tables
for (let count=0; count<=12; count++) {
   console.log("7 x", count, "=", 7*count);
}
*/

/*
// Display the multiplication tables from 1 to 10
for (let tables=1; tables<=10; tables++) {
   for (let count=0; count<=12; count++) {
      console.log(tables,"x", count, "=", tables*count);
   } // inner loop
  
   console.log("\n\n");
} // outer loop
*/


/*
// Parsons Problem (see PPT)
// Display factorial of 1st five numbers
let factorial;
for (let count = 1; count <= 5; count++) {
   factorial = 1;
   for (let number = count; number > 0; number--) {
     factorial = factorial * number;
   }
  console.log(count, "! =", factorial);
}
*/

/*
// Hint
factorial = 1;
for (let number = 6; number > 0; number--) {
 factorial = factorial * number;
}
console.log(6, "! =", factorial);
*/

// happy numbers
for (let a = 0; a<10; a++)
  for (let b = 0; b<10; b++)
    for (let c = 0; c<10; c++)
      for (let d = 0; d<10; d++)
        if (a+b == c+d) // sum of 1st two digits == sum of last two digits
           console.log("Happy Number", a, b, c, d);

"Hi mum!"