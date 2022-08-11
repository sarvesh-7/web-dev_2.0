let form = document.getElementById('addForm');
form.addEventListener('submit', addItems);
let itemList = document.getElementById('items');
//function to add items
function addItems(e){
    e.preventDefault();
    //get input text entered for item
    let textVal = document.getElementById('item').value;

    //get description of the item
    let descVal = document.getElementById('desc').value;

    //create new list item
    let li = document.createElement('li');
    li.className = 'list-group-item';
    //append text value entered as a new list item
    li.appendChild(document.createTextNode(textVal));

    //append next node as next line
    li.appendChild(document.createElement('br'));

    //append description of item
    li.appendChild(document.createTextNode(descVal));

    //append li tag to ul tag
    itemList.appendChild(li);
    //add del button to newly created li tag
    let delBtn = document.createElement('button');
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);

    //add edit button to newly created li tag
    let editBtn = document.createElement('button');
    editBtn.className = 'float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);

}
//remove list item upon clicking delete button next to it
itemList.addEventListener('click', removeItem);

//event handler function to remove item
function removeItem(e){
    //check if we clicked on delete button then only remove item
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
           let li = e.target.parentElement; //capture corresponding li of the button which we clicked
           itemList.removeChild(li); // remove that li from parent Ul
        }
    }
}
//filter item from itemlist

//add event listner to filter input type
let filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItem);

//filter items
function filterItem(e){
    let filterText = e.target.value.toLowerCase();
    console.log(filterText);
    //get all list items 
    let items = itemList.getElementsByClassName('list-group-item');
    Array.from(items).forEach(function(item){
        let itemText = item.firstChild.textContent;
        let itemDesc = item.childNodes[2].textContent;
        console.log(itemDesc);

        if(itemText.toLowerCase().indexOf(filterText)!= -1 || itemDesc.toLowerCase().indexOf(filterText) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    })

}