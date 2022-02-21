import Expenses from './components/expenses/expenses';
import NewExpense from './components/new-expense/newExpense';
import { useState } from 'react';

function App() {

  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Laptop',
      amount: 1150,
      date: new Date(2022, 0, 12),
    },
    {
      id: 'e6',
      title: 'Diesel',
      amount: 45,
      date: new Date(2022, 2, 12),
    }
  ]);

  function addNewExpense(newExpense) {
    setExpenses([
      ...expenses,
      newExpense
    ])
  }

  return (
    <div>
      <h1>Expense tracker</h1>
      <NewExpense addNewExpense = {addNewExpense} />
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
