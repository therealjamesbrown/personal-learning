import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // const [userInput, setUserInput ] =  useState({
  //       enteredTitle: '',
  //       enteredAmount: '',
  //       selectedDate: ''
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //gets current user input and overwrites entered title.
    //you have to do it this way otherwise the other properties get dumped
    //approach 1: not recommended because state updates are scheduled and
    //data could be outdated.
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })

    //approach 2: recommended. react garuantees the latest state snapshot is current.
    //safe approach.
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         enteredTitle: event.target.value
    //     }
    // })
  };

  const amountChangeHandler = (event) => {
    //   setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // })
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     selectedDate: event.target.value
    // })
    setSelectedDate(event.target.value);
  };



  //form submition handler
  const submitHandler = (event) => {
    //keep page from reloading
    event.preventDefault();

    //create object to store form data
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(selectedDate),
    };
    //pass the data to parent component
    //lift the state up
    props.onSaveExpenseData(expenseData);

    //clear the inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setSelectedDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            //add value for two way binding
            value={selectedDate}
            min="2022-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
