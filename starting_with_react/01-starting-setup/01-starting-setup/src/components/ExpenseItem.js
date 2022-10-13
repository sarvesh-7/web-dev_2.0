import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'
import ExpenseDetails from './ExpenseDetails.js'

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails title={props.title} amount={props.amount}/>
        </div>
    );
}

export default ExpenseItem;