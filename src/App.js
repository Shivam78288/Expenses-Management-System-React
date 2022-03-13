import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      description: "Car Insurance",
      date: new Date(2020, 2, 8),
      price: 250,
    },
    {
      id: "e2",
      description: "Car Wash",
      date: new Date(2021, 2, 10),
      price: 25,
    },
    {
      id: "e3",
      description: "Coaching",
      date: new Date(2022, 2, 11),
      price: 100,
    },
  ];

  const [currentExpenses, changeExpenses] = useState(expenses);

  const addExpenseHandler = (expense) => {
    changeExpenses((prevState) => [expense, ...prevState]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={currentExpenses} />
    </div>
  );
}

export default App;
