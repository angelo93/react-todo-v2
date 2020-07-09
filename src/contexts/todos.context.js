// todos

// methods that interact w/ todos
import React, { createContext } from "react";
import { v4 as uuid } from "uuid";

import useTodoState from "../hooks/useTodoState";

const defaultTodos = [{ id: uuid(), task: "Add Todos", completed: false }];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosHelpers = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todosHelpers}>
      {props.children}
    </TodosContext.Provider>
  );
}
