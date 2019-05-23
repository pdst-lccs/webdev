// Online Computer Aided Learning System (OCALS) v2
console.log("Welcome to OCALS v3");
displayResultForm("none"); // Hide the results section

// Setup an event handler for the operation selection
const formCtrl = document.getElementById("opForm");
formCtrl.addEventListener('click', setOperation);

// Create a listener for the two spinners for the 1st number
document.getElementById('low1').addEventListener('change', setN1Range);
document.getElementById('high1').addEventListener('change', setN1Range);

// Create a listener for the two spinners for the 2nd number
document.getElementById('low2').addEventListener('change', setN2Range);
document.getElementById('high2').addEventListener('change', setN2Range);

// Setup an event handler for the operation selection
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener('click', generateProblem);
generateBtn.disabled = false;

// Setup an event handler for the operation selection
const resultForm = document.getElementById("resultForm");
resultForm.addEventListener('click', processResult);


// Global variables
const incorrectMsgs = ["No! Please try again", "Wrong! Try once more", "Don't give up!", "No! Keep trying", "That's incorrect"];
let operation = 0; // Addition is the default
let correctBtnID = 0;
let minValue1 = 0, minValue2 = 0, maxValue1 = 100, maxValue2 = 100;

// Handler for the operation
function setOperation() {
  console.log("setOperation - radio clicked");
  let form = document.getElementById("opForm");
  operation = form.elements["opForm"].value;
  console.log(operation);
  
}


// Handler for min/max of operand 1
function setN1Range() {
  minValue1 = Number(document.getElementById('low1').value);
  maxValue1 = Number(document.getElementById('high1').value);
}


// Handler for min/max of operand 2
function setN2Range() {
  minValue2 = Number(document.getElementById('low2').value);
  maxValue2 = Number(document.getElementById('high2').value);
}

// Handler for the generate problem button
function generateProblem() {
  console.log("generateProblem");
  let correctAnswer = 0;   
  generateBtn.disabled = true;

  let n1 = Math.floor(Math.random() * (maxValue1 - minValue1 +1)) + minValue1;
  let n2 = Math.floor(Math.random() * (maxValue2 - minValue2 +1)) + minValue2;
    // Assign the operator
  let operator;
  if (operation == 0) {
      operator = "+";
      correctAnswer = n1 + n2;
  } else if (operation == 1) {
      operator = "-";
      correctAnswer = n1 - n2;
  } else if (operation == 2) {
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
  
  displayResultForm("block"); // Show the results section
  
  // https://stackoverflow.com/questions/45259854/change-the-text-next-to-a-radio-button-using-javascript
  // Dynamically set the content of the button's text node
  //document.getElementById('radio0').nextSibling.textContent = "ans1";
  //document.getElementById('radio1').nextSibling.textContent = "ans2";
  //document.getElementById('radio2').nextSibling.textContent = "ans3";
  //document.getElementById('radio3').nextSibling.textContent = "ans4";
  
  correctBtnID = Math.floor(Math.random() * 3); // a number between 0 and 3 incl
  for (let i=0; i<4; i++) {
    let radioID="radio"+i;
    if (i == correctBtnID) {
      document.getElementById(radioID).nextSibling.textContent = String(correctAnswer);
    } else {
      let randomAnswer = Math.floor(Math.random() * 500) + 1;
      document.getElementById(radioID).nextSibling.textContent = String(randomAnswer);
    }
  }
   
} // end generateProblem

function processResult() {

  const feedback = document.getElementById('feedback');
  
  const resultForm = document.getElementById("resultForm");
  let selectedBtnValue = resultForm.elements["resultForm"].value;
  console.log(selectedBtnValue); // undefined
  
  if (selectedBtnValue == correctBtnID) {
    console.log("Correct"); 
    displayResultForm("none"); // Hide the results section
    generateBtn.disabled = false; // Enable the Generate a problem button
    document.getElementById("problem").textContent = ""; // Clear the problem
    feedback.textContent = ""; // Clear the feedback
    document.getElementById("radio"+correctBtnID).checked = false;
  } else {
    console.log("Incorrect"); 
    feedback.textContent = getRandomMsg(incorrectMsgs);
    feedback.style.backgroundColor = 'red';
  }
  
} // processResult

// Show or hide the results section 
function displayResultForm(displayStyle) {
  let resultForm = document.getElementById("resultForm");
  resultForm.style.display = displayStyle;
} // displayResultForm


// A function that generates and displays a random message
function getRandomMsg(messages) {
  const r = Math.floor(Math.random() * messages.length);
  console.log(messages[r]);
  return(messages[r]);
} // end displayRandomMsg

