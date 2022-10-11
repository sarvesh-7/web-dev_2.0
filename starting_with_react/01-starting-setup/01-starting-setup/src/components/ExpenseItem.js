import './ExpenseItem.css'

function ExpenseItem() {
    const exp_date = new Date(2022, 3, 18).toISOString();
    const exp_title = "Car Insurance";
    const exp_price = 294.16;
    const locationOfExpenditure = "Mumbai";
    return (
        <div className="expense-item">
            <div>{exp_date}</div>
            <div className="expense-item__description">
                <h2>{exp_title}
                    {" "}
                    Location : {locationOfExpenditure}</h2>
                <div className="expense-item__price">${exp_price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;