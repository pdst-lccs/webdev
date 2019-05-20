// Selection

/*
let age = prompt("Enter your age");

if (age >= 18) {
   console.log("You are an adult");
}

console.log("Thank you. Goodbye.");
*/


/*
let date = new Date();
let computerYear = date.getFullYear();
let userYear = prompt("Enter the year");

if (userYear == computerYear) {
   console.log("You are correct");
   console.log("Well done!");
}

console.log("The year is", computerYear);
*/

/*
// if statement
let hourlyPay = 5;
const minimumWage = 10;

if ( hourlyPay < minimumWage ){
   console.log("The hourly rate of pay is below the minimum wage");
}

console.log("Program execution continues from here");
*/

/*
// Exercise 1
let x = 3; // "Jim" "Joe"
let y = 2;

if (x == y) {
  console.log(x, "is equal to", y);
}

if (x != y) {
  console.log(x, "is not equal to", y);
}

if (x >= y) {
  console.log(x, "is greater than or equal to", y);
}

if (x > y) {
  console.log(x, "is greater than", y);
}

if (x <= y) {
  console.log(x, "is less than or equal to", y);
}

if (x < y) {
  console.log(x, "is less than than", y);
}

*/

/*
// Exercise 2
let result = prompt("Enter student result (0-100):");

if (mark == 100) {
  console.log("Full marks - well done");
  console.log("Perfect score!");
}

console.log("The result was", result);
*/


/*
// if-else statement
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

if ( Number(num1) >= Number(num2) ){
   console.log(num1, "is greater than or equal to", num2);
} 
else {
   console.log(num1, "is less than", num2);
}

console.log("Program execution continues from here");
*/

/*
// else-if statement
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

if ( Number(num1) > Number(num2) ){
   console.log(num1, "is greater than", num2);
} 
else if ( Number(num1) < Number(num2) ){
   console.log(num1, "is less than", num2);
} 
else {
   console.log(num1, "is equal to", num2);
}

console.log("Program execution continues from here");
*/


/*
// if-else statement
let num1 = prompt("Enter a number");

if ( num1 % 2 == 0) {
   console.log(num1, "is even");
} 
else {
   console.log(num1, "is odd");
}

console.log("Program execution continues from here");
*/

/*
let date = new Date();
let computerYear = date.getFullYear();
let userYear = prompt("Enter the current year");

if (userYear != computerYear) {
   console.log("Incorrect answer");
   console.log("The year is", computerYear);
} else {
   console.log("You are correct");
   console.log("Well done!");
}
*/

/*
// Exercise 2
let mark = prompt("Enter student mark");

if (mark >= 50) {
  console.log("Well done - you passed!");
  console.log("Some options now are ....");
  console.log("1. Get a job");
  console.log("2. Do an apprenticeship");
  console.log("3. Go to college");
  console.log("4. Emigrate");
} else {
  console.log("Well done - you passed!");
  console.log("Some options now are ....");
  console.log("1. Get a job");
  console.log("2. Repeat");
  console.log("4. Emigrate");
}
*/

/*
// Generate two random numbers between 1 and 10 incl.
let n1 = Math.floor(Math.random() * 10) + 1;
let n2 = Math.floor(Math.random() * 10) + 1;

let message = "What is "+n1+" + "+n2;
let userAnswer = prompt(message);

if ( userAnswer == n1+n2 ) {
  console.log("Correct - well done!");
} else {
  console.log("Sorry - incorrect answer!");
  console.log("The right answer is", n1+n2);
}
*/


// Sign test
/*
let number = prompt("Enter any integer:");

if (number > 0) {
  console.log("Neither positive nor negaitive so the number must be zero!");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is positive");
}
// NOTE: number == 0 won't work because number is a string.
*/

