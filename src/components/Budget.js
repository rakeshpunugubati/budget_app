import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , dispatch, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        const newBudgetValue = (event.target.value); 
        // const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);

        // Check if the new budget is less than the total expenses
        // if (newBudgetValue < totalExpenses) {
        //     alert("The budget cannot be less than the spending!");
        //     return;
        // }
        dispatch({ type: 'SET_BUDGET', payload: newBudgetValue });
    };
    return (
        <div className='alert alert-secondary d-flex flex-wrap align-items-center'>
    <span className="mr-2">Budget: {currency}</span>
    <input
        type="number"
        step="10"
        value={budget}
        onChange={handleBudgetChange}
        className="flex-grow-1 w-50"
    />
</div>

    );
};
export default Budget;

