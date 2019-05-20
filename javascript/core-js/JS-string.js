// String processing

/* 
// Example string literals
let s1 = "Hello World!";
let s2 = "Gobbledy\ngook!";

let s3 = "A string can span \
multiple lines of source \
using the \\ character!";
console.log(s3);

let s4 = "A string can span \n multiple lines \n using the \\n character!";
console.log(s4);

let s5 = "A string can #tag be made up of any ?^&£ characters!";
*/
/*
// Example string literals
let s = "Hello World!";
console.log(s[1]);
console.log(s[11]);

s[1] = "o";
s[2] = "w";
s[3] = "d";
s[4] = "y";
console.log(s); // Hello World!
*/

/*
let s1 = "Joe";
let s2 = "Joe";
let s3 = s2;
let s4 = new String("Joe");
let s5 = new String("Joe");
let s6 = s5;

console.log(typeof(s1)); // string
console.log(typeof(s2)); // string
console.log(typeof(s3)); // string
console.log(typeof(s4)); // object
console.log(typeof(s5)); // object
console.log(typeof(s6)); // object
*/

/*
let s1 = "Hello";
let s2 = s1;
console.log(s1 == s2); // true
console.log(s1 === s2); // true
*/

/*
let s1 = "A quick brown fox";
let len = s1.length;
console.log("The length of s1 is", len);
console.log("The last character of s1 is", s1[len-1]);


console.log(s1.includes("fox"));
console.log(s1.includes("dog"));
*/

/*
let s1 = "Joe";
let s2 = "Joe";
let s3 = s2;
let s4 = new String("Joe");
let s5 = new String("Joe");
let s6 = s5;

console.log(s1 == s2); // true
console.log(s1 == s3); // true
console.log(s1 == s4); // true
console.log(s4 == s5); // false
console.log(s5 == s6); // true

console.log(s1 === s2); // true
console.log(s1 === s3); // true
console.log(s1 === s4); // false
console.log(s4 === s5); // false
console.log(s5 === s6); // true
*/



/*
let s2 = new String("A quick brown fox");

console.log(typeof(s1)); // string
console.log(typeof(s2)); // object

console.log(s1 == s2); // true
console.log(s1 === s2); // false
*/

/*
let fullName = "Joe".concat("Bloggs");
console.log(fullName);

fullName = "Joe".concat(" ").concat("Bloggs");
console.log(fullName);
*/

/*
console.log("apple" < "banana"); // true
console.log("apple" > "banana"); // false
console.log("apple" < "aardvark"); // false
console.log("apple" > "apple tart"); // false
console.log("Apple" != "apple"); // true
console.log("Apple" > "apple"); // false
console.log("Zebra" <= "giraffe"); // true
*/
/*
let apple = "apple";
let banana = "banana";
console.log(apple.localeCompare(banana));
console.log(banana.localeCompare(apple));
console.log(banana.localeCompare(banana));
*/
/*
// Code to demonstrate some common string methods
// Declare two strings to work with
let pangram = "Pack my box with five dozen liquor jugs";
let toungeTwister = "Sally sells seashells by the sea shore";

// charAt and charCodeAt
console.log("The Unicode representation for", pangram.charAt(), "is", pangram.charCodeAt());
console.log("The Unicode representation for", pangram.charAt(1), "is", pangram.charCodeAt(1));

// toUpperCase, toLowerCase and concat
console.log("toUpperCase:", pangram.toUpperCase());
console.log("toLowerCase:", pangram.toLowerCase());

// concat
let lowerCaseStr = toungeTwister.toLowerCase();
let upperCaseStr = toungeTwister.toUpperCase();
console.log(lowerCaseStr.concat(upperCaseStr));

// indexOf
let index = toungeTwister.indexOf("ells");
console.log("indexOf first \'ells\' is:", index);
console.log("indexOf of next \'ells\' is:",  toungeTwister.indexOf("ells", index+1));

// lastIndexOf
let lastIndex = toungeTwister.lastIndexOf("ells");
console.log("lastIndexOf \'ells\' is:", lastIndex);
console.log("2nd lastIndexOf of \'ells\' is:", toungeTwister.lastIndexOf("ells",lastIndex-1));

// slice
console.log("slice 1:", pangram.slice(5));
console.log("slice 2:", pangram.slice(5, 11));

// replace
console.log("replace 1:", pangram.replace("box", "bag"));
console.log("replace 2:", toungeTwister.replace("sells", "sold"));

// split
console.log("split 1:", pangram.split());
console.log("split 2:", toungeTwister.split(" "));
*/


/*
// A program to count the number of vowels in a string
let inString = prompt("Enter a string:");
let vowels = 0;
let ch;

for(let i = 0; i < inString.length; i ++) {

  // Extract the next character (from position i) ...
  // ... and convert it to upper case
  ch = inString.charAt(i).toUpperCase();

  if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
    vowels ++;
}

console.log("The number of vowels found was", vowels);
*/

/*
// Reversing a string
let str = prompt("Enter a string:");

for(let i = str.length-1; i >= 0; i--) {
  console.log(str[i]);
}
*/
/*
let inStr = prompt("Enter a string:");
let outStr = "";

for(let i = inStr.length-1; i >= 0; i--) {
  outStr += inStr[i];
}

console.log(outStr);
*/

// Read the string and remove any spaces 
let str = prompt("Enter a string:");
let s = str.split(" ").join("");
let isPalindrom = true;

// Traverse the string comparing each char
for(let i=0, j = s.length-1; i < s.length; i++, j--) {
  if (s[i] != s[j]) {
    isPalindrom = false;
    break;
  }
}
// Display the result
if (isPalindrom)
  console.log(str, "is a palindrome!");
else
  console.log(str, "is not a palindrome!");

/* 
let uprCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lwrCaseLetters = "abcdefghijklmnopqrstuvwxyz"
let letters = uprCaseLetters+lwrCaseLetters

console.log(uprCaseLetters.toLowerCase());
console.log(lwrCaseLetters.toLowerCase());
            
console.log(uprCaseLetters.slice(0,5));
console.log(uprCaseLetters.slice(20));
console.log(lwrCaseLetters.slice(1,6));

console.log(letters.slice(26,52));
console.log(letters.indexOf("a"));
console.log(letters.lastIndexOf("A"));
console.log(letters.replace("abc", "123"));

console.log(uprCaseLetters == lwrCaseLetters);
console.log(uprCaseLetters == lwrCaseLetters.toUpperCase());
*/