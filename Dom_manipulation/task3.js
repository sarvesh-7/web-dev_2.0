console.dir(document);
// console.log(document.title);
document.title='Item Lister2.0';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
document.body.style.background='yellow';
var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px #000';
var addItem = document.getElementById('Add-Items');
addItem.style.fontStyle = 'bold';
addItem.style.color = 'green';