import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/todoForm.js";
import TodoList from "./components/todoList";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const handleUpdate = (todoId, newVal) => {
    if (!newVal.text || /^\s*$/.test(newVal.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newVal : item))
    );
  };

  const handleDelete = (id) => {
    const newArr = todos.filter((todo) => todo.id !== id);
    setTodos(newArr);
  };

  return (
    <div className="app">
      <h1>What are you upto today?</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
