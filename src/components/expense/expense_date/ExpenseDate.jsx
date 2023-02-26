import React from "react";
import './ExpenseDate.css'
const ExpenseDate = (props)=>{
    const {date}=props
    const day=date.toLocaleString('en-us',{day:'2-digit'})
    const month=date.toLocaleString('en-us',{month:'long'})
    const year=date.getFullYear()
    return (
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
    )
}

export default ExpenseDate