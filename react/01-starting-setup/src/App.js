import React, { useState } from "react";
import ExpensesMain from "./components/ExpensesMain";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    //add the expense by returning an updated array with new expense pushed in
    setExpenses(previousExpenses => {
      return [expense, ...previousExpenses]
    });
  };

  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesMain items={expenses}/>
    </div>
  );
}

export default App;