/*
// else-if statement
let num1 = prompt("Enter a number");
let num2 = prompt("Enter another number");

if ( Number(num1) > Number(num2) ){
   console.log(num1, "is greater than", num2);
} 
else if ( Number(num1) < Number(num2) ){
   console.log(num1, "is less than", num2);
} 
else {
   console.log(num1, "is equal to", num2);
}

console.log("Program execution continues from here");
/*

// else-if statement
let goalsTeam1 = prompt("Enter number of goals scored by Team 1");
let goalsTeam2 = prompt("Enter number of goals scored by Team 2");

if ( Number(goalsTeam1) > Number(goalsTeam2) ){
   console.log("Result: Team 1 are the winners");
} 
else if ( Number(goalsTeam1) < Number(goalsTeam2) ){
   console.log("Result: Team 2 are the winners");
} 
else {
   console.log("Result: Draw");
}
*/

/*
let country = prompt("Enter a country and I will tell you its capital");

if (country == "Ireland") {
   console.log("Dublin");
} else if (country == "Scotland") {
   console.log("Edinburgh");
} else if (country == "England") {
   console.log("London");
} else if (country == "Wales") {
   console.log("Cardif");
} else if (country == "Ireland") {
   console.log("Dublin");

} 
else {
  console.log("Unknown country. Sorry.");
}
*/


/*
let mark = Number(prompt("Enter percentage mark (0-100):"));

if (mark >= 0) {
   console.log("O8");
} else if (mark >= 30) {
   console.log("O7");
} else if (mark >= 40) {
   console.log("O6");
} else if (mark >= 50) {
   console.log("O5");
} else if (mark >= 60) {
   console.log("O4");
} else if (mark >= 70) {
   console.log("O3");
} else if (mark >= 80) {
   console.log("O2");
} else if (mark >= 90) {
   console.log("O1");
}
*/

/*
let gradeLetter = prompt("Enter a letter: H = Higher, O = Ordinary");
let gradeLevel;
let mark = Number(prompt("Enter percentage mark (0-100):"));

if (mark >= 90) {
   gradeLevel = 1;
} else if (mark >= 80) {
   gradeLevel = 2;
} else if (mark >= 70) {
   gradeLevel = 3;
} else if (mark >= 60) {
   gradeLevel = 4;
} else if (mark >= 50) {
   gradeLevel = 5;
} else if (mark >= 40) {
   gradeLevel = 6;
} else if (mark >= 30) {
   gradeLevel = 7;
} else if (mark >= 0) {
   gradeLevel = 8;
}

console.log("Final Grade: ", gradeLetter+gradeLevel);
*/

/*
let gradeLetter = prompt("Enter a letter: H = Higher, O = Ordinary");
let mark = Number(prompt("Enter percentage mark (0-100):"));
let grade;

if (gradeLetter == "H") {
  if (mark >= 90) {
     grade = "H1";
  } else if (mark >= 80) {
     grade = "H2";
  } else if (mark >= 70) {
     grade = "H3";
  } else if (mark >= 60) {
     grade = "H4";
  } else if (mark >= 50) {
     grade = "H5";
  } else if (mark >= 40) {
     grade = "H6";
  } else if (mark >= 30) {
     grade = "H7";
  } else if (mark >= 0) {
     grade = "H8";
  }
} // end if gradeLetter is "H"
else if (gradeLetter == "O") {
  if (mark >= 90) {
     grade = "O1";
  } else if (mark >= 80) {
     grade = "O2";
  } else if (mark >= 70) {
     grade = "O3";
  } else if (mark >= 60) {
     grade = "O4";
  } else if (mark >= 50) {
     grade = "O5";
  } else if (mark >= 40) {
     grade = "O6";
  } else if (mark >= 30) {
     grade = "O7";
  } else if (mark >= 0) {
     grade = "O8";
  }
} // end if gradeLetter is "O"
*/

