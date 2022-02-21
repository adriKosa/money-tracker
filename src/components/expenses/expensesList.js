import './expensesList.css';
import ExpenseItem from './expenseItem';

function ExpensesList(params) {
    if (params.expensItems.length === 0){
        return <h2 className='expenses-list__fallback'>No expenses</h2>
    }
    return (
        <ul className='expenses-list'>
            {params.expensItems.map((expense) => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)}
        </ul>
    );
}

export default ExpensesList