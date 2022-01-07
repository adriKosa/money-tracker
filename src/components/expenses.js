import './expenses.css'
import ExpenseItem from './expense-item'

function Expenses(props) {
    
    return (
        <div>  
            {props.expenses.map((expense) => <ExpenseItem date = {expense.date} title = {expense.title} amount = {expense.amount}/>)}  
        </div>
    )
}

export default Expenses