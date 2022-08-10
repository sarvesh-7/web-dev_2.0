console.dir(document);
// console.log(document.title);
document.title='Item Lister2.0';
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
var headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px #000';
var addItem = document.getElementById('Add-Items');

//make the second item background color as green
var items = document.getElementsByClassName('list-group-item');
// items[1].style.backgroundColor = 'green';
//make the 3rd item invisible
// items[2].style.display = 'none';

////make the second item font color as green using querySelectorAll
var items2 = document.querySelectorAll('.list-group-item');
// items2[1].style.color = 'green';

//make all odd item's background color green
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green'; 
}
