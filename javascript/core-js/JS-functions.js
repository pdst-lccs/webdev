// TOPIC NAME GOES HERE
/*
console.log("+------+");
console.log("|      |");
console.log("|      |");
console.log("+------+");
*/


function drawBox() {
  console.log("+------+");
  console.log("|      |");
  console.log("|      |");
  console.log("+------+");
}

//drawBox();
/*
function displayRhyme() {
  console.log("Jack loves to do his homework");
  console.log("He never misses a day");
  console.log("He even loves the men in white");
  console.log("Who are taking him away");
}

displayRhyme();
console.log("");
displayRhyme();

*/
/*
// Parameters and arguments
function displayRhyme(personName) {
  console.log(personName, "loves to do his homework");
  console.log("He never misses a day");
  console.log("He even loves the men in white");
  console.log("Who are taking him away");
}

displayRhyme("Mary");
console.log("");
displayRhyme("Sue");
console.log("");
displayRhyme("Joan");
console.log("");
*/
/*
// Multiple Parameters
function displayLyrics(line1, line2) {
  console.log(line1);
  console.log(line2);
}

displayLyrics("I read the news today", "Oh boy");
*/

/*
// Exercises
function displayMessage() {
  console.log(message);

}

displayMessage("I am Sam");
*/
/*
// Exercises
function displayGreeting1(msg) {
  console.log(msg);

}

function displayGreeting2(msg1, msg2) {
  console.log(msg1);
  console.log(msg2);
}

*/
/*
function convert(euroAmount, rate) {
  let dollar = amount * rate;
  return dollar; // return the converted amount
}

let amount = Number(prompt("Enter amount to convert (€)"));
let dollarAmount = convert(amount, 1.13);

console.log("€"+amount+" is worth $"+dollarAmount);
*/

function miles2kms(miles) {
  let kms = miles * 1.6;
  return kms;
}

//let kimometers = miles2kms(50);
//console.log("There are"+kimometers+"kms in 50 miles");

function kms2miles(kms) {
  let miles = kms * 0.62;
  return miles;
}

//let miles = kms2miles(50);
//console.log("There are"+miles+"miles in 80 kms");

function add1(n1, n2) {
  return n1+n2;
}

function add2(n1, n2) {
  let sum = n1+n2;
  console.log(n1+"+"+n2+"="+sum);
}

// add2(2, 4);

/*
// Exercises - syntax errors
function add(n1, n2) {
  let sum = n1+n2;
  return sum;

}

let result = add(8, 3);
console.log(sum);
*/


/*
// Boolean functions
function isEven(number) {
  if (number % 2 === 0)
    return true;
  else
    return false; 
}

function isOdd(number) {
  if (number % 2 === 0)
    return true;
  else
    return false; 
}

for (let n=0; n<=100; n++) {
  if (isEven(n))
    console.log(n);
}

for (let n=0; n<=100; n++) {
  if (isEven(n))
    console.log(n);
}
*/
/*
// max of 3
let x1 = Number(prompt("Please enter 1st number: "));
let x2 = Number(prompt("Please enter 2nd number: "));
let x3 = Number(prompt("Please enter 3rd number: "));
let max;

function maxOf3(x1, x2, x3) {
  
  if ((x1 >= x2) && (x1 >= x3)) {
      max = x1;
  } else if ((x2 >= x1) && (x2 >= x3)) {
      max = x2;
  } else {
      max = x3;
  }
  
  return max;
}


console.log("The maximum number is", maxOf3(x1, x2, x3));
*/

//function fhar2Cent(f)
//function cent2Fhar(c)

let x = Number(prompt("Please enter a number: "));

let prime;
if (x <= 0)
  prime = false;
else
  prime = true;
  
if (x > 2) {
  let denominator = 2;
  while (denominator <= Math.sqrt(x)) {
    if (x % denominator === 0) {
      prime = false;
      break;
    } else {
      denominator++;
    } // end else
  } // end while
} // end if

// Use a nested if to display the outcome
if (prime)
  console.log(x+" is prime");
else
  console.log(x+" is NOT prime");

/*
# A function to test whether a number is prime or not
# Returns True if the number is prime; False otherwise
def isPrime(numToCheck):

    # Any number less than 2 is not prime
    if numToCheck < 2:
        return False

    # see if num is evenly divisible by any number up to num/2
    divisor = 2
    while (divisor < numToCheck/2):
        if (numToCheck % divisor == 0):
            return False
        divisor = divisor+1

    # The number must be prime so return True
    return True
*/