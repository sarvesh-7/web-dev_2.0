//save user details on local storage
let myForm = document.getElementById('my-form');
myForm.addEventListener('submit', saveOnCloud);

//declare booking object id
let bo_id = 0;

//save user details on cloud
function saveOnCloud(e){
    e.preventDefault();
    let name = e.target.fname.value;
    let email = e.target.email.value;
    let userDetObj = {
        userName : name,
        email : email
    }
    if(bo_id===0){
    //post user booking details to the cloud in case bo_id is 0
    axios.post("https://crudcrud.com/api/8db0bcef421b4b70bd7a885444a71185/Appointment_data",userDetObj)
    .then(response=>showUsersOnScreen(response.data))
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align: center;">Something went wrong.</h4>`;
    });

    }
    else{
        // update user booking details to the cloud if bo_id is not initial
    axios.put(`https://crudcrud.com/api/8db0bcef421b4b70bd7a885444a71185/Appointment_data/${bo_id}`,userDetObj)
    .then(response=>{
        axios.get(`https://crudcrud.com/api/8db0bcef421b4b70bd7a885444a71185/Appointment_data/${bo_id}`)
        .then(response=>showUsersOnScreen(response.data))
        .catch(err=>{
            document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align: center;">Something went wrong.</h4>`;
        }) 
        bo_id = 0; //clear bo_id to be checked next time if user has edited the data or inserted new data  
    })
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align: center;">Something went wrong.</h4>`;
        bo_id = 0; //clear bo_id to be checked next time if user has edited the data or inserted new data
    });
    }
    
}

//display user details when page is refreshed
window.addEventListener('DOMContentLoaded', displayUsers);

let listOfUsers = document.getElementById('listOfUsers');

function displayUsers(e){
    //fetch booking details of all users using get request to crudcrud
    axios.get("https://crudcrud.com/api/8db0bcef421b4b70bd7a885444a71185/Appointment_data")
    .then(res=>{
        for(let i=0;i<res.data.length;i++){
            showUsersOnScreen(res.data[i]);
        }
    })
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align: center;">Something went wrong.</h4>`;
    })  
}

//function to display user details on screen
function showUsersOnScreen(userObj){
    let childNode = `<li id = ${userObj._id}>User name: ${userObj.userName}, Email: ${userObj.email}
    <button onClick=deleteUser('${userObj._id}')>Delete</button>
    <button onClick=editUser('${userObj._id}')>Edit</button>
    </li>`;
    listOfUsers.innerHTML = listOfUsers.innerHTML + childNode;
}

//function to remove user from screen and cloud
function deleteUser(id){
    let userToBeDeleted = document.getElementById(id);
    listOfUsers.removeChild(userToBeDeleted);
    //delete from cloud
    axios.delete(`https://crudcrud.com/api/8db0bcef421b4b70bd7a885444a71185/Appointment_data/${id}`)
    .then(res=>{
        document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align: center;">Booking details removed successfully from server</h4>`;
    })
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align: center;">Something went wrong.</h4>`;
    })
}

//function to edit user Details

function editUser(id){

    //fetch booking details of all users using get request to crudcrud
    axios.get(`https://crudcrud.com/api/8db0bcef421b4b70bd7a885444a71185/Appointment_data/${id}`)
    .then(res=>{
        let userToBeDeleted = document.getElementById(id);
        listOfUsers.removeChild(userToBeDeleted); 
        let fname = document.getElementById('fname');
        fname.value = res.data.userName;
        let emailID = document.getElementById('email');
        emailID.value = res.data.email;
        bo_id = id; //update global variable booking id to identify if user is creating new object or editing existing object


    })
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align: center;">Something went wrong.</h4>`;
    }) ;
    
}