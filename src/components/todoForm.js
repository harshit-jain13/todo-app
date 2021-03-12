import React, { useState, useEffect, useRef } from "react";
import { BiPlus } from "react-icons/bi";
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-btn edit">
            <BiPlus />
          </button>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            value={input}
            name="text"
            type="text"
            placeholder="Add a todo"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button className="todo-btn">
            <BiPlus />
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
