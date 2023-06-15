import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

import './components/Expenses/Expenses.css';

const App = () => {
  const expenses = [
    { id: 'e1', name: "Car Insurance", amount: 617, date: new Date(2022, 9, 16) },
    { id: 'e2', name: "Apparel", amount: 394, date: new Date(2022, 3, 29) },
    { id: 'e3', name: "Groceries", amount: 192, date: new Date(2022, 7, 22) },
    { id: 'e4', name: "Fitness", amount: 333, date: new Date(2023, 4, 2) },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
