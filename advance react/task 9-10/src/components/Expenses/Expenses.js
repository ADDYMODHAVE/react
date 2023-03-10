import React from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpenseChart from "./ExpensesChart";


function Expenses(props){
  const[filteredYear, setFilteredYear]=useState("2021");
const filterChangeHandler=(seclectedYear)=>{
setFilteredYear(seclectedYear);
}
const filteredExpenses=props.items.filter(expense=>{
  return expense.date.getFullYear().toString() === filteredYear;
});

// THIRD WAY TO HANDLE CONDITIONS

  return (<div>
    <Card className="expenses">
    <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}/>
    
    {/* {expensesContent} */}
    {/* their are 3 ways to do this */}
    {/* This is the first way */}
    {/* their is lternative way
    just store what we want in const and chnage the value accordingly */}
    {/* {filteredExpenses.length === 0?(<p>No expenses found</p>):(filteredExpenses.map((expense)=>(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)))} */}
    {/* in the javascript if we have two conditions like && then if the first condition satisfies then return the second statement */}
    {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
    {filteredExpenses.length>0 && filteredExpenses.map((expense)=>(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))} */}
    {/* {filteredExpenses.map((expense)=>(<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))} */}
          {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        />
       <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
       
        />
         <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      
        />
        <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        /> */}
        {/* {props.items.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })} */}
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
  </Card>
  </div>);
}

export default Expenses;