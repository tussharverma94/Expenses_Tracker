import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = (props) => {
    
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }
    return (
        <ul className="expense-List">
            {props.items.map(
                (expenses) => <ExpenseItem
                key={expenses.id}
                title={expenses.title} 
                amount={expenses.amount} 
                date={expenses.date}/>)}
        </ul>
    )
}

export default ExpensesList