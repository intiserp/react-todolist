import React, { useState } from "react";

const TodoForm = (props) => {
  const [task, setTask] = useState("");
  const { addTodo } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      return;
    }
    addTodo({
      task,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default TodoForm;
