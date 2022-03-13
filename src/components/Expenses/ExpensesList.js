import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.expensesToMap.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expensesToMap.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          description={expense.description}
          price={expense.price}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
