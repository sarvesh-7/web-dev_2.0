const btn=document.querySelector('.btn');

btn.addEventListener('click', onSubmit);

const fname=document.querySelector('#fname');
const email=document.querySelector('#email');

function onSubmit(e){

    e.preventDefault();

    if(fname.value===''||email.value===''){
        alert('Please enter name and email');
    }

    else{
        alert('name and email has been submitted');
        }
        localStorage.setItem('User name', fname.value);
        localStorage.setItem('Email', email.value);
}
