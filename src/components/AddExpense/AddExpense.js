import ExpenseForm from "./ExpenseForm/ExpenseForm";
import "./AddExpense.css";

function AddExpense(props) {
  function addExpense(expense) {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onSaveExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
}

export default AddExpense;
