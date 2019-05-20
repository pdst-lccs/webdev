const timeBtn = document.getElementById("time"); // Retrieve the time button
timeBtn.addEventListener("click", dispTime); // Attach a handler to the time button


// Display the time
function dispTime() {
   let dateTimeStr = Date();
   document.getElementById("demo").textContent = dateTimeStr;

   // Add the time as the last child of body
   let bodyElem = document.getElementById("body-id"); // see note 1
   let newPara = document.createElement("p");
   newPara.textContent  = dateTimeStr;
   bodyElem.appendChild(newPara);

  
} // end dispTime


// Note 1 - we could have used a div element as a placeholder in the HTML
// let divElem = document.getElementById("time-div");