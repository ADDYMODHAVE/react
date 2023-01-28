import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";


function ExpenseItem(props) {
  const [amount,setAmount]=useState(props.amount);
  const ClickHandler=()=>{
    setAmount("100$");
  console.log(amount);
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <div className="expense-item__price">{amount}</div>
        <button onClick={ClickHandler}>Change Amount</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
