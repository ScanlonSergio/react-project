import React, {useState} from "react";

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const onFilterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    const filteredExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    })
    
    return (
        <Card className="expenses">
          <ExpensesFilter year={filteredYear} onFilterChange={onFilterChangeHandler} />
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList expenses={filteredExpenses} />
        </Card>    
    )
}

export default Expenses;