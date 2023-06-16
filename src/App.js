import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

import './components/Expenses/Expenses.css';

const DUMMY_DATA = [
  { id: 'e1', title: "Car Insurance", amount: 617, date: new Date(2022, 9, 16) },
  { id: 'e2', title: "Apparel", amount: 394, date: new Date(2022, 3, 29) },
  { id: 'e3', title: "Groceries", amount: 192, date: new Date(2022, 7, 22) },
  { id: 'e4', title: "Fitness", amount: 333, date: new Date(2023, 4, 2) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
