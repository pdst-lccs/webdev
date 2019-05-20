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


// Challenge!
// Modify the above code so that the text for h2 and h4 are represented on text nodes 
// (rather than as a textContent property).
// The code shown below shows how to creaate a text node 
/*
let bodyElem = document.getElementById("body-id");

let h1Elem = document.createElement("h1");
var textNode = document.createTextNode("This is a level 1 heading!");
h1Elem.appendChild(textNode);
bodyElem.appendChild(h1Elem);
*/