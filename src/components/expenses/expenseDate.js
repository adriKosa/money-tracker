import './expenseDate.css'

function ExpenseDate(params){
    const month = params.date.toLocaleString('en-US', {month: 'long'})
    const day = params.date.toLocaleString('en-US', {day: '2-digit'})
    const year = params.date.getFullYear()

    return(
        <div className = 'expense-date'>
            <div className = 'expense-date__month'>{month}</div>
            <div className = 'expense-date__year'>{year}</div>
            <div className = 'expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate