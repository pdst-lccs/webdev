// pick a random number between 1 and 10
//let secretNumber = Math.floor(Math.random() * 10) + 1;
let secretNumber; // Task 4
let minValue, maxValue; // Task 4
let guessCount = 0; // Task #2

// Setup an event handler for the submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkGuess);

const newGameBtn = document.getElementById('newgame-btn'); // Task 3
newGameBtn.addEventListener('click', newGame); // Task 3

let checkbox = document.getElementById("showNumberCkBx"); // Task 1
checkbox.addEventListener('click', toggleNumber); // Task 1

// Create a listener for the two spinners (the same one will do them both)
document.getElementById('low').addEventListener('change', setSecretNo); // Task 4
document.getElementById('high').addEventListener('change', setSecretNo); // Task 4


// Start a new game
newGame(); // Task 3

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
    gameOver(); // Task 3
    //displayStats(); // Task 2 - commented out on task 3
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

// Task #3
function newGame() {
  
  // For task 4 comment the next line is commented out and replaced with the following 3
  //secretNumber = Math.floor(Math.random() * 10) + 1;
  // Task 4
  minValue = Number(document.getElementById('low').value);
  maxValue = Number(document.getElementById('high').value);
  secretNumber = Math.floor(Math.random() * (maxValue - minValue +1)) + minValue;

  guessCount = 0;
  
  submitBtn.disabled = false;
  newGameBtn.disabled = true;

  document.getElementById('computerNumber').textContent = "";
  document.getElementById("showNumberCkBx").checked = false;
  document.getElementById('rightOrWrong').textContent = "";
  document.getElementById("lowOrHi").textContent = "";
  document.getElementById("prevGuesses").innerHTML = "";
  document.getElementById("stats").textContent = "";
  document.getElementById('computerNumber').style.visibility = 'hidden';

}

// Task #3
function gameOver() {
  submitBtn.disabled = true;
  newGameBtn.disabled = false;
  displayStats();
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

// Task #4
// Handler for the spinners 
function setSecretNo() {

  minValue = Number(document.getElementById('low').value);
  maxValue = Number(document.getElementById('high').value);
  secretNumber = Math.floor(Math.random() * (maxValue - minValue +1)) + minValue;  
  
  // update the secret number on the display
  document.getElementById('computerNumber').textContent = secretNumber;
  
}

