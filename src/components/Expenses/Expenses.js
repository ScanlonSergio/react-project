import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const onFilterChangeHandler = (year) => {
        setFilteredYear(year);
    }

    return (
        <Card className="expenses">
          <ExpensesFilter year={filteredYear} onFilterChange={onFilterChangeHandler} />
          {props.expenses.map(expense => (
            <ExpenseItem 
                id={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}/>
          ))}
          {/* <ExpenseItem 
            id={props.expenses[0].id}
            title={props.expenses[0].name}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}/>
          <ExpenseItem 
            id={props.expenses[1].id}
            title={props.expenses[1].name}
            amount={props.expenses[1].amount}
            date={props.expenses[1].date}/>
          <ExpenseItem 
            id={props.expenses[2].id}
            title={props.expenses[2].name}
            amount={props.expenses[2].amount}
            date={props.expenses[2].date}/>
          <ExpenseItem 
            id={props.expenses[3].id}
            title={props.expenses[3].name}
            amount={props.expenses[3].amount}
            date={props.expenses[3].date}/> */}
        </Card>    
    )
}

export default Expenses;