//let x = [];
//console.log(x); // []
//console.log(typeof(x)); // object

//let ages = [18, 16, 18, 17, 17];
// The use of trailing commas is permitted so the following is equivalent
// let ages = [18, 16, 18, 17, 17, ]; 
//console.log(ages.length);


//let sparseAges = [,,,,,];
//console.log(sparseAges.length);
//console.log(sparseAges[0]);


//let items = ["Bread", "Milk", "Tea"];
//console.log(items.length);

/*
let items = ["Bread", "Milk", "Tea"];
items[0] = "Sliced Pan"; // modify an element
delete items[2]; // delete an element
items[3] = "Butter"; // add a new element
items[4] = "Jam"; // add another new element

console.log(items); // display the array

// Interesting!!
console.log(items[2] == null);
console.log(items[2] == undefined);
*/

/*
let items = ["Bread", "Milk", "Tea"];
items.push("Butter");
items.push("Jam");
items.pop();
console.log(items); // display the array
*/


/*
let daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31];
let months = ["Jan","Feb","Mar","Apr","May","June","July","Aug", "Sept","Oct","Nov","Dec"];

for (let i=0; i < daysInMonths.length; i++)
  console.log("%s has %d days",  months[i], daysInMonths[i]);
*/

/*
let ages = [18, 16, 18, 17, 19, 17];
let total = 0;
for (let i=0; i < ages.length; i++) 
  total = total + ages[i];

console.log("The mean age is %d",  total/ages.length);
*/


/*
let ages = [18, 16, 18, 17, 19, 17];
let max = 0;
for (let i=0; i < ages.length; i++) {
  if (ages[i] > max)
    max = ages[i];
}

console.log("The maximum age is %d",  max);
*/

/*
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [];
for (let i=0; i < arr1.length; i++) {
  arr2[i] = arr1[i];
}
console.log(arr2);
*/

/*
let arr1 = [1, 3, 5, 7, 9];
let arr2 = arr1;

console.log("BEFORE TRAVERSAL");
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);

for (let i=0; i < arr1.length; i++) {
  arr1[i]++;
}
console.log("AFTER TRAVERSAL");
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
*/

/*
function incrementValues(arrayParam) {
  console.log("incrementValues() called");

  for (let i=0; i < arrayParam.length; i++) {
    arrayParam[i]++;
  }
  
  console.log("incrementValues() ends");
} // end incrementValues()

let argArray = [1, 3, 5, 7, 9];
console.log("Array before call:", argArray);
incrementValues(argArray);
console.log("Array after call:", argArray);
*/

/*
let weekDays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];
let weekendDays = ['Sat', 'Sun'];

let daysOfWeek = weekDays.concat(weekendDays);

console.log(daysOfWeek.join()); // Mon,Tue,Wed,Thur,Fri,Sat,Sun
console.log(daysOfWeek.slice(2)); // ["Wed", "Thur", "Fri", "Sat", "Sun"]
console.log(daysOfWeek.slice(2,5)); // ["Wed", "Thur", "Fri"]

console.log(weekendDays.concat(weekDays)); // ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"]
console.log(weekDays.sort()); // ["Fri", "Mon", "Thur", "Tue", "Wed"]
console.log(weekendDays.reverse()); // ["Sun", "Sat"]
*/

/*
let weekDays = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri'];
let weekendDays = ['Sat', 'Sun'];

let daysOfWeek = weekendDays.concat(weekDays); 
console.log(daysOfWeek.join());
console.log(daysOfWeek.slice(2));
console.log(daysOfWeek.slice(2,5));

console.log(weekDays.concat("Weekend"));
console.log(weekendDays.sort());
console.log(weekDays.reverse());
*/

let weekDays = ['Mon', 'Wed', 'Fri'];

// weekDays.splice(1, 0, "Tue");
// console.log(weekDays);

weekDays.splice(1, 1);
console.log(weekDays);


//let daysOfWeek2 = ["Thur", "Tue", "Wed"];

/*
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
*/

/*
let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let faces = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];



let seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
let primes = [2, 3, 5, 7, 11, 13];
*/


// This sample program motivates a use for arrays

// Let's say we wanted to count the number of times each side of a dice is rolled
// The program uses six separate variables to store the counts ...
// ... 'ones' stores the number of times 1 is rolled, ...
// ... 'twos' stores the number of times 2 is rolled etc.
// These variables are declared and initialised as follows

/*
let ones = 0, twos = 0, threes = 0, fours = 0, fives = 0, sixes = 0;

// Simulate a million rolls
for (let i = 1; i <= 1000000; i++ ) {
  // Generate a random number between 1 and 6
  let roll = Math.floor(Math.random() * 6) + 1;

  if (roll == 1)
    ones++;
  else if (roll == 2)
    twos++;
  else if (roll == 3)
    threes++;
  else if (roll == 4)
    fours++;
  else if (roll == 5)
    fives++;
  else if (roll == 6)
    sixes++;
} // end for

// Display the frequencies on the console
console.log("Ones:\t%d", ones);
console.log("Twos:\t%d", twos);
console.log("Threes:\t%d", threes);
console.log("Fours:\t%d", fours);
console.log("Fives:\t%d", fives);
console.log("Sixes:\t%d", sixes);
*/


// NEXT STEP: 
// Use an array to store the frequency count

/*
// Declare an array called 'counts'
let counts = [0,0,0,0,0,0,0];
let roll;

for (let i = 1; i <= 1000000; i++ ) {
  // Generate a random number between 1 and 6
  roll = Math.floor(Math.random() * 6) + 1;
  counts[roll]++; // <-- This is the MAGIC!!
} // end for

// Display the output
console.log("Face\tFrequency\n");		
for ( let i = 1; i <= 6; i++ ) 		
  console.log("%d\t%d\n", i, counts[i]);

*/


