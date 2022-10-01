let form = document.getElementById('exp_form');

form.addEventListener('submit', onSubmit);
let uniqId = 0; //unique id for each expense to be used to identify if post or put request is needed
let expense_List = document.getElementById("exp_list");

//div area for status message

let status = document.createElement('div');
status.style.textAlign = "center";
document.body.appendChild(status);


window.addEventListener('DOMContentLoaded', displayExpenses);

//add expense details on cloud using post/put request
function onSubmit(e){
    e.preventDefault();
    status.textContent = "";
    let exp_amt = e.target.amount.value;
    let exp_desc = e.target.desc.value;
    let select = document.getElementById('exp_cat');
    let exp_cat = select.options[select.selectedIndex].text;

    let expense = {   
        amount : exp_amt,
        description : exp_desc,
        category : exp_cat
    }

    if(uniqId === 0) {
        //if unique id is blank it means new expense object needs to be added using post request
        axios.post(`https://crudcrud.com/api/bb80ce7168604745a3b1e54ad34296ad/Expense_details`, expense)
        .then(res=>{
            showExpenses(res.data);
        })
        .catch(err=>{
            status.textContent = 'Something went wrong!';
        })
    }//if uniq_id is supplied then update existing expense having this unique id using put request
    else{
        axios.put(`https://crudcrud.com/api/bb80ce7168604745a3b1e54ad34296ad/Expense_details/${uniqId}`,expense)
        .then(res=>
            {
                axios.get(`https://crudcrud.com/api/bb80ce7168604745a3b1e54ad34296ad/Expense_details/${uniqId}`)
                .then(response=>showExpenses(response.data))
                .catch(err=>{
                    status.textContent = "Something went wrong!"; 
                });
                uniqId = 0; //clear unique id for next expense update/insert
        })
        .catch(err=>{
            status.textContent = "Something went wrong!"; 
            uniqId = 0; //clear unique id for next expense update/insert  
        })
    }
}

//show all expenses on screen
function showExpenses(expObj){
    status.textContent = ""; 
    let li = `<li id = '${expObj._id}'> ${expObj.amount} - ${expObj.description} - ${expObj.category}
    <button onClick=deleteExpense('${expObj._id}')>Delete Expense</button>
    <button onClick=editExpense('${expObj._id}')>Edit Expense</button>
    </li>`;
    expense_List.innerHTML = expense_List.innerHTML + li;

}

//display all expnses on screen when page refreshes or loaded for the first time
function displayExpenses(e){
    //fetch all expense details from cloud
    axios.get(`https://crudcrud.com/api/bb80ce7168604745a3b1e54ad34296ad/Expense_details`)
    .then(res=>{
        for(let i=0;i<res.data.length;i++){
            showExpenses(res.data[i]);
        }
    })
    .catch(err=>{
        document.body.innerHTML = document.body.innerHTML + `<h4 style="text-align:center">
        Something went wrong</h4>`; 
    })
}

//delete expense from screen and local storage
function deleteExpense(id){
    status.textContent = ""; 
//remove from screen    
let expenseToBeDeleted = document.getElementById(id);
expense_List.removeChild(expenseToBeDeleted);

//remove from cloud
axios.delete(`https://crudcrud.com/api/bb80ce7168604745a3b1e54ad34296ad/Expense_details/${id}`)
.then(res=>{
    console.log(`Expense details removed successfully!`);
})
.catch(err=>{
    status.textContent = "Something went wrong!"; 
})
}
//edit expense details
function editExpense(id){
    status.textContent = ""; 
    //get the expense object to be edited from cloud
    axios.get(`https://crudcrud.com/api/bb80ce7168604745a3b1e54ad34296ad/Expense_details/${id}`)
    .then(res=>{
        
    //get expense object list item to be edited and remove it from screen
    let expObjToBeEdited = document.getElementById(id);
    expense_List.removeChild(expObjToBeEdited);

    let exp_amt = document.getElementById("exp_amt");
    let exp_desc = document.getElementById("exp_desc");
    let select = document.getElementById('exp_cat');

        exp_amt.value = res.data.amount;
        exp_desc.value = res.data.description;

        for(let i=0;i<select.options.length;i++){
            if(select.options[i].text===res.data.category){
                select.options[i].selected = true;
                break;
            }
          }
          uniqId = id; //set the global unique id for updating the details after submitting the form
    })
    .catch(err=>{
        status.textContent = "Something went wrong!";  
    });
}
