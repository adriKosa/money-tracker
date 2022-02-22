import ExpenseForm from './expenseForm';
import './newExpense.css';
import { useState } from 'react';

function NewExpense(params) {
    const [displayForm, setDisplayForm] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        params.addNewExpense(enteredExpenseData);
    }

    return <div className='new-expense'>
        {!displayForm && <button onClick={() => setDisplayForm(true)}>Add new expense</button>}
        {displayForm && <ExpenseForm hideForm={() => setDisplayForm(false)} onSubmitExpenseData={saveExpenseDataHandler}/>}
    </div>
}

export default NewExpense;