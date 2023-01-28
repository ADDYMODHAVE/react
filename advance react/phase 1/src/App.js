import React from "react";
import Expenses from "./components/Expenses/Expenses";


function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "pune",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Maharastra",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "mumbai",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Gujrat",
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* {expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        );
      })} */}
     <Expenses items={expenses}/>
    </div>
  );
}

// alternative with rect element
// return React.createElement('div',{}, React.createElement('h2', {}, "Lets get Started!"),
// React.createElement(Expenses, {items:expenses}));

export default App;
