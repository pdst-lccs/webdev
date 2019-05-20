// Declare three global variables
//let n1 = 0, n2 = 0, correctAnswer = 0;


// STEP 1. Generate the question
// Generate 2 random numbers
let n1 = Math.floor(Math.random() * 10); // 0 <= n1 < 10
let n2 = Math.floor(Math.random() * 10); // 0 <= n2 < 10


// STEP 2. Ask the user the question and get a response
// n1 and n2 are converted to strings so that they can be displayed as part ...
// ... of the prompt string
let problemInWords = "What is "+ String(n1) + " + " + String(n2); // Q1
console.log(problemInWords);
let userResponse = Number(prompt(problemInWords));
console.log("User entered %d", userResponse); // this is for debug purposes
// Compute the correct answer


// STEP 3. Process the response
// Compute the correct answer. Then ...
// ... as long as the user's answer is different to the computer's answer ...
// ... tell the user they are wrong and ...
// ... ask the user for another response
let correctAnswer = n1 + n2; // Compute the correct answer
while (userResponse != correctAnswer) {
    // Q2 - take a negative response to mean the user doesn't know the answer
    if (userResponse < 0) {
        break; // exit the loop
    } else {
        // Q3 - Wrong answer - display a random message from the array of messages
        const messages = ["No! Please try again", "Wrong! Try once more", "Don't give up!", "No! Keep trying", "That's incorrect"];
        const r = Math.floor(Math.random() * messages.length);
        console.log(messages[r]);
        alert(messages[r]);
        console.log("Wrong answer! Try again.");
        userResponse = Number(prompt(problemInWords));
    }
}

// Q2 - user didn't know the answer so tell them
if (userResponse < 0) {
    console.log("Answer not known. The correct answer was", correctAnswer);
    alert("Answer not known. The correct answer was" + String(correctAnswer));
} else {
    // STEP 4. Display a randomly selected encouragement message
    const messages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
    const r = Math.floor(Math.random() * messages.length);
    console.log(messages[r]);
    alert(messages[r]);
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


