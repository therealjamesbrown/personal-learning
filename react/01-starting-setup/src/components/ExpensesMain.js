import React, { useState } from "react";
import "./ExpensesMain.css";
import Card from "./Card";
import ExpensesFilter from "./Filter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpensesMain(props) {
  /**
   *
   * Begin Filter related stuff
   *
   */

  const [filteredYear, setSelectedYear] = useState("2021");

  const selectedYearFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  /**
   *
   * End Filter related stuff
   *
   */

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearSelected={selectedYearFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default ExpensesMain;
