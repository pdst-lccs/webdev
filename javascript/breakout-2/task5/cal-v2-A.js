// Online Computer Aided Learning System (OCALS) v1
console.log("Welcome to OCALS v1");

// Setup an event handler for the difficultyLevel selection
const diffLevelSelection = document.getElementById("difficultyLevel");
diffLevelSelection.addEventListener('change', setDiffLevel);

// Setup an event handler for the operation selection
const operationSelection = document.getElementById("operation");
operationSelection.addEventListener('change', setOperation);

// Setup an event handler for the operation selection
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener('click', generateProblem);
generateBtn.disabled = false;

// Setup an event handler for the submit answer button
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', checkAnswer);
submitBtn.disabled = true;


// Global variables
let difficultyLevel = 0, operation = 0, correctAnswer = 0;
let nrAttempts = 0; // used to store the number of attempts

// Declare two global arrays of messages
const correctMsgs = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
const incorrectMsgs = ["No! Please try again", "Wrong! Try once more", "Don't give up!", "No! Keep trying", "That's incorrect"];


// Handler for the difficulty level
function setDiffLevel() {
  console.log("setDiffLevel");
  difficultyLevel = document.getElementById("difficultyLevel").selectedIndex;
  console.log(difficultyLevel);
  
}

// Handler for the opertion
function setOperation() {
  console.log("setOperation");
  operation = document.getElementById("operation").selectedIndex;
  console.log(operation);
  
}

// Handler for the generate problem button
function generateProblem() {
  console.log("generateProblem");
  
  generateBtn.disabled = true;
  submitBtn.disabled = false;
  
  let n1, n2;
  
  if (difficultyLevel === 0) {
    // Generate 2 random numbers between 0 and 9 incl.
    n1 = Math.floor(Math.random() * 10); // 0 <= n1 < 10
    n2 = Math.floor(Math.random() * 10); // 0 <= n2 < 10
  } else { // assume diff level is 1
    // Generate 2 random numbers between 10 and 99 incl.
    n1 = Math.floor(Math.random() * 90) + 10; // 10 <= n1 < 100
    n2 = Math.floor(Math.random() * 90) + 10; // 10 <= n2 < 100
  }

    // Assign the operator
  let operator;
  if (operation === 0) {
      operator = "+";
      correctAnswer = n1 + n2;
  } else if (operation === 1) {
      operator = "-";
      correctAnswer = n1 - n2;
  } else if (operation === 2) {
      operator = "*";
      correctAnswer = n1 * n2;
  } else { // assume division is 3
      operator = "/";
      correctAnswer = n1 / n2;
  }

  
  let problemPara = document.getElementById("problem");
  let problemText = "What is "+String(n1)+" "+operator+" "+String(n2)+"?";
  problemPara.textContent = problemText;
  console.log(problemText);
  
  // Clear the results from the previous problem
  document.getElementById('rightOrWrong').textContent = "";
  document.getElementById("prevAnswers").innerHTML = "";
  document.getElementById("stats").textContent = "";
  
  nrAttempts = 0; // reset the number of attempts taken
  document.getElementById('answerField').focus();
  
}

// Handler - check the answer
function checkAnswer() {
  const feedback = document.getElementById('rightOrWrong');
  const answerField = document.getElementById('answerField');

  // Read the user's guess
  let userAnswer = Number(answerField.value);
  
  nrAttempts++;

  if (userAnswer === correctAnswer) {
    feedback.textContent = getRandomMsg(correctMsgs);
    feedback.style.backgroundColor = 'green';
    generateBtn.disabled = false;
    submitBtn.disabled = true;
    displayStats();
  } else {
    feedback.textContent = getRandomMsg(incorrectMsgs);
    feedback.style.backgroundColor = 'red';
  }


  // Display each user's guess in the division for prevGuesses
  let unorderedList = document.getElementById("prevAnswers");
  let newListItem = document.createElement("li");
  newListItem.textContent = answerField.value;
  unorderedList.appendChild(newListItem);

 
  answerField.value = ''; // blank the field
  answerField.focus(); // give it the focus
}

// A function that generates and displays a random message
function getRandomMsg(messages) {
  const r = Math.floor(Math.random() * messages.length);
  console.log(messages[r]);
  return(messages[r]);
} // end displayRandomMsg


// A function to display the final statistics
function displayStats(){
  let statsPara = document.getElementById("stats");
  let statsText = "You took "+nrAttempts+" attempts.";
  statsPara.textContent = statsText;
  
} // end displayStats
