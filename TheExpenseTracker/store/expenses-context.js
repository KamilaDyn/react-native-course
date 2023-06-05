import { createContext, useReducer, useState } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, data }) => {},
});

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes ",
    amount: 59.99,
    date: new Date("2023-06-02"),
  },
  {
    id: "e2",
    description: "A pair of trousers ",
    amount: 59.99,
    date: new Date("2023-06-04"),
  },
  {
    id: "e3",
    description: "A pair of socks ",
    amount: 5.99,
    date: new Date("2021-11-05"),
  },
  {
    id: "e4",
    description: "A book ",
    amount: 35.99,
    date: new Date("2022-01-25"),
  },
  {
    id: "e5",
    description: "Another book ",
    amount: 25.99,
    date: new Date("2022-02-02"),
  },
];

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toDateString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;