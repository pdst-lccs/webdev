
// Create a listner for the 'Submit' button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkGuess);

// Create a listner for the 'New game' button
const newGameBtn = document.getElementById('newgame-btn');
newGameBtn.addEventListener('click', newGame);

// Create a listner for the checkbox to display the secret number
let checkbox = document.getElementById("showNumberCkBx");
checkbox.addEventListener('click', toggleNumber);

// Create a listner for the two spinners (the same one will do them both)
document.getElementById('low').addEventListener('change', setSecretNo);
document.getElementById('high').addEventListener('change', setSecretNo);

// Global variables
const feedback = document.getElementById('rightOrWrong');
const guessField = document.getElementById('guessField');
let guessCount, secretNumber, minValue, maxValue;

// Start a new game
newGame();


// Handler for the 'Submit' button
function checkGuess() {
  let userGuess = Number(guessField.value);
  
  //guesses.textContent += userGuess + ' ';
  guessCount++;
  
  if (userGuess === secretNumber) {
    feedback.textContent = 'Congratulations!';
    feedback.style.backgroundColor = 'green';
    gameOver();
  } else {
    feedback.textContent = 'Wrong!';
    feedback.style.backgroundColor = 'red';
  }
  
  // Display a helpful message to the user
  let helpfulMsgField = document.getElementById("lowOrHi");
  if (userGuess < secretNumber) {
      helpfulMsgField.textContent = 'Too low!' ;
  } else if (userGuess > secretNumber) {
      helpfulMsgField.textContent = 'Too high!';
  } else if (userGuess === secretNumber) {
      helpfulMsgField.textContent = 'Just right!';
  }
  
   // Display each user's guess in the division for prevGuesses
  let unorderedList = document.getElementById("prevGuesses");
  let newListItem = document.createElement("li");
  newListItem.textContent = guessField.value;
  unorderedList.appendChild(newListItem);
  
  guessField.value = '';
  guessField.focus();
}


// This function is called at the start of the program
// It also acts as the handler for the 'New game' button
function newGame() {

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
  
  guessField.focus();
}

function gameOver() {
  submitBtn.disabled = true;
  newGameBtn.disabled = false;
  displayStats();
}

function displayStats() {
  
   // Display the number of guesses
   let statsPara = document.getElementById("stats");
   statsPara.textContent = "You took "+guessCount+" guesses";

}
  
// Handler for the checkbox 
function toggleNumber() {
    const computerNumber = document.getElementById('computerNumber');
    if (checkbox.checked) {
      computerNumber.style.visibility = 'visible';
      computerNumber.textContent = secretNumber;
    } else {
      computerNumber.style.visibility = 'hidden';
    }
    guessField.focus();
}

// Handler for the spinners 
function setSecretNo() {

  minValue = Number(document.getElementById('low').value);
  maxValue = Number(document.getElementById('high').value);
  secretNumber = Math.floor(Math.random() * (maxValue - minValue +1)) + minValue;  
  
  // update the secret number on the display
  document.getElementById('computerNumber').textContent = secretNumber;
  
}



/*
// Using an anonymous function as an event handler
var checkbox = document.getElementById("showNumber");
checkbox.addEventListener( 'change', function() {
    if (this.checked) {
      computerNumber.style.visibility = 'hidden';
    } else {
      computerNumber.style.visibility = 'visible';
      computerNumber.textContent = randomNumber;
    }
});

*/
