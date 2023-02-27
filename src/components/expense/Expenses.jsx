import React from "react";
import ExpenseItem from "./expense_item/Expenseitem";
import './expense.css'

const Expenses=(props)=>{
    const {expense}=props;
    return(
        <div className="expenses">
            {
                expense.map((each_expense)=>{
                    return (
                        <ExpenseItem
                        title={each_expense.title}
                        amount={each_expense.amount}
                        date={each_expense.date}/>
                    )
                })
            }
        </div>
    )
}

export default Expenses