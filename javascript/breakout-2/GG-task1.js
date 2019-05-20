// pick a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Setup an event handler for the submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkGuess);

let checkbox = document.getElementById("showNumberCkBx"); // Task 1
checkbox.addEventListener('click', toggleNumber); // Task 1


// Handler - check the guess
function checkGuess() {
  const feedback = document.getElementById('rightOrWrong');
  const guessField = document.getElementById('guessField');

  // Read the user's guess
  let userGuess = Number(guessField.value);

  if (userGuess === secretNumber) {
    feedback.textContent = 'Congratulations! You got it right!';
    feedback.style.backgroundColor = 'green'; // Task 1
  } else {
    feedback.textContent = 'Wrong!';
    feedback.style.backgroundColor = 'red'; // Task 1
  }

  guessField.value = ''; // blank the field
  guessField.focus(); // give it the focus
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

