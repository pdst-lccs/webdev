// pick a random number between 1 and 10
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Setup an event handler for the submit button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkGuess);

// Handler - check the guess
function checkGuess() {
  const feedback = document.getElementById('rightOrWrong');
  const guessField = document.getElementById('guessField');

  // Read the user's guess
  let userGuess = Number(guessField.value);

  if (userGuess === secretNumber) {
    feedback.textContent = 'Congratulations! You got it right!';
  } else {
    feedback.textContent = 'Wrong!';
  }

  guessField.value = ''; // blank the field
  guessField.focus(); // give it the focus
}
