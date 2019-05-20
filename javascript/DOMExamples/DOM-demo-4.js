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

// Example 4 - insert h3 between h2 and h4
let h3Elem = document.createElement("h3");
h3Elem.textContent = "This is a level 3 heading!";

h2Elem.insertAdjacentElement('afterend', h3Elem);

// Experiment!
// valid positions are 'beforebegin', 'afterbegin', 'beforeend' and 'afterend'