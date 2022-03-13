import React, { useState } from "react";
import "./ExpenseItem.css";
import Date from "./Date";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <Date date={props.date} />
        <div className="expense-item__description">
          <h2>{props.description}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
