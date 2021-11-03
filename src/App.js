import React, { useEffect, useState } from "react";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

// this is a basic todo app

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getAllTodos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  const addTodo = (todo) => {
    fetch("/api/addTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    })
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  const deleteTodo = (id) => {
    fetch(`/api/deleteTodo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Todo List</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
      )}
    </div>
  );
}

export default App;
