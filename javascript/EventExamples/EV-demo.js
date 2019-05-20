// Attach a handler to the button
const btnRef = document.getElementById("btn");
btnRef.addEventListener("click", displayMessage);

// Display the message Hello World
function displayMessage() {
    alert( "Hello World!" );
}

// document.write should be avoided
function displayMessage2() {
  document.write("Hello World!");
}

// Change line 2 above from ...
// btnRef.addEventListener("click", displayMessage);
// ... to ...
// btnRef.addEventListener("click", displayMessage2);
//
// What did you notice?

