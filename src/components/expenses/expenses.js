import './expenses.css'
import ExpensesList from './expensesList';
import Card from '../ui/card'
import ExpensesFilter from '../expenses-filter/expensesFilter'
import React, { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState('2022');

  const filteredExpenses = props.expenses.filter(function (expense) {
    return expense.date.getFullYear().toString() === year;
  });

  function onYearSelected(year) {
    setYear(year);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter year={year} onYearSelect={onYearSelected} />
        <ExpensesList expensItems={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses