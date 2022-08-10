console.dir(document);
// console.log(document.title);
document.title='Item Lister2.0';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px #000';
var addItem = document.getElementById('Add-Items');
//getElementByClassName
// var items = document.getElementsByClassName('list-group-item');

// for(let i=0; i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
//     items[i].style.backgroundColor = 'grey';
// }
//getElementByTagName
var items = document.getElementsByTagName('li');

for(let i=0; i<items.length;i++){
    items[i].style.fontWeight = 'bold';
    items[i].style.backgroundColor = 'grey';
}
