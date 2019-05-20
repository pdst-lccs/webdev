let strs = [ "Milk", "Bread", "Butter", "Crisps" ];

// Retrieve the body element - we will attach the ul element to this later
let bodyElem = document.getElementById("body-id");

// Create an element for ul
let unorderedList = document.createElement("ul");
for (let i in strs) {

  let listItem = document.createElement("li");
  //anchor.innerText = strs[i];
  listItem.textContent = strs[i];
  unorderedList.appendChild(listItem);
}

// Attach the ul element to the body
bodyElem.appendChild(unorderedList);


//Experiment!
//-	See if you can achieve the same result using the same lines of code but arranged in a slightly different order
//-	See if you can create another type of list e.g. an order list or a definition list
//-	How would you adapt the code to create a list of paragraphs?

