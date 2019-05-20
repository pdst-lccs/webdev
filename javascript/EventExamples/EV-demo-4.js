const textField = document.getElementById('txt-field');
textField.focus(); // set the focus to the text field
const okBtn = document.getElementById('ok-btn');

// Attach a listener to the ok button
okBtn.addEventListener('click', buttonClicked);

function buttonClicked() {
   let dataEntered = textField.value;
  
   let listItem = document.createElement("li");
   listItem.textContent = dataEntered;

   // Add the entered data as the last child of an unordered list
   let unorderedList = document.getElementById("ul");
  
   // If the list doesn't exist create it and ....
   // ... insert it as a child of the result division
   if (unorderedList == null) {
      let divElem = document.getElementById("result-div");
      unorderedList = document.createElement("ul");
      divElem.appendChild(unorderedList);
   }
  
   unorderedList.appendChild(listItem);

   textField.focus();
   textField.value = "";
}

