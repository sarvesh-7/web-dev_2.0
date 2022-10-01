//save user details on local storage
let myForm = document.getElementById('my-form');
myForm.addEventListener('submit', saveOnLocalStorage);

function saveOnLocalStorage(e){
    e.preventDefault();
    let name = e.target.fname.value;
    let email = e.target.email.value;
    let userDetObj = {
        userName : name,
        email : email
    }
    userDetObjstr = JSON.stringify(userDetObj);
    localStorage.setItem(userDetObj.email, userDetObjstr);
    showUsersOnScreen(userDetObj);
}

//display user details when page is refreshed
window.addEventListener('DOMContentLoaded', displayUsers);

let listOfUsers = document.getElementById('listOfUsers');

function displayUsers(e){
    const localStorageObj = localStorage;
    const localStorageKeys = Object.keys(localStorage);
    for(let i=0;i<localStorageKeys.length;i++){
        let user = localStorageObj.getItem(localStorageKeys[i]);
        let userObj = JSON.parse(user);
        showUsersOnScreen(userObj);
    }
}
//function to display user details on screen
function showUsersOnScreen(userObj){
    let childNode = `<li id = ${userObj.email}>User name: ${userObj.userName}, Email: ${userObj.email}
    <button onClick=deleteUser('${userObj.email}')>Delete</button>
    <button onClick=editUser('${userObj.email}')>Edit</button>
    </li>`;
    listOfUsers.innerHTML = listOfUsers.innerHTML + childNode;
}

//function to remove user from screen
function deleteUser(email){
    localStorage.removeItem(email);
    let userToBeDeleted = document.getElementById(email);
    listOfUsers.removeChild(userToBeDeleted);
}

//function to edit user Details

function editUser(email){
    let userObj = JSON.parse(localStorage.getItem(email));
    localStorage.removeItem(email);
    deleteUser(email); 
    let fname = document.getElementById('fname');
    fname.value = userObj.userName;
    let emailID = document.getElementById('email');
    emailID.value = userObj.email;

}