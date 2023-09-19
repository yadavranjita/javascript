//By ID: Use getElementById to retrieve an element with a specific ID.
const titleElement = document.getElementById('title');
console.log(titleElement.textContent);

//By Class Name: Use getElementsByClassName to retrieve elements with a specific class name (returns a collection).
const contentElements = document.getElementsByClassName('content');
console.log(contentElements[0].textContent);

//By Tag Name: Use getElementsByTagName to retrieve elements with a specific HTML tag name (returns a collection).
const listItemElements = document.getElementsByTagName('li');
console.log(listItemElements.length);

//Changing Text Content: Use the textContent property to update the text content of an element.
titleElement.textContent = 'Hello, OpenAI!';
console.log(titleElement);

//Changing HTML Content: Use the innerHTML property to update the HTML content of an element.
const paragraphElement = document.querySelector('.content');
paragraphElement.innerHTML = 'This is a <strong>modified</strong> paragraph';
console.log(paragraphElement);

// Accessing attributes using DOM properties
var inputElement = document.getElementById("myInput");
console.log(inputElement.type); 
console.log(inputElement.value);   

// Modifying attributes using DOM properties
inputElement.value = "New value";
console.log(inputElement.value);   

// Using getAttribute() methods
var inputElement = document.getElementById("myInput");
console.log(inputElement.getAttribute("value"));   

// setAttribute() methods
inputElement.setAttribute("value", "New value");
console.log(inputElement.getAttribute("value"));  

//Removing an Attribute:
var element = document.getElementById("myInput");
element.removeAttribute("value");
console.log(element);

// Checking if an Attribute Exists:
var element = document.getElementById("myInput");
if (element.hasAttribute("value")) {
    console.log("Attribute exists.");
   console.log("value");
} else {
    console.log("Attribute does not exist.");
}

//This will effectively disable the attribute without removing it completely.
var element = document.getElementById("myInput");
element.setAttribute("value", null);
console.log(element);

//Creating Elements: Use the createElement method to create a new element.
const newElement = document.createElement('div');
newElement.textContent = 'Newly created element';
console.log(newElement);

//Appending Elements: Use the appendChild method to add the newly created element to an existing element.
const bodyElement = document.body;
bodyElement.appendChild(newElement);
console.log(bodyElement);

//The following example uses the nextElementSibling property to get the next sibling of the list item that has the current class:
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;
console.log("nextSibling");
console.log(nextSibling);


//To get all the next siblings of an element, you can use the following code:
let currents = document.querySelector('.current');
let nextSiblings = currents.nextElementSibling;
console.log("nextSiblings");
while(nextSiblings){
    console.log(nextSiblings);
    nextSiblings = nextSiblings.nextElementSibling;
}

// //Get the previous siblings
let current1 = document.querySelector('.current');
let prevSibling = current1.previousElementSibling;
console.log("prevSibling");
console.log(prevSibling);

// //And the following example selects all the previous siblings of the list item that has the current class:
let current2 = document.querySelector('.current');
let prevSiblings = current2.previousElementSibling;
console.log("prevSiblings");
while(prevSiblings){
    console.log(prevSiblings);
    prevSiblings = prevSiblings.previousElementSibling;//wrong in pdf
}

//Get all siblings of an element
let getSiblings = function(e){
    let siblings = [];
    if(!e.parentNode){
        return siblings;
    }
    let sibling = e.parentNode.firstChild;
    while(sibling){
        if(sibling.nodeType === 1 && sibling !== e){
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
let siblings = getSiblings(document.querySelector('.current'));
siblingText = siblings.map(e => e.innerHTML);
console.log(" all siblingText");
console.log(siblingText);





