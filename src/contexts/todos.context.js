import React, { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";
// Reducers
import todoReducer from "../reducers/todos.reducer";

// Default list if nothing exists in local storage
const defaultTodos = [{ id: uuid(), task: "Add Todos", completed: false }];

// Contexts to be exported
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
