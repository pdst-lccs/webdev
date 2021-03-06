

// Declare three global variables
let n1 = 0, n2 = 0, correctAnswer = 0, userResponse = 0;
let problemInWords;

// Declare two global arrays of messages
const correctMsgs = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
const incorrectMsgs = ["No! Please try again", "Wrong! Try once more", "Don't give up!", "No! Keep trying", "That's incorrect"];


// A function to generate the question
function generateQuestion(){
  // Generate 2 random numbers
  n1 = Math.floor(Math.random() * 10); // 0 <= n1 < 10
  n2 = Math.floor(Math.random() * 10); // 0 <= n2 < 10
  
  correctAnswer = n1 + n2; // Compute the correct answer
} // end generateQuestion

// A function to get a response
function getResponse() {
  problemInWords = "What is "+ String(n1) + " + " + String(n2); // Q1
  console.log(problemInWords);
  userResponse = Number(prompt(problemInWords));
  console.log("User entered %d", userResponse); // this is for debug purposes
} // end getResponse

// A function to process a response
function processResponse() {

  // As long as the user's answer is different to the computer's answer ...
  // ... tell the user they are wrong and ...
  // ... ask the user for another response
  while (userResponse != correctAnswer) {
      if (userResponse < 0) {
          break; // exit the loop
      } else {
          // The incorrect answer was entered
          displayRandomMsg(incorrectMsgs); // Q4
          userResponse = Number(prompt(problemInWords));
      }

  } // end while
  
  if (userResponse < 0) {
      console.log("Answer not known. The correct answer was", correctAnswer);
      alert("Answer not known. The correct answer was" + String(correctAnswer));
  } else {
      // The correct answer was entered
      displayRandomMsg(correctMsgs);
  }
  
} // end processResponse


// A function that generates and displays a random message
function displayRandomMsg(messages) {
  const r = Math.floor(Math.random() * messages.length);
  console.log(messages[r]);
  alert(messages[r]);
} // end displayRandomMsg


// This is the main body of the program.
// The program runs as long as the 'goAgain' flag is true
let keepGoing = true;
while (keepGoing) {
  generateQuestion();
  getResponse();
  processResponse();
  let yesNo = prompt("Continue [Y/N]");
  keepGoing = yesNo.toUpperCase() == "Y" ? true : false;
}


// TO DO - incorporate 2 functions into the above e.g. processResponse, getRandomMsg


// NEXT STEPS
// 1.  Change the way the question is displayed e.g. 4 x 2 instead of 4 times 2
// 2.  Modify the program so that the responses for an incorrect answer vary randomly as follows:
//     -	No. Please try again
//     -	Wrong. Try once more
//     -	Don’t give up
//     -	No. Keep trying.
// 3.  At the end of the processing ask the user if they want to go again ... Keep going until the user says N
//     (Hint: it may be helpful to modularise fully i.e. more functions e.g. generateQuestion, getResponse)
// 4.  Add an option to allow the user to pick difficulty level. 
//     An option of 1 means single digit problems only and an option of two means double digit problems
// 5.  Add an option to allow the user to pick the type of arithmetic problems. 
//     1=addition; 2=subtraction; 3=multiplication; 4=division; 5=random mixture
// 6.  Add a statistics feature e.g. #questions, #correct/incorrect answers
//     When will you display these? At the end? Ongoing, after each answer?
// ADDITIONAL CHALLENGES
// 1. Rewrite the program so that it doesn't use any global variables
// (Hint: it may be helpful to define your own object(s))
// 2. Suggest ways to improve the user experience
// (Hint: would it be useful to provide a help/hint facility?)
// 3. Suggest ways to improve the user interface
// (Hint: what about a using a web page?)


