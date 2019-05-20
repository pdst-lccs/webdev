const textField = document.getElementById('txt-field');
const okBtn = document.getElementById('ok-btn'); // retrieve the OK button
okBtn.addEventListener('click', buttonClicked); // attach the handler

// Handler code to execute when the OK button gets clicked
function buttonClicked() {
  
   // Add the entered data as the last child of the result division
   let divElem = document.getElementById("result-div");
   let newPara = document.createElement("p");
   newPara.textContent = textField.value;
   divElem.appendChild(newPara);
  
   textField.focus(); // set the focus back to the text field
   textField.value = ""; // clear the contents of the text field
}
