import React, {useState} from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const onAddNewExpenseHandler = () => {
        setIsEditing(true);
    }

    const onCancelHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler} />}
            {!isEditing && <button onClick={onAddNewExpenseHandler}>Add New Expense</button>}
        </div>
    )
}

export default NewExpense;