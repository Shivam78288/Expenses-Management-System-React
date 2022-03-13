import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChartForOneYear from "./ExpensesChartForOneYear";
import ExpensesChartForAllYears from "./ExpensesChartForAllYears";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const handleYearFilter = (year) => {
    setFilteredYear(year);
  };

  let expensesToMap;

  if (filteredYear === "All") {
    expensesToMap = props.expenses;
  } else {
    expensesToMap = props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  }

  //Sorting expenses in decreasing order of date
  expensesToMap = expensesToMap.sort((expense1, expense2) => {
    return expense2.date - expense1.date;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={handleYearFilter} />
      {filteredYear === "All" && (
        <ExpensesChartForAllYears expenses={expensesToMap} />
      )}
      {filteredYear !== "All" && (
        <ExpensesChartForOneYear expenses={expensesToMap} />
      )}

      <ExpensesList expensesToMap={expensesToMap} />
    </Card>
  );
};

export default Expenses;