/*
// Alternative nesting to achieve the same result
let gradeLetter = prompt("Enter a letter: H = Higher, O = Ordinary");
let mark = Number(prompt("Enter percentage mark (0-100):"));
let grade;

if (mark >= 90) {
   if (gradeLetter == "H") {
     grade = "H1";
   } else if (gradeLetter == "O") {
     grade = "O1";
   } 
} else if (mark >= 80) {
   if (gradeLetter == "H") {
     grade = "H2";
   } else if (gradeLetter == "O") {
     grade = "O2";
   }
} else if (mark >= 70) {
   if (gradeLetter == "H") {
     grade = "H3";
   } else if (gradeLetter == "O") {
     grade = "O3";
   }
} else if (mark >= 60) {
   if (gradeLetter == "H") {
     grade = "H4";
   } else if (gradeLetter == "O") {
     grade = "O4";
   }
} else if (mark >= 50) {
   if (gradeLetter == "H") {
     grade = "H5";
   } else if (gradeLetter == "O") {
     grade = "O5";
   }
} else if (mark >= 40) {
   if (gradeLetter == "H") {
     grade = "H6";
   } else if (gradeLetter == "O") {
     grade = "O6";
   }
} else if (mark >= 30) {
   if (gradeLetter == "H") {
     grade = "H7";
   } else if (gradeLetter == "O") {
     grade = "O7";
   }
} else if (mark >= 0) {
   if (gradeLetter == "H") {
     grade = "H8";
   } else if (gradeLetter == "O") {
     grade = "O8";
   }
}
*/

/*
// Ternary operator
let n1 = 2;
let n2 = 3;
let max;

if (n1 > n2) {
  max = n1;
} else {
  max = n2
}

let max = (n1 > n2) ? n1 : n2;

let isEven = (num % 2 == 0) ? true : false;



*/

/*
let x = prompt("Enter a number from 1-4")

if (x == 1) {
   console.log("One");
} else if (x == 2) {
   console.log("Two");
} else if (x == 3) {
   console.log("Three");
} else if (x == 4) {
   console.log("Four");
} else {
   console.log("Sorry. Unknown value.");
}
*/

/*
let x = prompt("Enter a number from 1-5")

switch (x) {
  case 1: 
     console.log("One");
     break;
  case 2: 
     console.log("Two");
     break;
  case 3: 
     console.log("Three");
     break;
  case 4: 
     console.log("Four");
     break;
  default: 
     console.log("Sorry. Unknown value.");
     break;
}
*/

/*
let year = prompt("Enter a year (yyyy)")

if (year % 4 !=0) {
    console.log("Not Leap");
} else if (year % 100 !=0) {
    console.log("Leap");
} else if (year % 400 !=0) {
    console.log("Not Leap");
} else {
    console.log("Leap");
}
*/

/*
// Ordinal values: 1st, 2nd, 3rd, 4th, 5th, ... 21st, 22nd, 23rd, 24th, 
// See: https://www.javalobby.org/java/forums/t16906.html

let num = prompt("Enter a number")
let rem = num % 10;
let suffix;

switch (rem) {
   case 1:
      suffix = "st";
      break;
   case 2:
      suffix = "nd";
      break;
   case 3:
      suffix = "rd";
      break;
   default:
      suffix = "th";
} // end switch

console.log("Output:", num+suffix);

 // above code ignores the 'teen' case - to fix 
// int hundredRemainder = value % 100;
// if(hundredRemainder >= 10 && hundredRemainder <= 20) {
//  return "th";
// }
// int tenRemainder = value % 10;

*/


/*
// max of 3

let x1 = Number(prompt("Please enter 1st number: "));
let x2 = Number(prompt("Please enter 2nd number: "));
let x3 = Number(prompt("Please enter 3rd number: "));
let max;
/*
// Strategy 1: Compare each to all
if ((x1 >= x2) && (x1 >= x3)) {
    max = x1;
} else if ((x2 >= x1) && (x2 >= x3)) {
    max = x2;
}
else {
    max = x3;
}


// Strategy 2: Sequential
max = x1;
if (x2 > max)
  max = x2;
if (x3 > max)
  max = x3;
console.log("The largest number you entered was", max);
*/


console.log(typeof(undefined)); // undefined

console.log(typeof(NaN)); // number ... and yet ..
console.log(isNaN(NaN)); // true!
console.log(NaN == NaN); // false

console.log(0.1 + 0.2 == 0.3); // false
console.log(-Infinity +  Infinity); // NaN



// Cleared ok i.e. not unexpected

//console.log(-0 +  0); // 0
//console.log(Infinity == Infinity); // true
//console.log(undefined == undefined); // true
//console.log(typeof(Infinity)); // number

//console.log(-Infinity.toString()); // -Infinity
//console.log(-Infinity.valueOf()); // -Infinity
