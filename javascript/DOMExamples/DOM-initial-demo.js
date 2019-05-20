console.log("Welcome to DOM demos!");

// Display Hello World!
document.write("Hello World");


// Can include HTML
// For example <br> is used to insert a line break
//document.write("Hello World<br>"); // works
//document.write("Hello World"); // works

// Hello world is marked up as l1 header
// document.write("<h1>Hello World</h1>");

// Can markup text read from the user
//let userName = prompt("Enter your name");
//document.write("Hello <b>" + userName + "</b>");

/*
// Display a time sensitive greeting message
let timeMsg = "<h1>The current date and time is </h1>" + Date() + "<br><br>";
document.write(timeMsg);
let greeting = getTimeMsg();
document.write(greeting);

function getTimeMsg() {
  let msg;
  const time = new Date().getHours();
  if (time < 6) {
    msg = "Before 6am";
  } else if (time < 12) {
    msg = "Good morning";
  } else if (time < 18) {
    msg = "Good afternoon";
  } else {
    msg = "Good evening";
  }
  // Task: Modify the code so that a message Good night is displayed after 10pm
  return msg;
}

*/
