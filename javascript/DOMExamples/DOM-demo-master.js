console.log("Welcome to DOM demos!");


//document.write("Hello World"); // works


// can include html 
// For example <br> is used to insert a line break
//document.write("Hello World<br>"); // works
//document.write("Hello World"); // works

// Hello world is marked up as l1 header
// document.write("<h1>Hello World</h1>");


//let userName = prompt("Enter your name");
//document.write("Hello <b>" + userName + "</b>");

/*
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

/*
let bodyElem = document.getElementById("body-id");

let timeMsg = "The current date and time is" + Date() + "<br><br>";
document.write(timeMsg);
let newPara = document.createElement("p");
// textContent vs. innerhtml
newPara.textContent = getTimeMsg();
bodyElem.appendChild(newPara);

*/

/*
// Create and add an element
let bodyElem = document.getElementById("body-id");

let h1Elem = document.createElement("h1");
h1Elem.textContent = "This is a level 1 heading!";
bodyElem.appendChild(h1Elem);
*/

/*
// Create and add an element
let bodyElem = document.querySelector("#body-id");

let h1Elem = document.createElement("h1");
h1Elem.textContent = "This is a level 1 heading!";
bodyElem.appendChild(h1Elem);
*/

/*
// Creating a text node
let bodyElem = document.getElementById("body-id");

let h1Elem = document.createElement("h1");
var textNode = document.createTextNode("This is a level 1 heading!");
h1Elem.appendChild(textNode);
bodyElem.appendChild(h1Elem);
*/

/*
// DOM elemets are created in sequence
let bodyElem = document.querySelector(".body-class");

let h1Elem = document.createElement("h1");
h1Elem.textContent = "This is a level 1 heading!";
bodyElem.appendChild(h1Elem);

let h2Elem = document.createElement("h2");
h2Elem.textContent = "This is a level 2 heading!";
bodyElem.appendChild(h2Elem);

let h4Elem = document.createElement("h4");
h4Elem.textContent = "This is a level 4 heading!";
bodyElem.appendChild(h4Elem);
*/

/*
// Node Insertion
let bodyElem = document.getElementById("body-id");

let h1Elem = document.createElement("h1");
h1Elem.textContent = "This is a level 1 heading!";
bodyElem.appendChild(h1Elem);

let h2Elem = document.createElement("h2");
h2Elem.textContent = "This is a level 2 heading!";
bodyElem.appendChild(h2Elem);

let h4Elem = document.createElement("h4");
h4Elem.textContent = "This is a level 4 heading!";
bodyElem.appendChild(h4Elem);


let h3Elem = document.createElement("h3");
h3Elem.textContent = "This is a level 3 heading!";

h2Elem.insertAdjacentElement('afterend', h3Elem);
// OR .. replace the previous line with this ...
//Element.prototype.appendAfter = function (element) {
//    element.parentNode.insertBefore(this, element.nextSibling);
//}, false;

//h3Elem.appendAfter(h2Elem);

*/


/*

// DOM Navigation
let bodyElem = document.getElementById("body-id");
console.dir(bodyElem);
let h1Elem = document.createElement("h1");
h1Elem.textContent = "This is a level 1 heading!";
bodyElem.appendChild(h1Elem);

let h2Elem = document.createElement("h2");
h2Elem.textContent = "This is a level 2 heading!";
bodyElem.appendChild(h2Elem);

let h4Elem = document.createElement("h4");
h4Elem.textContent = "This is a level 4 heading!";
bodyElem.appendChild(h4Elem);

let h3Elem = document.createElement("h3");
h3Elem.textContent = "This is a level 3 heading!";


// Get the 1st child of the body
let firstChild = bodyElem.firstElementChild;
console.log(firstChild.value);
let sibling = firstChild.nextElementSibling;
sibling = sibling.nextElementSibling;
sibling.insertAdjacentElement('afterend', h3Elem); // JE: not working

// valid positions are 'beforebegin', 'afterbegin', 'beforeend' and 'afterend'
*/



/*
let bodyElem = document.getElementById("body-id");

let strs = [ "Milk", "Bread", "Butter", "Crisps" ];

let unorderedList = document.createElement("ul");
for (let i in strs) {

  let listItem = document.createElement("li");
  //anchor.innerText = strs[i];
  listItem.textContent = strs[i];
  unorderedList.appendChild(listItem);
}

bodyElem.appendChild(unorderedList);
*/