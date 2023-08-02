import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [todoValue, setTodoValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (todoValue === "") return;
    addTodo(todoValue);
    setTodoValue("");
  }

  return (
    <>
      <h1>Enter Todo Task Here:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button className="submitBtn">Submit</button>
      </form>
    </>
  );
}

export default TodoForm;
