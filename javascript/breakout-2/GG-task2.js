// pick a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Setup an event handler for the submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkGuess);

let checkbox = document.getElementById("showNumberCkBx"); // Task 1
checkbox.addEventListener('click', toggleNumber); // Task 1

let guessCount = 0; // Task #2

// Handler - check the guess
function checkGuess() {
  const feedback = document.getElementById('rightOrWrong');
  const guessField = document.getElementById('guessField');

  // Read the user's guess
  let userGuess = Number(guessField.value);
  
  guessCount++; // Task 2

  if (userGuess === secretNumber) {
    feedback.textContent = 'Congratulations! You got it right!';
    feedback.style.backgroundColor = 'green'; // Task 1
    displayStats(); // Task 2
  } else {
    feedback.textContent = 'Wrong!';
    feedback.style.backgroundColor = 'red'; // Task 1
  }

  // Task #2
  // Display a helpful message to the user
  let helpfulMsgField = document.getElementById("lowOrHi");
  if (userGuess < secretNumber) {
      helpfulMsgField.textContent = 'Too low!' ;
  } else if (userGuess > secretNumber) {
      helpfulMsgField.textContent = 'Too high!';
  } else if (userGuess === secretNumber) {
      helpfulMsgField.textContent = 'Just right!';
  }

  // Task #2
  // Display each user's guess in the division for prevGuesses
  let unorderedList = document.getElementById("prevGuesses");
  let newListItem = document.createElement("li");
  newListItem.textContent = guessField.value;
  unorderedList.appendChild(newListItem);

 
  guessField.value = ''; // blank the field
  guessField.focus(); // give it the focus
}

// Task #2
function displayStats() {
   // Display the number of guesses
   let statsPara = document.getElementById("stats");
   statsPara.textContent = "You took "+guessCount+" guesses";
}


// Task #1
function toggleNumber() {
    const computerNumber = document.getElementById('computerNumber');
    if (checkbox.checked) {
      computerNumber.style.visibility = 'visible';
      computerNumber.textContent = secretNumber;
    } else {
      computerNumber.style.visibility = 'hidden';
    }
}

