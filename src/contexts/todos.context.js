import React, { createContext } from "react";
import { v4 as uuid } from "uuid";
// Hooks
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
// Reducers
import todoReducer from "../reducers/todos.reducer";

// Default list if nothing exists in local storage
const defaultTodos = [{ id: uuid(), task: "Add Todos", completed: false }];

// Contexts to be exported
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
