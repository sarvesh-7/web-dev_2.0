let form = document.getElementById('addForm');
form.addEventListener('submit', addItems);
let itemList = document.getElementById('items');
//function to add items
function addItems(e){
    e.preventDefault();
    //get input text entered
    let textVal = document.getElementById('item').value;
    //create new list item
    let li = document.createElement('li');
    li.className = 'list-group-item';
    //append text value entered as a new list item
    li.appendChild(document.createTextNode(textVal));
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
