let form = document.getElementById('exp_form');
form.addEventListener('submit', onSubmit);
let expense_List = document.getElementById("exp_list");

window.addEventListener('DOMContentLoaded', displayExpenses);

//store added expense in local storage after clicking on add expense button
function onSubmit(e){
    e.preventDefault();
    let exp_amt = document.getElementById("exp_amt").value;
    let exp_desc = document.getElementById("exp_desc").value;
    let select = document.getElementById('exp_cat');
    let exp_cat = select.options[select.selectedIndex].text;
    let exp_desc2 = exp_desc.replace(" ", "_");

    if(localStorage.getItem(exp_desc2))
    {
        deleteExpense(exp_desc2);
    }
    let expense = {
        
        amount : exp_amt,
        description : exp_desc,
        category : exp_cat
    }
    let ser_expense = JSON.stringify(expense);
    localStorage.setItem(exp_desc2, ser_expense);
    showExpenses(exp_desc2,ser_expense);
}

//show all expenses on screen
function showExpenses(key,expObj){
let expObjDes = JSON.parse(expObj);
let li = `<li id = '${key}'> ${expObjDes.amount} - ${expObjDes.description} - ${expObjDes.category}
<button onClick=deleteExpense('${key}')>Delete Expense</button>
<button onClick=editExpense('${key}')>Edit Expense</button>
</li>`;
expense_List.innerHTML = expense_List.innerHTML + li;

}

//display all expnses on screen when page refreshes or loaded for the first time
function displayExpenses(e){
    let keys = Object.keys(localStorage);
    for(let i=0; i<keys.length;i++){
        let expDet = localStorage.getItem(keys[i]);
        showExpenses(keys[i],expDet);
    }
}

//delete expense from screen and local storage
function deleteExpense(key){
//remove from screen    
let expenseToBeDeleted = document.getElementById(key);
expense_List.removeChild(expenseToBeDeleted);

//remove from localstorage
localStorage.removeItem(key);
}

function editExpense(key){
    let expObjToBeEdited = JSON.parse(localStorage.getItem(key));
    let exp_amt = document.getElementById("exp_amt");
    let exp_desc = document.getElementById("exp_desc");
    let select = document.getElementById('exp_cat');
    exp_amt.value = expObjToBeEdited.amount;
    exp_desc.value = expObjToBeEdited.description;
  for(let i=0;i<select.options.length;i++){
    if(select.options[i].text===expObjToBeEdited.category){
        select.options[i].selected = true;
    }
  }
// remove from localStorage and screen
deleteExpense(key);  
}