import Expenses from './components/Expenses';
const expenses = [
    {
        title: 'Laptop',
        amount: 940.12,
        date: new Date(2020, 7, 14)
    }, {
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    }, {
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28)
    }, {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12)
    },
];
function App() {
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses}/>
        </div>
    );
};

export default App;
