import React from "react";

const TodoList = (props) => {
  const { todos, deleteTodo } = props;

  return (
    <ul>
      {Object.keys(todos).map((id) => (
        <li key={id}>
          {todos[id].task}
          <button onClick={() => deleteTodo(id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
