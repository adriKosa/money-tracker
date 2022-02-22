import './expenseForm.css';
import React, { useState } from "react";

function ExpenseForm(params) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleChageHandler(event){
        setEnteredTitle(event.target.value);
    }

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    }

    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }

    function submitHandler(event) { 
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        params.onSubmitExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__controls-item'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChageHandler} />
            </div>
            <div className='new-expense__controls-item'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__controls-item'>
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={params.hideForm}>Cancel</button>
            <button type='submit'>Add expense</button>
        </div>
    </form>
}

export default ExpenseForm;