const timeBtn = document.getElementById("time"); // Retrieve the time button
timeBtn.addEventListener("click", dispTime); // Attach a handler to the time button


// Display the time
function dispTime() {
   let dateTimeStr = Date();
   document.getElementById("demo").textContent = dateTimeStr;

   // Add the time as the last child of body
   let divElem = document.getElementById("time-div");
   let newPara = document.createElement("p");
   newPara.textContent  = dateTimeStr;
   divElem.appendChild(newPara);

  
} // end dispTime


