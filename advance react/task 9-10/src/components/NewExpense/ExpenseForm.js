import React,{useState} from "react";
import "./ExpenseForm.css";


const ExpenseForm=(props)=>{
    const[enteredTitle, setEnteredTitle]=useState('');
    const[enteredAmount, setEnteredAmount]=useState('');
    const[enteredDate, setEnteredDate]=useState('');
    // we can use object
    // const[userInput,setUserInput]=useState({
    //     enteredTitle:"",
    //     enterdAmount:"",
    //     enteredDate:""
    // });

    const titleChangehandler=(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredTitle:event.target.value};
        // });
    };
    const amountChangehandler=(event)=>{
        setEnteredAmount(event.target.value);
    };
    const dateChnagehandler=(event)=>{
        setEnteredDate(event.target.value);
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
          title:enteredTitle,
          amount:enteredAmount,
          date:new Date(enteredDate) 
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangehandler}/> 
            </div>
            <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangehandler}/> 
            </div>
            <div className="new-expense__controls">
            <label>date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChnagehandler}/> 
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;