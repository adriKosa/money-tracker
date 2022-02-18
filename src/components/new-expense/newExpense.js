import ExpenseForm from './expenseForm';
import './newExpense.css';

function NewExpense() {
    var expenseData;

    function saveExpenseDataHandler(enteredExpenseData) {
        expenseData = {
            ...enteredExpenseData
        };
        console.log(expenseData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSubmitExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;