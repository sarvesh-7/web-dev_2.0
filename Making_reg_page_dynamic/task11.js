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
    //post user booking details to the cloud
    axios.post("https://crudcrud.com/api/6383f58524c948d59f6591e87bcdcb30/Appointment_data",userDetObj)
    .then(response=>showUsersOnScreen(response.data))
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align: center;">Something went wrong.</h4>`;
    });
}

//display user details when page is refreshed
window.addEventListener('DOMContentLoaded', displayUsers);

let listOfUsers = document.getElementById('listOfUsers');

function displayUsers(e){
    //fetch booking details of all users using get request to crudcrud
    axios.get("https://crudcrud.com/api/6383f58524c948d59f6591e87bcdcb30/Appointment_data")
    .then(res=>{
        for(let i=0;i<res.data.length;i++){
            console.log(res.data[i]);
            showUsersOnScreen(res.data[i]);
        }
    })
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align: center;">Something went wrong.</h4>`;
    })  
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