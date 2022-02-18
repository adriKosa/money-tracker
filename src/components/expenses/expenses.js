import './expenses.css'
import ExpenseItem from './expenseItem'
import Card from '../ui/card'
import ExpensesFilter from '../expenses-filter/expensesFilter'
import React, { useState } from "react";

function Expenses(props) {
    const [year, setYear] = useState('2022');

    function onYearSelected(year) {
        setYear(year);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter year={year} onYearSelect={onYearSelected} />    
                {props.expenses.map((expense) => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)}
            </Card>
        </div>
    )
}

export default Expenses