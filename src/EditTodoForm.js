import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
// Contexts
import { TodosContext } from "./contexts/todos.context";
// Hooks
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, toggleEditForm }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleValueChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{
        marginLeft: "1rem",
        width: "50%",
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleValueChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
