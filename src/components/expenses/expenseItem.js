import './expenseItem.css'
import ExpenseDate from './expenseDate'
import Card from '../ui/card'

function ExpenseItem(params) {
    return (
      <Card className='expense-item'>
        <ExpenseDate date = {params.date} />
        <div className='expense-item__description'>
          <h2>{params.title}</h2>
          <div className='expense-item__price'>${params.amount}</div>
        </div>
      </Card>
    )
}

export default ExpenseItem