import './expenses.css'
import ExpensesList from './expensesList';
import Card from '../ui/card'
import ExpensesFilter from '../expenses-filter/expensesFilter'
import ExpensesChart from './expensesChart';
import React, { useState } from "react";

function Expenses(params) {
  const [year, setYear] = useState('2022');

  const filteredExpenses = params.expenses.filter(function (expense) {
    return expense.date.getFullYear().toString() === year;
  });

  function onYearSelected(year) {
    setYear(year);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter year={year} onYearSelect={onYearSelected} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expensItems={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses