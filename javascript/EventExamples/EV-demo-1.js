
const timeBtn = document.getElementById("time"); // Retrieve the time button
timeBtn.addEventListener("click", dispTime); // Attach a handler to the time button

// Handler for time button
function dispTime() {
    document.getElementById("demo").textContent = Date();
}

// Experiment!
// Instead of using timeBtn.addEventListener("click", dispTime); to add a listener ....
// ... try any of the following ....
// timeBtn.addEventListener("dblclick", dispTime);
// timeBtn.addEventListener("mousedown", dispTime);
// timeBtn.addEventListener("mouseover", dispTime);


