import { useState } from 'react';
import './App.css';
import Expenses from './components/expense/Expenses';
import NewExpense from './components/new_expense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenseList,setExpenseList]=useState(DUMMY_DATA)
  const onAddExpense=(new_expense={})=>{
    setExpenseList((previous_expense_list)=>{
      return[...previous_expense_list,new_expense]
    })
    
  }
  
  
  return (
    <div style={{padding:"40px"}}>
      <NewExpense onAddExpense={onAddExpense}/>
    <Expenses expense={expenseList}/>
    </div>
  );
}

export default App;
