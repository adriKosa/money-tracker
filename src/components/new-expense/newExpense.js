import ExpenseForm from './expenseForm';
import './newExpense.css';

function NewExpense(params) {

    function saveExpenseDataHandler(enteredExpenseData) {
        params.addNewExpense(enteredExpenseData);
    }

    return <div className='new-expense'>
        <ExpenseForm onSubmitExpenseData={saveExpenseDataHandler}/>
    </div>
}

export default NewExpense;