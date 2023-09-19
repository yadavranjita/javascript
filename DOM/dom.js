const titleElement = document.getElementById('title');
console.log(titleElement);
console.log(titleElement.textContent);

const contentElements = document.getElementsByClassName('content');
console.log(contentElements);
console.log(contentElements[0].textContent);

const listItemElements = document.getElementsByTagName('li');
console.log(listItemElements);
console.log(listItemElements.length);

titleElement.textContent = 'Hello, OpenAI';
console.log(titleElement);
console.log(titleElement.textContent);

const paragraphElement = document.querySelector('.content');
paragraphElement.innerHTML = 'This is a <strong>modified</strong> paragraph.';
console.log(paragraphElement);
console.log(paragraphElement.textContent);

var inputElement = document.getElementById("myInput");
console.log(inputElement.type);
console.log(inputElement.value);

inputElement.value = "New value";
console.log(inputElement.value);

var inputElement = document.getElementById("myInput");
console.log(inputElement.getAttribute("value"));

inputElement.setAttribute("value", "New value");
console.log(inputElement.getAttribute("value"));

var element = document.getElementById("myInput");
element.removeAttribute("value");
console.log(element);

if(element.hasAttribute("value")){
    console.log(element.getAttribute("value"));
}
else{
    console.log("Attribute does not exist.");
}

//creating elements
const newElement = document.createElement('div');
newElement.textContent = 'Newly created element';
console.log(newElement);
console.log(newElement.textContent);

//appending elements
const elements = document.getElementById('newelement');
const newelement = document.createElement('div');
newelement.textContent = 'Hello World';
elements.appendChild(newelement);

//next sibling
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;
console.log(nextSibling);
//to get all next sibling
while(nextSibling){
    console.log(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
}
console.log(nextSibling);

//next sibling//not done
let currents = document.querySelector('.current');
let prevSibling = current.previousElementSibling;
console.log(prevSibling);

