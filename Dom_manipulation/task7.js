let itemList = document.querySelector('#items');
//to get the parent element of the selected element
console.log(itemList.parentElement);
//to change baackground color of parent to grey
itemList.parentElement.style.backgroundColor = '#f4f4f4';

//childNode
// console.log(itemList.childNodes);

//children similar to childNode except that it does not consider line breaks as child nodes 
console.log(itemList.children);
itemList.children[1].style.backgroundColor='green';

//firstChild - again it will also considee line breaks as child
console.log(itemList.firstChild);

//firstElementChild - will not consider line breaks. better than firstChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor = 'yellow';

//lastChild - again it will also considee line breaks as child
console.log(itemList.lastChild);


//lastElementChild - will not consider line breaks. better than lastChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);
itemList.nextElementSibling.style.fontWeight = 'bold';

//previousSibling
console.log(itemList.previousSibling);

//previousSiblingElement
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'red';

//create a div
let newDiv = document.createElement('div');

//set id for new div
newDiv.id = 'id1';

//set class for new div
newDiv.className = 'c1';

//setAttribute
newDiv.setAttribute('title', 'hello Div') //attribute name, value

//create text for div
let newDivText = document.createTextNode('Hello World');

//Add this text inside div
newDiv.appendChild(newDivText);

//Now insert this newly created div tag in the DOM
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1); // insert newDiv tag inside container element and before h1 element - question 1
newDiv.style.fontSize = '20px';

console.log(newDiv);

//set Hello world text before list item 1 - question 2
let items = document.querySelector('#items');
let item1 = items.firstElementChild;
//create textnode
let newText2 = document.createTextNode('Hello World');
items.insertBefore(newText2, item1);



