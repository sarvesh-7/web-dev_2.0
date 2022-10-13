import ExpenseItem from './components/ExpenseItem'
const expenses = [
    {
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
        locationOfExpenditure: 'Mumbai'
    }, {
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
        locationOfExpenditure: 'Mumbai'
    }, {
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
        locationOfExpenditure: 'Bangalore'
    }, {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
        locationOfExpenditure: 'Pune'
    },
];
function App() {
    let expCompArr = [];
    for (let i = 0; i < expenses.length; i++) {
        expCompArr.push (
            <ExpenseItem title={
                    expenses[i].title
                }
                amount={
                    expenses[i].amount
                }
                date={
                    expenses[i].date
                }
                location={
                    expenses[i].locationOfExpenditure
            }></ExpenseItem>
        )
    }
    return (
        <div>
            <h2>Let's get started!</h2>
            {expCompArr} 
        </div>
    );
}

export default App;
