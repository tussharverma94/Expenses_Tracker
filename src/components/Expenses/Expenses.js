import React, {useState} from "react"
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

function Expenses(props){
    const [FilteredYear, setFilterYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    const filteredExpenses = props.items.filter((expenses) => {
        return expenses.date.getFullYear().toString() === FilteredYear
    })

    return (
    <li>
        <Card className="expenses">
            <ExpensesFilter selected={FilteredYear} 
            onChangeFilter={filterChangeHandler}
            />

            <ExpensesList items={filteredExpenses} />
        </Card>
    </li>
    )
}

export default Expenses