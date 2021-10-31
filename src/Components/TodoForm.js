import React, { useState } from "react";

const TodoForm = (props) => {
  const [value, setValue] = useState("");
  const { addTodo } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo({
      value,
      id: Date.now(),
    });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoForm;
