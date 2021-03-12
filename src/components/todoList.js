import React, { useState } from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import TodoForm from "./todoForm";
function TodoList({ todos, completeTodo, handleDelete, handleUpdate }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    handleUpdate(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <GrDocumentUpdate
          className="update-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
        <AiFillDelete
          className="delete-icon"
          onClick={() => handleDelete(todo.id)}
        />
      </div>
    </div>
  ));
}

export default TodoList;
