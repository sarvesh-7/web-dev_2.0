const btn=document.querySelector('.btn');

btn.addEventListener('click', onSubmit);

const fname=document.querySelector('#fname');
const email=document.querySelector('#email');

let form = document.getElementById('my-form');

//Iterate over each key of localStorage object
Object.keys(localStorage).forEach((key) => {
    userDet = localStorage.getItem(key); //get user details in string format from localstorage
    detailsOfPeople = JSON.parse(userDet);//convert those details into object

    //manipulate DOM to insert user details below Form
    let h4 = document.createElement('h4');
    let userText = 'User name: '+detailsOfPeople.userName;
    let emailText = 'Email: '+detailsOfPeople.email;
    h4.appendChild(document.createTextNode(userText));
    h4.appendChild(document.createElement('br'));
    h4.appendChild(document.createTextNode(emailText));
    form.appendChild(h4); 
    });

function onSubmit(e){

    e.preventDefault();

    if(fname.value===''||email.value===''){
        alert('Please enter name and email');
    }

    else{
        alert('name and email has been submitted');
        }
        let userDetails = {
            userName : fname.value,
            email : email.value
        } 
        let userDetSer = JSON.stringify(userDetails);
        localStorage.setItem(userDetails.email, userDetSer);
}
