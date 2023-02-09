import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [userInputValues, setUserInputValues] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    console.log("title changed", event.target.value);
    setUserInputValues((userInput) => {
      return { ...userInput, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    console.log("amount changed", event.target.value);
    setUserInputValues((userInput) => {
      return { ...userInput, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    console.log("date changed", event.target.value);
    setUserInputValues((userInput) => {
      return { ...userInput, enteredDate: event.target.value };
    });
  };

  const buttonHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInputValues.enteredTitle,
      amount: userInputValues.enteredAmount,
      date: new Date(userInputValues.enteredDate),
    };

    props.onAddExpense(expenseData);

    setUserInputValues({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={buttonHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Title</label>
          <input
            type="text"
            value={userInputValues.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInputValues.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2023-12-01"
            value={userInputValues.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
