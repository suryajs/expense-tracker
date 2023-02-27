import React, { useState } from "react";
import ExpenseDate from "../expense_date/ExpenseDate";
import './ExpenseItem.css'


const ExpenseItem= (props) =>{
    let{
        title='',
        amount=0,
        date=new Date()
    }=props
    
    return(
        <div className="expense-item">
            <ExpenseDate date={date}/>
            <div className="expense-item__description">
                <h2 >{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            
        </div>
    )
}

export default ExpenseItem