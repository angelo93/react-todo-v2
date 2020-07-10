import React, { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
// Reducers
import todoReducer from "../reducers/todos.reducer";

const defaultTodos = [{ id: uuid(), task: "Add Todos", completed: false }];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
