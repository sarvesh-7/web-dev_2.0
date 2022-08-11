const btn=document.querySelector('.btn');

btn.addEventListener('click', onSubmit);

const fname=document.querySelector('#fname');
const email=document.querySelector('#email');
let userDet = JSON.parse(localStorage.getItem("User Details"));
let h4 = document.createElement('h4');
let userText = 'User name: '+userDet.userName;
let emailText = 'Email: '+userDet.email;
h4.appendChild(document.createTextNode(userText));
h4.appendChild(document.createElement('br'));
h4.appendChild(document.createTextNode(emailText));
let form = document.getElementById('my-form');
form.appendChild(h4);

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
        userDetSer = JSON.stringify(userDetails);
        localStorage.setItem('User Details', userDetSer);
}
