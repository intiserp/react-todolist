import React from "react";

const TodoList = (props) => {
  const { todos, removeTodo } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.value}
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
