let bodyElem = document.querySelector("#body-id");

// create a new h1 element
let h1Elem = document.createElement("h1");
// set the h1 element's text content
h1Elem.textContent = "This is a level 1 heading!";
// insert the new h1 element as a child of body
bodyElem.appendChild(h1Elem);
