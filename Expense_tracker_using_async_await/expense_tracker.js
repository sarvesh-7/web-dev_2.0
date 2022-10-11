let form = document.getElementById('exp_form');
let uniqId = 0; //unique id for each expense to be used to identify if post or put request is needed
let expense_List = document.getElementById("exp_list");
let baseURL = 'https://crudcrud.com/api/c990b137399e47298a85ae60beb56fb4/Expense_details'; 
let status = document.createElement('div'); //div area for status message

status.style.textAlign = "center";
status.style.fontWeight = "bold";
document.body.appendChild(status);

//add event handler for submit button
form.addEventListener('submit', onSubmit);

//display expense details when page refreshed or loaded for the first time
window.addEventListener('DOMContentLoaded', displayExpenses);
    
    //add expense details on cloud using post/put request when clicked on submit button
    async function onSubmit(e){
        e.preventDefault();
        status.textContent = "";
        let exp_amt = e.target.amount.value;
        let exp_desc = e.target.desc.value;
        let select = document.getElementById('exp_cat');
        let exp_cat = select.options[select.selectedIndex].text;
    
        //create expense object 
        let expense = {   
            amount : exp_amt,
            description : exp_desc,
            category : exp_cat
        }
    
        if(uniqId === 0) {
            //if unique id is blank it means new expense object needs to be added using post request
            try{
                let res = await axios.post(baseURL, expense)
                showExpenses(res.data); //show expense details on screen
            }
            catch{
                status.textContent = 'Something went wrong!';
            }
        }//if uniq_id is supplied then update existing expense having this unique id using put request
        else{
            try{
                await axios.put(`${baseURL}/${uniqId}`,expense);
                let res = await axios.get(`${baseURL}/${uniqId}`);
                showExpenses(res.data); //show expense details on screen
            } 
            catch{
                status.textContent = "Something went wrong!"; 
            }
            uniqId = 0; //clear unique id for next expense post request  
        }
    }
    
    //show all expenses on screen
    function showExpenses(expObj){
        status.textContent = ""; 
        let li = `<li id = '${expObj._id}'>
        <span>${expObj.amount} - ${expObj.description} - ${expObj.category}</span>
        <button class = "b1" onClick=deleteExpense('${expObj._id}')>Delete Expense</button>
        <button class = "b1" onClick=editExpense('${expObj._id}')>Edit Expense</button>
        </li>`;
        expense_List.innerHTML = expense_List.innerHTML + li;
    }
    
    //edit expense details
    function editExpense(id){
        //get expense object list item to be edited and remove it from screen
        let expObjToBeEdited = document.getElementById(id);
        let expDetails = expObjToBeEdited.firstElementChild.textContent;
        let expArr = expDetails.split(' - ');
        expense_List.removeChild(expObjToBeEdited);

        let exp_amt = document.getElementById("exp_amt");
        let exp_desc = document.getElementById("exp_desc");
        let select = document.getElementById('exp_cat');
            
        //fill expense details in the input field for editing
        exp_amt.value = expArr[0];
        exp_desc.value = expArr[1];
    
        for(let i=0;i<select.options.length;i++){
            if(select.options[i].text===expArr[2]){
                select.options[i].selected = true;
                break;
            }
            }
        uniqId = id; //set the global unique id for updating the details after submitting the form
    }
    
    //display all expnses on screen when page refreshes or loaded for the first time
    async function displayExpenses(e){
        //fetch all expense details from cloud
        try
        {
            let res = await axios.get(baseURL);
            for(let i=0;i<res.data.length;i++){
                showExpenses(res.data[i]);
            }
        }
        catch{
            status.textContent = "Something went wrong!";
        }
    }
    
    //delete expense from screen and cloud storage
    let deleteExpense= async(id)=>{
        status.textContent = ""; 
    
    //remove from cloud
    try{
        await axios.delete(`${baseURL}/${id}`)
        console.log(`Expense details removed successfully from cloud!`);
        //remove from screen    
        let expenseToBeDeleted = document.getElementById(id);
        expense_List.removeChild(expenseToBeDeleted);
    }  
    catch
    {
        status.textContent = "Something went wrong!"; 
    }
}
    
