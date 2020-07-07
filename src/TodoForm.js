import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

function TodoForm({ addTodo }) {
  const [value, handleValueChange, resetValue] = useInputState("");

  return (
    <Paper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          resetValue();
        }}
      >
        <TextField value={value} onChange={handleValueChange} />
      </form>
    </Paper>
  );
}

export default TodoForm;
