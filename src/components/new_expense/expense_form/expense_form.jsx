import React, { useState } from "react";
import './expense_form.css'
const ExpenseForm=(props)=>{

    const [enteredTitle,setEnteredTitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')

    const onTitleChange=(event)=>setEnteredTitle(event.target.value)
    const onAmountChange=(event)=>setEnteredAmount(event.target.value)
    const onDateChange=(event)=>setEnteredDate(event.target.value)

    const onSubmit=(event)=>{
        event.preventDefault()
        const new_expense={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onFormSubmit(new_expense);
        setEnteredAmount("")
        setEnteredDate("")
        setEnteredTitle("")
        // console.log(enteredTitle,enteredAmount,enteredDate)
    }
    return (<>
        <form action="" onSubmit={onSubmit}>
            {/* For holding fields */}
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="expense_title" 
                        id="title" 
                        value={enteredTitle}
                        onChange={onTitleChange}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type="number" 
                        name="expense_amount" 
                        id="amount" 
                        min="0" 
                        value={enteredAmount}
                        onChange={onAmountChange}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input 
                        type="date" 
                        name="expense_date" 
                        id="date"
                        value={enteredDate} 
                        onChange={onDateChange}/>
                </div>
            </div>    
            {/* For holding buttons */}
            <div className="new-expense__actions">
                <button>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
        </>)
}

export default ExpenseForm