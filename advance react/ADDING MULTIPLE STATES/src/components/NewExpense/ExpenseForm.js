import React, {useState} from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm=()=>{
    const[enteredTitle, setEnteredTitle]=useState("");
    const[enteredAmount, setEnteredAmount]=useState("");
    const[enteredDate, setEnteredDate]=useState("");
    
    const titleChangehandler=(event)=>{
        setEnteredTitle(event.target.value);
    };
    const amountchangehandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChnagehandler=(event)=>{
        setEnteredDate(event.target.value);
    };
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" onChange={titleChangehandler}/> 
            </div>
            <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangehandler}/> 
            </div>
            <div className="new-expense__controls">
            <label>date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChnagehandler}/> 
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;