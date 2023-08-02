function TodoItem({ id, todoName, todoCompleted, deleteTodo, toggleTodo }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={todoCompleted}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <h1 style={{ textDecoration: todoCompleted ? "line-through" : "none" }}>
          {todoName}
        </h1>

        <button className="deleteBtn" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </li>
    </>
  );
}

export default TodoItem;
