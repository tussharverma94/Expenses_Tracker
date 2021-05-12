import React, {useState} from "react"
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // method 1
    const [enteredTitle, setEnteredtitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const titleChangeHandler = (event) => {
        setEnteredtitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    // // method 2 and 3
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmoun̥t: "",
    //     enteredDate: ""
    // })

    // const titleChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle : event.target.value
    //     // })
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle : event.target.value}
    //     }) // this method is better than the method that is used in this function.
    // }

    // const amountChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmount : event.target.value
    //     // })
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredAmount : event.target.value}
    //     })
    // }

    // const dateChangeHandler = (event) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredDate: event.target.value
    //     // })
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredDate : event.target.value}
    //     })
    // }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(expenseData)
        props.onSaveExpenseDataHandler(expenseData)
        setEnteredtitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='0.01' step="0.1" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button> 
            </div>
        </form>
    )
}

export default ExpenseForm