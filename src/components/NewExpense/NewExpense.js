import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);
  const cancelHandler = () => {
    setClicked(false);
  };
  const handleClick = () => {
    setClicked(true);
  };
  const handleSaveData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setClicked(false);
  };
  return (
    <div className="new-expense">
      {!clicked && <button onClick={handleClick}>Add New Expense</button>}
      {clicked && (
        <ExpenseForm
          cancelHandler={cancelHandler}
          onSaveExpenseData={handleSaveData}
        />
      )}
    </div>
  );
};

export default NewExpense;
